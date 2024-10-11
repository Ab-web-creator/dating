const asyncHandler = require('express-async-handler')
const AskSupport = require('../models/askSupportModel')


const createAskSupport = asyncHandler(async (req, res) => {
  try {
    const {
      userId,
      teacherId,
      learnerId,
      role,
      retainCurrentRole,
      securityLevel,
      activity,
      explanation
    } = req.body

    await AskSupport.create({
      informant: userId,
      teacher: teacherId,
      learner: learnerId,
      role: role,
      retainCurrentRole: retainCurrentRole,
      securityLevel: securityLevel,
      activity: activity,
      explanation: explanation
    })

    const foundAskSupports = await AskSupport.find({
      informant: userId,
    })

    res.json(foundAskSupports)
  } catch (error) {
    console.log(error)
  }
})





module.exports = { createAskSupport }