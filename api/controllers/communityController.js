const asyncHandler = require('express-async-handler')
const Community = require('../models/communityModel')
const Relationship = require('../models/relationshipModel')
const User = require('../models/userModel')
const mongoose = require('mongoose')

const getCommunities = asyncHandler(async (req, res) => {
  try {

    const userId = req.params.userId
    console.log("userId", userId)

    const currentUser = await User.findOne({ _id: userId })

    if (!currentUser) {
      return res.send([])
    }

    if (currentUser.role.Mentor) {
      const foundChats = await Community.aggregate([
        {
          $match: {
            createdBy: currentUser._id
          }
        },
        {
          $lookup: {
            from: "users",
            localField: "createdBy",
            foreignField: "_id",
            as: "createdBy"
          }
        },
        {
          $unwind: "$createdBy"
        },
        {
          $project: {
            name: 1,
            description: 1,
            commonInterest: 1,
            selectedColor: 1,
            selectedImage: 1,
            createdByUserNick: "$createdBy.nick",
            createdByUserId: "$createdBy._id",
          }
        }
      ])

      return res.json(foundChats)
    } else if (currentUser.role.Student) {
      const foundRelationship = await Relationship.findOne({ learner: userId })
      const foundChats = await Community.aggregate([
        {
          $match: {
            createdBy: new mongoose.Types.ObjectId(foundRelationship.teacher)
          }
        },
        {
          $lookup: {
            from: "users",
            localField: "createdBy",
            foreignField: "_id",
            as: "createdBy"
          }
        },
        {
          $unwind: "$createdBy"
        },
        {
          $project: {
            name: 1,
            description: 1,
            commonInterest: 1,
            selectedColor: 1,
            selectedImage: 1,
            createdByUserNick: "$createdBy.nick",
            createdByUserId: "$createdBy._id",
          }
        }
      ])

      // console.log("foundChats", foundChats)
      return res.json(foundChats)
    }
  } catch (error) {
    console.log(error)
  }
})

const createCommunity = asyncHandler(async (req, res) => {
  try {
    const { name, description, createdBy, commonInterest, selectedColor, selectedImage } = req.body
    await Community.create({
      name,
      description,
      createdBy,
      commonInterest,
      selectedColor,
      selectedImage
    })
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
  }
})



const deleteCommunity = asyncHandler(async (req, res) => {
  try {
    const communityRoomId = req.params.communityRoomId;

    console.log(communityRoomId)

    if (!communityRoomId) {
      return res.status(400).json({ message: 'communityRoomId is missing in the request.' });
    }

    const foundChatroom = await Community.findOne({ _id: communityRoomId });

    if (!foundChatroom) {
      return res.status(404).json({ message: 'ChatRoom is not found.' });
    }

    await foundChatroom.deleteOne();

    res.status(200).json({ message: 'ChatRoom is deleted successfully.' });
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



module.exports = { getCommunities, createCommunity, deleteCommunity }