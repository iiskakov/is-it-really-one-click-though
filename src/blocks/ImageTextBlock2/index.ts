import { Block, Field } from 'payload'



export const ImageTextBlock2:Block = {
  slug: 'ImageText2',
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
      name: 'picture2',
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
