const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Review = require('../models/reviewModel')

const getReviews = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params

    const reviews = await Review.find({
      referencedUser: userId
    }).populate({
      path: 'author',
      select: 'nick'
    })


    res.json(reviews)
  } catch (error) {
    console.log(error)
  }
})

const createReview = asyncHandler(async (req, res) => {
  try {
    const { author, referencedUser, content } = req.body

    await Review.create({
      author,
      referencedUser,
      content
    })

    res.sendStatus(200)
  } catch (error) {
    console.log(error)
  }
})


const deleteReview = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id

    await Review.deleteOne({ _id })

    res.sendStatus(200)

  } catch (error) {
    console.log(error)
  }
})

module.exports = { getReviews, createReview, deleteReview }
