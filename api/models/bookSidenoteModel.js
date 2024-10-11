const mongoose = require('mongoose')

const bookSidenoteSchema = mongoose.Schema(
  {
    sidenoteLink: String,
    sidenoteContent: String,
    bookContent: { type: mongoose.Schema.Types.ObjectId, ref: 'BookContent' },
    bookChapter: { type: mongoose.Schema.Types.ObjectId, ref: 'BookChapter' },
    bookSection: { type: mongoose.Schema.Types.ObjectId, ref: 'BookSection' },
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  }
)

const BookSidenote = mongoose.model('BookSidenote', bookSidenoteSchema)

module.exports = BookSidenote