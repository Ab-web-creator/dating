const express = require('express')
const router = express.Router()
const { handleInvitation, handleMessage } = require('../controllers/userNotfierController.js')
router.post('/invitation', handleInvitation)
router.post('/message', handleMessage)

module.exports = router
