const expressServer = require('./expressServer')
const http2Server = require('./http2Server')

const createServer = () => (process.env.HTTP2 ? http2Server : expressServer)

module.exports = createServer()
