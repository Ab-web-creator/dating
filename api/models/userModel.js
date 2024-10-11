const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    nick: String,
    searchName: String,
    username: String,
    activity: { type: String, default: 'active' },
    securityLevel: { type: String, default: 'low' },
    familyStatus: String,

    childrenAmount: String,
    occupation: String,
    birthDate: String,
    location: String,
    biography: String,

    email: String,
    password: String,
    role: {
      Mentor: Number, // 1111
      Student: Number, // 2222
      Admin: Number, // 3333
      // Coach: Number, // 4444
      // Encourager: Number, // 5555
      // Writer: Number, // 6666
      // Moderator: Number, // 7777
    },
    refreshToken: String,
    whatsapp: String,
    signupCompletion: { type: Number, default: 1 }, // 1 - admin sends link via the admin (client) app or invited by a mentor via fellowship, 2 - password is created, 3 - completed 
    image: String,
    backgroundImage: String,

    boardMember: { type: Boolean, default: false }
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User
