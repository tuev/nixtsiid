const http2 = require('http2')
const fs = require('fs')

// Create the secure HTTPS server:
// Don't forget to create the keys for your development
const serverHttp2 = () =>
  http2.createSecureServer({
    key: fs.readFileSync('localhost-privkey.pem'),
    cert: fs.readFileSync('localhost-cert.pem'),
  })

module.exports = serverHttp2
