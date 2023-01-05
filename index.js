const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const cors = require('cors')
require('dotenv').config()

const port = process.env.API_PORT

server.use(cors({
  origin: process.env.ORIGIN_URL,
}))
server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log(`JSON Server is running on port:${port}`)
})