
const express = require('express')
const router = express.Router()
const {
  searchUsersForNewMessage
} = require('../controllers/searchController')

router.get('/new-message/:searchInput', searchUsersForNewMessage)

module.exports = router