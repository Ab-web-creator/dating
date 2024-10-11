const users = require('../data/users')
const User = require('../models/userModel')
const connectDB = require('./connectDB')
const dotenv = require('dotenv')
const path = require('path');

const envPath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envPath });
connectDB()

const importData = async () => {
  try {
    await User.insertMany(users)
    process.exit()
  } catch (error) {
    process.exit(1)
  }
}

importData()