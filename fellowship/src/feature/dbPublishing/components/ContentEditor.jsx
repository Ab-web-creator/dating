import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useTranslation } from 'react-i18next';

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "vitalic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["image", "video"],
    ["clean"],
  ]
};

const ContentEditor = ({ isModalOpen, handleSaveContent, closeModal, currentContent, setCurrentContent, currentSidenotes, setCurrentSidenotes, sectionIndex, chapterIndex }) => {
  const { t } = useTranslation();

  useEffect(() => {
  }, [currentContent])

  useEffect(() => {
    return () => {
      setCurrentContent(null)
      setCurrentSidenotes([])
    }
  }, [])

  const [selection, setSelection] = useState(null);
  const [currentSidenote, setCurrentSidenote] = useState({
    sidenoteLink: "",
    sidenoteContent: ""
  })

  const handleSelection = () => {
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
      const range = selection.getRangeAt(0);
      const selectedText = range.cloneContents().textContent.trim()
      setSelection(selectedText);
    } else {
      setSelection(null);
    }
  }

  const [isSidenoteModalOn, setSidenoteModalOn] = useState(false)

  const handleSidenoteLink = () => {

    if (selection) {
      const sidenoteLink = selection.toString();

      setCurrentContent((prevState) => ({ ...prevState, content: prevState?.content?.replace(sidenoteLink, sidenoteLink + '*') }))
      setCurrentSidenote({ ...currentSidenote, sidenoteLink: sidenoteLink })
      setSidenoteModalOn(true)
    }
  }

  const handleSidenoteContent = (e) => {
    setCurrentSidenote({ ...currentSidenote, sidenoteContent: e.target.value })
  }

  const handleDeleteSidenote = (sidenoteIndex) => {
    const removedElement = currentSidenotes[sidenoteIndex]
    const editedContent = currentContent.content.replace(removedElement.sidenoteLink + '*', removedElement.sidenoteLink)
    setCurrentContent((prevState) => ({ ...prevState, content: editedContent }))

    // we want to flag if it is an existing sidenote, then let the backend know that the doc has to be deleted
    setCurrentSidenotes(prevSidenotes => {
      const newSidenotes = prevSidenotes.reduce((accumulator, sidenote, index) => {
        if (sidenoteIndex === index) {
          if (sidenote._id) {
            accumulator.push({ ...sidenote, delete: true })
          }
        } else {
          accumulator.push(sidenote)
        }
        return accumulator
      }, [])
      return newSidenotes
    })
  }

  const [editingSidenoteIndex, setEditingSidenoteIndex] = useState(null)

  const handleEditSidenote = (index) => {
    const currentNote = currentSidenotes[index];
    setCurrentSidenote(currentNote);
    setEditingSidenoteIndex(index);
    setSidenoteModalOn(true);
  }

  const handleSidenoteSave = () => {
    if (editingSidenoteIndex !== null) {
      // for editing existing
      setCurrentSidenotes(prevSidenotes => {
        const newSidenotes = [...prevSidenotes];
        newSidenotes[editingSidenoteIndex] = currentSidenote;
        return newSidenotes;
      });
      setEditingSidenoteIndex(null);
    } else {
      // for new sidenote
      setCurrentSidenotes(prevSidenotes => [...prevSidenotes, currentSidenote]);
    }

    setCurrentSidenote({
      sidenoteLink: "",
      sidenoteContent: ""
    });

    setSidenoteModalOn(false);
    setSelection(null);
  }

  const handleCurrentBodyChange = (value) => {
    setCurrentContent(prevState => {
      return { ...prevState, content: value }
    })
  }

  // only for scrolling it to the bottom: 
  useEffect(() => {
    if (isSidenoteModalOn || currentSidenotes.length === 0) return;
    const mainElement = document.querySelector('.add_sidenotes main');
    mainElement.scrollTop = mainElement.scrollHeight;
  }, [isSidenoteModalOn, currentSidenotes]);



  if (!isModalOpen) return null

  return (
    <div className='content-editor-container'>
      <div className='content-editor-container_live-editor' onMouseUp={handleSelection}>
        <ReactQuill theme="snow" value={currentContent.content} onChange={(value) => handleCurrentBodyChange(value)} modules={modules} placeholder= {t('ContentEditor.ContentGoesHerePlaceholder')}
        />
        <button className="save_for_editor" onClick={() => handleSaveContent(currentContent, currentSidenotes)}>{t('ContentEditor.SaveButton')}</button>
        <button className="close_editor_btn" onClick={closeModal}>{t('ContentEditor.CloseButton')}</button>
      </div>

      <div className='add_sidenotes'>
        <div className="preview_for_editor">
          <div>
            <p > {t('ContentEditor.HereYouCan')} </p>
            {!selection && <p style={{ fontSize: '12px' }}> {t('ContentEditor.YouCanEdit')} </p>}
          </div>

        </div>
        <main>
          <div>
            {currentSidenotes?.map((element, index) => {
              if (element.delete) return
              return (
                <div className="sidenote_div" key={index}>
                  <p>{element?.sidenoteContent}</p>
                  <div style={{ display: 'flex', margin: 'auto', marginRight: '0px', marginBottom: '0px' }}>
                    <button className="edit_sidenote_btn" onClick={() => handleEditSidenote(index)}>{t('ContentEditor.EditButton')}</button>
                    <button className="delete_sidenote_btn" onClick={() => handleDeleteSidenote(index)}>{t('ContentEditor.DeleteButton')}</button>
                  </div>
                </div>
              )
            })}
          </div>
          {!currentSidenote.sidenoteLink && selection &&
            <button onClick={handleSidenoteLink}>{t('ContentEditor.AddSideNoteButton')}</button>
          }
          {isSidenoteModalOn &&
            <>
              <textarea className="sidenote_add_textarea" value={currentSidenote?.sidenoteContent} onChange={handleSidenoteContent} />
              <button onClick={handleSidenoteSave}>{t('ContentEditor.SaveSideNoteButton')}</button>
            </>
          }
        </main>
      </div>
    </div>
  )
}

export default ContentEditor