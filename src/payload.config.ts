import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import sharp from 'sharp'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Home } from './globals/Home'
import { About } from './globals/About'
import { Works } from './globals/Works'
import { Contact } from './globals/Contact'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { VHS } from './collections/VHS'
import  Logo  from '@/components/Logo'
import  Categories  from './collections/Categories'


import { s3Storage } from '@payloadcms/storage-s3'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)


export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- 2D Admin',
    },
    components: {
      graphics: {
        Logo
      },
  },

  },
  upload: {
    limits: {
      fileSize: 250000000, // 100MB, written in bytes
    },
  },
  globals: [Home, About, Works, Contact],
  collections: [Users, Media, Projects, Categories, VHS],
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
