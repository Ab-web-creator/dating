const mongoose = require('mongoose')

const bookSectionSchema = mongoose.Schema(
  {
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    title: String,
    prevBookSection: { type: mongoose.Schema.Types.ObjectId, ref: 'BookSection' },
    nextBookSection: { type: mongoose.Schema.Types.ObjectId, ref: 'BookSection' }
  }
)

const BookSection = mongoose.model('BookSection', bookSectionSchema)

module.exports = BookSection