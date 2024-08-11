import { Block, Field } from 'payload'



export const TextBlock: Block = {
  slug: 'Text',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'text1',
      type: 'text',
      required: true,
    },
  ],
}
