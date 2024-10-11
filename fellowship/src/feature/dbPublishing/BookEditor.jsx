import React, { useState, useEffect } from 'react'
import "./bookCreator.css"
import ContentEditor from './components/ContentEditor'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import h2_icon from '../../images/open_book.png';

import PostCreate from '../posts/components/PostCreate'
import Search from '../../components/Search'
import { useTranslation } from 'react-i18next';

const BookEditor = () => {
  const { t } = useTranslation();
  const axiosPrivate = useAxiosPrivate()
  const { auth } = useAuth()
  const params = useParams() // params.id give 

  const [bookDetails, setBookDetails] = useState({})

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setIsLoading(true)
        const { data } = await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/books/${params.id}`)

        setBookDetails(data)

      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBook()
  }, [])

  const [isModalOpen, setModalOpen] = useState(false)
  const [editingChapter, setEditingChapter] = useState({ sectionIndex: null, chapterIndex: null })
  const [currentContent, setCurrentContent] = useState(null)
  const [currentSidenotes, setCurrentSidenotes] = useState([])

  const openModal = (sectionIndex, chapterIndex) => {
    setEditingChapter({ sectionIndex, chapterIndex })
    setCurrentContent(bookDetails.sections[sectionIndex].chapters[chapterIndex].body)
    setCurrentSidenotes(bookDetails.sections[sectionIndex].chapters[chapterIndex].sidenotes)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  useEffect(() => {
  }, [bookDetails])

  const addSection = (sectionIndex) => {
    setBookDetails(prevState => {
      const newSections = [...prevState.sections]
      newSections.splice(sectionIndex + 1, 0, {
        title: "",
        chapters: [
          {
            title: "",
            chapterImage: "",
            isMainChapter: true,
            body: {},
            sidenotes: []
          }
        ]
      })
      return {
        ...prevState,
        sections: newSections
      }
    })
  }

  const addChapter = (sectionIndex, chapterIndex) => {
    setBookDetails(prevState => {
      const newSections = [...prevState.sections]
      newSections[sectionIndex].chapters.splice(chapterIndex + 1, 0, {
        title: "",
        chapterImage: "",
        isMainChapter: true,
        body: {},
        sidenotes: []
      })
      return { ...prevState, sections: newSections }
    })
  }

  // we set the flag to the deleted section, but still keep it in the array, so that our backend can handle it to remove from DB
  const deleteSection = (sectionIndex) => {
    setBookDetails(prevState => {
      const newSections = prevState.sections.reduce((accumulator, section, index) => {
        if (index === sectionIndex) {
          if (section._id) {
            accumulator.push({ ...section, delete: true })
          }
        } else {
          accumulator.push(section)
        }
        return accumulator
      }, []);

      return { ...prevState, sections: newSections }
    })
  }

  const deleteChapter = (sectionIndex, chapterIndex) => {
    setBookDetails(prevState => {
      const updatedSections = prevState.sections.map((section, sIndex) => {
        if (sIndex === sectionIndex) {
          const updatedChapters = section.chapters.reduce((accumulator, chapter, cIndex) => {
            if (cIndex === chapterIndex) {
              if (chapter._id) {
                accumulator.push({ ...chapter, delete: true });
              }
            } else {
              accumulator.push(chapter)
            }
            return accumulator
          }, [])
          return { ...section, chapters: updatedChapters }
        }
        return section
      });

      return { ...prevState, sections: updatedSections }
    });
  }

  const handleInputChange = (value, sectionIndex, chapterIndex, field) => {
    setBookDetails(prevState => {
      const newSections = [...prevState.sections]
      newSections[sectionIndex].chapters[chapterIndex][field] = value
      return { ...prevState, sections: newSections }
    })
  }

  const handleBodyChange = (currentContentBody, sectionIndex, chapterIndex) => {
    setBookDetails(prevState => {
      const newSections = [...prevState.sections]
      newSections[sectionIndex].chapters[chapterIndex].body = currentContentBody // i.e. {}
      return { ...prevState, sections: newSections }
    })

  }

  const handleSectionTitleChange = (e, sectionIndex) => {
    const { value } = e.target
    setBookDetails(prevState => {
      const newSections = [...prevState.sections]
      newSections[sectionIndex].title = value
      return { ...prevState, sections: newSections }
    })
  }

  const handleTitleChange = (e) => {
    const { value } = e.target
    setBookDetails(prevState => ({ ...prevState, title: value }))
  }

  const handleSaveContent = (bodyContent, sidenotes) => {
    handleBodyChange(bodyContent, editingChapter.sectionIndex, editingChapter.chapterIndex)
    handleInputChange(sidenotes, editingChapter.sectionIndex, editingChapter.chapterIndex, 'sidenotes')
  }

  const handleUpdateBook = async () => {
    try {
      setIsLoading(true)
      const { data } = await axiosPrivate.put(`${process.env.REACT_APP_BACKEND_URL}/api/books/${bookDetails._id}/${auth.userId}`, JSON.stringify(bookDetails))
      setBookDetails(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  const handleChapterImageChange = (e, sectionIndex, chapterIndex) => {
    if (!e.target.files || e.target.files.length === 0) {
      setError(t('BookEditor.PleaseSelectImage'))
      return
    }

    const file = e.target.files[0]
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = () => {
      const img = new Image()
      img.src = reader.result

      img.onload = () => {
        const canvas = document.createElement('canvas')
        const maxDimension = 800
        let width = img.width
        let height = img.height

        if (width > height) {
          if (width > maxDimension) {
            height *= maxDimension / width
            width = maxDimension
          }
        } else {
          if (height > maxDimension) {
            width *= maxDimension / height
            height = maxDimension
          }
        }

        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')

        ctx.drawImage(img, 0, 0, width, height)


        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.6)


        setBookDetails(prevState => {
          const newSections = [...prevState.sections]
          newSections[sectionIndex].chapters[chapterIndex].chapterImage = compressedDataUrl
          return { ...prevState, sections: newSections }
        })
      }
    }

    reader.onerror = (error) => {
      setError(t('BookEditor.ErrorReading'))
      console.error(error)
    }
  }

  const removeChapterImage = (sectionIndex, chapterIndex) => {
    setBookDetails(prevState => {
      const newSections = [...prevState.sections]
      newSections[sectionIndex].chapters[chapterIndex].chapterImage = ""
      return { ...prevState, sections: newSections }
    })
  }

  const navigate = useNavigate()
  const [isPostCreateOpen, setPostCreateOpen] = useState(false)
  const [search, setSearch] = useState('')

  return (
    <>

      <div className='minister-home resources the_publisher'>

        <div className='topbar'>
          {isLoading ? (
            <>
              <div className='middle_part1'>
                <div style={{ margin: 'auto' }}>
                  <p style={{ color: 'red' }}>{t('BookEditor.WaitUpdating')}</p>
                </div>
              </div>
              <div className="middle_part2">
                <div className="topbar_btn_container" style={{ marginLeft: '10px' }}>

                </div>
                <Search setSearch={setSearch} />
              </div>
            </>
          ) : (
            <>
              <div className='middle_part1'>
                <div className='icon_and_h2'>
                  <div className="h2_icon_container">
                    <img src={h2_icon} alt="" />
                  </div>
                  <h1 className='h2HeadingDB'>
                    {t('BookEditor.MainHeading')}
                    {/*Cre<span>a</span>te <span>a</span> Public<span>a</span>tion:*/}
                  </h1>
                  <input id="bookTitle" onChange={handleTitleChange} value={bookDetails.title} placeholder={t('BookEditor.TitlePlaceholder')} />
                </div>
                <div className='network_icons_topbar'></div>
                {isPostCreateOpen && <PostCreate setPostCreateOpen={setPostCreateOpen} />}
              </div>
              <div className="middle_part2">
                <div className="topbar_btn_container" style={{ marginLeft: '10px' }}>
                  <button className='save_collection_btn' onClick={() => handleUpdateBook()}>{t('BookEditor.UpdateButton')}</button>
                </div>
                <Search setSearch={setSearch} />
              </div>
            </>
          )}
        </div>





        <div className="separate_into_two_columns">
          <div className='one_column_only'>
            <div className='publisher'>

              <div className='books-container'>
                {bookDetails?.sections?.map((section, sectionIndex) => {
                  if (section.delete) return
                  return (<section key={sectionIndex}>
                    <div className='book-wrapper' >

                      <button className='delete_this_book' onClick={() => deleteSection(sectionIndex)}>
                        &times;
                      </button>

                      <div className='book_title'>
                        <label htmlFor={`section_${sectionIndex}`}>{t('BookEditor.TitleOfTheBook')}</label>
                        <input
                          id={`section_${sectionIndex}`}
                          name="sectionTitle"
                          value={section.title}
                          onChange={(e) => handleSectionTitleChange(e, sectionIndex)}
                        />
                      </div>

                      <div className='chapter_title_container'>
                        {section.chapters.map((chapter, chapterIndex) => {
                          if (chapter.delete) return
                          return (<div className='chapter_sub_container'>
                            <div key={chapterIndex}
                              className='chapter_title'
                            >

                              <div className='chapter_title_input_btn'>
                                <div className='only_label_input'>
                                  <label htmlFor={`section_${sectionIndex}`}>{t('BookEditor.ChapterTitle')}</label>
                                  <input
                                    id={`section_${sectionIndex}`}
                                    name="title"
                                    value={chapter.title}
                                    onChange={(e) => handleInputChange(e.target.value, sectionIndex, chapterIndex, 'title')}
                                  />
                                </div>

                                <div className='radio_btns'>
                                  <div className='main_chapter_radio_btn'>
                                    <input
                                      type="radio"
                                      id={`section_chapter_main_${sectionIndex}_${chapterIndex}_true`}
                                      name={`isMainChapter${sectionIndex}_${chapterIndex}`}
                                      value="true"
                                      checked={chapter.isMainChapter}
                                      onChange={(e) => handleInputChange(true, sectionIndex, chapterIndex, 'isMainChapter')}
                                    />
                                    <label htmlFor={`section_chapter_main_${sectionIndex}_${chapterIndex}_true`}> {t('BookEditor.MainChapter')}</label>
                                  </div>

                                  <div className='sub_chapter_radio_btn'>
                                    <input
                                      type="radio"
                                      id={`section_chapter_main_${sectionIndex}_${chapterIndex}_false`}
                                      name={`isMainChapter${sectionIndex}_${chapterIndex}`}
                                      value="false"
                                      checked={!chapter.isMainChapter}
                                      onChange={(e) => handleInputChange(false, sectionIndex, chapterIndex, 'isMainChapter')}
                                    />
                                    <label htmlFor={`section_chapter_main_${sectionIndex}_${chapterIndex}_false`}> {t('BookEditor.SubChapter')}</label>
                                  </div>
                                  <button className='add_content' onClick={() => openModal(sectionIndex, chapterIndex)}>
                                  {t('BookEditor.EditButton')}
                                  </button>
                                </div>

                                <div
                                  style={{ display: 'flex', gap: '20px' }}
                                >
                                  {chapter.isMainChapter &&
                                    <div className='chapter_image_edit'>

                                      <input id={`chapterImage_${sectionIndex}_${chapterIndex}`} accept="image/png, image/jpeg, image/jpg" onChange={(e) => handleChapterImageChange(e, sectionIndex, chapterIndex)} type="file" />

                                      <label htmlFor={`chapterImage_${sectionIndex}_${chapterIndex}`}>
                                        <span>{t('BookEditor.PlusImage')}</span>
                                      </label>

                                      {chapter.chapterImage &&
                                        <button className='remove_main_ch_image' onClick={() => removeChapterImage(sectionIndex, chapterIndex)}>&times;</button>}

                                      {chapter.chapterImage &&
                                        <div className='main_ch_image_container'>
                                          <img alt='chapter_image' className='chapter_image_display' src={chapter.chapterImage} />
                                        </div>
                                      }
                                    </div>}
                                </div>
                              </div>


                            </div>

                            <div className='add_and_del_btns_container'>
                              <button style={{ background: "gray" }} onClick={() => addChapter(sectionIndex, chapterIndex)}>{t('BookEditor.AddNewChapter')}</button>

                              <button
                                className='delete_this_chapter'
                                onClick={() => deleteChapter(sectionIndex, chapterIndex)}>
                                {t('BookEditor.DelThisChapter')}
                              </button>
                            </div>
                          </div>)
                        })}
                      </div>
                    </div>
                    <button className='add_new_book' onClick={() => addSection(sectionIndex)}>{t('BookEditor.AddBook')}</button>
                  </section>)

                })}

              </div>
              {isModalOpen && <ContentEditor
                isModalOpen={isModalOpen}
                currentContent={currentContent}
                setCurrentContent={setCurrentContent}
                handleSaveContent={handleSaveContent}
                closeModal={closeModal}
                sectionIndex={editingChapter.sectionIndex}
                chapterIndex={editingChapter.chapterIndex}
                currentSidenotes={currentSidenotes}
                setCurrentSidenotes={setCurrentSidenotes}
              />}
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
export default BookEditor