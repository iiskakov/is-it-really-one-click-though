import { Block, Field } from 'payload'



export const TwoImagesBlock: Block = {
  slug: 'TwoImages',
  fields: [
     {
      name: 'picture',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
     {
      name: 'picture2',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
