const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const path = require('path')
dotenv.config({ path: path.join(__dirname, '.env') })

const configureSocket = require('./config/socket')



const connectDB = require('./db/connectDB')

const corsOptions = require('./config/corsOptions')
const credentials = require('./middleware/credentials')
const verifyJWT = require('./middleware/verifyJWT')

const authRouter = require('./routes/authRouter')
const refreshRouter = require('./routes/refreshRouter')
const logoutRouter = require('./routes/logoutRouter')
const signupRouter = require('./routes/signupRouter')

const userNotifierRouter = require('./routes/userNotifierRouter')
const userRouter = require('./routes/userRouter')
const reviewRouter = require('./routes/reviewRouter')
const postRouter = require('./routes/postRouter')
const messageRouter = require('./routes/messageRouter')
const relationshipRouter = require('./routes/relationshipRouter')

const diaryRouter = require('./routes/diaryRouter')
const askSupportRouter = require('./routes/askSupportRouter')
const reportPostRouter = require('./routes/reportPostRouter')
const contactUsRouter = require('./routes/contactUsRouter')

const likeRouter = require('./routes/likeRouter')
const bookmarkRouter = require('./routes/bookmarkRouter')
const searchRouter = require('./routes/searchRouter')
const replyRouter = require('./routes/replyRouter')

const communityRouter = require('./routes/communityRouter')
const adminMessagesRouter = require('./routes/adminMessagesRouter')
const bookRouter = require('./routes/bookRouter')

app.use(credentials)
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(bodyParser.json({ limit: '10mb', type: 'application/json' }))
// app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.use(express.json())

connectDB()

app.use('/auth', authRouter)
app.use('/refresh', refreshRouter)
app.use('/logout', logoutRouter)
app.use('/signup', signupRouter)

app.use(verifyJWT)
app.use('/user-notifier', userNotifierRouter)
app.use('/api/users', userRouter)
app.use('/api/reviews', reviewRouter)
app.use('/api/posts', postRouter)
app.use('/api/messages', messageRouter)
app.use('/api/relationships', relationshipRouter)
app.use('/api/diary', diaryRouter)
app.use('/api/askSupport', askSupportRouter)
app.use('/api/reportPost', reportPostRouter)
app.use('/api/contactUs', contactUsRouter)

app.use('/api/likes', likeRouter)
app.use('/api/bookmarks', bookmarkRouter)
app.use('/api/communities', communityRouter)
app.use('/api/search', searchRouter)
app.use('/api/replies', replyRouter)
app.use('/api/admin-messages', adminMessagesRouter)
app.use('/api/books', bookRouter)

const PORT = process.env.PORT || 5500

if (process.env.STAGE === 'development') {
  // socket.io
  const http = require('http')
  const server = http.createServer(app)
  configureSocket(server)

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
} else {
  const https = require('https')
  const fs = require('fs')

  const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/wayoflove.online/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/wayoflove.online/fullchain.pem')
  };

  const server = https.createServer(options, app)
  configureSocket(server)
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
}





