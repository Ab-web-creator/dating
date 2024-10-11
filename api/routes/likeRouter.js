const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/rolesList')

const express = require('express');
const { createLike, deleteLike } = require('../controllers/likeController');
const router = express.Router()

router.post('/', createLike);
router.delete('/:id', deleteLike);

module.exports = router;
