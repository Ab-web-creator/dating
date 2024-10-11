const mongoose = require('mongoose')

const bookContentSchema = mongoose.Schema(
  {
    content: String,
    bookChapter: { type: mongoose.Schema.Types.ObjectId, ref: 'BookChapter' },
    bookSection: { type: mongoose.Schema.Types.ObjectId, ref: 'BookSection' },
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  }
)

const BookContent = mongoose.model('BookContent', bookContentSchema)

module.exports = BookContent