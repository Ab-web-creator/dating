const express = require('express')
const router = express.Router()
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  getBookSections,
  getSectionChapters,
  getBookChapter,
  getChapterContentSidenotes,
  deleteBook
} = require('../controllers/bookController')

router.get('/get-all-books/:userId', getBooks) // we would put a button if the user who is requesting all books have a book that he uploaded so that he can edit it
router.get('/:id', getBook)
router.post('/:userId', createBook) // passing userId, we need to know who is creator to give the rights for editing later
router.put('/:id/:userId', updateBook) // passing userId, to check if the updater is authorised 
router.get('/get-sections/:id', getBookSections)
router.get('/get-chapters/:id', getSectionChapters)
router.get('/get-chapter/:id', getBookChapter)
router.get('/get-content-and-sidenotes/:id', getChapterContentSidenotes)
router.delete('/:id/:userId', deleteBook)

module.exports = router