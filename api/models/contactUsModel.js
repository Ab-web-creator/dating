const mongoose = require('mongoose')

const contactUsSchema = mongoose.Schema(
  {
    informant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    email: { type: String },
    message: { type: String },
    adminNote: { type: String },
  },
  { timestamps: true },
)

const ContactUs = mongoose.model('ContactUs', contactUsSchema)

module.exports = ContactUs
