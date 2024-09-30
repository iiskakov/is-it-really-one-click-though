import { Block, Field } from 'payload'



export const OneVideoBlock: Block = {
  slug: 'OneVideo',
  fields: [
     {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'vimeoURL',
      type: 'text',
      label: 'Vimeo URL',
      required: true,
      validate: (value) => {
        const vimeoRegex = /https?:\/\/(www\.)?vimeo.com\/[0-9]+/;
        return vimeoRegex.test(value) ? true : 'Invalid Vimeo URL';
      },
    },
  ],
}
