const Reply = require('../models/replyModel')
const Post = require('../models/postModel')
const asyncHandler = require('express-async-handler')

const getReplies = asyncHandler(async (req, res) => {
  try {

    const { replyId } = req.params

    const foundReplies = await Reply.find({
      targetedPost: replyId
    }).populate({
      path: "replier",
      select: "image nick searchName"
    })

    res.json(foundReplies)

  } catch (error) {
    console.log(error)
  }
})

const createReply = asyncHandler(async (req, res) => {
  try {
    const { targetedPost, replier, content } = req.body

    console.log("replier", replier)
    await Reply.create({
      targetedPost,
      replier,
      content
    })

    res.sendStatus(200)

  } catch (error) {
    console.log(error)
  }
})


const deleteReply = asyncHandler(async (req, res) => {
  try {
    const replyId = req.params.replyId;

    if (!replyId) {
      return res.status(400).json({ message: 'ReplyId is missing in the request.' });
    }

    const foundReply = await Reply.findOne({ _id: replyId });

    if (!foundReply) {
      return res.status(404).json({ message: 'Reply not found.' });
    }

    await foundReply.deleteOne();

    res.status(200).json({ message: 'Reply deleted successfully.' });
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = { createReply, getReplies, deleteReply }