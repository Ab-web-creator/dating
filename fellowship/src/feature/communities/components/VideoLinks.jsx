import React, { useState, useEffect } from 'react';
import './videoLinks.css'
import { useTranslation } from 'react-i18next';

const VideoLinks = () => {


  const { t } = useTranslation();
  const [clickedVideos, setClickedVideos] = useState([]);

  useEffect(() => {
    // Retrieve the state from localStorage on component mount
    const storedClickedVideos = localStorage.getItem('clickedVideos');
    if (storedClickedVideos) {
      // console.log('Retrieved from localStorage:', JSON.parse(storedClickedVideos));
      setClickedVideos(JSON.parse(storedClickedVideos));
    }
  }, []);

  const saveClickedVideosToLocalStorage = (videos) => {
    // Save the state to localStorage whenever it changes
    localStorage.setItem('clickedVideos', JSON.stringify(videos));
  };

  const handleVideoClick = (index) => {
    setClickedVideos((prevClickedVideos) => {
      const newClickedVideos = [...prevClickedVideos];
      newClickedVideos[index] = !newClickedVideos[index];
      saveClickedVideosToLocalStorage(newClickedVideos);
      return newClickedVideos;
    });
  };

  const videoData = [
    { src: "https://www.youtube.com/embed/cT4dowOg14k?si=jaWC8hEq2MWBDzJ4", title: "Story of Adam: 2.8 million views in another youtube channel" },
    { src: "https://www.youtube.com/embed/v9HaXq1fEro?si=aX1qcvbBBLdzHans", title: "Story of Noah: 1.6 million views in another channel" },

    { src: "https://www.youtube.com/embed/JNfFG8l4Phw?si=GXeicnjnPt8HuTSZ", title: "Story of Abraham. Part 1: 2 million views in another channel" },

    { src: "https://www.youtube.com/embed/2bzvjm5Q1tM?si=9QlCGkjL0aLQ_B10", title: "Story of Abraham. Part 2: 908K views in another channel" },

    { src: "https://www.youtube.com/embed/Yr4CPWIIhgk?si=5-2vyQXBLOdYa0Ce", title: "Story of Jonah: 663K views in another yourube channel" },

    { src: "https://www.youtube.com/embed/gP6lpez1C8Q?si=4VMCy4jdEWpzKxbD", title: "Time is short. Marked as unlisted." },

    { src: "https://www.youtube.com/embed/ljBLmSK9o08?si=2UVdf_t-VfDp09Lj", title: "Classic Uzbek Song" },

  ];


  return (
    <div className="video_links">
      <h1 style={{ color: 'gray', fontWeight: '500', marginLeft: '20px' }} >{t('VideoLinks.MainHeading')}</h1>

      <div className="videos_container_container">
        {videoData.map((video, index) => (
          <div className="video_container" key={index}  >
            <div
              className={`video_wrapper${clickedVideos[index] ? ' full_width' : ''}`}
              onClick={() => handleVideoClick(index)}
            >
              <iframe
                width="560"
                height="315"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video_title"> <p>{video.title}</p></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoLinks