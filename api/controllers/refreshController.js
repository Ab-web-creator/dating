const User = require('../models/userModel.js')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies

  console.log("cookies", cookies)

  if (!cookies?.jwt) return res.sendStatus(401) // Unauthorized
  const refreshToken = cookies.jwt

  const foundUser = await User.findOne({ refreshToken }).exec()
  if (!foundUser) return res.sendStatus(403) // Forbidden

  // evaluating jwt
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.username !== decoded.username) return res.sendStatus(403)

    const role = Object.values(foundUser.role).filter(Boolean)
    const userId = foundUser._id
    const username = foundUser.username
    const nick = foundUser.nick
    const searchName = foundUser.searchName
    const birthDate = foundUser.birthDate
    const email = foundUser.email
    const createdAt = foundUser.createdAt
    const signupCompletion = foundUser.signupCompletion
    const image = foundUser.image
    const backgroundImage = foundUser.backgroundImage
    const biography = foundUser.biography
    const boardMember = foundUser.boardMember

    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundUser.username,
          role: role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    )

    res.json({
      userId,
      // username,
      nick,
      searchName,
      birthDate,
      email,
      role,
      accessToken,
      createdAt,
      signupCompletion,
      image,
      backgroundImage,
      biography,
      boardMember
    })
  })
}

module.exports = { handleRefreshToken }
