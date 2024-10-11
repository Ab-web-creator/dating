const mongoose = require('mongoose')

const bookChapterSchema = mongoose.Schema(
  {
    bookSection: { type: mongoose.Schema.Types.ObjectId, ref: 'BookSection' },
    title: String,
    prevBookChapter: { type: mongoose.Schema.Types.ObjectId, ref: 'BookChapter' },
    nextBookChapter: { type: mongoose.Schema.Types.ObjectId, ref: 'BookChapter' },
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    isMainChapter: Boolean,
    chapterImage: String,
  }
)

const BookChapter = mongoose.model('BookChapter', bookChapterSchema)

module.exports = BookChapter