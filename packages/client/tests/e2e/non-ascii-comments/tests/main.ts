import { PrismaClient } from '@prisma/client'

test('does not throw on Accelerate client creation', () => {
  expect(() => new PrismaClient({ datasourceUrl: 'prisma://example.com/db' })).not.toThrow()
})

export {}
