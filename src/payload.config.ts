import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import sharp from 'sharp'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Projects } from './collections/Projects'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';

const storageAdapter = s3Adapter({
  config: {
    endpoint: process.env.S3_ENDPOINT,
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY,
    }
  },
  bucket: process.env.S3_BUCKET_NAME,
})

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL,
    },
  }),

  sharp,

  plugins: [
    cloudStorage({
      collections: { // Create an object for every upload collection, in this case it's only "media"
        'media': {
          adapter: storageAdapter,
        },
      },
    }),
  ],
})
