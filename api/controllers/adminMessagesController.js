const asyncHandler = require('express-async-handler')
const AdminMessages = require('../models/adminMessagesModel')


const getAdminMessages = asyncHandler(async (req, res) => {
  try {
    const foundAdminMessagess = await AdminMessages.find()
    res.json(foundAdminMessagess)
  } catch (error) {
  }
})



const createAdminMessages = async (req, res) => {
  const { receiver, content, hisMessage } = req.body;
  console.log('receiver', receiver)
  console.log('content', content)

  try {
    await AdminMessages.create({
      receiver,
      content,
      hisMessage,
    })

    res.sendStatus(200)

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


const deleteAdminMessages = asyncHandler(async (req, res) => {
  console.log('req.params', req.params)
  try {
    console.log('req.params', req.params)
    const _id = req.params.id

    await AdminMessages.deleteOne({ _id })

    res.sendStatus(200)

  } catch (error) {
    console.log(error)
  }
})


module.exports = { getAdminMessages, createAdminMessages, deleteAdminMessages };