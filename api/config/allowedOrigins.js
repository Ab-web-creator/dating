// this is used by CORS and socket.io 

let allowedOrigins

if (process.env.STAGE === 'development') {
  allowedOrigins = [
    'http://localhost:3000/',
    'http://127.0.0.1:3000',
    'http://localhost:3000',
    'http://127.0.0.1:3001',
    'http://localhost:3001',
  ]

} else {
  allowedOrigins = [
    "https://wayoflove.online",
    "https://wayoflove.online/",
    "https://www.wayoflove.online",
    "https://www.wayoflove.online/",
    "https://thegreat.wayoflove.online",
    "https://thegreat.wayoflove.online/"
  ]

}

module.exports = allowedOrigins



