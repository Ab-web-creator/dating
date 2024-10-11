import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import useAuth from '../../hooks/useAuth'
import '../uzbTavrotPlus/stories.css'
import parse, { domToReact } from 'html-react-parser'

import Search from '../../components/Search'
import PostCreate from '../posts/components/PostCreate'

import kamar from '../../images/kamar.png'
import hamburger from '../../images/hamburger.png';
import post_something from '../../images/post_new.png';
import { useTranslation } from 'react-i18next';

const BookContentPage = () => {
  const { t } = useTranslation();
  const { auth } = useAuth()
  const axiosPrivate = useAxiosPrivate()
  const params = useParams()
  const navigate = useNavigate()

  const [bookChapter, setBookChapter] = useState({})
  const [bookContent, setBookContent] = useState({})
  const [bookSidenotes, setBookSidenotes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchChapter = async () => {
      try {
        setIsLoading(true)
        const response = await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/books/get-chapter/${params.id}`)
        setBookChapter(response.data)


        const { data } = await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/books/get-content-and-sidenotes/${params.id}`)

        setBookContent(data?.bookContent)
        setBookSidenotes(data?.bookSidenotes)

      } catch (error) {
        setError(error.response.data.message)
      } finally {
        setIsLoading(false)
      }

    }
    fetchChapter()
  }, [params.id])


  const toggleSidenote = (e) => {
    if (e.target.tagName === 'SPAN') {
      e.target.style.display = "none"
      return
    }
    const spanEl = e.target.nextSibling
    if (spanEl.style.display === "none") {
      spanEl.style.display = "block"
    } else {
      spanEl.style.display = "none"
    }
  }

  const processContent = () => {
    let content = bookContent?.content || ''

    const options = {
      replace: ({ name, attribs, children }) => {
        if (attribs && attribs.style) {
          let styleObject = attribs.style.split(';')
            .filter(s => s.includes(':'))
            .map(s => s.split(':'))
            .reduce((acc, val) => {
              acc[val[0].trim()] = val[1].trim();
              return acc;
            }, {});
          attribs.style = styleObject;
        }

        if (children) {
          children = children.map((child, index) => {
            if (child.data?.includes('*')) {
              const [text, remain] = child.data.split('*')
              const sidenotes = bookSidenotes.filter(s => text.trim().includes(s.sidenoteLink.trim()))

              return (
                <React.Fragment key={index}>
                  {text}
                  <button onClick={toggleSidenote}>*</button>
                  {sidenotes?.map((sidenote, i) =>
                    <span onClick={toggleSidenote} key={i} className='sidenote-toggle content-sidenote'
                      // style={{ display: 'none' }}
                      >
                      {sidenote.sidenoteContent}
                    </span>
                  )}
                  {remain}
                </React.Fragment>
              )
            }
            return domToReact([child], options)
          })
        }
        if (name) {
          return React.createElement(name, attribs, ...children)
        }
      }
    }

    const parsedContent = parse(content, options)
    return parsedContent
  }


  const [isPostCreateOpen, setPostCreateOpen] = useState(false)
  const [search, setSearch] = useState('')



  return (
    <div className="minister-home stories">


      <div className='qisas_navbar'>
        <div className='left_corner_div'  >
          <div className='go_main_menu' title='go to the main menu'
            onClick={() => navigate(`/resources/book/overview/${bookChapter.book}`)}>
            {/* <img src={small_logo} alt="" /> */}
            ←
          </div>
          {!isLoading && <div className='div_with_h1'>
            <h1>
              {bookChapter.title}
            </h1>
          </div>}
        </div>

        <div className='qisas_network_icons_topbar' onClick={(e) => {
          e.stopPropagation();
        }} >

          <button
            className="post_button_with_img"
            title= {t('BookContentPage.CreatePublishPostButton')}
            onClick={() => {
              setPostCreateOpen(true)
            }}
          >
            <img src={post_something} alt="" />
          </button>

          <button className='post_button_with_img'
            style={{ padding: '7px' }}
            title={t('BookContentPage.MenuOnlyThisBook')}
            onClick={() => navigate(`/resources/book/overview/${bookChapter.book}`)}
          >
            <img src={hamburger} alt="" />
          </button>
        </div>

        {isPostCreateOpen && <PostCreate setPostCreateOpen={setPostCreateOpen} />}
        <Search setSearch={setSearch} />
      </div>

      <div className="separate_into_two_columns">
        <main className="sep_part1">
          {isLoading &&
            <div className='loading' style={{ color: 'green' }}>{t('BookContentPage.Loading')} </div>}
          {!isLoading && <>
            {bookChapter.isMainChapter ?
              (<div className='chapter_heading chapter_headingAuto'>
                <div className="kamar">
                  <img src={kamar} alt="" />
                </div>
                <div className="img_container" style={{ padding: '1px' }}>
                  {bookChapter.chapterImage ? <img style={{ borderRadius: '50%' }} src={bookChapter.chapterImage} alt="" /> : <img style={{ borderRadius: '50%' }} alt='default_image' src={kamar} />}
                </div>
                <div className='title_of_chapter'>
                  <p> {bookChapter.title} </p>
                </div>
              </div>)
              :
              (<>
                <div className='chapter_heading2'>
                  <p> {bookChapter.title}</p>
                </div>
                <div className='decor_line'>
                  <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
                </div>
              </>)}
            <div className='main_text' style={{ flexGrow: '3' }}>
              {bookContent.content &&
                <div className='content-editor-container_live-preview'>
                  {processContent()}
                </div>}
            </div>

            <article className='nav_arrows'>
              <div className='flex_it space_between'>

                <div style={{ marginLeft: '0px' }}>
                  <div className='indicator' style={{display: 'flex', gap: '7px'}} >
                    {bookChapter.prevBookChapter ? (
                      <>
                        <span className="left_arrow_span">←</span> 
                        <span onClick={() => navigate(`/resources/book/page/${bookChapter.prevBookChapter}`)} className='prev_chapters' > {t('BookContentPage.PrevChapter')} </span>
                  
                      </>
                     
                    ) : (
                      <>
                      <span className="left_arrow_span">←</span> 
                      <span style={{ backgroundColor: "transparent" }} className='prev_chapters'>{t('BookContentPage.FirstChapter')} </span>
                      </>
                    )}
                  </div>
                </div>

                <div className='central_div'>
                  <div>
                    <p onClick={() => navigate(`/resources/book/overview/${bookChapter.book}`)}>  {t('BookContentPage.Content')}  </p>
                  </div>
                </div>

                <div style={{ marginRight: '0px' }} >
                  <div className='indicator'  style={{display: 'flex', gap: '7px'}} >
                    {bookChapter.nextBookChapter ? (
                      <>
                   
                      <span onClick={() => navigate(`/resources/book/page/${bookChapter.nextBookChapter}`)} className="next_chapters" >{t('BookContentPage.NextChapter')}</span>

                      <span className="right_arrow_span">→</span>
                      </>
                    ) : (
                      <>
                      <span style={{ backgroundColor: "transparent" }} className="next_chapters">{t('BookContentPage.LastChapter')} </span>
                      <span className="right_arrow_span">→</span>
                      </>
                    )}
                  </div>
                </div>

              </div>
            </article>
          </>}
        </main>
        <aside></aside>
      </div >
    </div >
  )
}

export default BookContentPage