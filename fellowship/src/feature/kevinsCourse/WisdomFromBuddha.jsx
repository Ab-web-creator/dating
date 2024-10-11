import React from 'react'
import { useNavigate } from 'react-router-dom';
import kamar from '../../images/kamar.png'
import logo from '../../images/KevinImages/ancientWell.jpeg'

import './kevinsCourse.css'


const WisdomFromBuddha = () => {

  const navigate = useNavigate();

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
            {/* <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p> */}
          </div>

          <div className="intro">
            <p>SOMETHING</p>
          </div>
          <div className='main_text'>
            <p>
              Hello. My name is Kevin and Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit nam reprehenderit! Quibusdam magni ut, mollitia dolorum aliquam ex. Magni quos aspernatur optio. Kamet consectetur adipisicing elit. Obcaecati sit nam reprehenderit! Quibusdam magni ut, mollitia dolorum aliquam ex. Magni quos aspernatur optio.
            </p>
            <p></p>
          </div>


          <div className="videos_container_container">

            <div className="video_container">
              <div className='video_wrapper' >
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/mvBLSJWk6HE?si=tKMfor91EGDtLDgg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div>

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
        <aside></aside>
      </div>
    </div >
  )
}

export default WisdomFromBuddha