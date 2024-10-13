import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import './diary.css'

import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import useAuth from '../../../hooks/useAuth';

import checked from '../../../images/checked.png';
import checked_not from '../../../images/checked_not.png';
import delete_btn from '../../../images/del_btn.png';
import { useTranslation } from 'react-i18next';
 
const Diary = ({ onClose, selectedUserId, users }) => {

  const { t } = useTranslation();
  const axiosPrivate = useAxiosPrivate()
  const { auth } = useAuth()
  const navigate = useNavigate()

  const selectedUser = users.find((element) => element._id === selectedUserId);

  const [teacherDiaryNotes, setTeacherDiaryNotes] = useState([])
  const [newNote, setNewNoteje] = useState('')


  // Scroll to the bottom of the container
  const readMsgContainerRef = useRef(null);
  useEffect(() => {
    if (readMsgContainerRef.current) {
      readMsgContainerRef.current.scrollTop = readMsgContainerRef.current.scrollHeight;
    }
  }, [teacherDiaryNotes]);


  const fetchTeacherDiaryNotes = async () => {
    const { data } = await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/diary/${auth.userId}/${selectedUserId}`)
    setTeacherDiaryNotes(data)
  }

  useEffect(() => {
    fetchTeacherDiaryNotes()
  }, [])

  const addNote = async () => {
    try {
      if (newNote.trim() !== '') {
        const { data } = await axiosPrivate.post(`${process.env.REACT_APP_BACKEND_URL}/api/diary/`, JSON.stringify({
          authorId: auth.userId,
          referencedId: selectedUserId,
          content: newNote
        }));

        setTeacherDiaryNotes(data)
        setNewNoteje('');
      }
    } catch (error) {
      console.error(t('Diary.ErrorSendingNote'), error);
    }
  };

  const updateDiaryNote = async (index) => {
    try {
      const currentItem = teacherDiaryNotes[index]
      await axiosPrivate.put(`${process.env.REACT_APP_BACKEND_URL}/api/diary/`, JSON.stringify({
        diaryNote: currentItem
      }))
    } catch (error) {
      console.log(error)
    }
  }

  const toggleCheckedStatus = (index) => {
    // Create a copy of the teacherDiaryNotes array
    const updatedNotes = [...teacherDiaryNotes];
    // Toggle the status of the clicked note
    updatedNotes[index].status = !updatedNotes[index].status;
    // Update the state with the modified array
    setTeacherDiaryNotes(updatedNotes);
    // update backend
    updateDiaryNote(index)
  }

  const deleteNote = async (index) => {
    try {
      const deletedNoteId = teacherDiaryNotes[index]._id

      await axiosPrivate.delete(`${process.env.REACT_APP_BACKEND_URL}/api/diary/${deletedNoteId}`)

      const updatedNotes = [...teacherDiaryNotes]
      updatedNotes.splice(index, 1)
      setTeacherDiaryNotes(updatedNotes)

    } catch (error) {
      console.log(error)
    }
  }

  const navigateToProfile = (myContact) => {
    navigate(`/profile-page/${myContact}`)
  }

  console.log('selectedUserId', selectedUserId)
  return (
    <div className="diary_container" onClick={() => onClose()}>

      <div className="diary" onClick={(e) => { e.stopPropagation(); }}>

        <header className=''>
          {selectedUser && (
            <>
              <div className='title'>
                <div className='credentials'
                >
                  <img src={selectedUser.teacher.image || selectedUser.learner.image} alt=""
                    onClick={() => navigateToProfile(selectedUser.teacher._id || selectedUser.learner._id)}
                  />
                  <div className='nick_and_searchN'
                    onClick={() => navigateToProfile(selectedUser.teacher._id || selectedUser.learner._id)}
                  >
                    <p>
                      {selectedUser.teacher.nick || selectedUser.learner.nick}
                    </p>
                    <p className='searchN'>
                      {selectedUser.teacher.searchName || selectedUser.learner.searchName}
                    </p>
                  </div>
                  <div className='milestones'>
                    <p>{t('Diary.Assignments')}</p>
                    <p> {t('Diary.Accomplishments')}</p>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="close_btn_container" onClick={() => onClose()}>

            <p> &times;</p>

          </div>
        </header>

        <div className='div_content'>
          <div className='notes_container' ref={readMsgContainerRef}>
            {teacherDiaryNotes?.map((note, index) => (
              <div key={note._id} className='notes' onClick={() => toggleCheckedStatus(index)}>
                <div className='radio_btn'>
                  <img src={note.status ? checked : checked_not} alt="" />
                </div>

                <div className='note_content_contain'>
                  <p className='note_content'>{note.content}
                  </p>
                </div>

                <div className='flex_time_and_bin'>
                  <p className='time_ind'>{format(new Date(note.createdAt), 'dd-MM-yyyy')}</p>
                  <div className='delete_container' onClick={() => deleteNote(index)}>
                    <img src={delete_btn} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='send_note_div'>
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNoteje(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addNote();
                }
              }}
              placeholder={t('Diary.WriteANotePlaceholer')}
            />
            <button onClick={addNote} className='add_note'>
            {t('Diary.AddNote')}
            </button>
          </div>
        </div>
      </div>
     </div>
  );
}

export default Diary