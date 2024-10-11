import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './kevinNavigation.css';

import homeImage from '../../images/home1.png';
import intro from '../../images/countdown.png';
import buddha from '../../images/buddha.png';
import noImage from '../../images/krutit.png';

import bhagavadGita from '../../images/bhagavadGita.png';
import laoTzu from '../../images/laoTzu.jpeg';
import Musa from '../../images/openBook.png';
import Jesus from '../../images/dove.png';
import Muhammad from '../../images/Muhammad.jpg';
import conclusion from '../../images/conclusion.png';

import big_images from '../../images/kevinMainPage.jpeg';


const kevinsData = [
  {
    id: 0,
    chapterName: 'Kevin`s Home Page',
    path: '/creativity-course-from-religious-heritages/home-for-art',
    image: homeImage,
    subChapters: [
      {
        id: 0,
        subItemText: 'Lecture video',
        path: 'https://www.youtube.com/embed/cT4dowOg14k?si=jaWC8hEq2MWBDzJ4',
        isExternal: true,
      },
    ]
  },
  {
    id: 1,
    chapterName: 'Introduction',
    path: '/creativity-course-from-religious-heritages/introduction-to-the-course',
    image: intro,
    masteredPercentage: 28,
    subChapters: [
      {
        id: 11,
        subItemText: 'Lecture video',
        path: 'https://www.youtube.com/embed/cT4dowOg14k?si=jaWC8hEq2MWBDzJ4',
        isExternal: true,
      },
      {
        id: 12,
        subItemText: 'Assignment',
        path: '/creativity-course-from-religious-heritages/introduction-to-the-course',
        isExternal: false,
      },

    ],
  },
  {
    id: 2,
    chapterName: 'Wisdom from Moses for Artists',
    path: '/creativity-course-from-religious-heritages/wisdom-from-moses',
    image: Musa,
    masteredPercentage: 25,
    subChapters: [
      {
        id: 21,
        subItemText: 'Episode 1: Lecture video',
        path: 'https://www.youtube.com/embed/cT4dowOg14k?si=jaWC8hEq2MWBDzJ4',
        isExternal: true,
      },
      {
        id: 22,
        subItemText: 'Episode 2: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 23,
        subItemText: 'Episode 3: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 24,
        subItemText: 'Episode 4: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 25,
        subItemText: 'Episode 5: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 26,
        subItemText: 'Episode 6: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 27,
        subItemText: 'Episode 7: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 28,
        subItemText: 'Sharing of Assignments',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },

    ],
  },
  {
    id: 3,
    chapterName: 'Wisdom from Bhagavad Gita for Artists ',
    path: '/creativity-course-from-religious-heritages/wisdom-from-bhagavad-gita',
    image: bhagavadGita,
    masteredPercentage: 0,
    subChapters: [
      {
        id: 31,
        subItemText: 'Episode 1: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 32,
        subItemText: 'Episode 2: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 33,
        subItemText: 'Episode 3: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 34,
        subItemText: 'Episode 4: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 35,
        subItemText: 'Episode 5: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 36,
        subItemText: 'Episode 6: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 37,
        subItemText: 'Episode 7: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 38,
        subItemText: 'Sharing of Assignments',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },

    ],
  },
  {
    id: 4,
    chapterName: 'Wisdom from Buddha for Artists ',
    path: '/creativity-course-from-religious-heritages/wisdom-from-buddha',

    image: buddha,
    masteredPercentage: 0,
    subChapters: [
      {
        id: 41,
        subItemText: 'Episode 1: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 42,
        subItemText: 'Episode 2: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 43,
        subItemText: 'Episode 3: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 44,
        subItemText: 'Episode 4: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 45,
        subItemText: 'Episode 5: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 46,
        subItemText: 'Episode 6: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 47,
        subItemText: 'Episode 7: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 48,
        subItemText: 'Sharing of Assignments',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },

    ],
  },
  {
    id: 5,
    chapterName: 'Wisdom from Lao Tzu for Artists ',
    path: '/creativity-course-from-religious-heritages/wisdom-from-lao-tzu',
    image: laoTzu,
    masteredPercentage: 0,
    subChapters: [
      {
        id: 51,
        subItemText: 'Episode 1: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 52,
        subItemText: 'Episode 2: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 53,
        subItemText: 'Episode 3: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 54,
        subItemText: 'Episode 4: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 55,
        subItemText: 'Episode 5: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 56,
        subItemText: 'Episode 6: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 57,
        subItemText: 'Episode 7: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 58,
        subItemText: 'Sharing of Assignments',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },

    ],
  },

  {
    id: 6,
    chapterName: 'Wisdom from Jesus for Artists ',
    path: '/creativity-course-from-religious-heritages/wisdom-from-jesus',
    image: Jesus,
    masteredPercentage: 0,
    subChapters: [
      {
        id: 61,
        subItemText: 'Episode 1: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 62,
        subItemText: 'Episode 2: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 63,
        subItemText: 'Episode 3: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 64,
        subItemText: 'Episode 4: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 65,
        subItemText: 'Episode 5: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 66,
        subItemText: 'Episode 6: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 67,
        subItemText: 'Episode 7: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 68,
        subItemText: 'Sharing of Assignments',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },

    ],
  },
  {
    id: 7,
    chapterName: 'Wisdom from Muhammad for Artists ',
    path: '/creativity-course-from-religious-heritages/wisdom-from-muhammad-saw',
    image: Muhammad,
    masteredPercentage: 0,
    subChapters: [
      {
        id: 71,
        subItemText: 'Episode 1: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 72,
        subItemText: 'Episode 2: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 73,
        subItemText: 'Episode 3: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 74,
        subItemText: 'Episode 4: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 75,
        subItemText: 'Episode 5: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 76,
        subItemText: 'Episode 6: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 77,
        subItemText: 'Episode 7: Lecture video',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },
      {
        id: 78,
        subItemText: 'Sharing of Assignments',
        // path: '/creativity-course-from-religious-heritages/noah-covenant',
      },

    ],
  },
  {
    id: 8,
    chapterName: 'Conclusion',
    path: '/creativity-course-from-religious-heritages/conclusion',

    image: conclusion,
    masteredPercentage: 0,
    subChapters: [
      {
        id: 81,
        subItemText: 'Sharing final assignments',
        // path: '/creativity-course-from-religious-heritages/who-am-I',
      },
    ],
  },
];

const exodusData = [

];

const inPromisedLandData = [

];

const QisasNavigation = () => {

  const navigate = useNavigate();
  const [visibleItems, setVisibleItems] = useState([]);
  const [selectedData, setSelectedData] = useState(kevinsData);

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
              Resources for Creativity from the Great Religious Heritages
            </p>
            <p className='course_name'>
              <span>  (by Kevin Caldwell) </span>
            </p>
          </div>

          <div className="course_item_contain">

            {selectedData.map((chapter) => (
              <div className="course_item" key={chapter.id}>
                <div className="chapter" onClick={() => navigate(chapter.path)}>
                  <div className="chapter_image_name">
                    <div className="round_div" style={{ padding: '7px' }}>
                      <img src={chapter.image} alt="" />
                    </div>
                    <div>
                      <p>{chapter.chapterName}</p>
                      {chapter.masteredPercentage !== undefined ? (
                        <p className="mastered">{`${chapter.masteredPercentage}% mastered`}</p>
                      ) : (
                        <p className="mastered">Welcome to my homepage</p>
                      )}
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

export default QisasNavigation;
