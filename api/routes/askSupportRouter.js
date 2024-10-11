const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/rolesList')

const express = require('express')
const router = express.Router()

const { createAskSupport } = require('../controllers/askSupportController')

router.post('/', createAskSupport)

module.exports = router
