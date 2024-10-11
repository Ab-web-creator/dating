const mongoose = require('mongoose')

const adminMessagesSchema = mongoose.Schema(
  {
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String },
    hisMessage: { type: String },
  },
  { timestamps: true },
)

const AdminMessages = mongoose.model('AdminMessages', adminMessagesSchema)

module.exports = AdminMessages
