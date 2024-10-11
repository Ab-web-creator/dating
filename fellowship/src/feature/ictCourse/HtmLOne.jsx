import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './ictCourse.css'

import kamar from '../../images/htmlCssJsBackground.png'
import mainImage from '../../privatePages/../images/commty0.png'


const HtmLOne = () => {

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
                <p>Lesson 1</p>
              </div>
            </div>

            <div className='decor_line'>
              {/* <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p> */}
            </div>

            <div className="titles">
              <p>Introduction</p>
            </div>

            <div className='main_text'>
              <p>
                HTML, or HyperText Markup Language, is like the building blocks of websites. It's a special code that tells web browsers how to display things like text, pictures, and links on the internet. So, when you visit a website, what you see is all thanks to HTML!
              </p>
              <p>Here is how it looks like if you open it in a simple text editor:</p>
            </div>

            <div>
              <p className="vitalic">Illustration 1:</p>
            </div>

            <div className='coded_div'>
              <div>
                <p>
                  &lt;!DOCTYPE html&gt;
                </p>
                <p>
                  &lt;html lang="en"&gt;
                </p>
                <p>
                  &lt;head&gt;
                </p>
                <p>
                  &lt;meta charset="UTF-8"&gt;
                </p>
                <p>  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</p>
                <p>&lt;link rel="stylesheet" href="styles.css"&gt;</p>
                <p>  &lt;title&gt;Document&lt;/title&gt;</p>
                <p> &lt;/head&gt;</p>
                <p>&lt;body&gt;</p>
                <p>  &lt;/body&gt; </p>
                <p> &lt;/html&gt; </p>
              </div>
            </div>

            <div className='main_text'>
              <p>
                If you use a special program to write HTML, for example Visual Studio Code, then it looks a bit better, with different colors:
              </p>
            </div>

            <div>
              <p className="vitalic">Illustration 2:</p>
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
                  <p>  &lt;<span className="bl">meta</span> <span className="lbl">name</span>=<span className="or">"viewport"</span> <span className="lbl">content</span>=<span className="or">"width=device-width, initial-scale=1.0"</span>&gt;</p>
                  <p>&lt;<span className="bl">link</span> <span className="lbl">rel</span>=<span className="or">"stylesheet"</span> <span className="lbl">href</span>=<span className="or">"styles.css"</span>&gt;</p>

                  <p>  &lt;<span className="bl">title</span>&gt;<span className="wh">Document</span>&lt;/<span className="bl">title</span>&gt;</p>
                </div>

                <p> &lt;/<span className="bl">head</span>&gt;</p>
                <div className="spacer10px"></div>
                <p>&lt;<span className="bl">body</span>&gt;</p>
                <p>  &lt;/<span className="bl">body</span>&gt; </p>
                <div className="spacer10px"></div>

                <div className="indent20px">  </div>
                <p> &lt;/<span className="bl">html</span>&gt; </p>
              </div>
            </div>

            <div className='main_text'>
              <p>
                Pay attention: which words in this code come twice? And why do you think  they come two times?
              </p>
            </div>

            <div>
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
            </div>



            <div className='decor_line decor_line2'>
              <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
            </div>

            <div className='main_text'>
              <p>
                By the way, during this course, I will be directing you to different youtube videos. Of course, I could create them myself, but these guys already have done very good job.
              </p>
              <p>
                You may have the temptation then to spend all of your time with these youtubers, which is of course fine with me, but if you stay connected to this course, it actually has a systematic approach and guides you step by step.
              </p>
            </div>


            <div className="lessons">
              <p>Lesson 1</p>
            </div>

            <div className='main_text'>
              <p>
                Scared? Do not worry, it is not as scary as it looks 😀. It is my intention to help you to get used to HTML language.
              </p>
              <p>Let us start from top to bottom:</p>

              <h3 className='red'>1. &lt;html&gt; tag</h3>

              <p></p>
              <p>The first thing to remember is that   HTML pages are wrapped entirely by html tag (it is also called "html element", ignore for now the first line with !DOCTYPE):   </p>
            </div>

            <div>
              <p className="vitalic">Illustration 3:</p>
            </div>

            <div className='coded_div'>
              <div>
                <p> &lt;!<span className='bl'>DOCTYPE</span> <span className="lbl">html&gt;</span> </p>
                <div>
                  <p>
                    &lt;<span className="bl">html</span> <span className="lbl">lang</span>=<span className="or">"en"</span>&gt;
                  </p>
                </div>

                <div className="spacer40px"></div>
                <div>
                  <p className='indent20px green'>
                  /* ALL OTHER CODES */
                  </p>
                </div>
                <div className="spacer40px"></div>
                <div className="indent40px">  </div>
                <div>
                  <p> &lt;/<span className="bl">html</span>&gt; </p>
                </div>
              </div>
            </div>

            <div className='main_text'>
              <p>
                What do I mean when I say "element"?  In the language of browsers, 'elements' or "tags" usually come in two places: at the beginning of a block and at the end.
              </p>
              <p>
                At the beginning of the block it looks like this: <span className="blue"> &lt;<span className="bl">html</span>&gt; </span>
              </p>

              <p>
                At the end of the block it has <span className="blue">'/'</span> character in it:  <span className="blue"> &lt;/<span className="bl">html</span>&gt; </span>
              </p>

              <p>One marks where the block starts, and the other one -- where it finishes. Go above and have a look at the illustration 2: where are the html elements located? </p>

              <p>
                Now, the html tag has two main sections in it: head tag, and body tag.
              </p>
            </div>


            <h3 className='red'>
              2. &lt;head&gt; tag
            </h3>

            <div className='main_text'>
              <p>
                Let us not talk much about what it has and what it does. You only need to know 1 thing for now: the <span className="blue"> &lt;link&gt;</span> tag. It connects your html page with your css file, which we will learn  later.
              </p>
              <p>
                You do not see the things written inside head element on the browser. All you see is what you place inside of <span className="red">body</span> element.
              </p>
            </div>

            <h3 className='red'>
              3. &lt;body&gt; tag
            </h3>

            <div className='main_text'>
              <p>
                This is where you do your editing. Let us add something here, inside body tag:
              </p>
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
                  <p>  &lt;<span className="bl">meta</span> <span className="lbl">name</span>=<span className="or">"viewport"</span> <span className="lbl">content</span>=<span className="or">"width=device-width, initial-scale=1.0"</span>&gt;</p>
                  <p>&lt;<span className="bl">link</span> <span className="lbl">rel</span>=<span className="or">"stylesheet"</span> <span className="lbl">href</span>=<span className="or">"styles.css"</span>&gt;</p>

                  <p>  &lt;<span className="bl">title</span>&gt;<span className="wh">Document</span>&lt;/<span className="bl">title</span>&gt;</p>
                </div>

                <p> &lt;/<span className="bl">head</span>&gt;</p>
                <div className="spacer10px"></div>
                <p>&lt;<span className="bl">body</span>&gt;</p>

                <div className="indent20px">
                  <p> &lt;<span className="bl">h1</span>&gt; <span className="wh">This is h1 tag </span> &lt;/<span className="bl">h1</span>&gt;</p>
                </div>

                <p>  &lt;/<span className="bl">body</span>&gt; </p>
                <div className="spacer10px"></div>

                <div className="indent20px">  </div>
                <p> &lt;/<span className="bl">html</span>&gt; </p>
              </div>
            </div>

            <div className='main_text'>
              <p>
                If you look at this web page on the browser, you will see the following:
              </p>
            </div>

            <div className='onBrowser'>
              <h1> This is h1 tag </h1>
            </div>

            <h3 className='red'>
              4. &lt;h1&gt; tag
            </h3>

            <div className='main_text'>
              <p>
                What does "h" mean here? I just asked ChatGPT about it, it gave this answer: <span className="green bold">
                  In HTML,  &lt;<span className="bl">h1</span>&gt; is a tag used to define a top-level heading in a document. It stands for "heading level 1".
                </span>
              </p>
              <p>
                This means, you can use this tag to give styling for your headings. Nice. Now let us add another HTML element, h2:
              </p>
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
                  <p>  &lt;<span className="bl">meta</span> <span className="lbl">name</span>=<span className="or">"viewport"</span> <span className="lbl">content</span>=<span className="or">"width=device-width, initial-scale=1.0"</span>&gt;</p>
                  <p>&lt;<span className="bl">link</span> <span className="lbl">rel</span>=<span className="or">"stylesheet"</span> <span className="lbl">href</span>=<span className="or">"styles.css"</span>&gt;</p>

                  <p>  &lt;<span className="bl">title</span>&gt;<span className="wh">Document</span>&lt;/<span className="bl">title</span>&gt;</p>
                </div>

                <p> &lt;/<span className="bl">head</span>&gt;</p>
                <div className="spacer10px"></div>
                <p>&lt;<span className="bl">body</span>&gt;</p>

                <div className="indent20px">
                  <p> &lt;<span className="bl">h1</span>&gt; <span className="wh">This is h1 tag </span> &lt;/<span className="bl">h1</span>&gt;</p>
                </div>

                <div className="indent20px">
                  <p> &lt;<span className="bl">h2</span>&gt; <span className="wh">This is h2 tag </span> &lt;/<span className="bl">h2</span>&gt;</p>
                </div>

                <p>  &lt;/<span className="bl">body</span>&gt; </p>
                <div className="spacer10px"></div>

                <div className="indent20px">  </div>
                <p> &lt;/<span className="bl">html</span>&gt; </p>
              </div>
            </div>

            <div className='main_text'>
              <p>
                And on your browser, it looks like this:
              </p>
            </div>


            <div className='onBrowser'>
              <h1> This is h1 tag </h1>
              <h2> This is h2 tag </h2>
            </div>

            <div className='main_text'>
              <p>
                "Oh my gosh, -- you coud say, -- How many h tags are there?"
              </p>
              <p>
                Well, there are six heading tags in HTML:
              </p>

              <div className='onBrowser'>
                <h1>
                  &lt;<span className="bl">h1</span>&gt; - <span className='hide_VERY_sm_screen'>Heading</span>  level 1  <span className='hide_VERY_sm_screen'>(highest level)</span>
                </h1>
                <h2>
                  &lt;<span className="bl">h2</span>&gt; - <span className='hide_VERY_sm_screen'>Heading</span>    level 2
                </h2>
                <h3>
                  &lt;<span className="bl">h3</span>&gt; - <span className='hide_VERY_sm_screen'>Heading</span>  level 3
                </h3>
                <h4>
                  &lt;<span className="bl">h4</span>&gt; - <span className='hide_VERY_sm_screen'>Heading</span>  level 4
                </h4>
                <h5>
                  &lt;<span className="bl">h5</span>&gt; - <span className='hide_VERY_sm_screen'>Heading</span>  level 5
                </h5>
                <h6>
                  &lt;<span className="bl">h6</span>&gt; - <span className='hide_VERY_sm_screen'>Heading</span>  level 6 <span className='hide_VERY_sm_screen'>(lowest level)</span>
                </h6>
              </div>

              <p></p>
              <p>The good news is that you do not have to know or use all of them. I myself use only 3 of them and that is okay.</p>

              <h3 className='red'>
                5. &lt;p&gt; tag
              </h3>
              <p></p>
              <p>
                Another HTML tag which is commonly used, is  &lt;<span className="bl">p</span>&gt; element. It stands for "paragraph". I will add there also some emojis: you can copy them elsewhere and then paste here.
              </p>
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
                  <p>  &lt;<span className="bl">meta</span> <span className="lbl">name</span>=<span className="or">"viewport"</span> <span className="lbl">content</span>=<span className="or">"width=device-width, initial-scale=1.0"</span>&gt;</p>
                  <p>&lt;<span className="bl">link</span> <span className="lbl">rel</span>=<span className="or">"stylesheet"</span> <span className="lbl">href</span>=<span className="or">"styles.css"</span>&gt;</p>

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
                And on the browser, it looks like this:
              </p>
            </div>

            <div className='onBrowser'>
              <h1> Breaking News </h1>

              <p> President of Turkmenistan unveils startling announcement - nation transforms into democratic wonderland overnight! 🇺🇿✨ </p>
            </div>


            <div className='main_text'>
              <p>
                Now I want you to produce an html page yourself. How can you do it?
              </p>
              <p>
                Create a text file and name it "index.html". How, you may ask. Well, if you are using Windows, open notepad and type there HTML code. Save it. Make sure to give it the extention name ".html".
              </p>
              <p>
                If you are using MacOS, open textEdit program, and do the same. When saving, choose the option "Web Page (.html)" on the bottom.

                Close the file. And then open it with your browser -- usually double click is enough. Congratulations, you just wrote your first website!</p>
              <p>
                If you want to learn more about basic HTML elements, I suggest you to watch the following video:
              </p>
              <p>
                Now pay attention: when you change your HTML codes while your browser displaying it, you won't see the changes immediately. No, not even after saving it. You have to refresh your browser for it.
              </p>
              <p>
                "But," you could say, "I do not want to refresh my browser EVERY TIME when I make changes!"
              </p>
              <p>I understand. I also hate it. Then maybe you should consider using Visual Studio Code. It is free of charge, and every time you make changes and save it, it refreshes your browser automatically.</p>

              <p>But how can you install it? Well, there are plenty youtube videos teaching it. If you need help with it, watch the video below.</p>

              <p>In this video Nader is explaning how to install Visual Studio Code on your computer. He is also recommending to install Node.js, and that is good, because our next computer course will cover Node.js. Nader is one of the best teachers in internet, when it comes to JavaScript and DOM manipulations. I have high respect for him.
              </p>
              <p>
                If you do not need VSC OR if you do not want to install Node.js, skip this video.
              </p>
            </div>

            <div className="videos_container_container">
              <div className="video_container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/FPmgQsXMPqI?si=a6o0CchJJGGhm_0Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div>

            <div className='decor_line' style={{ margin: '70px 0px' }}>
              <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
            </div>

            <div className='main_text'>
              <p>
                Now, after installing Visual Studio Code, you must install at least one important extention and it is called: Live Server. This vdeo explains how to do it, including the VSC installation:
              </p>
            </div>


            <div className="videos_container_container">
              <div className="video_container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fWzp5lZ5CEA?si=4SF1D2KOw5HyfaOI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div>

            <div className='decor_line' style={{ margin: '70px 0px' }}>
              <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
            </div>

            <div className='main_text'>
              <p>
                Now, I hope you are ready to come back to our course, to learn HTML language deeper. Remember, we are going to make progress step by step. And here, this young woman's video is very helpful. Unfortunately I could not find her own youtube channel, maybe she does not have one, but she is covering the subject very well for the beginners.
              </p>
            </div>

            <div className="videos_container_container">
              <div className="video_container">
                <iframe src="https://www.youtube.com/embed/PlxWf493en4?si=4pDCOI13qXmS_ZPX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div>

            <div className='main_text'>
              <p>
                I hope you enjoyed the last video. Now you know how to implement several other html tags. It is very important that you practice coding with your own hand. Some people call it muscle-memory. Please watch the video again, pause when you need, and type those elements in your own html file.
              </p>
              <p>
                Do not rush. Type codes with your own hands, do not copy-paste! People who do not listen to this advise usually quit at some point. If it was not so important, I would not emphacise it so much!
              </p>
              <p>Check often how it looks. This way you will master HTML language. </p>

              <p>I am proud of you, you are doing very well!</p>

              <p>So far the texts we have produced are not very pretty. In the next lesson we learn how to give styles to them. </p>
            </div>

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
                    <p>Lesson 1</p>
                  </div>
                </div>

                <div style={{ marginRight: '0px' }}
                  onClick={() => navigate('/html-css-course/html-lesson-two')}
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

export default HtmLOne;
