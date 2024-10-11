const asyncHandler = require('express-async-handler')
const Bookmark = require('../models/bookmarkModel')
const Post = require('../models/postModel')

const createBookmark = asyncHandler(async (req, res) => {
  try {

    // 1) we get in req.body userId and postId;
    // 2) we create a bookmark
    // 3) we retrieve the whole post mongodb object;
    // 4) we mutate that object to the usual one
    // 5) we update with the id of the bookmark that usual object of the post
    // something like 
    // foundPostObject = {

    // _id: 657f5ea04449ee139dd52d00,
    //   author: 657f5cd04449ee139dd52cf2,
    //   content: "General relativity, published in 1915, extended these ideas to include…"
    //   bookmark: { _id: 123123123123 } <= this is the newly created bookmark id is attached to the object of the post
    //   ...
    // }

    // we send the post object to the frontend, so that we can find and mutate the object in the posts array which is in global state and uses infinite scrolling

    const { userId, postId } = req.body

    const createdBookmark = await Bookmark.create({
      referredUser: userId,
      referredPost: postId
    })

    const foundPost = await Post.findOne({ _id: postId })

    const foundPostObject = foundPost.toObject()

    foundPostObject.bookmark = { _id: createdBookmark._id }

    res.json(foundPostObject)

  } catch (error) {
    console.error(error);

  }
})

const deleteBookmark = async (req, res) => {
  try {

    const { id } = req.params

    await Bookmark.deleteOne({
      _id: id
    })

    res.sendStatus(204)

  } catch (error) {
    console.error(error);

  }
}

module.exports = { createBookmark, deleteBookmark };