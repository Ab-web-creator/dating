const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/rolesList')


const express = require('express')
const router = express.Router()
const {
  getReviews,
  createReview,
  deleteReview
} = require('../controllers/reviewController')

router.get('/:userId', getReviews)
router.post('/', createReview)
router.delete('/:id', deleteReview)
module.exports = router