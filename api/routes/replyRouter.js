const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/rolesList')

const express = require('express')
const router = express.Router()

const { createReply, getReplies, deleteReply } = require('../controllers/replyController')

router.post('/', createReply)
router.get('/:replyId', getReplies)
router.delete('/:replyId', deleteReply)

module.exports = router