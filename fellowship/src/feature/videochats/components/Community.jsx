// step 7 bug fixed
import React, { useState, useEffect, useRef } from 'react';
import './chatShablon.css';
import { useSocket } from '../../../config/SocketsContainer';
import useAuth from '../../../hooks/useAuth';
import peerConfiguration from '../../../config/stunServers';
import settingIcon from '../../../images/setting.png';
import { useNavigate } from 'react-router-dom';

const Community = () => {
  const socket = useSocket();
  const { auth } = useAuth();
  const userId = auth.userId;
  const peerConnection = useRef(null);
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const communityId = new URLSearchParams(window.location.search).get('id');
  const [incomingStream, setIncomingStream] = useState(false);
  const [viewerStatus, setViewerStatus] = useState('idle'); // ["idle", "watching"]
  const role = auth.role;


  const [communityAttendants, setCommunityAttendants] = useState([]);
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef(null);
  useEffect(() => {
    if (socket) {
      socket.emit("joined-community", {
        userId,
        communityId,
        role
      });

      socket.on('community-broadcast-started', () => {
        setIncomingStream(true);
        console.log("Broadcast started");
      });

      socket.on('community-broadcast-stopped', () => {
        setIncomingStream(false);
        setViewerStatus('idle');
        cleanUpPeerConnection();
        if (videoRef.current && videoRef.current.srcObject) {
          videoRef.current.srcObject = null;
        }
      });

      socket.on('community-attendants', (attendants) => {
        console.log("Community attendants:", attendants);
        setCommunityAttendants(attendants);
      })

      socket.on('community-new-message-to-users', ({ userNick, userImage, text, time }) => {
        console.log("New message to broadcast:", userNick, text, time);
        const newMessageObject = { userNick, userImage, text, time };
        setMessages(prevMessages => [...prevMessages, newMessageObject]);
      });

      const handleBeforeUnload = () => {
        if (role.includes(1111)) {
          socket.emit('community-broadcast-stop', { userId, communityId });
        }
        if (role.includes(2222)) {
          socket.emit('community-view-stop', { userId, communityId });
        }
        socket.emit('left-community', { userId, communityId });
        cleanUpPeerConnection();
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        if (role.includes(1111)) {
          socket.emit('community-broadcast-stop', { userId, communityId });
        }
        if (role.includes(2222)) {
          socket.emit('community-view-stop', { userId, communityId });
        }

        socket.emit('left-community', { userId, communityId });

        cleanUpPeerConnection();
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [auth, communityId, socket, userId]);

  const handleSubmitMessage = () => {
    if (socket) {
      socket.emit('community-new-message-to-broadcast', {
        userNick: auth.nick,
        userImage: auth.image,
        userId: auth.userId,
        text: newMessage,
        communityId: communityId
      });
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && newMessage.trim() !== '') {
      handleSubmitMessage();
    }
  };


  useEffect(() => {
    const chatContainer = chatContainerRef.current;

    const scrollToBottom = () => {
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    };
    scrollToBottom();
  }, [messages]);

  const cleanUpPeerConnection = () => {
    if (peerConnection.current) {
      peerConnection.current.ontrack = null;
      peerConnection.current.onicecandidate = null;
      peerConnection.current.close();
      peerConnection.current = null;
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const handleStartBroadcasting = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      mediaStreamRef.current = stream;
      peerConnection.current = createBroadcastPeer();

      stream.getTracks().forEach(track => {
        peerConnection.current.addTrack(track, stream);
      });

      videoRef.current.srcObject = stream;

      socket.on('ice-candidate', (data) => {
        if (data.candidate && peerConnection.current) {
          peerConnection.current.addIceCandidate(new RTCIceCandidate(data.candidate))
            .catch(e => console.error("Error adding broadcaster ICE candidate:", e));
        }
      });
    } catch (error) {
      console.error("Error starting broadcast:", error);
    }
  };

  const createBroadcastPeer = () => {
    try {
      const peer = new RTCPeerConnection(peerConfiguration);

      peer.onicecandidate = ({ candidate }) => {
        if (candidate) {
          socket.emit('ice-candidate', { candidate });
        }
      };

      peer.onnegotiationneeded = async () => {
        try {
          const offer = await peer.createOffer();
          await peer.setLocalDescription(offer);
          socket.emit('community-broadcast-start', { sdp: peer.localDescription, communityId, userId }, (ackFunction) => {
            if (ackFunction && ackFunction.sdp) {
              const desc = new RTCSessionDescription(ackFunction.sdp);
              peer.setRemoteDescription(desc);
            }
          });
        } catch (error) {
          console.error("Negotiation error:", error);
        }
      };

      return peer;
    } catch (error) {
      console.error("Error creating broadcast peer:", error);
    }
  };

  const handleStopBroadcasting = async () => {
    try {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
        mediaStreamRef.current = null;
      }
      videoRef.current.srcObject = null;
      await socket.emit('community-broadcast-stop', { userId, communityId });
    } catch (error) {
      console.error("Error stopping broadcast:", error);
    }
  };

  const handleStartViewing = async () => {
    try {
      peerConnection.current = createViewPeer();
      peerConnection.current.addTransceiver("video", { direction: "recvonly" });

      socket.on('ice-candidate', (data) => {
        if (data.candidate && peerConnection.current) {
          peerConnection.current.addIceCandidate(new RTCIceCandidate(data.candidate))
            .catch(e => console.error("Error adding viewer ICE candidate:", e));
        }
      });
    } catch (error) {
      console.error("Error watching broadcast:", error);
    } finally {
      setViewerStatus('watching');
    }
  };

  const createViewPeer = () => {
    try {
      const peer = new RTCPeerConnection(peerConfiguration);

      peer.onicecandidate = ({ candidate }) => {
        if (candidate) {
          socket.emit('ice-candidate', { candidate });
        }
      };

      peer.ontrack = (event) => {
        videoRef.current.srcObject = event.streams[0];
      };

      peer.onnegotiationneeded = async () => {
        try {
          const offer = await peer.createOffer();
          await peer.setLocalDescription(offer);
          socket.emit('community-view-start', { sdp: peer.localDescription, communityId }, (ackFunction) => {
            if (ackFunction && ackFunction.sdp) {
              const desc = new RTCSessionDescription(ackFunction.sdp);
              peer.setRemoteDescription(desc);
            }
          });
        } catch (error) {
          console.error("Negotiation error:", error);
        }
      };

      return peer;
    } catch (error) {
      console.error("Error creating view peer:", error);
    }
  };

  const handleStopViewing = async () => {
    try {
      cleanUpPeerConnection();
      setViewerStatus('idle');
    } catch (error) {
      console.error("Error stopping viewing:", error);
    }
  };

  const navigate = useNavigate()

  const goBackToPostShablon = () => {
    navigate(-1);
  };

  return (
    <div className='chat_contain' >
      <header>
          <div className='first_qism'>
            <div className='chat_title'>
              <div className='network_icons'>
                <button className='settingIcon' >
                  <img src={settingIcon} alt='' />
                </button>
              </div>
              <div className='group_name'>
                <h4 className='white_sp_off'>Chat Group Name: </h4>
              </div>
              <div className='name_of_group_container' onClick={goBackToPostShablon}  >
                <p className=''> Video-Chat Title </p>
              </div>
            </div>
          </div>

          <div className='second_qism'>
            <div className='broadcasting_div'>
              <div className='relative'>
              {auth.role.includes(2222) && (
                    <>
                      {incomingStream && viewerStatus === 'idle' && (
                        <button className=''
                          onClick={handleStartViewing}
                        >
                          Watch Stream
                        </button>
                      )}

                      {incomingStream && viewerStatus === 'watching' && (
                        <button onClick={handleStopViewing}>
                          Stop Watching Stream
                        </button>)}
                    </>
                  )}
              </div>
                <video ref={videoRef} autoPlay></video>
              </div>
            <div className='flex_it w-fit'>
              <div className='video_cam_contain w-fit'>
              {auth.role.includes(1111) && (
                <>
                  <button onClick={handleStartBroadcasting} className='start_broadcast'>
                    Start Broadcasting
                  </button>
                  <button onClick={handleStopBroadcasting} 
                  className='stop_broadcast'>
                    Stop Broadcasting
                  </button>
                </>
              )}
              </div>
            </div>
          </div>
        </header>

        <main className='main_part'>
        <div className='column1'>
            <div className='row1' ref={chatContainerRef}  >
            <article className='chat_map' >
              {messages?.map((message, index) => (
                <div key={index} className='message-container-community'>
                  <div className='nameOfChatter' >
                    <p>
                      {message.userNick}: <span>{message.text}</span>
                    </p>
                  <div className='time_indication'>
                    <p className=''>{message.time}</p>
                  </div>
                  </div>
                </div>
              ))}
            </article>
            </div>
            <div className='row2'>

            <div className='lower_layer'>
              <input
                type='text'
                placeholder='Type your message here'
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button onClick={handleSubmitMessage} className='send_it_up truncate'>
                SEND
              </button>
            </div>
            </div>
          </div>

          <div className='column2 relative'>
            
   
            {communityAttendants.length > 0 && (
              <div className='participants'>
                {communityAttendants.map((attendant) => (
                <div className='nameOfChatter2 logged_users w-full flex  items-center gap-2 justify-between' key={attendant._id}>    
                     <div className='flex gap-1 mr-auto items-center'>
                        <div className='user_image'>
                          <img 
                            src={attendant.userId.image} 
                            alt={attendant.userId.nick} />
                        </div>
                     
                        <div className='user_nick'>
                            <p className='white_sp_off '>
                            {attendant.userId.nick} </p>
                        </div>
                    </div>
                    <div className='w-full'></div>
                    <div className='age'>
                        <p className='white_sp_off'>Age: {attendant.userId.birthDate} </p>
                      </div>
                 </div>
                ))}
            </div>
            )}

          </div>
        </main>
    </div>
  );
};

export default Community;

