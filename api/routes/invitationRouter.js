const express = require('express')
const router = express.Router()
const { handleInvitation } = require('../controllers/userNotfierController')
router.post('/', handleInvitation)

module.exports = router
