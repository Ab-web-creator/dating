const mongoose = require('mongoose')

const replySchema = mongoose.Schema(
  {
    targetedPost: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    replier: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
  },
  { timestamps: true }
)

const Reply = mongoose.model('Reply', replySchema)

module.exports = Reply
