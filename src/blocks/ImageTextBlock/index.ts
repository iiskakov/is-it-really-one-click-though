import type { Block, Field } from 'payload/types'
// TODO install payload types with yarn 



export const ImageTextBlock: Block = {
  slug: 'ImageText',
  fields: [
      {
        name: 'variant',
        type: 'select',
        defaultValue: 'variant1',
        options: [
      {
        value: 'variant1',
        label: 'Text at the left side',
      },
      {
        value: 'variant2',
        label: 'Text at the right side',
      },
      {
        value: 'variant3',
        label: 'Text in the bottom left corner',
      },
      {
        value: 'variant4',
        label: 'Text at the bottom right corner',
      },
      ],
    },
    {
      name: 'text1',
      type: 'text',
      required: true,
    },
     {
      name: 'picture',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}
