const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/rolesList')

const express = require('express')
const router = express.Router()

const { createReportPost } = require('../controllers/reportPostController')

router.post('/', createReportPost)

module.exports = router
