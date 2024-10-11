const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/rolesList')

const express = require('express')
const router = express.Router()

const {
  createAdminMessages,
  getAdminMessages,
  deleteAdminMessages,
} = require('../controllers/adminMessagesController');



router.get('/:id', getAdminMessages)
router.post('/', createAdminMessages)

// the following code is not yet working 
router.delete('/:id', deleteAdminMessages)
module.exports = router
