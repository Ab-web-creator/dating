const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const findRole = require('../utils/findRole')

const getUsers = asyncHandler(async (req, res) => {
  try {

    if (req.query.name) {
      const { name } = req.query
      console.log('req.query.name?')
      const users = await User.find({ nick: { $regex: name, $options: 'i' } })
      return res.json(users)
    } else if (req.query.boardMembers) {
      console.log("query board member", req.query.boardMembers)
      const users = await User.find({ boardMember: true })
      res.json(users)
    } else {
      const { role } = req.query
      console.log('req.get users?')
      const currentRole = findRole(role)
      const roleName = Object.keys(currentRole)[0];

      const users = await User.find(
        { [`role.${roleName}`]: { $exists: true } },
        { password: 0, refreshToken: 0, updatedAt: 0, role: 0 }
      );

      res.json(users)
    }
  } catch (error) {
    console.log(error)
  }
})

const getUser = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id
    const foundUser = await User.findById({ _id: id })
    // console.log('foundUser', foundUser)
    res.json(foundUser)
  } catch (error) {
    console.log(error)
  }
})

const updateUserByAdmin = asyncHandler(async (req, res) => {
  // console.log(req.params.id)
  const {
    nick,
    searchName,
    familyStatus,
    childrenAmount,
    location,
    occupation,
    birthDate,
    biography,
    securityLevel,
    role,
    activity
  } = req.body

  await User.findOneAndUpdate(
    { _id: req.params.id },
    {
      nick,
      searchName,
      familyStatus,
      childrenAmount,
      location,
      occupation,
      birthDate,
      biography,
      securityLevel,
      role,
      activity
    }
  )

  res.send('this info is coming from BackEnd')
})

const isSearchNameExists = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id
    const searchName = req.query.searchName

    console.log(_id)
    console.log(searchName)

    const foundDuplicate = await User.findOne({
      searchName: { $regex: new RegExp(searchName, 'i') },
      _id: { $ne: _id }
    })

    console.log("foundDuplicate", foundDuplicate)

    if (foundDuplicate) {
      return res.status(409).send({ message: "The search name you chose is already taken" });
    }

    res.sendStatus(200)
  } catch (error) {

  }
})


// for fellowship (user gets the 3nd level signup completion) and for the next usage
const updateUser = asyncHandler(async (req, res) => {
  const _id = req.params.id
  const {
    nick,
    searchName,
    familyStatus,
    childrenAmount,
    location,
    occupation,
    birthDate,
    biography,
    image,
    backgroundImage,
    email
  } = req.body

  if (!nick ||
    !searchName ||
    !familyStatus ||
    !childrenAmount ||
    !location ||
    !occupation ||
    !birthDate ||
    !biography) {
    return res.status(422).json({ message: 'Enter all the details' })
  }

  const foundDuplicate = await User.findOne({
    searchName: { $regex: new RegExp(searchName, 'i') },
    _id: { $ne: _id }
  })

  if (foundDuplicate) {
    return res.status(409).send({ message: "The search name you chose is already taken" });
  }

  const updatedUser = await User.findOneAndUpdate(
    { _id: req.params.id },
    {
      nick,
      searchName,
      familyStatus,
      childrenAmount,
      location,
      occupation,
      birthDate,
      biography,
      image,
      backgroundImage,
      email,
      signupCompletion: 3
    },
    { new: true }
  )

  console.log("await", await updatedUser)

  res.json(updatedUser)
})

const updateBoardMembership = asyncHandler(async (req, res) => {
  try {

    await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        boardMember: req.body.boardMember
      },
      { new: true })

    const users = await User.find({ boardMember: true })
    res.json(users)


  } catch (error) {
    console.log(error)
  }
})

const deleteUser = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id

    console.log(_id)

    await User.deleteOne({ _id })

    res.sendStatus(200)

  } catch (error) {
    console.log(error)
  }
})

module.exports = { getUsers, getUser, isSearchNameExists, updateUser, updateUserByAdmin, updateBoardMembership, deleteUser }
