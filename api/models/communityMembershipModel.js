const mongoose = require('mongoose');

const communityMembershipSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    communityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Community' },
    joinedAt: { type: Date, default: Date.now },
    socketId: String,
  },
  { timestamps: true }
);

const CommunityMembership = mongoose.model('CommunityMembership', communityMembershipSchema);

module.exports = CommunityMembership;