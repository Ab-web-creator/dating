const User = require('../models/userModel')
const Post = require('../models/postModel')
const Bookmark = require('../models/bookmarkModel')
const Relationship = require('../models/relationshipModel')
const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')


// getPost for replies
const getPost = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params

    console.log("get post", id)

    const foundPost = await Post.findOneAndUpdate({
      _id: id
    }, { $inc: { viewCount: 1 } }).populate({
      path: "author",
      select: "nick searchName image"
    })



    res.json(foundPost)
  } catch (error) {
    console.log(error)
  }
})

const getPosts = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params
    const { section } = req.query

    // Parsing page number from request's query parameters or fallback to default value 1 if not given
    const page = parseInt(req.query.page) || 1

    // Setting the amount of posts displayed per page depending from page number
    let postsPerPage
    if (page == 1) {
      postsPerPage = 6
    } else {
      postsPerPage = 10
    }

    console.log("profile page query", req.query)

    let posts


    // if it is a mentor then show all mentor's posts and include the posts of his students
    // that can be established by checking the relationships collection
    // where the mentor is the teacher and the student is the learner
    // so create a list of ids of this mentor's students and the id of the mentor himself as well
    const currentUser = await User.findOne({ _id: userId })

    if (!currentUser) {
      return res.send([])
    }
    let matchIds = [new mongoose.Types.ObjectId(userId)]

    if (currentUser.role.Mentor) {
      const studentsListOfTeacher = await Relationship.find({ teacher: new mongoose.Types.ObjectId(userId) }, { learner: 1, _id: 0 })
      for (let i = 0; i < studentsListOfTeacher.length; i++) {
        matchIds.push(studentsListOfTeacher[i].learner)
      }
      console.log("matchIds", matchIds)
    } else if (currentUser.role.Student) {
      const teacherOfStudent = await Relationship.findOne({ learner: new mongoose.Types.ObjectId(userId) }, { teacher: 1, _id: 0 })
      matchIds.push(teacherOfStudent.teacher)
      // find all students of this teacher, but exclude the current student since he is already included
      const studentsListOfTeacher = await Relationship.find({ teacher: teacherOfStudent.teacher, learner: { $ne: new mongoose.Types.ObjectId(userId) } }, { learner: 1, _id: 0 })
      for (let i = 0; i < studentsListOfTeacher.length; i++) {
        matchIds.push(studentsListOfTeacher[i].learner)
      }
    }


    if (section === 'AllPosts') {
      posts = await Post.aggregate([
        {
          $match: { author: { $in: matchIds } }
          // $match: { author: { $in: matchIds }, referencedPost: { $exists: false } }
        },
        // Sort documents by creation date in descending order, so most recent posts are first
        { $sort: { createdAt: -1 } },

        // Lookup (join) operation with bookmarks collection
        {
          $lookup: {
            from: "bookmarks", // The other collection
            let: { postId: "$_id" }, // Define variable to be used in the pipeline
            pipeline: [ // The aggregation pipeline to run against "bookmarks"
              {
                $match: { // Filters documents to pass only those who match condition.
                  $expr: { // Allows the use of aggregation expressions within the query language
                    $and: [
                      // Checks whether post ID matches with referredPost and if referredUser matches with userId 
                      { $eq: ["$$postId", "$referredPost"] },
                      { $eq: ["$referredUser", new mongoose.Types.ObjectId(userId)] }
                    ]
                  }
                }
              },
              // Specifies the fields to include in the documents that result from the aggregation
              { $project: { _id: 1, referredUser: 1 } }
            ],
            as: "bookmark" // Output array field
          }
        },

        // Deconstructs an array field to output a document for each element, keeps non-matching elements
        { $unwind: { path: "$bookmark", preserveNullAndEmptyArrays: true } },

        // The same logic applies here for "likes" as what was made for "bookmarks"
        {
          $lookup: {
            from: "likes",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$$postId", "$referredPost"] },
                      { $eq: ["$referredUser", new mongoose.Types.ObjectId(userId)] }
                    ]
                  }
                }
              },
              { $project: { _id: 1, referredUser: 1 } }
            ],
            as: "like"
          }
        },
        { $unwind: { path: "$like", preserveNullAndEmptyArrays: true } },

        // Lookup likes of the post without checking if they belong to the user, and save them as "likes"
        {
          $lookup: {
            from: "likes",
            localField: "_id",
            foreignField: "referredPost",
            as: "likes"
          }
        },

        // Counts likes and add the count to a newly created likeCount field
        {
          $addFields: {
            likeCount: {
              $size: "$likes"
            }
          }
        },

        // Excludes likes array from the output document, we only need the "likeCount" field
        {
          $project: {
            likes: 0
          }
        },

        // Logic repeats for "replies" and "posts" (reposts in this case), same as for likes and bookmarks
        {
          $lookup: {
            from: "replies",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$postId", "$targetedPost"]
                  }
                }
              },
              { $project: { _id: 1 } }
            ],
            as: "replies"
          }
        },
        {
          $addFields: {
            replyCount: {
              $size: "$replies"
            }
          }
        },
        {
          $project: {
            replies: 0
          }
        },
        {
          $lookup: {
            from: "posts",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$postId", "$referencedPost"]
                  }
                },
              },
              { $project: { _id: 1 } }
            ],
            as: "posts"
          }
        },
        {
          $addFields: {
            repostCount: {
              $size: "$posts"
            }
          }
        },
        {
          $project: {
            posts: 0
          }
        },

        // Join with "users" collection to get the author name and join with "posts" to get the referenced post
        {
          $lookup: {
            from: "users",
            localField: "author",
            foreignField: "_id",
            as: "author"
          }
        },
        {
          $lookup: {
            from: "posts",
            localField: "referencedPost",
            foreignField: "_id",
            as: "referencedPost"
          }
        },

        // Replace the author and referencedPost arrays with the first element in each array
        {
          $addFields: {
            "author": { $arrayElemAt: ["$author", 0] },
            "referencedPost": { $arrayElemAt: ["$referencedPost", 0] }
          }
        },

        // Join referencedPost with "users" collection to get the author of the referenced post
        {
          $lookup: {
            from: "users",
            localField: "referencedPost.author",
            foreignField: "_id",
            as: "referencedPost.author"
          }
        },

        // Replace the author of the referenced post with the first element
        {
          $addFields: {
            "referencedPost.author": { $arrayElemAt: ["$referencedPost.author", 0] }
          }
        },

        // Exclude password fields (from both actual author and referenced post's author)
        {
          $project: {
            "author.password": 0,
            "author.activity": 0,
            "author.backgroundImage": 0,
            "author.biography": 0,
            "author.birthDate": 0,
            "author.boardMember": 0,
            "author.childrenAmount": 0,
            "author.createdAt": 0,
            "author.email": 0,
            "author.familyStatus": 0,
            "author.location": 0,
            "author.occupation": 0,
            "author.refreshToken": 0,
            "author.role": 0,
            "author.securityLevel": 0,
            "author.signupCompletion": 0,
            "author.updatedAt": 0,
            "author.whatsapp": 0,
            "author.username": 0,
            "author.__v": 0,
            "referencedPost.author.password": 0,
            "referencedPost.author.activity": 0,
            "referencedPost.author.backgroundImage": 0,
            "referencedPost.author.biography": 0,
            "referencedPost.author.birthDate": 0,
            "referencedPost.author.boardMember": 0,
            "referencedPost.author.childrenAmount": 0,
            "referencedPost.author.createdAt": 0,
            "referencedPost.author.email": 0,
            "referencedPost.author.familyStatus": 0,
            "referencedPost.author.location": 0,
            "referencedPost.author.occupation": 0,
            "referencedPost.author.refreshToken": 0,
            "referencedPost.author.role": 0,
            "referencedPost.author.securityLevel": 0,
            "referencedPost.author.signupCompletion": 0,
            "referencedPost.author.updatedAt": 0,
            "referencedPost.author.whatsapp": 0,
            "referencedPost.author.username": 0,
            "referencedPost.author.__v": 0,
          },
        },

        // Skip documents (based off page count and posts per page), then limit the output to the postsPerPage number
        { $skip: (page - 1) * postsPerPage },
        { $limit: postsPerPage }
      ]).exec()
    } else if (section === 'TeachersPosts') {
      let teachers = await Relationship.find({ learner: new mongoose.Types.ObjectId(userId) }, { teacher: 1, _id: 0 });

      // Map on teachers to extract an array of teacher IDs
      let teachersIds = teachers.map(teacher => teacher.teacher);

      // find all documents in the relationships collection where the field learner equals the current userId 
      // get all teachers from those documents from the field "teacher" in those documents
      // get all posts where authors are all those teachers
      posts = await Post.aggregate([
        {
          $match: {
            // Filter documents in the posts collection where the author field is in the teachersIds array
            author: { $in: teachersIds }
          }
        },
        // Sort documents by creation date in descending order, so most recent posts are first
        { $sort: { createdAt: -1 } },

        // Lookup (join) operation with bookmarks collection
        {
          $lookup: {
            from: "bookmarks", // The other collection
            let: { postId: "$_id" }, // Define variable to be used in the pipeline
            pipeline: [ // The aggregation pipeline to run against "bookmarks"
              {
                $match: { // Filters documents to pass only those who match condition.
                  $expr: { // Allows the use of aggregation expressions within the query language
                    $and: [
                      // Checks whether post ID matches with referredPost and if referredUser matches with userId 
                      { $eq: ["$$postId", "$referredPost"] },
                      { $eq: ["$referredUser", new mongoose.Types.ObjectId(userId)] }
                    ]
                  }
                }
              },
              // Specifies the fields to include in the documents that result from the aggregation
              { $project: { _id: 1, referredUser: 1 } }
            ],
            as: "bookmark" // Output array field
          }
        },

        // Deconstructs an array field to output a document for each element, keeps non-matching elements
        { $unwind: { path: "$bookmark", preserveNullAndEmptyArrays: true } },

        // The same logic applies here for "likes" as what was made for "bookmarks"
        {
          $lookup: {
            from: "likes",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$$postId", "$referredPost"] },
                      { $eq: ["$referredUser", new mongoose.Types.ObjectId(userId)] }
                    ]
                  }
                }
              },
              { $project: { _id: 1, referredUser: 1 } }
            ],
            as: "like"
          }
        },
        { $unwind: { path: "$like", preserveNullAndEmptyArrays: true } },

        // Lookup likes of the post without checking if they belong to the user, and save them as "likes"
        {
          $lookup: {
            from: "likes",
            localField: "_id",
            foreignField: "referredPost",
            as: "likes"
          }
        },

        // Counts likes and add the count to a newly created likeCount field
        {
          $addFields: {
            likeCount: {
              $size: "$likes"
            }
          }
        },

        // Excludes likes array from the output document, we only need the "likeCount" field
        {
          $project: {
            likes: 0
          }
        },

        // Logic repeats for "replies" and "posts" (reposts in this case), same as for likes and bookmarks
        {
          $lookup: {
            from: "replies",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$postId", "$targetedPost"]
                  }
                }
              },
              { $project: { _id: 1 } }
            ],
            as: "replies"
          }
        },
        {
          $addFields: {
            replyCount: {
              $size: "$replies"
            }
          }
        },
        {
          $project: {
            replies: 0
          }
        },
        {
          $lookup: {
            from: "posts",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$postId", "$referencedPost"]
                  }
                },
              },
              { $project: { _id: 1 } }
            ],
            as: "posts"
          }
        },
        {
          $addFields: {
            repostCount: {
              $size: "$posts"
            }
          }
        },
        {
          $project: {
            posts: 0
          }
        },

        // Join with "users" collection to get the author name and join with "posts" to get the referenced post
        {
          $lookup: {
            from: "users",
            localField: "author",
            foreignField: "_id",
            as: "author"
          }
        },
        {
          $lookup: {
            from: "posts",
            localField: "referencedPost",
            foreignField: "_id",
            as: "referencedPost"
          }
        },

        // Replace the author and referencedPost arrays with the first element in each array
        {
          $addFields: {
            "author": { $arrayElemAt: ["$author", 0] },
            "referencedPost": { $arrayElemAt: ["$referencedPost", 0] }
          }
        },

        // Join referencedPost with "users" collection to get the author of the referenced post
        {
          $lookup: {
            from: "users",
            localField: "referencedPost.author",
            foreignField: "_id",
            as: "referencedPost.author"
          }
        },

        // Replace the author of the referenced post with the first element
        {
          $addFields: {
            "referencedPost.author": { $arrayElemAt: ["$referencedPost.author", 0] }
          }
        },

        // Exclude password fields (from both actual author and referenced post's author)
        {
          $project: {
            "author.password": 0,
            "author.activity": 0,
            "author.backgroundImage": 0,
            "author.biography": 0,
            "author.birthDate": 0,
            "author.boardMember": 0,
            "author.childrenAmount": 0,
            "author.createdAt": 0,
            "author.email": 0,
            "author.familyStatus": 0,
            "author.location": 0,
            "author.occupation": 0,
            "author.refreshToken": 0,
            "author.role": 0,
            "author.securityLevel": 0,
            "author.signupCompletion": 0,
            "author.updatedAt": 0,
            "author.whatsapp": 0,
            "author.username": 0,
            "author.__v": 0,
            "referencedPost.author.password": 0,
            "referencedPost.author.activity": 0,
            "referencedPost.author.backgroundImage": 0,
            "referencedPost.author.biography": 0,
            "referencedPost.author.birthDate": 0,
            "referencedPost.author.boardMember": 0,
            "referencedPost.author.childrenAmount": 0,
            "referencedPost.author.createdAt": 0,
            "referencedPost.author.email": 0,
            "referencedPost.author.familyStatus": 0,
            "referencedPost.author.location": 0,
            "referencedPost.author.occupation": 0,
            "referencedPost.author.refreshToken": 0,
            "referencedPost.author.role": 0,
            "referencedPost.author.securityLevel": 0,
            "referencedPost.author.signupCompletion": 0,
            "referencedPost.author.updatedAt": 0,
            "referencedPost.author.whatsapp": 0,
            "referencedPost.author.username": 0,
            "referencedPost.author.__v": 0,
          },
        },

        // Skip documents (based off page count and posts per page), then limit the output to the postsPerPage number
        { $skip: (page - 1) * postsPerPage },
        { $limit: postsPerPage }
      ])
    } else if (section === 'StudentsPosts') {
      let learners = await Relationship.find({ teacher: new mongoose.Types.ObjectId(userId) }, { learner: 1, _id: 0 })

      let learnersIds = learners.map(element => element.learner)

      posts = await Post.aggregate([
        {
          $match: {
            // Filter documents in the posts collection where the author field is in the learnersIds array
            author: { $in: learnersIds }
          }
        },
        // Sort documents by creation date in descending order, so most recent posts are first
        { $sort: { createdAt: -1 } },

        // Lookup (join) operation with bookmarks collection
        {
          $lookup: {
            from: "bookmarks", // The other collection
            let: { postId: "$_id" }, // Define variable to be used in the pipeline
            pipeline: [ // The aggregation pipeline to run against "bookmarks"
              {
                $match: { // Filters documents to pass only those who match condition.
                  $expr: { // Allows the use of aggregation expressions within the query language
                    $and: [
                      // Checks whether post ID matches with referredPost and if referredUser matches with userId 
                      { $eq: ["$$postId", "$referredPost"] },
                      { $eq: ["$referredUser", new mongoose.Types.ObjectId(userId)] }
                    ]
                  }
                }
              },
              // Specifies the fields to include in the documents that result from the aggregation
              { $project: { _id: 1, referredUser: 1 } }
            ],
            as: "bookmark" // Output array field
          }
        },

        // Deconstructs an array field to output a document for each element, keeps non-matching elements
        { $unwind: { path: "$bookmark", preserveNullAndEmptyArrays: true } },

        // The same logic applies here for "likes" as what was made for "bookmarks"
        {
          $lookup: {
            from: "likes",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$$postId", "$referredPost"] },
                      { $eq: ["$referredUser", new mongoose.Types.ObjectId(userId)] }
                    ]
                  }
                }
              },
              { $project: { _id: 1, referredUser: 1 } }
            ],
            as: "like"
          }
        },
        { $unwind: { path: "$like", preserveNullAndEmptyArrays: true } },

        // Lookup likes of the post without checking if they belong to the user, and save them as "likes"
        {
          $lookup: {
            from: "likes",
            localField: "_id",
            foreignField: "referredPost",
            as: "likes"
          }
        },

        // Counts likes and add the count to a newly created likeCount field
        {
          $addFields: {
            likeCount: {
              $size: "$likes"
            }
          }
        },

        // Excludes likes array from the output document, we only need the "likeCount" field
        {
          $project: {
            likes: 0
          }
        },

        // Logic repeats for "replies" and "posts" (reposts in this case), same as for likes and bookmarks
        {
          $lookup: {
            from: "replies",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$postId", "$targetedPost"]
                  }
                }
              },
              { $project: { _id: 1 } }
            ],
            as: "replies"
          }
        },
        {
          $addFields: {
            replyCount: {
              $size: "$replies"
            }
          }
        },
        {
          $project: {
            replies: 0
          }
        },
        {
          $lookup: {
            from: "posts",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$postId", "$referencedPost"]
                  }
                },
              },
              { $project: { _id: 1 } }
            ],
            as: "posts"
          }
        },
        {
          $addFields: {
            repostCount: {
              $size: "$posts"
            }
          }
        },
        {
          $project: {
            posts: 0
          }
        },

        // Join with "users" collection to get the author name and join with "posts" to get the referenced post
        {
          $lookup: {
            from: "users",
            localField: "author",
            foreignField: "_id",
            as: "author"
          }
        },
        {
          $lookup: {
            from: "posts",
            localField: "referencedPost",
            foreignField: "_id",
            as: "referencedPost"
          }
        },

        // Replace the author and referencedPost arrays with the first element in each array
        {
          $addFields: {
            "author": { $arrayElemAt: ["$author", 0] },
            "referencedPost": { $arrayElemAt: ["$referencedPost", 0] }
          }
        },

        // Join referencedPost with "users" collection to get the author of the referenced post
        {
          $lookup: {
            from: "users",
            localField: "referencedPost.author",
            foreignField: "_id",
            as: "referencedPost.author"
          }
        },

        // Replace the author of the referenced post with the first element
        {
          $addFields: {
            "referencedPost.author": { $arrayElemAt: ["$referencedPost.author", 0] }
          }
        },

        // Exclude password fields (from both actual author and referenced post's author)
        {
          $project: {
            "author.password": 0,
            "author.activity": 0,
            "author.backgroundImage": 0,
            "author.biography": 0,
            "author.birthDate": 0,
            "author.boardMember": 0,
            "author.childrenAmount": 0,
            "author.createdAt": 0,
            "author.email": 0,
            "author.familyStatus": 0,
            "author.location": 0,
            "author.occupation": 0,
            "author.refreshToken": 0,
            "author.role": 0,
            "author.securityLevel": 0,
            "author.signupCompletion": 0,
            "author.updatedAt": 0,
            "author.whatsapp": 0,
            "author.username": 0,
            "author.__v": 0,
            "referencedPost.author.password": 0,
            "referencedPost.author.activity": 0,
            "referencedPost.author.backgroundImage": 0,
            "referencedPost.author.biography": 0,
            "referencedPost.author.birthDate": 0,
            "referencedPost.author.boardMember": 0,
            "referencedPost.author.childrenAmount": 0,
            "referencedPost.author.createdAt": 0,
            "referencedPost.author.email": 0,
            "referencedPost.author.familyStatus": 0,
            "referencedPost.author.location": 0,
            "referencedPost.author.occupation": 0,
            "referencedPost.author.refreshToken": 0,
            "referencedPost.author.role": 0,
            "referencedPost.author.securityLevel": 0,
            "referencedPost.author.signupCompletion": 0,
            "referencedPost.author.updatedAt": 0,
            "referencedPost.author.whatsapp": 0,
            "referencedPost.author.username": 0,
            "referencedPost.author.__v": 0,
          },
        },

        // Skip documents (based off page count and posts per page), then limit the output to the postsPerPage number
        { $skip: (page - 1) * postsPerPage },
        { $limit: postsPerPage }
      ])
    }

    res.json(posts);
  } catch (error) {
    console.log(error);
  }
})


// profile page
const getPostsByAuthor = asyncHandler(async (req, res) => {
  try {
    const { currentUserId, userId } = req.params

    const page = parseInt(req.query.page) || 1
    let postsPerPage

    if (page == 1) {
      postsPerPage = 6
    } else {
      postsPerPage = 12
    }

    const { section } = req.query

    let posts



    if (section === 'Posts') {
      posts = await Post.aggregate([
        { $match: { author: new mongoose.Types.ObjectId(userId), referencedPost: { $exists: false } } },
        { $sort: { createdAt: -1 } },
        {
          $lookup: {
            from: "bookmarks",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$$postId", "$referredPost"] },
                      { $eq: ["$referredUser", new mongoose.Types.ObjectId(currentUserId)] }
                    ]
                  }
                }
              },
              { $project: { _id: 1, referredUser: 1 } }
            ],
            as: "bookmark"
          }
        },
        { $unwind: { path: "$bookmark", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "likes",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$$postId", "$referredPost"] },
                      { $eq: ["$referredUser", new mongoose.Types.ObjectId(userId)] }
                    ]
                  }
                }
              },
              { $project: { _id: 1, referredUser: 1 } }
            ],
            as: "like"
          }
        },
        { $unwind: { path: "$like", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "likes",
            localField: "_id",
            foreignField: "referredPost",
            as: "likes"
          }
        },
        {
          $addFields: {
            likeCount: {
              $size: "$likes"
            }
          }
        },
        {
          $project: {
            likes: 0
          }
        },
        {
          $lookup: {
            from: "replies",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$postId", "$targetedPost"]
                  }
                }
              }
            ],
            as: "replies"
          }
        },
        {
          $addFields: {
            replyCount: {
              $size: "$replies"
            }
          }
        },
        {
          $project: {
            replies: 0
          }
        },
        {
          $lookup: {
            from: "posts",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$postId", "$referencedPost"]
                  }
                }
              }
            ],
            as: "posts"
          }
        },
        {
          $addFields: {
            repostCount: {
              $size: "$posts"
            }
          }
        },
        {
          $project: {
            posts: 0
          }
        },
        {
          $lookup: {
            from: 'users',
            localField: 'author',
            foreignField: '_id',
            as: 'author'
          }
        },
        {
          $unwind: '$author'
        },
        {
          $project: {
            "author": {
              "_id": "$author._id",
              "nick": "$author.nick",
              "searchName": "$author.searchName",
              "image": "$author.image"
            },
            "bookmark": 1,
            "image": 1,
            "content": 1,
            "like": 1,
            "createdAt": 1,
            "likeCount": 1,
            "replyCount": 1,
            "repostCount": 1,
            "reposted": 1,
            "updatedAt": 1,
            "__v": 1,
            "__id": 1,
            "viewCount": 1
          }
        },
        { $skip: (page - 1) * postsPerPage },
        { $limit: postsPerPage }
      ]).exec();
    } else if (section === 'Replies') {
      posts = await Post.aggregate([
        // beginning of matching only those posts/reposts where the user have replied
        {
          $lookup: {
            from: "replies",
            localField: "_id",
            foreignField: "targetedPost",
            as: "matched_replies"
          },
        },
        {
          $match: {
            "matched_replies.replier": new mongoose.Types.ObjectId(userId)
          }
        },
        {
          $project: {
            "matched_replies": false
          }
        },
        // ending of matching only those posts/reposts where the user have replied
        { $sort: { createdAt: -1 } },
        {
          $lookup: {
            from: "bookmarks",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$$postId", "$referredPost"] },
                      { $eq: ["$referredUser", new mongoose.Types.ObjectId(currentUserId)] }
                    ]
                  }
                }
              },
              { $project: { _id: 1, referredUser: 1 } }
            ],
            as: "bookmark"
          }
        },
        { $unwind: { path: "$bookmark", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "likes",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$$postId", "$referredPost"] },
                      { $eq: ["$referredUser", new mongoose.Types.ObjectId(userId)] }
                    ]
                  }
                }
              },
              { $project: { _id: 1, referredUser: 1 } }
            ],
            as: "like"
          }
        },
        { $unwind: { path: "$like", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "likes",
            localField: "_id",
            foreignField: "referredPost",
            as: "likes"
          }
        },
        {
          $addFields: {
            likeCount: {
              $size: "$likes"
            }
          }
        },
        {
          $project: {
            likes: 0
          }
        },
        {
          $lookup: {
            from: "replies",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$postId", "$targetedPost"]
                  }
                }
              }
            ],
            as: "replies"
          }
        },
        {
          $addFields: {
            replyCount: {
              $size: "$replies"
            }
          }
        },
        {
          $project: {
            replies: 0
          }
        },
        {
          $lookup: {
            from: "posts",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$postId", "$referencedPost"]
                  }
                }
              }
            ],
            as: "posts"
          }
        },
        {
          $addFields: {
            repostCount: {
              $size: "$posts"
            }
          }
        },
        {
          $project: {
            posts: 0
          }
        },
        // beginning of populating the author of the post
        {
          $lookup: {
            from: 'users',
            localField: 'author',
            foreignField: '_id',
            as: 'author'
          }
        },
        {
          $unwind: '$author'
        },

        {
          $project: {
            "author": {
              "password": 0,
              "role": 0,
              "username": 0,
              "activity": 0,
              "backgroundImage": 0,
              "biography": 0,
              "birthDate": 0,
              "boardMember": 0,
              "childrenAmount": 0,
              "createdAt": 0,
              "email": 0,
              "familyStatus": 0,
              "location": 0,
              "occupation": 0,
              "refreshToken": 0,
              "securityLevel": 0,
              "signupCompletion": 0,
              "updatedAt": 0,
              "whatsapp": 0,
              "__v": 0
            }
          }
        },
        // ending of populating the author of the post

        // -- beginning of unwinding (i.e. populating) the referencedPost and the author of the referencedPost)
        {
          $lookup: {
            from: "posts",
            localField: 'referencedPost',
            foreignField: '_id',
            as: 'referencedPost'
          }
        },
        {
          // preserveNullAndEmptyArrays: true - we need this in cases when it is an original post and does not have referencedPost
          // if we don't add this, then we are basically filtering and leaving only the posts (i.e. reposts) upon which these unwinding can be done
          $unwind: { path: "$referencedPost", preserveNullAndEmptyArrays: true }
        },
        {
          $lookup: {
            from: 'users',
            localField: 'referencedPost.author',
            foreignField: '_id',
            as: 'referencedPost.author'
          }
        },
        {
          // preserveNullAndEmptyArrays: true - we need this in cases when it is an original post and does not have referencedPost
          // if we don't add this, then we are basically filtering and leaving only the posts (i.e. reposts) upon which these unwinding can be done
          $unwind: { path: "$referencedPost.author", preserveNullAndEmptyArrays: true }
        },
        {
          $project: {
            "referencedPost.author": {
              "password": 0,
              "role": 0,
              "username": 0,
              "activity": 0,
              "backgroundImage": 0,
              "biography": 0,
              "birthDate": 0,
              "boardMember": 0,
              "childrenAmount": 0,
              "createdAt": 0,
              "email": 0,
              "familyStatus": 0,
              "location": 0,
              "occupation": 0,
              "refreshToken": 0,
              "securityLevel": 0,
              "signupCompletion": 0,
              "updatedAt": 0,
              "whatsapp": 0,
              "__v": 0
            }
          }
        },
        // -- end of unwinding (i.e. populating) the referencedPost and the author of the referencedPost)
        { $skip: (page - 1) * postsPerPage },
        { $limit: postsPerPage }
      ])

    } else if (section === 'Media') {
      posts = await Post.aggregate([
        {
          $match: {
            $and: [
              { author: new mongoose.Types.ObjectId(userId), referencedPost: { $exists: false } },
              { image: { $exists: true, $ne: null } }
            ]
          }
        },
        { $sort: { createdAt: -1 } },
        {
          $lookup: {
            from: "bookmarks",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$$postId", "$referredPost"] },
                      { $eq: ["$referredUser", new mongoose.Types.ObjectId(currentUserId)] }
                    ]
                  }
                }
              },
              { $project: { _id: 1, referredUser: 1 } }
            ],
            as: "bookmark"
          }
        },
        { $unwind: { path: "$bookmark", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "likes",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$$postId", "$referredPost"] },
                      { $eq: ["$referredUser", new mongoose.Types.ObjectId(userId)] }
                    ]
                  }
                }
              },
              { $project: { _id: 1, referredUser: 1 } }
            ],
            as: "like"
          }
        },
        { $unwind: { path: "$like", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "likes",
            localField: "_id",
            foreignField: "referredPost",
            as: "likes"
          }
        },
        {
          $addFields: {
            likeCount: {
              $size: "$likes"
            }
          }
        },
        {
          $project: {
            likes: 0
          }
        },
        {
          $lookup: {
            from: "replies",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$postId", "$targetedPost"]
                  }
                }
              }
            ],
            as: "replies"
          }
        },
        {
          $addFields: {
            replyCount: {
              $size: "$replies"
            }
          }
        },
        {
          $project: {
            replies: 0
          }
        },
        {
          $lookup: {
            from: "posts",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$postId", "$referencedPost"]
                  }
                }
              }
            ],
            as: "posts"
          }
        },
        {
          $addFields: {
            repostCount: {
              $size: "$posts"
            }
          }
        },
        {
          $project: {
            posts: 0
          }
        },
        {
          $lookup: {
            from: 'users',
            localField: 'author',
            foreignField: '_id',
            as: 'author'
          }
        },
        {
          $unwind: '$author'
        },
        {
          $project: {
            "author": {
              "_id": "$author._id",
              "nick": "$author.nick",
              "searchName": "$author.searchName",
              "image": "$author.image"
            },
            "bookmark": 1,
            "image": 1,
            "content": 1,
            "like": 1,
            "createdAt": 1,
            "likeCount": 1,
            "replyCount": 1,
            "repostCount": 1,
            "reposted": 1,
            "updatedAt": 1,
            "__v": 1,
            "__id": 1,
            "viewCount": 1
          }
        },
        { $skip: (page - 1) * postsPerPage },
        { $limit: postsPerPage }
      ])
    } else if (section === "Likes") {
      posts = await Post.aggregate([
        // beginning of matching only those posts/reposts which the user liked
        {
          $lookup: {
            from: "likes",
            localField: "_id",
            foreignField: "referredPost",
            as: "matched_likes"
          }
        },
        {
          $match: {
            "matched_likes.referredUser": new mongoose.Types.ObjectId(userId)
          }
        },
        {
          $project: {
            "matched_likes": false
          }
        },
        // ending of matching only those posts/reposts which the user liked
        { $sort: { createdAt: -1 } },
        {
          $lookup: {
            from: "bookmarks",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$$postId", "$referredPost"] },
                      { $eq: ["$referredUser", new mongoose.Types.ObjectId(currentUserId)] }
                    ]
                  }
                }
              },
              { $project: { _id: 1, referredUser: 1 } }
            ],
            as: "bookmark"
          }
        },
        { $unwind: { path: "$bookmark", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "likes",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$$postId", "$referredPost"] },
                      { $eq: ["$referredUser", new mongoose.Types.ObjectId(userId)] }
                    ]
                  }
                }
              },
              { $project: { _id: 1, referredUser: 1 } }
            ],
            as: "like"
          }
        },
        { $unwind: { path: "$like", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "likes",
            localField: "_id",
            foreignField: "referredPost",
            as: "likes"
          }
        },
        {
          $addFields: {
            likeCount: {
              $size: "$likes"
            }
          }
        },
        {
          $project: {
            likes: 0
          }
        },
        {
          $lookup: {
            from: "replies",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$postId", "$targetedPost"]
                  }
                }
              }
            ],
            as: "replies"
          }
        },
        {
          $addFields: {
            replyCount: {
              $size: "$replies"
            }
          }
        },
        {
          $project: {
            replies: 0
          }
        },
        {
          $lookup: {
            from: "posts",
            let: { postId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$postId", "$referencedPost"]
                  }
                }
              }
            ],
            as: "posts"
          }
        },
        {
          $addFields: {
            repostCount: {
              $size: "$posts"
            }
          }
        },
        {
          $project: {
            posts: 0
          }
        },
        // beginning of populating the author of the post
        {
          $lookup: {
            from: 'users',
            localField: 'author',
            foreignField: '_id',
            as: 'author'
          }
        },
        {
          $unwind: '$author'
        },

        {
          $project: {
            "author": {
              "password": 0,
              "role": 0,
              "username": 0,
              "activity": 0,
              "backgroundImage": 0,
              "biography": 0,
              "birthDate": 0,
              "boardMember": 0,
              "childrenAmount": 0,
              "createdAt": 0,
              "email": 0,
              "familyStatus": 0,
              "location": 0,
              "occupation": 0,
              "refreshToken": 0,
              "securityLevel": 0,
              "signupCompletion": 0,
              "updatedAt": 0,
              "whatsapp": 0,
              "__v": 0
            }
          }
        },
        // ending of populating the author of the post

        // -- beginning of unwinding (i.e. populating) the referencedPost and the author of the referencedPost)
        {
          $lookup: {
            from: "posts",
            localField: 'referencedPost',
            foreignField: '_id',
            as: 'referencedPost'
          }
        },
        {
          // preserveNullAndEmptyArrays: true - we need this in cases when it is an original post and does not have referencedPost
          // if we don't add this, then we are basically filtering and leaving only the posts (i.e. reposts) upon which these unwinding can be done
          $unwind: { path: "$referencedPost", preserveNullAndEmptyArrays: true }
        },
        {
          $lookup: {
            from: 'users',
            localField: 'referencedPost.author',
            foreignField: '_id',
            as: 'referencedPost.author'
          }
        },
        {
          // preserveNullAndEmptyArrays: true - we need this in cases when it is an original post and does not have referencedPost
          // if we don't add this, then we are basically filtering and leaving only the posts (i.e. reposts) upon which these unwinding can be done
          $unwind: { path: "$referencedPost.author", preserveNullAndEmptyArrays: true }
        },
        {
          $project: {
            "referencedPost.author": {
              "password": 0,
              "role": 0,
              "username": 0,
              "activity": 0,
              "backgroundImage": 0,
              "biography": 0,
              "birthDate": 0,
              "boardMember": 0,
              "childrenAmount": 0,
              "createdAt": 0,
              "email": 0,
              "familyStatus": 0,
              "location": 0,
              "occupation": 0,
              "refreshToken": 0,
              "securityLevel": 0,
              "signupCompletion": 0,
              "updatedAt": 0,
              "whatsapp": 0,
              "__v": 0
            }
          }
        },
        // -- end of unwinding (i.e. populating) the referencedPost and the author of the referencedPost)
        { $skip: (page - 1) * postsPerPage },
        { $limit: postsPerPage }
      ])
    }

    res.json(posts);
  } catch (error) {
    console.log(error);
  }
})

const getPostsByUserBookmarked = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params

    const page = parseInt(req.query.page) || 1

    let postsPerPage

    if (page == 1) {
      postsPerPage = 6
    } else {
      postsPerPage = 12
    }

    const posts = await Post.aggregate([
      { $sort: { createdAt: -1 } },
      {
        $lookup: {
          from: "bookmarks",
          let: { postId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$$postId", "$referredPost"] },
                    { $eq: ["$referredUser", new mongoose.Types.ObjectId(userId)] }
                  ]
                }
              }
            },
            { $project: { _id: 1, referredUser: 1 } }
          ],
          as: "bookmark"
        }
      },
      { $unwind: { path: "$bookmark", preserveNullAndEmptyArrays: false } },
      {
        $lookup: {
          from: "likes",
          let: { postId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$$postId", "$referredPost"] },
                    { $eq: ["$referredUser", new mongoose.Types.ObjectId(userId)] }
                  ]
                }
              }
            },
            { $project: { _id: 1, referredUser: 1 } }
          ],
          as: "like"
        }
      },
      { $unwind: { path: "$like", preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: "likes",
          localField: "_id",
          foreignField: "referredPost",
          as: "likes"
        }
      },
      {
        $addFields: {
          likeCount: {
            $size: "$likes"
          }
        }
      },
      {
        $project: {
          likes: 0
        }
      },
      {
        $lookup: {
          from: "replies",
          let: { postId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$postId", "$targetedPost"]
                }
              }
            },
            { $project: { _id: 1 } }
          ],
          as: "replies"
        }
      },
      {
        $addFields: {
          replyCount: {
            $size: "$replies"
          }
        }
      },
      {
        $project: {
          replies: 0
        }
      },
      {
        $lookup: {
          from: "posts",
          let: { postId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$postId", "$referencedPost"]
                }
              },
            },
            { $project: { _id: 1 } }
          ],
          as: "posts"
        }
      },
      {
        $addFields: {
          repostCount: {
            $size: "$posts"
          }
        }
      },
      {
        $project: {
          posts: 0
        }
      },
      {
        $lookup: {
          from: "users",
          localField: "author",
          foreignField: "_id",
          as: "author"
        }
      },
      {
        $lookup: {
          from: "posts",
          localField: "referencedPost",
          foreignField: "_id",
          as: "referencedPost"
        }
      },
      {
        $addFields: {
          "author": { $arrayElemAt: ["$author", 0] },
          "referencedPost": { $arrayElemAt: ["$referencedPost", 0] }
        }
      },
      {
        $lookup: {
          from: "users",
          localField: "referencedPost.author",
          foreignField: "_id",
          as: "referencedPost.author"
        }
      },
      {
        $addFields: {
          "referencedPost.author": { $arrayElemAt: ["$referencedPost.author", 0] }
        }
      },
      {
        $project: {
          "author.password": 0,
          "author.activity": 0,
          "author.backgroundImage": 0,
          "author.biography": 0,
          "author.birthDate": 0,
          "author.boardMember": 0,
          "author.childrenAmount": 0,
          "author.createdAt": 0,
          "author.email": 0,
          "author.familyStatus": 0,
          "author.location": 0,
          "author.occupation": 0,
          "author.refreshToken": 0,
          "author.role": 0,
          "author.securityLevel": 0,
          "author.signupCompletion": 0,
          "author.updatedAt": 0,
          "author.whatsapp": 0,
          "author.username": 0,
          "author.__v": 0,
          "referencedPost.author.password": 0,
          "referencedPost.author.activity": 0,
          "referencedPost.author.backgroundImage": 0,
          "referencedPost.author.biography": 0,
          "referencedPost.author.birthDate": 0,
          "referencedPost.author.boardMember": 0,
          "referencedPost.author.childrenAmount": 0,
          "referencedPost.author.createdAt": 0,
          "referencedPost.author.email": 0,
          "referencedPost.author.familyStatus": 0,
          "referencedPost.author.location": 0,
          "referencedPost.author.occupation": 0,
          "referencedPost.author.refreshToken": 0,
          "referencedPost.author.role": 0,
          "referencedPost.author.securityLevel": 0,
          "referencedPost.author.signupCompletion": 0,
          "referencedPost.author.updatedAt": 0,
          "referencedPost.author.whatsapp": 0,
          "referencedPost.author.username": 0,
          "referencedPost.author.__v": 0,
        },
      },
      { $skip: (page - 1) * postsPerPage },
      { $limit: postsPerPage }
    ]).exec()

    res.json(posts)

  } catch (error) {
    console.log(error)
  }
})

const createPost = asyncHandler(async (req, res) => {
  try {
    // we are using this endpoint to create either a new post or to repost an existing post
    // we are sending in response the whole newly created document and mutating locally on frontend the array of posts, so that we:
    // - get the _id of the created post;
    // - mutate the current array posts by placing the received post object at the top of array

    const { userId, content, image, referencedPost, repost } = req.body

    const isRepostTrue = repost ? true : false

    const newPost = await Post.create({
      author: userId,
      content,
      image,
      referencedPost,
      reposted: isRepostTrue
    })

    console.log("newPost", newPost)


    await newPost.populate({
      path: 'author',
      select: '_id nick searchName image'
    })

    if (isRepostTrue) {
      await newPost.populate({
        path: 'referencedPost',
      })

      await newPost.populate({
        path: 'referencedPost',
        populate: { path: 'author', select: '_id nick searchName image' }
      })
    }

    let postWithAdditionalFields = newPost.toObject()

    postWithAdditionalFields = {
      ...postWithAdditionalFields,
      likeCount: 0,
      replyCount: 0,
      repostCount: 0,
      viewCount: 0
    }



    res.json(postWithAdditionalFields)

  } catch (error) {
    console.error('Error on create post:', error)
  }
})



const deletePost = asyncHandler(async (req, res) => {
  try {
    const postId = req.params.postId;

    if (!postId) {
      return res.status(400).json({ message: 'PostId is missing in the request.' });
    }

    const foundPost = await Post.findOne({ _id: postId });

    if (!foundPost) {
      return res.status(404).json({ message: 'Post not found.' });
    }

    await foundPost.deleteOne();

    res.status(200).json({ message: 'Post deleted successfully.' });
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});




module.exports = { getPost, getPosts, getPostsByAuthor, getPostsByUserBookmarked, createPost, deletePost }


// const getPostsByTeacher = asyncHandler(async (req, res) => {
//   try {
//     // 1) based on our id, get all relationship documents where the teacher is our id
//     // and from those documents get all the ids of the learners;
//     // 2) based on the array of ids of those learners (users), we need to get all posts by the author property
//     const { teacherId } = req.params

//     const page = parseInt(req.query.page) || 1
//     const postsPerPage = 3

//     const foundLearners = await Relationship.find({
//       teacher: teacherId
//     })

//     const learnersIds = foundLearners.map((element) => element.learner)

//     const learnersPosts = await Post.find(
//       { author: { $in: learnersIds } },
//       { _id: 1, content: 1, image: 1, updatedAt: 1, author: 1 }
//     ).skip((page - 1) * postsPerPage)
//       .limit(postsPerPage)
//       .populate({
//         path: 'author',
//         select: 'nick searchName image'
//       }).sort({ 'updatedAt': -1 })

//     // console.log("page", page);

//     res.json(learnersPosts)
//   } catch (error) {
//     console.log(error)
//   }
// })

// const getPostsByLearner = asyncHandler(async (req, res) => {
//   try {
//     // 1) based on our id, get all relationship documents where the learner is our id
//     // and from those documents get all the ids of the teachers;
//     // 2) based on the array of ids of those teachers (users), we need to get all posts by the author property
//     const { learnerId } = req.params

//     const page = parseInt(req.query.page) || 1
//     const postsPerPage = 3

//     const foundTeachers = await Relationship.find({
//       learner: learnerId
//     })

//     const teachersIds = foundTeachers.map((element) => element.teacher)

//     const teachersPosts = await Post.find(
//       { author: { $in: teachersIds } },
//       { _id: 1, content: 1, image: 1, updatedAt: 1, author: 1 }
//     ).skip((page - 1) * postsPerPage)
//       .limit(postsPerPage)
//       .populate({
//         path: 'author',
//         select: 'nick searchName image'
//       }).sort({ 'updatedAt': -1 })

//     // console.log("page", page);

//     res.json(teachersPosts)
//   } catch (error) {
//     console.log(error)
//   }
// })