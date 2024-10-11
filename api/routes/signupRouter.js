const express = require('express')
const router = express.Router()
const { verifyAdminId, verifyUserId, handleAdminSignup, handleSignup } = require('../controllers/signupController')

// only for admin
router.get('/admin-id-verification/:id', verifyAdminId)

// for other roles
router.get('/user-id-verification/:id', verifyUserId)

// only for admin
router.put('/admin-completion', handleAdminSignup)

// for fellowship (user gets the 2nd level signup completion)
router.put('/', handleSignup)


module.exports = router
