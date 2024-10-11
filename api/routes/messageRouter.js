const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/rolesList')

const express = require('express')
const router = express.Router()
const {
  sendInitialMessage,
  getCorrespondents,
  getMessagesWithCorrespondent,
  sendMessage,
  deleteMessagesCurrentUserSide,
  deleteMessagesOnBothSides

} = require('../controllers/messageController')

// initial invitation letter (either by entering someone's profile page or by clicking the new message button in the "Messages" section menu)
router.post('/initial-message', sendInitialMessage)

// to see all correspondences users in general
router.get('/:currentUserId', getCorrespondents)

// to get all messages between the current user and specific user (correspondent)
router.get('/:correspondentId/:currentUserId', getMessagesWithCorrespondent)

// to send a message to a specific user
router.post('/', sendMessage)

router.delete('/on-current-user-side/:correspondentId/:currentUserId/', deleteMessagesCurrentUserSide)
router.delete('/on-both-sides/:correspondentId/:currentUserId/', deleteMessagesOnBothSides)



module.exports = router