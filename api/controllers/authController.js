const bcrypt = require('bcrypt')
const User = require('../models/userModel.js')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleLogin = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password)
    return res.status(400).json({ message: 'Username or password is missing' })

  console.log(username, password)

  const foundUser = await User.findOne({ username: username }).exec()

  if (!foundUser)
    return res.status(401).send({
      message: 'Username or password is not correct',
    })

  const match = await bcrypt.compare(password, foundUser.password)

  if (!match) {
    return res.status(401).send({
      message: 'Username or password is not correct',
    })
  }
  if (match) {
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

    // console.log("authController matched password")
    // console.log("authController foundUser", foundUser)


    // create JWT-s
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

    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '8h' }
    )

    // storing refreshToken inside the user's object
    await foundUser.updateOne({ refreshToken: refreshToken }).exec()



    // saving the refreshToken inside httpOnly cookie
    // so the scripting languages can not get access to it

    let sameSite
    if (process.env.STAGE === "development") {
      sameSite = 'None'
    } else {
      sameSite = 'Strict'
    }

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: sameSite,
      // sameSite: 'Strict', // on live
      secure: true,
      maxAge: 8 * 60 * 60 * 1000, // the token expires on the client's side (browser, cookies section) in 8 hours
      // 8 hours * 60 minutes/hour * 60 seconds/minute * 1000 milliseconds/second, which is equivalent to 8 hours.
      // maxAge: 40 * 1000 // 40 seconds
      // maxAge: 20 * 1000 // 40 seconds
    })
    res.json({
      userId,
      username,
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
  } else {
    res.status(401).send({
      message: 'Login failed',
    })
  }
}

module.exports = { handleLogin }
