import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './qisasNavigation.css';

import Adam from '../../images/adam.svg';
import Noah from '../../images/noah.svg';
import Ibrohim from '../../images/Ibrahim.svg';
import Ishaq from '../../images/ishaq.svg';
import Ismoil from '../../images/Ismoil.jpeg';
import Yusuf from '../../images/Yusuf.svg';
import Jacob from '../../images/Jacob.svg';
import Musa from '../../images/Moses.svg';
import ShariaRevealed from '../../images/ShariaAhd.svg';
import big_images from '../../images/Creation.jpeg';


const genesisData = [
  {
    id: 1,
    chapterName: '1-боб: Одам алайҳис-салом қиссаси: жаннатдаги ҳаёт',
    path: '/qisas-uzbek/adam',
    image: Adam,
    masteredPercentage: 18,
    subChapters: [
      {
        id: 11,
        subItemText: '2-боб: Дунёнинг яратилиши ҳақида баён',
        path: '/qisas-uzbek/creation-of-world',
      },
      {
        id: 12,
        subItemText: '3-боб: Одам (а.с.) ва Момо Ҳавонинг жаннатдан ҳайдалиши',
        path: '/qisas-uzbek/the-fall',
      },
      {
        id: 13, subItemText: '4-боб: Қобил билан Ҳобил ҳикояси',
        path: '/qisas-uzbek/kain-abel',
      },
    ],
  },
  {
    id: 2,
    chapterName: '5-боб: Нуҳ (а.с.) қиссаси: Ер юзини тўфон босиши',
    path: '/qisas-uzbek/noah',
    image: Noah,
    masteredPercentage: 25,
    subChapters: [
      {
        id: 21,
        subItemText: '6-боб: Нуҳ алайҳис-салом билан боғланган Аҳд',
        path: '/qisas-uzbek/noah-covenant',
      },

    ],
  },
  {
    id: 3,
    chapterName: '7-боб: Иброҳим халилуллоҳ қиссаси',
    path: '/qisas-uzbek/abrahamic-story',
    image: Ibrohim,
    masteredPercentage: 0,
    subChapters: [
      {
        id: 31,
        subItemText: '8-боб: Барака ҳақидаги ваъда',
        path: '/qisas-uzbek/abrahamic-covenant',

      },
      {
        id: 32,
        subItemText: '9-боб: Аҳднинг тасдиқланиши',
        path: '/qisas-uzbek/covenant_confirmation',
      },
      {
        id: 33,
        subItemText: '10-боб: Ҳожар Бибининг ҳикояси, Исмоил (а.с.) нинг таваллуди',
        path: '/qisas-uzbek/mother-agar',
      },
      {
        id: 34,
        subItemText: '11-боб: Иброҳим (а.с.) Аҳдининг аломати',
        path: '/qisas-uzbek/covenant-sign',
      },
      {
        id: 35,
        subItemText: '12-боб: Садўм ва Ғамўра ҳикояси',
        path: '/qisas-uzbek/sadom-gamorra',
      },
    ],
  },
  {
    id: 4,
    chapterName: '13-боб: Исмоил алайҳис-салом қиссаси',
    path: '/qisas-uzbek/ishmael',

    image: Ismoil,
    masteredPercentage: 0,
    subChapters: [
      {
        id: 41,
        subItemText: '14-боб: Аҳднинг яна бир бор синалиши',
        path: '/qisas-uzbek/zabihullah',
      },
    ],
  },
  {
    id: 5,
    chapterName: '15-боб: Исҳоқ алайҳис-салом қиссаси',
    path: '/qisas-uzbek/isaak',
    image: Ishaq,
    masteredPercentage: 0,
    subChapters: [
      {
        id: 51,
        subItemText: '16-боб: Эгизаклар туғилиши',
        path: '/qisas-uzbek/isaaks-twins',
      },
      {
        id: 52,
        subItemText: '17-боб: Яъқуб (а.с.) нинг отасидан барака олгани',
        path: '/qisas-uzbek/jacob-steals-blessing',
      },
    ],
  },

  {
    id: 6,
    chapterName: '18-боб: Яқуб алайҳис-салом қиссаси',
    path: '/qisas-uzbek/jacob',
    image: Jacob,
    masteredPercentage: 0,
    subChapters: [
      {
        id: 61,
        subItemText: '19-боб: Яқуб алайҳис-саломнинг уйланиш тарихи',
        path: '/qisas-uzbek/marrying-two-daughters',
      },
      {
        id: 62,
        subItemText: '20-боб: Яъқуб (а.с.) нинг Канъонга қайтиши',
        path: '/qisas-uzbek/return-to-kanaan',
      },
      {
        id: 63,
        subItemText: '21-боб: Фаришта билан олишув',
        path: '/qisas-uzbek/fight-with-angel',
      },
    ],
  },
  {
    id: 7,
    chapterName: '22-боб: Юсуф алайҳис-салом қиссаси',
    path: '/qisas-uzbek/joseph',
    image: Yusuf,
    masteredPercentage: 0,
    subChapters: [
      {
        id: 71,
        subItemText: '23-боб: Тушлар боби',
        path: '/qisas-uzbek/dreams-chapter',
      },
      {
        id: 72,
        subItemText: '24-боб: Акалари билан учрашув',
        path: '/qisas-uzbek/meeting-with-brothers',
      },
      {
        id: 73,
        subItemText: '25-боб: Фиръавннинг таклифи',
        path: '/qisas-uzbek/pharaoh-invites-jacobs-family',
      },
      {
        id: 74,
        subItemText: '26-боб: Яъқуб (а.с.) нинг башорати',
        path: '/qisas-uzbek/prophecy-of-jacob',
      },
    ],
  },
  {
    id: 8,
    chapterName: '27-боб: Мусо пайғамбар қиссаси',
    path: '/qisas-uzbek/musa',

    image: Musa,
    masteredPercentage: 0,
    subChapters: [
      {
        id: 81,
        subItemText: '28-боб: «Мен кимман?»',
        path: '/qisas-uzbek/who-am-I',
      },
      {
        id: 82,
        subItemText: '29-боб: Мусо (а.с.) га берилган учта мўъжиза',
        path: '/qisas-uzbek/three-miracles-of-Moses',
      },
      {
        id: 83,
        subItemText: '30-боб: Миср устига ёғилган офатлар',
        path: '/qisas-uzbek/Egypt-plagues',
      },
      {
        id: 84,
        subItemText: '31-боб: Қурбонлик байрами, Мисрни тарк этиш',
        path: '/qisas-uzbek/death-of-firstborn',
      },
      {
        id: 85,
        subItemText: '32-боб: Бани Исроилнинг саҳродаги саргузашти',
        path: '/qisas-uzbek/adventures-in-desert',
      },
    ],
  },

  {
    id: 9,
    chapterName: '33-боб: Шариат Аҳдининг нозил бўлиши',
    path: '/qisas-uzbek/shariah_revealed',
    image: ShariaRevealed,
    masteredPercentage: 0,
    subChapters: [
      {
        id: 91,
        subItemText: '34-боб: Шариат ҳукмларидан намуналар',
        path: '/qisas-uzbek/examples-of-shariah',
      },
      {
        id: 92,
        subItemText: '35-боб: Бани Исроил шариат Аҳдини қабуллайди',
        path: '/qisas-uzbek/bani-israel-accepted-shariah',
      },
      {
        id: 93,
        subItemText: '36-боб: Чодирда нозил бўлган амрлар',
        path: '/qisas-uzbek/more-shariah-laws',
      },
      {
        id: 94,
        subItemText: '37-боб: Бани Исроилнинг 40 йил саҳро кезгани',
        path: '/qisas-uzbek/fourty-years-in-the-desert',
      },
      {
        id: 95,
        subItemText: '38-боб: Мусо (а.с.) нинг васияти',
        path: '/qisas-uzbek/wasiya-of-Moses',
      },
    ],
  },

];

const exodusData = [
];


const QisasNavigation = () => {

  const navigate = useNavigate();
  const [visibleItems, setVisibleItems] = useState([]);
  const [selectedData, setSelectedData] = useState(genesisData);

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

  const handleDataSelection = (data) => {
    setSelectedData(data);
    setVisibleItems([]);
  };

  return (
    <div className="minister-home resources home_qisas">
      <div className="separate_into_two_columns">

        <main className="sep_part1">
          <div className="collections_of_books">
            <div className='books_container'>
              <button
                className={`genesis ${selectedData === genesisData ? 'selected_collection' : ''}`}
                onClick={() => handleDataSelection(genesisData)}>
              Шариа
              </button>
              <button
                className={`exodus ${selectedData === exodusData ? 'selected_collection' : ''}`}
                onClick={() => handleDataSelection(exodusData)}>
                Заминда
              </button>
            </div>
            <button onClick={toggleAllVisibility}>Expand All</button>
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
                      <div
                        className="sub_chapter"
                        key={subChapter.id}
                        onClick={() => navigate(subChapter.path)}
                      >
                        <div className="sub_item_text">
                          <p>{subChapter.subItemText}</p>
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
            <h2>Саволлар:</h2>
            <div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ullam perferendis incidunt exercitationem quos, quo a nemo dolore animi ipsam dignissimos iste. Aspernatur, quia, cupiditate nostrum enim neque nemo expedita eum illo eligendi amet, aliquam numquam a quisquam dolorum quo sint eveniet dolores quidem error.</p>
            </div>
          </div>

          <div className="bigger_image">
            <img src={big_images} alt="" />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default QisasNavigation;
