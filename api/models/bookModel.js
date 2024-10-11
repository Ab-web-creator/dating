const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
  {
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
  }
)

const Book = mongoose.model('Book', bookSchema)

module.exports = Book