import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import kamar from '../../images/kamar.png'
import logo from '../../images/KevinImages/ancientWell.jpeg'
import image1 from '../../images/KevinImages/intro.jpg'

import './kevinsCourse.css'


const Introduction = () => {

  const navigate = useNavigate();

  const [showPoetries, setShowPoetries] = useState(false);

  const toggleParagraphs = () => {
    setShowPoetries(!showPoetries);
  };

  const [visibleVideos, setVisibleVideos] = useState({
    episode1: true,
  });

  const toggleVideo = (key) => {
    setVisibleVideos((prevVisibleVideos) => ({
      ...prevVisibleVideos,
      [key]: !prevVisibleVideos[key],
    }));
  };


  return (
    <div className="minister-home stories kevins_course">
      <div className="separate_into_two_columns">
        <main className="sep_part1">

          <div className='section_headings'>
            <p>Section 1: Introduction</p>
          </div>

          <div className='main_text'>
            <p>
              Kevin Caldwell's journey with the written word began in 1976, when he first started crafting poetry, songs, and music. Holding a B.A. in English Literature and a PhD in Translation Studies, Kevin's academic prowess beautifully complements his creative expressions.
            </p>
            <p>
              Having lived across multiple countries in Asia, Kevin and his family's immersion in diverse cultures kindled an appreciation for poetry and religious texts in Urdu and Sanskrit. His exploration into the history of religious text translation by both Muslims and Christians further enriched his perspectives.
            </p>
            <p>
              Kevin's artistic spirit extends to the realm of music, with four original albums – 'My Religion,' 'Bid the Ghosts Come In,' 'The Cow Behind the Barn,' and 'This Time' – gracing major streaming platforms including Spotify, Pandora, Apple Music, iTunes, and YouTube. The songs on each album showcase Caldwell's versatility and depth. Search by album titles or the name 'Kevin Higgins' to explore his musical journey.
            </p>
            <p></p>
          </div>

          <div className="intro">
            <p>Assignments</p>
          </div>

          <div className='main_text'>
            <p>
              For this Section please read the Preface and About the Author in the book, The Cow Behind the Barn (available in print or e-versions in most countries, or by request from the instructor), and listen to the Liner Notes for each of the four albums.
            </p>

            <div className='image_and_link'>
              <img src={image1} alt="" />
              <div className='book_title flex-col'>
                <p>The Cow Behind the Barn</p>
                <p className='poems_etc'>Poems, Songs, and the Art of being Human</p>
                <p className='author'>Kevin Caldwell</p>
              </div>

              <div className='link_to_book'>
                <a href='https://www.amazon.com/dp/B0CKS2TQR1' target="_blank" rel="noopener noreferrer">
                  View this book on Amazon
                </a>
              </div>

              <div className='link_to_book2'>
                <a href="https://www.barnesandnoble.com/w/the-cow-behind-the-barn-kevin-caldwell/1144188750" target="_blank" rel="noopener noreferrer">View in barnesandnoble.com</a>
              </div>
            </div>
          </div>

          <div className='main_text poetry'>
            <div className='flex_it' onClick={toggleParagraphs}>
              <div style={{ margin: 'auto', marginLeft: '0px', }}>
                <h3>  Truth and Truths  </h3>
              </div>
              <button onClick={toggleParagraphs}>
                {showPoetries ? '-' : '+'}
              </button>
            </div>
            {showPoetries && (
              <>
                <p>When my truths</p>
                <p>  Hummed in this key,</p>
                <p>And your truths</p>
                <p> Hummed in that, </p>
                <p> Meet, </p>
                <p> And meeting shed each discordant note, </p>
                <p> Align to one true chord, </p>
                <p> Find flight and give voice to living words, </p>
                <p> Then every song will echo thronging vibrant alive, </p>
                <p>  Shimmering in a vast chorus of our varied truths, </p>
                <p> Woven in one united opus. </p>
                <p> And all, and each, together, </p>
                <p> With full throated glee, </p>
                <p> We will know, and name, </p>
                <p> The Truth. </p>
                <p></p>
              </>
            )}
          </div>
          <div className='noted_below'><p>(the poem used in the video) </p>
            <p></p>
          </div>
          <div className='spacer20px'></div>
          <div className='main_text liner_notes '>
            <p style={{ fontWeight: '500', color: 'rgb(0, 138, 218)' }}>
              Liner Notes from Four Albums:
            </p>

            <ul>
              <div className='flex_it' onClick={() => toggleVideo('episode1')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span> My Religion
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
                          <iframe width="100%" height="315" src="https://www.youtube.com/embed/gnVDdQhW4Ak?si=Dbp52v9xeHfH2Wg_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              )}

              <div className='flex_it' onClick={() => toggleVideo('episode2')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span> Bid the Ghosts Come In
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
                          <iframe width="100%" height="315" src="https://www.youtube.com/embed/0rIY3YJbxRw?si=vxPgRwxL5o-QNXpJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              )}

              <div className='flex_it' onClick={() => toggleVideo('episode3')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span>  The Cow Behind the Barn
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
                          <iframe width="100%" height="315" src="https://www.youtube.com/embed/n347Lhvazjk?si=fowkNnY-HZ1H8lgo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              )}

              <div className='flex_it' onClick={() => toggleVideo('episode4')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span>  This Time
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
                          <iframe width="100%" height="315" src="https://www.youtube.com/embed/SxBvgJY0V7I?si=tcOogoolquLgo5Uf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              )}
            </ul>
            <p></p>
          </div>

          <div className="videos_container_container red">
            <p>  - - EMPTY VIDEO placeholder.  - -</p>
            <p>Expecting a new introduction video from Kevin ?</p>
            {/* <div className="video_container">
              <div className='video_wrapper' >
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/mvBLSJWk6HE?si=tKMfor91EGDtLDgg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div> */}
          </div>

          <article className='nav_arrows'>
            <div className='flex_it space_between'>
              <div style={{ marginLeft: '0px' }}
              // onClick={() => navigate('/qisas-uzbek/introduction')}
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
                  <p>Introduction</p>
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
        <aside></aside>
      </div>
    </div >
  )
}

export default Introduction