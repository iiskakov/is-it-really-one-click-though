import { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true
    },
    {
      name: 'text',
      type: 'textarea',
      required: true
    },

  ],
}
