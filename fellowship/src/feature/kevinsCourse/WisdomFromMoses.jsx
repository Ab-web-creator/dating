import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import kamar from '../../images/kamar.png'
import logo from '../../images/KevinImages/ancientWell.jpeg'
import image1 from '../../images/KevinImages/Moses.jpg'
import './kevinsCourse.css'


const WisdomFromMoses = () => {

  const navigate = useNavigate();

  const [visiblePoems, setVisiblePoems] = useState({

  });
  const [visibleVideos, setVisibleVideos] = useState({
    episode1: true,
  });


  const togglePoems = (key) => {
    setVisiblePoems((prevVisiblePoems) => ({
      ...prevVisiblePoems,
      [key]: !prevVisiblePoems[key],
    }));
  };

  const toggleVideo = (key) => {
    setVisibleVideos((prevVisibleVideos) => ({
      ...prevVisibleVideos,
      [key]: !prevVisibleVideos[key],
    }));
  };



  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here, e.g., send the file to a server
    if (selectedFile) {
      // console.log('Selected file:', selectedFile);
      // You can perform further actions here like uploading the file to a server using fetch or axios
    } else {
      // console.log('No file selected');
    }
  };

  return (
    <div className="minister-home stories kevins_course">
      <div className="separate_into_two_columns">
        <main className="sep_part1">
          <div className='section_headings'>
            <p> Section 2: Wisdom for Artists from Moses </p>
          </div>

          <div className='main_text'>
            <p>  Content, Creativity Practices, and Assignments are all included in the Videos for each Episode </p>
            <ul className='flex flex-col gap-2'>
              <div className='flex_it' onClick={() => toggleVideo('episode1')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span>
                  The Inner Child, part 1
                </li>
                <button >
                  {visibleVideos['episode1'] ? '-' : '+'}
                </button>
              </div>

              {visibleVideos['episode1'] && (
                <>
                  <li>
                    <div className="videos_container_container">
                      <div className="video_container">
                        <div className='video_wrapper' >
                          <iframe
                            width="100%"
                            height="315" src="https://www.youtube.com/embed/X8zgs2Dk_7M?si=iu33L6uWBLArEv74" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='main_text poetry'>
                      <div className='flex_it'
                        onClick={() => togglePoems('episode1')}
                      >
                        <div className='poetry_heading'>
                          <h3> Everybody’s Got a Story</h3>
                        </div>
                        <button onClick={togglePoems}>
                          {visiblePoems['episode1'] ? '-' : '+'}
                        </button>
                      </div>

                      {visiblePoems['episode1'] && (
                        <>
                          <div className="poem_div">
                            <p className='MarginTop10px'>
                              He’s standing with his cardboard sign
                            </p>
                            <p>
                              Where Olive meets the 99
                            </p>
                            <p>
                              Rain pouring off his shoes
                            </p>
                            <p>
                              Looks like a man who’s paid his dues
                            </p>
                            <p>
                              Says hey mister can you spare a dime
                            </p>
                            <p>
                              Get me a little further down the line
                            </p>
                            <p>
                              I pretended to look for change to spare
                            </p>
                            <p>
                              He ran his fingers through his hair
                            </p>
                            <p>
                              Everybody’s got a story
                            </p>
                            <p>
                              Burning up in a blaze of glory
                            </p>
                            <p>
                              Me, I tried to avoid his sight
                            </p>
                            <p>
                              Waiting for the traffic light
                            </p>
                            <p>
                              To turn
                            </p>
                            <p className='spacer40px'></p>

                            <p>
                              She’s twelve years old, lips painted red
                            </p>
                            <p>
                              Skin tight jeans and cigarettes
                            </p>
                            <p>
                              Cover up a little girls inside,
                            </p>
                            <p>
                              Looking for a smile and place to hide
                            </p>
                            <p>
                              She’s got no idea what men will think
                            </p>
                            <p>
                              Or how far down this hole she’ll sink
                            </p>
                            <p>
                              Lost her faith in God above
                            </p>
                            <p>
                              Threw it all away for what they call love
                            </p>
                            <p>
                              Everybody’s got a story
                            </p>
                            <p>
                              Burning up in a blaze of glory
                            </p>
                            <p>
                              Someday through eyes of tears
                            </p>
                            <p>
                              She’ll sit here and wish the years
                            </p>
                            <p>
                              Would turn
                            </p>
                            <p className='spacer40px'></p>

                            <p>
                              Crammed into his desk he’s late again
                            </p>
                            <p>
                              Red marks on his freckled skin
                            </p>
                            <p>
                              A cow lick sticking up the back of his head
                            </p>
                            <p>
                              Margarine sandwich on old white bread
                            </p>
                            <p>
                              Books full of stuff he don’t understand
                            </p>
                            <p>
                              Never thinks to raise his hand
                            </p>
                            <p>
                              Class is full of fifty other kids
                            </p>
                            <p>
                              And a teacher just trying to do his best
                            </p>
                            <p>
                              Everybody’s got a story
                            </p>
                            <p>
                              Burning up in a blaze of glory
                            </p>
                            <p>
                              He’s the kid nobody knew was here
                            </p>
                            <p>
                              Waiting for another year
                            </p>
                            <p>
                              To turn
                            </p>
                            <p className='spacer40px'></p>

                            <p>
                              Everybody’s got a story
                            </p>
                            <p>
                              Burning up in a blaze of glory
                            </p>
                            <p>
                              We just hope someone will know we’re here
                            </p>
                            <p>
                              Waiting for another year
                            </p>
                            <p>
                              To turn
                            </p>
                            <p></p>
                          </div>
                        </>
                      )}
                    </div>
                  </li>
                </>
              )}

              <div className='flex_it' onClick={() => toggleVideo('episode2')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span>
                  Episode 2: The Inner Child, part 2
                </li>
                <button >
                  {visibleVideos['episode2'] ? '-' : '+'}
                </button>
              </div>

              {visibleVideos['episode2'] && (
                <>
                  <li>
                    <div className="videos_container_container">
                      <div className="video_container">
                        <div className='video_wrapper' >
                          <iframe
                            width="100%"
                            height="315" src="https://www.youtube.com/embed/BYVZuCKIs2U?si=h6Vk3ck1slNHv5fi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='main_text poetry'>
                      <div className='flex_it'
                        onClick={() => togglePoems('episode2')}
                      >
                        <div className='poetry_heading'>
                          <h3>  There’d Be More Time </h3>
                        </div>
                        <button onClick={togglePoems}>
                          {visiblePoems['episode2'] ? '-' : '+'}
                        </button>
                      </div>

                      {visiblePoems['episode2'] && (
                        <>
                          <div className="poem_div">
                            <p className='MarginTop10px gray'>
                              Verse 1
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              We act like this day
                              won’t come,
                              <br /> it happens anyhow
                            </p>
                            <p>
                              My hands feel like they’re bleeding,
                              <br />  I brush the hair upon your brow
                            </p>
                            <p>
                              When tomorrow comes,
                              <br /> here in this silent place
                            </p>
                            <p>
                              Rooms full of ghosts and memories,
                              <br /> in this crowded empty space
                            </p>
                            <p>
                              Doesn’t really matter what comes later,
                              <br />  if our words just scatter like the wind
                            </p>
                            <p>
                              Feeling naked and uncovered,
                              <br />  no hands to wrap me up again
                            </p>
                            <p className='spacer20px'></p>
                            <p className='gray'>
                              Verse 2
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              Its all silent now,
                              <br />  in your last wordless days
                            </p>
                            <p>
                              You always feared the quiet,
                              <br />  used words to keep those fears away
                            </p>
                            <p>
                              The things I wish you’d asked,
                              <br /> I’ll never hear you say
                            </p>
                            <p>
                              The life we lived down all the years,
                              <br />  just lines upon my face
                            </p>
                            <p>
                              Doesn’t really matter now
                              <br /> what comes later,
                              <br />  if these words all scatter like the wind
                            </p>
                            <p>
                              I’ll always wonder if you’ve forgiven,
                              <br />  all the things you could not tell me then
                            </p>
                            <p className='spacer20px'></p>
                            <p className='gray'>
                              Verse 3
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              So now it’s here,
                              <br />  thought there’d be more time
                            </p>
                            <p>
                              But the years turned into shadows,
                              <br />  before I had a chance to try
                            </p>
                            <p>
                              To say all my last words,
                              <br /> and hear you say yours
                            </p>
                            <p>
                              Your hand turning slowly colder,
                              <br />  I saw the light fade from the door
                            </p>
                            <p>
                              And it doesn’t really matter now
                              <br /> what comes later,
                              <br />  if these words all scatter like the wind
                            </p>
                            <p>
                              For what it’s worth I have forgiven,
                              <br />  all the things I could not tell you then
                            </p>
                            <p>
                              We thought there’d be more time…
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </li>
                </>
              )}

              <div className='flex_it' onClick={() => toggleVideo('episode3')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span>
                  <span>Episode 3: Father Figures and Early Failures</span>
                </li>
                <button >
                  {visibleVideos['episode3'] ? '-' : '+'}
                </button>
              </div>

              {visibleVideos['episode3'] && (
                <>
                  <li>
                    <div className="videos_container_container">
                      <div className="video_container">
                        <div className='video_wrapper' >
                          {/* <iframe
                            width="100%"
                            height="315" src="https://www.youtube.com/embed/mvBLSJWk6HE?si=tKMfor91EGDtLDgg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='main_text poetry'>
                      <div className='flex_it'
                        onClick={() => togglePoems('episode3')}
                      >
                        <div className='poetry_heading'>
                          <h3> Father</h3>
                        </div>
                        <button onClick={togglePoems}>
                          {visiblePoems['episode3'] ? '-' : '+'}
                        </button>
                      </div>

                      {visiblePoems['episode3'] && (
                        <>
                          <div className="poem_div">
                            <p className='MarginTop10px'>
                              I feel small, still, always small,
                            </p>
                            <p>
                              The baby from the womb of your praying wife.
                            </p>

                            <p className='spacer20px'></p>

                            <p>
                              You were strong and tall,
                            </p>
                            <p>
                              And in your own way holy.
                            </p>
                            <p>
                              I saw the tracks behind your face
                            </p>
                            <p>
                              Scratched into you
                            </p>
                            <p>
                              By long and callous years.
                            </p>
                            <p>
                              Your throat always parched,
                            </p>
                            <p>
                              Your voice wrinkled.
                            </p>
                            <p>
                              Your skin shed dust I could see floating as mites
                            </p>
                            <p>
                              In the shafts of light
                            </p>
                            <p>
                              From the windows of your unlit room.
                            </p>

                            <p className='spacer20px'></p>

                            <p>
                              You had dreams beneath your vest,
                            </p>
                            <p>
                              I know that now.
                            </p>
                            <p>
                              Your words never rolled like butter
                            </p>
                            <p>
                              They staggered from the threshold of your lips
                            </p>
                            <p>
                              And limped their way into the world of my heart.
                            </p>
                            <p>
                              They were a poet’s dreams, I hope.
                            </p>
                            <p>
                              But their seeds are buried with you
                            </p>
                            <p>
                              Beneath the cold dry dark of this lonely dirt.
                            </p>

                            <p className='spacer20px'></p>

                            <p>
                              I am standing here with my two palms open,
                            </p>
                            <p>
                              Lined with stories I cannot read for you.
                            </p>
                            <p>
                              You are gone. I am late.
                            </p>
                            <p>
                              Yet here are these hands with all the gifts I have to bring
                            </p>
                            <p>
                              Turned open towards where I want to think you are,
                            </p>
                            <p>
                              Down there, looking up at me,
                            </p>
                            <p>
                              Your mouth open and glowing with the words you always searched for,
                            </p>
                            <p>
                              Ready at last to sing me all your dreams.
                            </p>
                            <p></p>
                          </div>
                        </>
                      )}

                    </div>
                  </li>
                </>
              )}

              <div className='flex_it' onClick={() => toggleVideo('episode4')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span>
                  Episode 4: Learning to See, The Burning Bush
                </li>
                <button >
                  {visibleVideos['episode4'] ? '-' : '+'}
                </button>
              </div>

              {visibleVideos['episode4'] && (
                <>
                  <li>
                    <div className="videos_container_container">
                      <div className="video_container">
                        <div className='video_wrapper' >
                          {/* <iframe
                            width="100%"
                            height="315" src="https://www.youtube.com/embed/mvBLSJWk6HE?si=tKMfor91EGDtLDgg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='main_text poetry'>
                      <div className='flex_it'
                        onClick={() => togglePoems('episode4')}
                      >
                        <div className='poetry_heading'>
                          <h3> Touch the Ecstatic</h3>
                        </div>
                        <button onClick={togglePoems}>
                          {visiblePoems['episode4'] ? '-' : '+'}
                        </button>
                      </div>

                      {visiblePoems['episode4'] && (
                        <>
                          <div className="poem_div">
                            <p className='MarginTop10px'>
                              Inside that sway of grass in wind
                            </p>
                            <p>
                              This pulse, dull eyes, a dusty rose,
                            </p>
                            <p>
                              There is something.
                            </p>
                            <p>
                              Ecstatic.
                            </p>
                            <p>
                              I cannot say, but I know.
                            </p>
                            <p>
                              Believe.
                            </p>

                            <p className='spacer20px'></p>

                            <p>
                              More honest: I only want to live
                            </p>
                            <p>
                              If I can believe, and touch.
                            </p>

                            <p className='spacer20px'></p>

                            <p>
                              Ecstasy is chaos dancing
                            </p>
                            <p>
                              Electrons, protons
                            </p>
                            <p>
                              Morons, skeletons, put-ons
                            </p>
                            <p>
                              On and on,
                            </p>
                            <p>
                              Colliding on pulsing-universe-mystic-strobe light-floors
                            </p>
                            <p>
                              Loved on
                            </p>

                            <p className='spacer20px'></p>

                            <p>
                              Ecstasy is a god’s kiss
                            </p>
                            <p>
                              Pressed on the first fleshy mouth
                            </p>
                            <p>
                              Divine moist intimate breath through parted lips.
                            </p>
                            <p>
                              Eyelids flicker open, embrace the gaze of God,
                            </p>
                            <p>
                              Entwined lovers in the after-glow,
                            </p>
                            <p>
                              In a raw green world
                            </p>
                            <p>
                              Satiated
                            </p>

                            <p className='spacer20px'></p>

                            <p>
                              Ecstasy is me beside myself
                            </p>
                            <p>
                              Seeing inside myself from outside myself
                            </p>
                            <p>
                              Myself as myself.
                            </p>
                            <p>
                              My own eyes seeing
                            </p>
                            <p>
                              Me for the first time,
                            </p>
                            <p>
                              Tender
                            </p>

                            <p className='spacer20px'></p>

                            <p>
                              Ecstasy is joy unbridled
                            </p>
                            <p>
                              Lustrous lust, throbbing unholy godliness
                            </p>
                            <p>
                              Walking naked carnal
                            </p>
                            <p>
                              Warm in the glow of Eden
                            </p>
                            <p>
                              Wiping juice from giddy lips
                            </p>
                            <p>
                              With the back of a wanton hand
                            </p>
                            <p>
                              Unashamed
                            </p>

                            <p className='spacer20px'></p>

                            <p>
                              Loved on, satiated,
                            </p>
                            <p>
                              Tender, unashamed,
                            </p>
                            <p>
                              Joy unbridled, beside myself
                            </p>
                            <p>
                              A gods’ kiss, chaos dancing.
                            </p>
                            <p>
                              I touch, am touched.
                            </p>
                            <p>
                              Ecstatic.
                            </p>
                            <p></p>
                          </div>
                        </>
                      )}

                    </div>
                  </li>
                </>
              )}

              <div className='flex_it' onClick={() => toggleVideo('episode5')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span>
                  Episode 5: Who Am I?
                </li>
                <button >
                  {visibleVideos['episode5'] ? '-' : '+'}
                </button>
              </div>

              {visibleVideos['episode5'] && (
                <>
                  <li>
                    <div className="videos_container_container">
                      <div className="video_container">
                        <div className='video_wrapper' >
                          {/* <iframe
                            width="100%"
                            height="315" src="https://www.youtube.com/embed/mvBLSJWk6HE?si=tKMfor91EGDtLDgg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='main_text poetry'>
                      <div className='flex_it'
                        onClick={() => togglePoems('episode5')}
                      >
                        <div className='poetry_heading'>
                          <h3> Return</h3>
                        </div>
                        <button onClick={togglePoems}>
                          {visiblePoems['episode5'] ? '-' : '+'}
                        </button>
                      </div>

                      {visiblePoems['episode5'] && (
                        <>
                          <div className="poem_div">
                            <p className='MarginTop10px'>
                              If I had a sunburn my skin would peel dirt.
                            </p>
                            <p>
                              But there has been nothing but cloud for weeks,
                            </p>
                            <p>
                              The grey closed over the sky
                            </p>
                            <p>
                              Like the eyelids of an old man after a heavy lunch.

                            </p>
                            <p className='spacer20px'></p>
                            <p>

                              I sleep in soggy wool
                            </p>
                            <p>
                              Where motel neon casts shadows
                            </p>
                            <p>
                              On cars parked in rows.
                            </p>
                            <p>
                              I am old enough to remember the night sounds
                            </p>
                            <p>
                              Of distant payphones ringing
                            </p>
                            <p>
                              For no one.

                            </p>
                            <p className='spacer20px'></p>
                            <p>

                              There is a sewer vent
                            </p>
                            <p>
                              Round and black like the mouth of a womb.
                            </p>
                            <p>
                              There is red light
                            </p>
                            <p>
                              On pavement wet from a sudden rain,
                            </p>
                            <p>
                              And it turns storefront windows into muddy lines of flame.
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              I stuff my hands into my missing pockets,
                            </p>
                            <p>
                              My thighs knotting at the touch of my own cold fingers.
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              There is a house on the corner, not far,
                            </p>
                            <p>
                              Just up there.
                            </p>
                            <p>
                              I keep it in my head
                            </p>
                            <p>
                              Like a wrinkled picture in an old wallet.
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              There was fresh paint I remember.
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              And there was a car,
                            </p>
                            <p>
                              Its vinyl pocked with punch stained fingerprints.
                            </p>
                            <p>
                              Mine.
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              The grass is tall, that I used to mow.
                            </p>
                            <p>
                              There are weeds pressing hard
                            </p>
                            <p>
                              At the base of the sign announcing the house is for sale.
                            </p>
                            <p>
                              Or rent.
                            </p>
                            <p>
                              The lettering is peeling away in the weather.
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              My red face is swallowed in the grimy mirror of a window.
                            </p>
                            <p>
                              I turn around and return.
                            </p>
                            <p>
                              I force my icy fingers
                            </p>
                            <p>
                              Back against my thighs.
                            </p>
                            <p></p>
                          </div>
                        </>
                      )}

                    </div>
                  </li>
                </>
              )}


              <div className='flex_it' onClick={() => toggleVideo('episode6')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span>
                  Episode 6: Fearing the Reactions of Others
                </li>
                <button >
                  {visibleVideos['episode6'] ? '-' : '+'}
                </button>
              </div>

              {visibleVideos['episode6'] && (
                <>
                  <li>
                    <div className="videos_container_container">
                      <div className="video_container">
                        <div className='video_wrapper' >

                          <iframe
                            width="100%"
                            height="315" src="https://www.youtube.com/embed/X3eVPBwrK1w?si=mqgEhyQxFNeI1hjI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='main_text poetry'>
                      <div className='flex_it'
                        onClick={() => togglePoems('episode6')}
                      >
                        <div className='poetry_heading'>
                          <h3> I Saw Your Eyes </h3>
                        </div>
                        <button onClick={togglePoems}>
                          {visiblePoems['episode6'] ? '-' : '+'}
                        </button>
                      </div>

                      {visiblePoems['episode6'] && (
                        <>
                          <div className="poem_div">
                            <p className='MarginTop10px'>
                              I saw your eyes you did not see me
                            </p>
                            <p>
                              You were a child staring down the street
                            </p>
                            <p>
                              At the taillights disappearing, you were trying so hard not to grieve
                            </p>
                            <p>
                              Then you turned around and walked right through me
                            </p>
                            <p>
                              And I saw your eyes
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              I saw your eyes no words were needed
                            </p>
                            <p>
                              I knew all I had to know
                            </p>
                            <p>
                              You’ve been haunted by all these demons
                            </p>
                            <p>
                              Clinging to you down every road you go
                            </p>
                            <p>
                              And you always say it doesn’t matter
                            </p>
                            <p>
                              But I see your eyes
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              Torn window screen, creaking open door, paint peeling in the hall
                            </p>
                            <p>
                              Locket on a silver chain, mama says, “take it it’ll ease the pain”
                            </p>
                            <p>
                              She’s staring at the wall
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              I saw your eyes like empty spaces
                            </p>
                            <p>
                              Aching hollow pools of fear
                            </p>
                            <p>
                              And I wish that I could try and free you
                            </p>
                            <p>
                              And make all those dark dreams disappear
                            </p>
                            <p>
                              But nothing I can do will ever reach you
                            </p>
                            <p>
                              I see your eyes
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              I see your eyes still not believing
                            </p>
                            <p>
                              What you saw there on that day
                            </p>
                            <p>
                              I see wild things all around you
                            </p>
                            <p>
                              And you’re trying hard to be so brave
                            </p>
                            <p>
                              I see your hand wrapped around that locket
                            </p>
                            <p>
                              And I see your eyes
                            </p>
                          </div>
                        </>
                      )}

                    </div>
                  </li>
                </>
              )}




              <div className='flex_it' onClick={() => toggleVideo('episode7')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span>
                  Episode 7: Overcoming Self-Doubt
                </li>
                <button >
                  {visibleVideos['episode7'] ? '-' : '+'}
                </button>
              </div>

              {visibleVideos['episode7'] && (
                <>
                  <li>
                    <div className="videos_container_container">
                      <div className="video_container">
                        <div className='video_wrapper' >
                          {/* <iframe
                            width="100%"
                            height="315" src="https://www.youtube.com/embed/mvBLSJWk6HE?si=tKMfor91EGDtLDgg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='main_text poetry'>
                      <div className='flex_it'
                        onClick={() => togglePoems('episode7')}
                      >
                        <div className='poetry_heading'>
                          <h3> تو / Tu </h3>
                        </div>
                        <button onClick={togglePoems}>
                          {visiblePoems['episode7'] ? '-' : '+'}
                        </button>
                      </div>

                      {visiblePoems['episode7'] && (
                        <>
                          <div className="poem_div">
                            <p className='MarginTop10px'>
                              He leans against a post on the slow rotting porch
                            </p>
                            <p>
                              Looking for myself like the lost keys inside my house
                            </p>
                            <p>
                              Need a key to get back in, need a key to get back out
                            </p>
                            <p>
                              Burn out all the fuses pour gasoline on flame
                            </p>
                            <p>
                              Put your finger in my ashes find a wall and write my name
                            </p>

                            <div className='decor_line'>
                              <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
                            </div>

                            <div className=''>
                              <table>
                                <tr>
                                  <td className="transcript">Tu hi hey tu </td>
                                  <td className="rtl">تو ہی ہی تو</td>
                                </tr>
                                <tr>
                                  {/* <td></td> */}
                                  <td className='translation'> (only you are you) </td>
                                  {/* <td></td> */}
                                </tr>

                                <tr>
                                  <td className="transcript">Main hazir hu </td>
                                  <td className="rtl">میں حاضر ہوں۔</td>
                                </tr>
                                <tr>
                                  {/* <td></td> */}
                                  <td className='translation'>  (I am here, present, like a servant waiting) </td>
                                  {/* <td></td> */}
                                </tr>
                                <tr>
                                  <td className="transcript">Tu hi hey tu </td>
                                  <td className="rtl">تو ہی ہی تو</td>
                                </tr>
                                <tr>
                                  <td className='translation'> (only you are you) </td>
                                </tr>

                                <tr>
                                  <td className="transcript">Main hazir hu </td>
                                  <td className="rtl">میں حاضر ہوں۔</td>
                                </tr>
                                <tr>
                                  <td className='translation'>  (I am here, present, like a servant waiting) </td>
                                </tr>
                              </table>
                            </div>

                            <div className='decor_line'>
                              <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
                            </div>

                            <p className='MarginTop10px'>
                              It was only yesterday I couldn’t wait to see today
                            </p>
                            <p>
                              Now in my rear view mirror I see tomorrow swept away
                            </p>
                            <p>
                              The dictionary’s missing all the words I thought I knew
                            </p>
                            <p>
                              I was never all that certain that they were ever even true
                            </p>

                            <div className='decor_line'>
                              <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
                            </div>

                            <div className=''>
                              <table>
                                <tr>
                                  <td className="transcript">Tu hi hey tu </td>
                                  <td className="rtl">تو ہی ہی تو</td>
                                </tr>
                                <tr>
                                  {/* <td></td> */}
                                  <td className='translation'> (only you are you) </td>
                                  {/* <td></td> */}
                                </tr>

                                <tr>
                                  <td className="transcript">Main hazir hu </td>
                                  <td className="rtl">میں حاضر ہوں۔</td>
                                </tr>
                                <tr>
                                  {/* <td></td> */}
                                  <td className='translation'>  (I am here, present, like a servant waiting) </td>
                                  {/* <td></td> */}
                                </tr>
                                <tr>
                                  <td className="transcript">Tu hi hey tu </td>
                                  <td className="rtl">تو ہی ہی تو</td>
                                </tr>
                                <tr>
                                  <td className='translation'> (only you are you) </td>
                                </tr>

                                <tr>
                                  <td className="transcript">Main hazir hu </td>
                                  <td className="rtl">میں حاضر ہوں۔</td>
                                </tr>
                                <tr>
                                  <td className='translation'>  (I am here, present, like a servant waiting) </td>
                                </tr>
                              </table>
                            </div>

                            <div className='decor_line'>
                              <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
                            </div>


                            <p className='MarginTop10px'>
                              I’m trying to site this rifle here I fear I’ll never fire
                            </p>
                            <p>
                              Finger waiting on the trigger but it’s been waiting there awhile
                            </p>
                            <p>
                              I know what I have to do, I see the target clean and clear
                            </p>
                            <p>
                              If I could just bend back the bars to this prison of my fears
                            </p>

                            <div className='decor_line'>
                              <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
                            </div>

                            <div className=''>
                              <table>
                                <tr>
                                  <td className="transcript">Tu hi hey tu </td>
                                  <td className="rtl">تو ہی ہی تو</td>
                                </tr>
                                <tr>
                                  {/* <td></td> */}
                                  <td className='translation'> (only you are you) </td>
                                  {/* <td></td> */}
                                </tr>

                                <tr>
                                  <td className="transcript">Main hazir hu </td>
                                  <td className="rtl">میں حاضر ہوں۔</td>
                                </tr>
                                <tr>
                                  {/* <td></td> */}
                                  <td className='translation'>  (I am here, present, like a servant waiting) </td>
                                  {/* <td></td> */}
                                </tr>
                                <tr>
                                  <td className="transcript">Tu hi hey tu </td>
                                  <td className="rtl">تو ہی ہی تو</td>
                                </tr>
                                <tr>
                                  <td className='translation'> (only you are you) </td>
                                </tr>

                                <tr>
                                  <td className="transcript">Main hazir hu </td>
                                  <td className="rtl">میں حاضر ہوں۔</td>
                                </tr>
                                <tr>
                                  <td className='translation'>  (I am here, present, like a servant waiting) </td>
                                </tr>
                              </table>
                            </div>




                            <div className='decor_line'>
                              <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
                            </div>


                            <div className=''>
                              <table>
                                <tr>
                                  <td className="transcript">Tu, tu  </td>
                                  <td className="rtl">   تو تو    </td>

                                </tr>
                                <tr>
                                  {/* <td></td> */}
                                  <td className='translation'>  (you, you) </td>
                                  {/* <td></td> */}
                                </tr>

                                <tr>
                                  <td className="transcript"> Tu hi hey tu </td>
                                  <td className="rtl"> تو ہی  ہی تو   </td>
                                </tr>
                                <tr>
                                  {/* <td></td> */}
                                  <td className='translation'>  (only you are you) </td>
                                  {/* <td></td> */}
                                </tr>
                              </table>
                            </div>

                            <div className=''>
                              <table>
                                <tr>
                                  <td className="transcript">Tu, tu  </td>
                                  <td className="rtl">   تو تو    </td>

                                </tr>
                                <tr>
                                  {/* <td></td> */}
                                  <td className='translation'>  (you, you) </td>
                                  {/* <td></td> */}
                                </tr>

                                <tr>
                                  <td className="transcript"> Tu hi hey tu </td>
                                  <td className="rtl"> تو ہی  ہی تو   </td>
                                </tr>
                                <tr>
                                  {/* <td></td> */}
                                  <td className='translation'>  (only you are you) </td>
                                  {/* <td></td> */}
                                </tr>
                              </table>
                            </div>


                          </div>
                        </>
                      )}

                    </div>
                  </li>
                </>
              )}


            </ul>
            <p></p>
            {/* <a href="https://music.youtube.com/watch?v=50Dftet98Vc&si=uIyJJXhdK4omoMDi"> The link to Kevin's musicYoutube</a> */}
          </div>



          <div className='main_text visual_art_appreciation'>
            <div className="spacer20px"></div>
            <p>
              Assignment:
            </p>
            <ul className='visual_art_appreciation'>
              <li className=''> <span className='bullet_point'>o</span>
                The Creativity Cultivation Practice as explained in the Lecture Video
              </li>
            </ul>
            <p></p>
          </div>






          <div className='main_text visual_art_appreciation'>
            <div className="spacer20px"></div>
            <p>
              Virtual Art Appreciation
            </p>
            <ul className='visual_art_appreciation'>
              <li className=''> <span className='bullet_point'>o</span>
                A live sharing of the artwork each student creates during this Section
              </li>
              <li className=''> <span className='bullet_point'>o</span>
                Day and Time: To Be Determined              </li>
              <li className=''> <span className='bullet_point'>o</span>
                Zoom Link will be provided
              </li>
              <li className=''> <span className='bullet_point'>o</span>
                Kevin's Creative Reflections from the Moses Episodes
              </li>
            </ul>
            <p></p>
          </div>


          <div className='upload_file'>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
          </div>


          <article className='nav_arrows'>
            <div className='flex_it space_between'>
              <div style={{ marginLeft: '0px' }}
              // onClick={() => navigate('/qisas-uzbek/?????')}
              >
                <div>
                  <span className='left_arrow_span'>&#8592;</span>
                </div>
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' > go back </span>
                </div>
              </div>

              <div className='central_div'>
                <div>
                  <p>Wisdom from Moses</p>
                </div>
              </div>

              <div style={{ marginRight: '0px' }}
              // onClick={() => navigate('/qisas-uzbek/creation-of-world')}
              >
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas'>next page</span>
                </div>
                <div>
                  <span className='right_arrow_span' >&#8594;</span>
                </div>
              </div>
            </div>

          </article>
         
        </main>
        <aside>
          <div className='side_p'>
            <p>
              Moses for Artists:

              In these 7 Episodes we will begin before Moses was born, and follow his life through birth, childhood, adulthood, and his experience of discovering his life purpose, or calling.
            </p>
            <p>
              For artists, allowing ourselves to process our pasts with honesty and compassion can unleash fresh springs of creativity, as well as enable us to experience a deeper sense of wellbeing.
            </p>
          </div>
          <div className='sideImage'>
            <img src={image1} alt="" />
          </div>

        </aside>
      </div>
    </div >
  )
}

export default WisdomFromMoses