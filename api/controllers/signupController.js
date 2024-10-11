const User = require('../models/userModel.js')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

const verifyAdminId = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id

    const foundUserId = await User.findById(_id)

    console.log("foundUserId", foundUserId)

    if (!foundUserId || !foundUserId.role.Admin) {
      return res.status(401).send('Unauthorized')
    }

    res.status(200)
  } catch (error) {
    console.log(error)
  }
})

const verifyUserId = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id

    const foundUserId = await User.findById(_id)

    if (!foundUserId) {
      return res.status(401).send('Unauthorized')
    }

    console.log("verifyUserId", foundUserId)

    res.status(200)
  } catch (error) {
    console.log(error)
  }
})

const handleAdminSignup = asyncHandler(async (req, res) => {
  try {
    const {
      _id,
      username,
      password,
      confirmPassword,
      nick,
      searchName,
      occupation,
      location,
      birthDate } = req.body

    if (password !== confirmPassword) {
      return res.sendStatus(400)
    }

    const foundDuplicate = await User.findOne({
      username: { $regex: new RegExp(username, 'i') }
    })

    if (foundDuplicate) {
      return res.status(409).send({ message: "This username is taken" });
    }

    await User.findOneAndUpdate(
      { _id },
      {
        username,
        password: bcrypt.hashSync(password, 10),
        nick,
        searchName,
        occupation,
        location,
        birthDate
      }
    )

    res.sendStatus(200)
  } catch (error) {

  }
})

const handleSignup = asyncHandler(async (req, res) => {
  try {
    const {
      username,
      password,
      confirmPassword,
      _id,
    } = req.body

    if (password !== confirmPassword) {
      return res.sendStatus(400)
    }

    const foundDuplicate = await User.findOne({
      username: { $regex: new RegExp(username, 'i') }
    })

    if (foundDuplicate) {
      return res.status(409).send({ message: "This username is taken" });
    }

    await User.findOneAndUpdate(
      { _id },
      {
        username,
        password: bcrypt.hashSync(password, 10),
        signupCompletion: 2 // this is not used for the admin users
      }
    )

    res.sendStatus(200)

  } catch (error) {
    console.log(error)
  }
})

module.exports = { verifyAdminId, verifyUserId, handleAdminSignup, handleSignup }
