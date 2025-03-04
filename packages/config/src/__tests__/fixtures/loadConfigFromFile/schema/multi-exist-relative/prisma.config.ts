import path from 'node:path'
import process from 'node:process'
import { defineConfig } from 'src/index'

export default defineConfig({
  earlyAccess: true,
  schema: {
    kind: 'multi',
    folderPath: 'prisma/schema',
  },
})
