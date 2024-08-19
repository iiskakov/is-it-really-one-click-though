import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import sharp from 'sharp'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'


import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { VHS } from './collections/VHS'
import  Categories  from './collections/Categories'

import { Home } from './globals/Home'
import { About } from './globals/About'

import { s3Storage } from '@payloadcms/storage-s3'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  upload: {
    limits: {
      fileSize: 100000000, // 100MB, written in bytes
    },
  },
  collections: [Users, Media, Projects, Categories, VHS],
  globals: [Home, About],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),

  sharp,
  plugins: [
    s3Storage({
      collections: {
        ['media']: true,
        ['projects']: true,
        ['vhs']: true,
      },
      bucket: process.env.S3_BUCKET_NAME || '',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY || '',
          secretAccessKey: process.env.S3_SECRET_KEY || '',
        },
        region: process.env.S3_REGION || '',
        endpoint: process.env.S3_ENDPOINT || '',
      },
    }),
  ],
})
