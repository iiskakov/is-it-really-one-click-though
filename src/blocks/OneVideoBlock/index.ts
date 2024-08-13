import { Block, Field } from 'payload'



export const OneVideoBlock: Block = {
  slug: 'OneVideo',
  fields: [
     {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
