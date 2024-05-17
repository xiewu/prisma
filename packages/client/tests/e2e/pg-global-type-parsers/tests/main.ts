import { Pool } from 'pg'

const pgPool = new Pool({ connectionString: process.env.POSTGRES_URL })

test('that pg global type parsers are not be modified globally', async () => {
  const beforeRequire = await pgPool.query(`SELECT NOW() as ts`)
  expect(typeof beforeRequire.rows[0].ts).toBe('object')

  require('@prisma/adapter-pg')

  const afterRequire = await pgPool.query(`SELECT NOW() as ts`)
  expect(typeof afterRequire.rows[0].ts).toBe('object')
})

afterAll(async () => {
  await pgPool.end()
})
