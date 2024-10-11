const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/rolesList')

const express = require('express')
const router = express.Router()
const { getPost, getPosts, getPostsByAuthor, getPostsByUserBookmarked, createPost, deletePost } = require('../controllers/postController')

// for fetching all replies to a post
router.get('/:id', getPost)

// for Blog page, we need userId to find in aggregation if user has bookmarks
router.get('/all-posts/:userId', getPosts)

// for profile-page
router.get('/profile-page/:currentUserId/:userId', getPostsByAuthor)

// for bookmarks page
router.get('/my-bookmarks/:userId', getPostsByUserBookmarked)


router.post('/', createPost)

router.delete('/:postId', deletePost);

module.exports = router

// // for my-students page
// router.get('/learners-posts/:teacherId', getPostsByTeacher)

// // for my-teacher page
// router.get('/teachers-posts/:learnerId', getPostsByLearner)