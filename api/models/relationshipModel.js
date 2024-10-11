const mongoose = require('mongoose')

const relationshipSchema = mongoose.Schema(
  {
    teacher: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    learner: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
  },
  {
    timestamps: true
  }
)

const Relationship = mongoose.model('Relationship', relationshipSchema)

module.exports = Relationship