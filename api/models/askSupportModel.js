const mongoose = require('mongoose')

const askSupportSchema = mongoose.Schema(
  {
    informant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    learner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    role: { type: String },
    retainCurrentRole: { type: String },
    securityLevel: { type: String },
    activity: { type: String },
    explanation: { type: String },
  },
  { timestamps: true }
)

const AskSupport = mongoose.model('AskSupport', askSupportSchema)

module.exports = AskSupport
