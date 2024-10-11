const asyncHandler = require('express-async-handler')
const ReportPost = require('../models/reportPostModel')


const createReportPost = asyncHandler(async (req, res) => {
  try {
    const {
      userId,
      postId,
      explanation
    } = req.body

    await ReportPost.create({
      informant: userId,
      referredPost: postId,
      explanation: explanation
    })

    const foundReportPosts = await ReportPost.find({
      informant: userId,
    })

    res.json(foundReportPosts)
  } catch (error) {
    console.log(error)
  }
})





module.exports = { createReportPost }