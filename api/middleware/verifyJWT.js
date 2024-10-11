const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization
  // console.log("authHeader", authHeader)
  if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401)
  //
  const token = authHeader.split(' ')[1]
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403) // invalid token
    req.username = decoded.UserInfo.username
    req.role = decoded.UserInfo.role.filter(Boolean)
    // console.log(req.username)
    // console.log(req.role)
    next()
  })
}

module.exports = verifyJWT
