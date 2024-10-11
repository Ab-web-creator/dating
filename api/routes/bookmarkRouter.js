const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/rolesList')

const express = require('express')
const router = express.Router()

const { createBookmark, deleteBookmark } = require('../controllers/bookmarkController');

router.post('/', createBookmark);
router.delete('/:id', deleteBookmark);

module.exports = router
