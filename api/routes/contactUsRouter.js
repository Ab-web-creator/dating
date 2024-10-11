const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/rolesList')

const express = require('express')
const router = express.Router()

const {
  createContactUs,
  getContactUs,
  deleteContactUs,
} = require('../controllers/contactUsController');


router.get('/', getContactUs)
router.post('/', createContactUs)
router.delete('/:id', deleteContactUs)
module.exports = router
