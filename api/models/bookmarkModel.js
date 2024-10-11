const mongoose = require('mongoose')

const bookmarkSchema = mongoose.Schema(
  {
    referredUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    referredPost: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  }
)

const Bookmark = mongoose.model('Bookmark', bookmarkSchema)

module.exports = Bookmark