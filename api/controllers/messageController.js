const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const Message = require('../models/messageModel')
const mongoose = require('mongoose')

const sendInitialMessage = asyncHandler(async (req, res) => {
  try {
    const { senderId, receiverId, content } = req.body

    await Message.create({
      sender: senderId,
      receiver: receiverId,
      content
    })

    res.sendStatus(200)

  } catch (error) {

  }
})

const getCorrespondents = asyncHandler(async (req, res) => {
  try {
    const { currentUserId } = req.params;

    const correspondents = await Message.aggregate([
      {
        $match: {
          $or: [
            { sender: new mongoose.Types.ObjectId(currentUserId) },
            { receiver: new mongoose.Types.ObjectId(currentUserId) }
          ],
          deletedBy: { $ne: new mongoose.Types.ObjectId(currentUserId) },
        },
      },
      {
        $sort: {
          createdAt: -1, // sort by descending order of message creation
        },
      },
      {
        $lookup: {
          from: 'users',
          let: { correspondentId: { $cond: [{ $eq: ["$sender", new mongoose.Types.ObjectId(currentUserId)] }, "$receiver", "$sender"] } },
          pipeline: [
            { $match: { $expr: { $eq: ["$_id", "$$correspondentId"] } } },
            { $project: { _id: 1, nick: 1, image: 1 } }
          ],
          as: 'correspondent'
        },
      },
      { $unwind: '$correspondent' },
      {
        $group: {
          _id: '$correspondent._id',
          nick: { $first: '$correspondent.nick' },
          image: { $first: '$correspondent.image' },
          content: { $first: '$content' },
          createdAt: { $first: '$createdAt' } //add this so we can sort based on this after grouping
        }
      },
      {
        $addFields: {
          isDeleteActivated: false,
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      }
    ])



    res.json(correspondents)
  } catch (error) {
    console.error(error);
  }
})



const getMessagesWithCorrespondent = asyncHandler(async (req, res) => {
  try {
    const { correspondentId, currentUserId } = req.params

    const messages = await Message.find({
      $or: [
        { sender: correspondentId, receiver: currentUserId },
        { sender: currentUserId, receiver: correspondentId },
      ],
      deletedBy: { $nin: [currentUserId] }
    }
    ).sort('createdAt')

    // .populate({
    //   path: 'sender',
    //   select: 'nick'
    // }).populate({
    //   path: 'receiver',
    //   select: 'nick'
    // })

    console.log("get", messages)

    res.json(messages)


  } catch (error) {
    console.log(error)
  }
})

const sendMessage = async (req, res) => {
  const { sender, receiver, content } = req.body;

  console.log(sender, receiver, content)

  try {
    await Message.create({
      sender,
      receiver,
      content,
    })

    res.sendStatus(200)

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteMessagesOnBothSides = asyncHandler(async (req, res) => {
  try {

    const { correspondentId, currentUserId } = req.params

    await Message.deleteMany(
      {
        $or: [
          { sender: correspondentId, receiver: currentUserId },
          { sender: currentUserId, receiver: correspondentId }
        ]
      }
    )

    const correspondents = await Message.aggregate([
      {
        $match: {
          $or: [
            { sender: new mongoose.Types.ObjectId(currentUserId) },
            { receiver: new mongoose.Types.ObjectId(currentUserId) }
          ],
          deletedBy: { $ne: new mongoose.Types.ObjectId(currentUserId) },
        },
      },
      {
        $sort: {
          createdAt: -1, // sort by descending order of message creation
        },
      },
      {
        $lookup: {
          from: 'users',
          let: { correspondentId: { $cond: [{ $eq: ["$sender", new mongoose.Types.ObjectId(currentUserId)] }, "$receiver", "$sender"] } },
          pipeline: [
            { $match: { $expr: { $eq: ["$_id", "$$correspondentId"] } } },
            { $project: { _id: 1, nick: 1, image: 1 } }
          ],
          as: 'correspondent'
        },
      },
      { $unwind: '$correspondent' },
      {
        $group: {
          _id: '$correspondent._id',
          nick: { $first: '$correspondent.nick' },
          image: { $first: '$correspondent.image' },
          content: { $first: '$content' }
        }
      },
      {
        $addFields: {
          isDeleteActivated: false,
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      }
    ])

    res.json(correspondents)

  } catch (error) {
    console.log(error)
  }
})

const deleteMessagesCurrentUserSide = asyncHandler(async (req, res) => {
  try {

    const { correspondentId, currentUserId } = req.params

    await Message.updateMany(
      {
        $or: [
          { sender: correspondentId, receiver: currentUserId },
          { sender: currentUserId, receiver: correspondentId }
        ]
      },
      { $push: { deletedBy: [currentUserId] } }
    )


    const correspondents = await Message.aggregate([
      {
        $match: {
          $or: [
            { sender: new mongoose.Types.ObjectId(currentUserId) },
            { receiver: new mongoose.Types.ObjectId(currentUserId) }
          ],
          deletedBy: { $ne: new mongoose.Types.ObjectId(currentUserId) },
        },
      },
      {
        $sort: {
          createdAt: -1, // sort by descending order of message creation
        },
      },
      {
        $lookup: {
          from: 'users',
          let: { correspondentId: { $cond: [{ $eq: ["$sender", new mongoose.Types.ObjectId(currentUserId)] }, "$receiver", "$sender"] } },
          pipeline: [
            { $match: { $expr: { $eq: ["$_id", "$$correspondentId"] } } },
            { $project: { _id: 1, nick: 1, image: 1 } }
          ],
          as: 'correspondent'
        },
      },
      { $unwind: '$correspondent' },
      {
        $group: {
          _id: '$correspondent._id',
          nick: { $first: '$correspondent.nick' },
          image: { $first: '$correspondent.image' },
          content: { $first: '$content' }
        }
      },
      {
        $addFields: {
          isDeleteActivated: false,
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      }
    ])

    console.log("correspondents", correspondents)

    res.json(correspondents)

  } catch (error) {
    console.log(error)
  }
})






module.exports = { sendInitialMessage, getCorrespondents, getMessagesWithCorrespondent, sendMessage, deleteMessagesCurrentUserSide, deleteMessagesOnBothSides }