/* eslint-disable no-console */
require('dotenv').config()
require('custom-env').env()
const createServer = require('./serverFactory')
const createSSRCache = require('./serverFactory/ssrCache')
const bodyParser = require('body-parser')
const next = require('next')
console.log(process.env.NODE_ENV, 'node env')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = createServer()
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())

    // setup ssrCache for req
    createSSRCache({ server, app })

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
