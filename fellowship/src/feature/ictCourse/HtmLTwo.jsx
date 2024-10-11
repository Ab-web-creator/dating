import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ictCourse.css'

import kamar from '../../images/htmlCssJsBackground.png'
import mainImage from '../../images/htmlicon2.png'


const HtmLTwo = () => {

  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (isCorrect, answer) => {
    setShowPopup(true);
    setIsAnswerCorrect(isCorrect);
    setSelectedAnswer(answer);
  };

  const closePopup = () => {
    setShowPopup(false);
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
    <div className='html_course'>

      <div className="minister-home stories html_course">
        <div className="separate_into_two_columns">
          <main className="one_column_only">

            <div className='chapter_heading'>
              <div className="kamar">
                <img src={kamar} alt="" />
              </div>
              <div className="img_container" >
                <img src={mainImage} alt="" />
              </div>
              <div className='title_of_chapter'>
                <p>
                  <span className='hide_VERY_sm_screen'>Course on </span>      HTML / CSS / JS:
                </p>
                <p>Lesson 2</p>
              </div>
            </div>

            <div className='decor_line'>
              {/* <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p> */}
            </div>

            <div className='main_text'>
              <p>
                CSS stands for Cascading Style Sheets. It's a style sheet language -- oh no, another language (!) -- and it describes how elements should be rendered on screen. It allows web developers to control the layout, colors, fonts, and other visual aspects of a webpage.
              </p>
              <p>How is it applied?</p>
              <p>Today I will show you three different ways. First and quickest way is called "inline CSS":</p>
            </div>

            <div>
              <p className="vitalic">Illustration 1: this is yesterday's code:</p>
            </div>

            <div className='coded_div'>
              <div>
                <p> &lt;!<span className='bl'>DOCTYPE</span> <span className="lbl">html&gt;</span> </p>
                <p>
                  &lt;<span className="bl">html</span> <span className="lbl">lang</span>=<span className="or">"en"</span>&gt;
                </p>
                <div className="spacer10px"></div>
                <p>
                  &lt;<span className="bl">head</span>&gt;
                </p>

                <div className="indent20px">
                  <p> &lt;<span className="bl">meta</span> <span className="lbl">charset</span>=<span className="or">"UTF-8"</span>&gt; </p>
                  <p>
                    &lt;<span className="bl">meta</span> <span className="lbl">name</span>=<span className="or">"viewport"</span> <span className="lbl">content</span>=<span className="or">"width=device-width, initial-scale=1.0"</span>&gt;
                  </p>
                  <p>
                    &lt;<span className="bl">link</span> <span className="lbl">rel</span>=<span className="or">"stylesheet"</span> <span className="lbl">href</span>=<span className="or">"styles.css"</span>&gt;
                  </p>

                  <p>  &lt;<span className="bl">title</span>&gt;<span className="wh">Document</span>&lt;/<span className="bl">title</span>&gt;</p>
                </div>

                <p> &lt;/<span className="bl">head</span>&gt;</p>
                <div className="spacer10px"></div>
                <p>&lt;<span className="bl">body</span>&gt;</p>

                <div className="indent20px">
                  <p> &lt;<span className="bl">h1</span>&gt; <span className="wh">Breaking News</span> &lt;/<span className="bl">h1</span>&gt;</p>
                </div>

                <div className="indent20px">
                  <p> &lt;<span className="bl">p</span>&gt; <span className="wh">President of Turkmenistan unveils startling announcement - nation transforms into democratic wonderland overnight! 🇺🇿✨</span> &lt;/<span className="bl">p</span>&gt;</p>
                </div>

                <p>  &lt;/<span className="bl">body</span>&gt; </p>
                <div className="spacer10px"></div>

                <div className="indent20px">  </div>
                <p> &lt;/<span className="bl">html</span>&gt; </p>
              </div>
            </div>

            <div className='main_text'>
              <p>
                Now I am going to add here inline CSS:
              </p>
            </div>

            <div>
              <p className="vitalic">Illustration 2: do you see what I have added? </p>
            </div>

            <div className='coded_div'>
              <div>
                <p> &lt;!<span className='bl'>DOCTYPE</span> <span className="lbl">html&gt;</span> </p>
                <p>
                  &lt;<span className="bl">html</span> <span className="lbl">lang</span>=<span className="or">"en"</span>&gt;
                </p>
                <div className="spacer10px"></div>
                <p>
                  &lt;<span className="bl">head</span>&gt;
                </p>

                <div className="indent20px">
                  <p> &lt;<span className="bl">meta</span> <span className="lbl">charset</span>=<span className="or">"UTF-8"</span>&gt; </p>
                  <p>
                    &lt;<span className="bl">meta</span> <span className="lbl">name</span>=<span className="or">"viewport"</span> <span className="lbl">content</span>=<span className="or">"width=device-width, initial-scale=1.0"</span>&gt;
                  </p>
                  <p>
                    &lt;<span className="bl">link</span> <span className="lbl">rel</span>=<span className="or">"stylesheet"</span> <span className="lbl">href</span>=<span className="or">"styles.css"</span>&gt;
                  </p>

                  <p>  &lt;<span className="bl">title</span>&gt;<span className="wh">Document</span>&lt;/<span className="bl">title</span>&gt;</p>
                </div>

                <p> &lt;/<span className="bl">head</span>&gt;</p>
                <div className="spacer10px"></div>
                <p>&lt;<span className="bl">body</span>&gt;</p>

                <div className="indent20px">
                  <p>  &lt;<span className="bl">h1</span> <span className="lbl">style</span>=<span className="or">"color: red;"</span>&gt; <span className="wh">Breaking News</span> &lt;/<span className="bl">h1</span>&gt;</p>
                </div>

                <div className="indent20px">
                  <p> &lt;<span className="bl">p</span>&gt; <span className="wh">President of Turkmenistan unveils startling announcement - nation transforms into democratic wonderland overnight! 🇺🇿✨</span> &lt;/<span className="bl">p</span>&gt;</p>
                </div>

                <p>  &lt;/<span className="bl">body</span>&gt; </p>
                <div className="spacer10px"></div>

                <div className="indent20px">  </div>
                <p> &lt;/<span className="bl">html</span>&gt; </p>
              </div>
            </div>

            <div className='main_text'>
              <p>Here is how it looks like on your browser:</p>
            </div>

            <div className='onBrowser'>
              <h1 className='red'> Breaking News </h1>

              <p> President of Turkmenistan unveils startling announcement - nation transforms into democratic wonderland overnight! 🇺🇿✨ </p>
            </div>

            <div className='main_text'>
              <p>Can we change the color of p tag also? Of course:</p>
            </div>

            <div>
              <p className="vitalic">Illustration 3:  </p>
            </div>

            <div className='coded_div'>
              <div>
                <p> &lt;!<span className='bl'>DOCTYPE</span> <span className="lbl">html&gt;</span> </p>
                <p>
                  &lt;<span className="bl">html</span> <span className="lbl">lang</span>=<span className="or">"en"</span>&gt;
                </p>
                <div className="spacer10px"></div>
                <p>
                  &lt;<span className="bl">head</span>&gt;
                </p>

                <div className="indent20px">
                  <p> &lt;<span className="bl">meta</span> <span className="lbl">charset</span>=<span className="or">"UTF-8"</span>&gt; </p>
                  <p>
                    &lt;<span className="bl">meta</span> <span className="lbl">name</span>=<span className="or">"viewport"</span> <span className="lbl">content</span>=<span className="or">"width=device-width, initial-scale=1.0"</span>&gt;
                  </p>
                  <p>
                    &lt;<span className="bl">link</span> <span className="lbl">rel</span>=<span className="or">"stylesheet"</span> <span className="lbl">href</span>=<span className="or">"styles.css"</span>&gt;
                  </p>

                  <p>  &lt;<span className="bl">title</span>&gt;<span className="wh">Document</span>&lt;/<span className="bl">title</span>&gt;</p>
                </div>

                <p> &lt;/<span className="bl">head</span>&gt;</p>
                <div className="spacer10px"></div>
                <p>&lt;<span className="bl">body</span>&gt;</p>

                <div className="indent20px">
                  <p>  &lt;<span className="bl">h1</span> <span className="lbl">style</span>=<span className="or">"color: red;"</span>&gt; <span className="wh">Breaking News</span> &lt;/<span className="bl">h1</span>&gt;</p>
                </div>

                <div className="indent20px">
                  <p> &lt;<span className="bl">p </span><span className="lbl"> style</span>=<span className="or">"color: blue;"</span>&gt; <span className="wh">President of Turkmenistan unveils startling announcement - nation transforms into democratic wonderland overnight! 🇺🇿✨</span> &lt;/<span className="bl">p</span>&gt;</p>
                </div>

                <p>  &lt;/<span className="bl">body</span>&gt; </p>
                <div className="spacer10px"></div>

                <div className="indent20px">  </div>
                <p> &lt;/<span className="bl">html</span>&gt; </p>
              </div>
            </div>

            <div className='main_text'>
              <p>And on your browser you see this:</p>
            </div>

            <div className='onBrowser'>
              <h1 className='red'> Breaking News </h1>

              <p className='blue'> President of Turkmenistan unveils startling announcement - nation transforms into democratic wonderland overnight! 🇺🇿✨ </p>
            </div>

            <div className='main_text'>
              <p>So what did we do? First we wrote the word "style" inside the beginning tag -- not after it -- and then put the word "color", which is here an HTML attribute. Then we specified the name of the color: "red". </p>
              <p>
                Remember: where it should be put -- inside the beginning tag.
              </p>
              <p>
                Then you put "=" symbol immediately after it, and then inside quotes you put the attribute (in our case it is "color" attribute).
              </p>

              <p>Then colon ":", then the name of the color. By the way, you can use the hexadecimal or RGB color values. For example, the hexadecimal value for red is #ff0000. </p>

              <p>And at last, do not forget to end it with semicolon ";".</p>
              <p>Try it. Try several times with different colors. I recommend you to use "red", "blue", "gold", "gray", but do not use "white", because then you can't see it on the white background. </p>
              <p>
                Are there more attributes? Well yes! Many more. You can use "margin" and "padding" for creating more white space, and the attribute "background" gives you possibility to style the background of your element, and "span" helps to style individual words or even characters. You can even add "border", "cursor", "opacity" etc. etc...
              </p>
              <p>
                But I think it is better to see it on the video. Do not forget to pause the video and repeat codes on your computer.
              </p>
            </div>

            <div className="videos_container_container">
              <div className="video_container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wRNinF7YQqQ?si=8J7zLcutoJNSAXec" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div>

            <div className='decor_line' style={{ margin: '70px 0px' }}>
              <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
            </div>

            <div className='main_text'>
              <p>
                And the last video for this lesson: Nader will give his explanation on HTML and CSS, but more than that, he will introduce you to how to approach JavaScript, which is our next lesson.
              </p>
            </div>


            <div className="videos_container_container">
              <div className="video_container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cu8UOzVFkxc?si=j4q7hwiOv0StY32D" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div>

            {/* <div>
              <p className="vitalic">Possible answers:</p>
            </div>

            <div className='possible_answers'>
              <p>
                A: it must be a mistake;
              </p>
              <p>
                B: this way the code is more stable;
              </p>
              <p>
                C: they include other tags inside;
              </p>
              <p>D: nobody knows why.</p>
            </div>

            <div>
              <p className="vitalic">Click the right answer:</p>
            </div>

            <div className="answers">
              <div className='flex_answers'>
                <div className={`blue_bg ${selectedAnswer === 'A' ? 'selected' : ''}`} onClick={() => handleAnswerClick(false, 'A')}>
                  <div>A</div>
                </div>
                <div className={`red_bg ${selectedAnswer === 'B' ? 'selected' : ''}`} onClick={() => handleAnswerClick(false, 'B')}>
                  <div>B</div>
                </div>
              </div>
              <div className='flex_answers'>
                <div className={`orange_bg ${selectedAnswer === 'C' ? 'selected' : ''}`} onClick={() => handleAnswerClick(true, 'C')}>
                  <div>C</div>
                </div>
                <div className={`green_bg ${selectedAnswer === 'D' ? 'selected' : ''}`} onClick={() => handleAnswerClick(false, 'D')}>
                  <div>D</div>
                </div>
              </div>
            </div>

            <div className='popup_div'>
              {showPopup && (
                <div className={`popup ${isAnswerCorrect ? 'correct' : 'incorrect'}`}>
                  <div>
                    {isAnswerCorrect ? <div >
                      <p>Congratulations: your answer is correct!</p>
                      <p> You earned 100 points!  🥳 🥳 🥳 </p>
                    </div>
                      : 'You are very close, try again'}
                  </div>
                  <button className='close_popup'
                    onClick={closePopup}>
                    &times;
                  </button>
                </div>
              )}
            </div> */}




            <div className='decor_line' style={{ margin: '70px 0px' }}>
              <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
            </div>

            <div className="titles">
              <p>Assignment:</p>
            </div>

            <div className='main_text'>
              <p>
                Create an HTML file, fill it with code, and then send it to me. You can upload the file here:
              </p>
            </div>

            <div className='upload_file'>
              <input type="file" onChange={handleFileChange} />
              <button onClick={handleUpload}>Upload</button>
            </div>

            <div className='decor_line' style={{ margin: '70px 0px' }}>
              <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
            </div>

            <article className='nav_arrows'>
              <div className='flex_it space_between'>
                <div style={{ marginLeft: '0px' }}
                // onClick={() => navigate('/qisas-uzbek/?????')}
                >
                  <div>
                    <span>&#8592;</span>
                  </div>
                  <div className='indicator'>
                    <span className=' bottom_arrows_for_qisas' > go back </span>
                  </div>
                </div>

                <div className='central_div'>
                  <div>
                    <p>Lesson 2</p>
                  </div>
                </div>

                <div style={{ marginRight: '0px' }}
                  onClick={() => navigate('/html-css-course/html-lesson-three')}
                >
                  <div className='indicator'>
                    <span className=' bottom_arrows_for_qisas'>next page</span>
                  </div>
                  <div>
                    <span>&#8594;</span>
                  </div>
                </div>
              </div>

            </article>
          </main>
        </div>
      </div >

    </div>
  );
};

export default HtmLTwo;
