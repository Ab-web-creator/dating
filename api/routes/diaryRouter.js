const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/rolesList')

const express = require('express')
const router = express.Router()

const { getDiary, createDiary, updateDiary, deleteDiary } = require('../controllers/diaryController')

router.get('/:authorId/:referencedId', getDiary)
router.post('/', createDiary)
router.put('/', updateDiary)
router.delete('/:id', deleteDiary)

module.exports = router
