const asyncHandler = require('express-async-handler')
const Like = require('../models/likeModel');
const Post = require('../models/postModel');

const createLike = async (req, res) => {
  try {
    const { userId, postId } = req.body

    // console.log("userId", userId)
    // console.log("postId", postId)

    const createdLike = await Like.create({
      referredUser: userId,
      referredPost: postId
    })

    const foundPost = await Post.findOne({ _id: postId })
    const foundPostObject = foundPost.toObject()

    foundPostObject.like = { _id: createdLike._id, referredUser: userId }

    console.log("foundPostObject", foundPostObject)
    res.json(foundPostObject)

  } catch (error) {
    console.error(error);
  }
}

const deleteLike = async (req, res) => {
  try {

    const { id } = req.params

    // console.log("id", id)

    await Like.deleteOne({
      _id: id
    })

    res.sendStatus(204)

  } catch (error) {
    console.error(error);

  }
}

module.exports = { createLike, deleteLike }
