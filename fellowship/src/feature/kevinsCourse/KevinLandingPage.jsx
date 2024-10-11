import React from 'react'
import './kevinNavigation.css';
import { useNavigate } from 'react-router-dom';
import kamar from '../../images/kamar.png'
import Dropzone from '../../components/dropzone/Dropzone';
import logo from '../../images/KevinImages/ancientWell.jpeg'
import image1 from '../../images/KevinImages/KevinHimself.jpeg'


const KevinLandingPage = () => {
  return (
    <div className="minister-home stories kevins_course">
      <div className="separate_into_two_columns">
        <main className="sep_part1">

          <div className='chapter_heading'>
            <div className="kamar">
              <img src={kamar} alt="" />
            </div>
            <div className="img_container" >
              <img src={logo} alt="" />
            </div>
            <div className='title_of_chapter'>
              <p>Wisdom for Artists from Ancient Wells</p>
            </div>
          </div>


          <div className='decor_line'>
            <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
          </div>


          <div className='big_heading'>
            <p> Resources for Creativity from the Great Religious Heritages
            </p>
          </div>

          <div className="intro">
            <p>Course Overview</p>
          </div>
          <div className='main_text'>
            <p>



              In this course we will explore the creative, spiritual, and relational essence of human nature through the lenses of the religious heritages of humankind. Being human is an art form whether we are artists or not, and this course will help everyone cultivate their creative nature, no matter their vocation.




            </p>
            <p>
              However, in particular this course will focus on how these heritages provide resources for artists no matter their artistic genre: poetry, fiction, film, paint, sculpture, graphic design, music, songwriting, dance, culinary arts, etc. Religion and Art have not always been friendly to each other, but this course seeks to open us to a different way of integrating them.
            </p>

            <p></p>
          </div>

          <div className="subheaders">
            <p>Course Format:</p>
          </div>

          <div className='main_text'>
            <p>
              We will combine readings, experiential practices designed to cultivate spiritual, creative, and relational growth, conversations (some in live virtual sessions, others in the Way of Love app), and assignments featuring the creative, artistic works of students.

            </p>
          </div>

          <div className="subheaders">
            <p>Resources:</p>
          </div>

          <div className='main_text'>
            <p>
              1-Religious Texts: the course will draw from texts from 6 of the great world religions to explore ways of cultivating our creativity.
            </p>
            <p>
              2-The book, The Cow Behind the Barn, by Kevin Caldwell will be a key text (available in e-versions, paper back, or from the author.)
            </p>
            <p>
              3-Four audio files: “Liner Notes” from four albums of songs by Kevin Caldwell (under the artist name Kevin Higgins, available in the Way of Love site)
            </p>
            <p>
              4-Practices for cultivating creativity, spirituality, and relationship (as assigned during each of the Episodes)
            </p>
          </div>

          <div className="course_structure">
            <h3>Course Structure:</h3>

            <ul>
              <li>Section 1 Introduction</li>
              <li>Section 2 The wisdom of Moses for artists, 7 Episodes</li>
              <li>Section 3 The wisdom of the Bhagavad Gita for artists, 7 Episodes</li>
              <li>Section 4 The wisdom of the Buddha for artists, 7 Episodes</li>
              <li>Section 5 The wisdom of Lao Tzu for artists, 7 Episodes</li>
              <li>Section 6 The wisdom of Jesus for artists, 7 Episodes</li>
              <li>Section 7 The wisdom of Muhammad for artists, 7 Episodes</li>
              <li>Section 8 Conclusion</li>
            </ul>
          </div>

          <Dropzone h1='Upload your files' />

          {/* <div className="videos_container_container">
            <div className="video_container">
              <div className='video_wrapper' >
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/mvBLSJWk6HE?si=tKMfor91EGDtLDgg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div>
          </div> */}




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
                  <p>Home Page</p>
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
              I am looking forward to getting to know you… . Feel free to reach out.
            </p>
            <p className='authour'>Kevin Caldwell</p>
          </div>
          <div className='sideImage'>
            <img src={image1} alt="" />
          </div>
        </aside>
      </div>
    </div >
  )
}

export default KevinLandingPage