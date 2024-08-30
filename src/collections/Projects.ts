import { CollectionConfig } from 'payload'
import { BlocksFeature, LinkFeature, UploadFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { ImageTextBlock } from '../blocks/ImageTextBlock'
import { ImageTextBlock2 } from '../blocks/ImageTextBlock2'
import { ImageTextBlock3 } from '../blocks/ImageTextBlock3'
import { TextBlock } from '../blocks/TextBlock'
import { TwoImagesBlock } from '../blocks/TwoImagesBlock'
import { OneImageBlock } from '../blocks/OneImageBlock'
import { OneVideoBlock } from '../blocks/OneVideoBlock'
import { ImageGalleryBlock } from '../blocks/ImageGalleryBlock'
import { revalidateProjectOrVHS } from '../hooks/revalidatePath'

export const Projects: CollectionConfig = {
  slug: 'projects',
  hooks: {
    afterChange: [revalidateProjectOrVHS],
  },
  admin:  {
    useAsTitle: 'name',
  },
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
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      defaultValue: 4
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
features: ({ defaultFeatures, rootFeatures }) => [
      ...defaultFeatures,
        BlocksFeature({
              blocks: [ImageTextBlock, ImageTextBlock2, ImageTextBlock3, TextBlock, TwoImagesBlock, OneImageBlock, OneVideoBlock, ImageGalleryBlock],
        }),
        ],
      }),
    },
  ],
}
