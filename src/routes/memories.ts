import { FastifyInstance } from 'fastify'

import { prisma } from '../lib/prisma'

type memoryTypes = {
  id: string
  coverUrl: string
  content: string
}
export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async () => {
    const memories = prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })

    return memories.map((memory: memoryTypes) => ({
      id: memory.id,
      converUrl: memory.coverUrl,
      excerpt: memory.content.substring(0, 115).concat('...'),
    }))
  })

  app.get('/memories/:id', async () => {})

  app.post('/memories', async () => {})

  app.put('/memories/:id', async () => {})

  app.delete('/memories/:id', async () => {})
}
