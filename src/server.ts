import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

const PORT = 3333

app.register(memoriesRoutes)

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`HTTP server running on http://localhost:${PORT}`)
  })
