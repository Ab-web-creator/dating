const { Server } = require('socket.io');
const allowedOrigins = require('../config/allowedOrigins')
const User = require('../models/userModel');
const Community = require('../models/communityModel');
const CommunityMembership = require('../models/communityMembershipModel');

async function getUsersInRoom(communityId) {
  console.log("communityId", communityId)
  const memberships = await CommunityMembership.find({ communityId }).populate('userId', { nick: 1, image: 1, birthDate: 1 }).exec();
  if (memberships.length === 0) return [];
  for (let i = 0; i < memberships.length; i++) {
    console.log("memberships", memberships[i].userId.nick)
  }
  return memberships.map(membership => membership.userId);
}

async function activateUser(socketId, userId, communityId) {
  let user = await User.findById(userId).exec();

  await CommunityMembership.deleteMany({ userId });

  await CommunityMembership.findOneAndUpdate(
    { userId, communityId },
    { userId, communityId, socketId },
    { new: true, upsert: true }
  );

  return user;
}

async function leaveRoom(io, socketId, communityId) {
  await CommunityMembership.findOneAndDelete({ socketId, communityId });
  const users = await getUsersInRoom(communityId);
  io.to(communityId).emit('userList', { users });
}

function configureSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: allowedOrigins
    },
  });

  io.on('connection', (socket) => {
    socket.on('enterRoom', async ({ userId, communityId }) => {
      await activateUser(socket.id, userId, communityId);
      socket.join(communityId);

      const users = await getUsersInRoom(communityId);
      io.to(communityId).emit('userList', { users });
    });

    socket.on('leaveRoom', async ({ communityId }) => {
      await leaveRoom(io, socket.id, communityId);
    });

    socket.on('disconnect', async ({ communityId }) => {
      await leaveRoom(io, socket.id, communityId);
    });

    socket.on('message', ({ userNick, userImage, text, communityId }) => {
      io.to(communityId).emit('message', {
        userNick,
        userImage,
        text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) // Format time accordingly
      });
    });
  });
}

module.exports = configureSocket;