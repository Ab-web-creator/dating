import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ictNavigation.css';

import big_images from '../../images/kevinMainPage.jpeg';
import intro from '../../images/countdown.png';
import css from '../../images/htmlicon2.png';


const ictNavData = [
  {
    id: 1,
    chapterName: 'HTML. Lesson 1: HTML elements',
    path: '/html-css-course/html-lesson-one',
    image: intro,
    masteredPercentage: 28,
    subChapters: [
      {
        id: 11,
        subItemText: 'Lecture video',
        // path: 'https://www.youtube.com/embed/cT4dowOg14k?si=jaWC8hEq2MWBDzJ4',
        // isExternal: true,
      },
      {
        id: 12,
        subItemText: 'Assignment',
        // path: '/creativity-course-from-religious-heritages/introduction-to-the-course',
        // isExternal: false,
      },

    ],
  },
  {
    id: 2,
    chapterName: 'HTML. Lesson 2: Adding CSS',
    path: '/html-css-course/html-lesson-two',
    image: css,
    masteredPercentage: 28,
    subChapters: [
      {
        id: 11,
        subItemText: 'Lecture video',
        // path: 'https://www.youtube.com/embed/cT4dowOg14k?si=jaWC8hEq2MWBDzJ4',
        // isExternal: true,
      },
      {
        id: 12,
        subItemText: 'Assignment',
        // path: '/creativity-course-from-religious-heritages/introduction-to-the-course',
        // isExternal: false,
      },

    ],
  },
]

const IctNavigation = () => {

  const navigate = useNavigate();
  const [visibleItems, setVisibleItems] = useState([]);
  const [selectedData, setSelectedData] = useState(ictNavData);

  const toggleVisibility = (chapterId) => {
    setVisibleItems((prevVisibleItems) =>
      prevVisibleItems.includes(chapterId)
        ? prevVisibleItems.filter((id) => id !== chapterId)
        : [...prevVisibleItems, chapterId]
    );
  };

  const toggleAllVisibility = () => {
    setVisibleItems((prevVisibleItems) =>
      prevVisibleItems.length === selectedData.length
        ? []
        : selectedData.map((chapter) => chapter.id)
    );
  };

  return (
    <div className="minister-home kevins_navigation">
      <div className="separate_into_two_columns">
        <main className="sep_part1">

          <div className='resources_for_creativity'
            onClick={toggleAllVisibility}>
            <p className='course_name'>
              HTML, CSS     and JavaScript       </p>
            <p className='course_name'> <span> IDE: Visual Studio  </span> </p>
          </div>

          <div className="course_item_contain">

            {selectedData.map((chapter) => (
              <div className="course_item" key={chapter.id}>
                <div className="chapter" onClick={() => navigate(chapter.path)}>
                  <div className="chapter_image_name">
                    <div className="round_div">
                      <img src={chapter.image} alt="" />
                    </div>
                    <div>
                      <p>{chapter.chapterName}</p>
                      <p className="mastered">{`${chapter.masteredPercentage}% mastered`}</p>
                    </div>
                  </div>
                  <button
                    className="plus_button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleVisibility(chapter.id);
                    }}
                  >
                    <p> &#8226; &#8226; &#8226; </p>
                  </button>
                </div>
                {(visibleItems.includes(chapter.id) || visibleItems.length === selectedData.length) && (
                  <div className="sub_item">
                    {chapter.subChapters.map((subChapter) => (
                      <div className="sub_chapter" key={subChapter.id}>
                        <div className="sub_item_text">
                          <p>
                            <span className='bullet_point'>o</span>
                            {subChapter.isExternal ? (
                              <a href={subChapter.path} target="_blank" rel="noopener noreferrer">{subChapter.subItemText}</a>
                            ) : (
                              <span onClick={() => navigate(subChapter.path)} style={{ cursor: 'pointer' }}>{subChapter.subItemText}</span>
                            )}
                          </p>
                        </div>
                      </div>
                    ))}

                  </div>
                )}
              </div>
            ))}
          </div>
         
        </main>

        <aside>
          <div className='right_wing_stuff'>
            <h2>Round Table meeting:</h2>
            <div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ullam perferendis incidunt exercitationem quos, quo a nemo dolore animi ipsam dignissimos iste. Aspernatur, quia, cupiditate nostrum enim neque nemo expedita eum illo eligendi amet, aliquam numquam a quisquam dolorum quo sint eveniet dolores quidem error.</p>
            </div>
          </div>

          <div className="bigger_image">
            <img src={big_images} alt="" />
          </div>



          <div className='right_wing_stuff'>
            <h2>Information about ...:</h2>
            <div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ullam perferendis incidunt exercitationem quos, quo a nemo dolore animi ipsam dignissimos iste. Aspernatur, quia, cupiditate nostrum enim neque nemo expedita eum illo eligendi amet, aliquam numquam a quisquam dolorum quo sint eveniet dolores quidem error.</p>
            </div>
          </div>
        </aside>
      </div>
    </div >
  );
};

export default IctNavigation;
