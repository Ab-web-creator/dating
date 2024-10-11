const asyncHandler = require('express-async-handler')
const ContactUs = require('../models/contactUsModel')


const getContactUs = asyncHandler(async (req, res) => {

  try {
    const foundContactUss = await ContactUs.find().populate({ path: 'informant', select: 'nick image searchName occupation location birthDate securityLevel     biography ' })
    res.json(foundContactUss)
  } catch (error) {
  }
})

const createContactUs = asyncHandler(async (req, res) => {
  try {
    const {
      userId,
      email,
      explanation,
      adminNote,
    } = req.body

    await ContactUs.create({
      informant: userId,
      email: email,
      message: explanation,
      adminNote: adminNote,
    })

    const foundContactUss = await ContactUs.find({
      informant: userId,
    })

    res.json(foundContactUss)
  } catch (error) {
    console.log(error)
  }
})


const deleteContactUs = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id

    await ContactUs.deleteOne({ _id })

    res.sendStatus(200)

  } catch (error) {
    console.log(error)
  }
})


module.exports = { getContactUs, createContactUs, deleteContactUs };