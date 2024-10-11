const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  },
  referencedUser: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  },
  content: String
 },
 { timestamps: true }
)

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review