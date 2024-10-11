const bcrypt = require('bcrypt')

const users = [
  {
    "_id": "65be18a8220610916d900cb2",
    "activity": "active",
    "securityLevel": "low",
    "email": "fakefakefake@fakeemail.com",
    "role": {
      "Admin": 3333
    },
    "whatsapp": "",
    "signupCompletion": 1,
    "boardMember": false,
    "__v": 0,
    "birthDate": "2002-01-01",
    "location": "munich",
    "nick": "guys",
    "occupation": "guys",
    "password": bcrypt.hashSync('123', 10),
    "searchName": "@guys",
    "username": "Admin",
    "refreshToken": ""
  },
]

module.exports = users

