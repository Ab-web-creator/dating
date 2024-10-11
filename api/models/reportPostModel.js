const mongoose = require('mongoose')

const reportPostSchema = mongoose.Schema(
  {
    informant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    explanation: { type: String },
  },
  { timestamps: true }
)

const ReportPost = mongoose.model('ReportPost', reportPostSchema)

module.exports = ReportPost
