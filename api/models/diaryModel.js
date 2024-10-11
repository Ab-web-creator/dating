const mongoose = require('mongoose')

const diarySchema = mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    referenced: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String },
    status: { type: Boolean, default: false }
  },
  { timestamps: true }
)

const Diary = mongoose.model('Diary', diarySchema)

module.exports = Diary

// teacherId, => refernce to id User
// studentId, => refernce to id User
// content, => Text
// status, => Yes/No
// date => Date