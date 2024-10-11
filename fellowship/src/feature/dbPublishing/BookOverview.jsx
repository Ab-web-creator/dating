import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';

import '../uzbTavrotPlus/qisasNavigation.css';
import './bookOverview.css';
import kamar from '../../images/kamar.png'
import hamburger from '../../images/hamburger.png';
import post_something from '../../images/post_new.png';
import Search from '../../components/Search'
import PostCreate from '../posts/components/PostCreate'
import { useTranslation } from 'react-i18next';

const BookOverview = () => {
  const { t } = useTranslation();
  const { auth } = useAuth()
  const axiosPrivate = useAxiosPrivate()
  const params = useParams()
  const navigate = useNavigate()

  const [currentBookSection, setCurrentBookSection] = useState({})
  const [bookSections, setBookSections] = useState([])
  const [bookChapters, setBookChapters] = useState([])


  useEffect(() => {
    const fetchBookSections = async () => {
      const { data } = await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/books/get-sections/${params.id}`)

      // structure of bookSections [{_id: "123", title: "html", uploadedBy: "authorId", sections: [{_id: "123", title: "title"}]}]
      setBookSections(data)
      setCurrentBookSection(data[0].sections[0])
      setSelectedData(data[0].sections[0])
    }
    fetchBookSections()
  }, [])

  const fetchSectionChapters = async () => {
    const { data } = await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/books/get-chapters/${currentBookSection._id}`)
    setBookChapters(data)
  }

  useEffect(() => {
    if (currentBookSection._id) {
      fetchSectionChapters()
    }
  }, [currentBookSection])


  const [visibleItems, setVisibleItems] = useState([]);
  const [selectedData, setSelectedData] = useState([]); 

  const handleSectionClick = (section) => {
    setCurrentBookSection(section)
    console.log(t('BookOverview.Selected'), section); // Add this line
    setSelectedData(section) 
  }


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

  const [isPostCreateOpen, setPostCreateOpen] = useState(false)
  const [search, setSearch] = useState('')

  return (
    <div className="minister-home resources home_qisas qisasWithDB">

      <div className='qisas_navbar'>
        <div className='left_corner_div'  >
          <div className='go_main_menu' title= {t('BookOverview.GoMainMenu')} 
            onClick={() => navigate('/Home')}>
            {/* <img src={small_logo} alt="" /> */}
            ←
          </div>
          <div className='div_with_h1'>
            <h1 title= {t('BookOverview.GoOneStepBack')} onClick={() => navigate(-1)} >
              {bookSections[0]?.title}
            </h1>
          </div>
        </div>

        <div className='qisas_network_icons_topbar' onClick={(e) => {
          e.stopPropagation();
        }} >
          <button
            className="post_button_with_img"
            title={t('BookOverview.CreatePublishPostButton')}
            onClick={() => {
              setPostCreateOpen(true)
            }}
          >
            <img src={post_something} alt="" />
          </button>

          <button className='post_button_with_img'
            style={{ padding: '7px' }}
            title= {t('BookOverview.MenuOnlyThisBook')}
          >
            <img src={hamburger} alt="" />
          </button>
        </div>
        {isPostCreateOpen && <PostCreate setPostCreateOpen={setPostCreateOpen} />}
        <Search setSearch={setSearch} />
      </div>

      <div className="separate_into_two_columns">
        <main className="sep_part1">
          <div className="collections_of_books">
            <div className='books_container'>
              {bookSections[0]?.sections?.map((section) => {
                const isSelected = selectedData?._id === section._id;
                const buttonClass = isSelected ? 'title_of_chapter selected' : 'title_of_chapter';
                return (
                   <button   key={section._id} className={buttonClass}>
                    <p style={{ fontSize: '10px' }}
                      onClick={() => handleSectionClick(section)}  
                    >{section.title} </p>
                  </button>
                )
              })}
              <div style={{marginBottom: '20px'}}></div>
            </div>
            {/* <button
              onClick={toggleAllVisibility}
            >Expand All
            </button> */}
          </div>
          <div className="course_item_contain">
            {bookChapters?.map((chapter) => {
              return (
                <div className="course_item"
                  key={chapter._id}
                  onClick={() => navigate(`/resources/book/page/${chapter._id}`)}
                >
                  {chapter.isMainChapter === true ? (<div className="chapter">
                    <div className="chapter_image_name">
                      <div className="round_div">
                        {chapter.chapterImage ? <img src={chapter.chapterImage} alt="" /> : <img src={kamar} alt="" />}
                      </div>

                      <div style={{margin: 'auto'}}>
                        <p>{chapter.title}</p>
                        {/* <p className="mastered">{`${chapter.masteredPercentage}% mastered`}</p> */}
                      </div>
                    </div>
                    {/* <button
                      className="plus_button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleVisibility(chapter.id);
                      }}
                    >
                      <p> &#8226; &#8226; &#8226; </p>
                    </button> */}
                  </div>) : (
                    <div className="sub_item">
                      {/* {chapter?.subChapters?.map((subChapter) => ( */}
                      <div
                        className="sub_chapter"
                      // key={subChapter.id}
                      // onClick={() => navigate(subChapter.path)}
                      >
                        <div className="sub_item_text">
                          <p>{chapter.title}</p>
                        </div>
                      </div>
                      {/* ))} */}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </main>
        <aside></aside>
      </div>
    </div>
  )
}

export default BookOverview