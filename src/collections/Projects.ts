import type { CollectionConfig } from 'payload'
import {
  BlocksFeature,
  LinkFeature,
  UploadFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { ImageTextBlock } from '../blocks/ImageTextBlock'
import { ImageTextBlock2 } from '../blocks/ImageTextBlock2'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
features: ({ defaultFeatures, rootFeatures }) => [
      ...defaultFeatures,
        BlocksFeature({
            blocks: [ImageTextBlock, ImageTextBlock2],
        }),
        ],
      }),
    },
  ],
}
