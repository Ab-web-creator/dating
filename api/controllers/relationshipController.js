const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const Relationship = require('../models/relationshipModel')

const getLearnerRelationships = asyncHandler(async (req, res) => {
  try {
    const { teacherId } = req.params

    const foundRelationships = await Relationship.find({
      teacher: teacherId
    }).populate({
      path: 'learner',
      select: 'nick image searchName location birthDate occupation'
    })



    res.json(foundRelationships)

  } catch (error) {
    console.log(error)
  }
})

const getLearnerRelationship = asyncHandler(async (req, res) => {
  try {
    const { teacherId, learnerId } = req.params

    const foundRelationship = await Relationship.findOne({
      teacher: teacherId,
      learner: learnerId
    })

    // console.log("foundRelationship", foundRelationship)

    res.json(foundRelationship)

    // console.log("foundRelationship", foundRelationship)
  } catch (error) {
    console.log(error)
  }
})

const createLearnerRelationship = asyncHandler(async (req, res) => {
  try {
    const { teacher, learner } = req.body

    const foundUser = await User.findOne({ _id: teacher })

    const roles = Object.values(foundUser.role).filter(Boolean)

    if (![1111, 4444, 5555].some(role => roles.includes(role))) {
      return res.sendStatus(401)
    }

    await Relationship.create({
      teacher,
      learner
    })



    res.sendStatus(200)
  } catch (error) {
    console.log(error)
  }
})

const deleteLearnerRelationship = asyncHandler(async (req, res) => {
  try {
    const { teacherId, learnerId } = req.params

    await Relationship.deleteOne({
      teacher: teacherId,
      learner: learnerId
    })

    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
})


const getTeacherRelationships = asyncHandler(async (req, res) => {
  try {
    const { learnerId } = req.params

    const foundRelationships = await Relationship.find({
      learner: learnerId
    }).populate({
      path: 'teacher',
      select: 'nick image searchName location birthDate occupation'
    })
    res.json(foundRelationships)

  } catch (error) {
    console.log(error)
  }
})


module.exports = { getLearnerRelationships, getLearnerRelationship, createLearnerRelationship, deleteLearnerRelationship, getTeacherRelationships }