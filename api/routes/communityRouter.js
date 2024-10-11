const express = require('express')
const router = express.Router()

const { getCommunities, createCommunity, deleteCommunity } = require('../controllers/communityController')

router.get('/:userId', getCommunities)
router.post('/', createCommunity)
router.delete('/:communityRoomId', deleteCommunity);

module.exports = router