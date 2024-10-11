const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/rolesList')

const express = require('express')
const router = express.Router()
const {
  getUser,
  getUsers,
  updateUserByAdmin,
  updateUser,
  updateBoardMembership,
  deleteUser,
  isSearchNameExists
} = require('../controllers/userController')

// router.post('/user', verifyRoles(ROLES_LIST.Student), createUser)

// used by admin
router.get('/', getUsers)

// used by admin
router.put('/update-by-admin/:id', updateUserByAdmin)

// used by admin
router.delete('/:id', deleteUser)

// fellowship user enters the searchName and we check right away on the "next" button click, if the provided searchName is not occupied
router.get('/check-search-name-occupation/:id', isSearchNameExists)

// fellowship (user gets the 3nd level signup completion) and for the next usage
router.put('/:id', updateUser)

// fellowship
router.put('/update-board-member/:id', updateBoardMembership)

// for both
router.get('/:id', getUser)

module.exports = router
