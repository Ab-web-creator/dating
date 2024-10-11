const mongoose = require('mongoose')

const likeSchema = mongoose.Schema(
  {
    referredUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    referredPost: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  }
)

const Like = mongoose.model('Like', likeSchema)

module.exports = Like