const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    content: String,
    image: String,
    viewCount: { type: Number, default: 0 },
    referencedPost: {
      type: mongoose.Schema.Types.ObjectId, ref: 'Post'
    },
    reposted: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post