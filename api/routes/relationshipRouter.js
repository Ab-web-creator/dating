const verifyRoles = require('../middleware/verifyRoles')
const ROLES_LIST = require('../config/rolesList')

const express = require('express')
const router = express.Router()
const {
  getLearnerRelationships,
  getLearnerRelationship,
  createLearnerRelationship,
  deleteLearnerRelationship,
  getTeacherRelationships,
} = require('../controllers/relationshipController')

// we use this endpoint in MyStudents.jsx to fetch all our learners
router.get('/relate-to-learners/:teacherId', getLearnerRelationships)

// we use this endpoint in MyTeachers.jsx to fetch all our teachers
router.get('/relate-to-teachers/:learnerId', getTeacherRelationships)

// we use it in ProfilePage.jsx to see if we are linked to someone or not
router.get('/:teacherId/:learnerId', getLearnerRelationship)

// we use this endpoint in ProfilePage.jsx to link to someone // only teachers can link to learners
router.post('/', createLearnerRelationship)

// we use this endpoint in ProfilePage.jsx to unlink from someone
router.delete('/:teacherId/:learnerId', deleteLearnerRelationship)

module.exports = router