const mongoose = require('mongoose')

const communitySchema = mongoose.Schema(
  {
    name: String,
    description: String,
    commonInterest: String,
    selectedColor: String,
    selectedImage: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

const Community = mongoose.model('Community', communitySchema)

module.exports = Community