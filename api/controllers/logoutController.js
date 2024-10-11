const User = require('../models/userModel.js')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleLogout = async (req, res) => {
  const cookies = req.cookies
  if (!cookies?.jwt) return res.sendStatus(204) // no content
  const refreshToken = cookies.jwt

  const foundUser = await User.findOne({ refreshToken: refreshToken }).exec()
  if (!foundUser) {
    res.clearCookie('jwt', {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
    })
    res.sendStatus(204) // no content
    return
  }

  // Deleting refreshToken from mongoDB
  await User.findOneAndUpdate(
    { refreshToken: refreshToken },
    { refreshToken: '' }
  )

  res.clearCookie('jwt', {
    httpOnly: true,
    sameSite: 'None', // or 'None'?,
    secure: true,
    maxAge: 8 * 60 * 60 * 1000,
  })
  res.sendStatus(204) // no content
}

module.exports = { handleLogout }