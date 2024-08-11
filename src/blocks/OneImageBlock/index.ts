import { Block, Field } from 'payload'



export const OneImageBlock: Block = {
  slug: 'OneImage',
  fields: [
     {
      name: 'picture',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
