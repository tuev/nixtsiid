const cacheableResponse = require('cacheable-response')

const cacheRoutes = ['/']

const CACHE_TTL = +process.env.CACHE_TIME || 720000

const ssrCache = (app) =>
  cacheableResponse({
    ttl: CACHE_TTL,
    get: async ({ req, res }) => {
      try {
        const data = await app.renderToHTML(req, res, req.path, {
          ...req.query,
          ...req.params,
        })
        const headers = { userAgent: 'cacheable-response' }
        const ttl = CACHE_TTL
        return { data, headers, ttl }
      } catch (e) {
        return { data: 'error: ' + e }
      }
    },
    send: ({ data, res }) => res.send(data),
  })

const createSSRCache = ({ server, app }) => {
  cacheRoutes.forEach((route) =>
    server.get(route, (req, res) => ssrCache(app)({ req, res }))
  )
}

module.exports = createSSRCache
