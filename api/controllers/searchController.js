const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const searchUsersForNewMessage = asyncHandler(async (req, res) => {
  try {
    const search = req.params.searchInput


    // ignore case 
    // look either in nick or searchName

    const foundUsers = await User.aggregate([
      {
        $match: {
          $or: [
            { nick: { $regex: search, $options: 'i' } },
            { searchName: { $regex: search, $options: 'i' } }
          ]
        }
      },
      {
        $sort: {
          nick: 1,
          searchName: 1
        }
      },
      {
        $project: {
          nick: 1,
          searchName: 1,
          image: 1
        }
      }
    ]);

    console.log("foundUsers", foundUsers)
    res.json(foundUsers)

  } catch (error) {
    console.log(error)
  }
})

module.exports = { searchUsersForNewMessage }