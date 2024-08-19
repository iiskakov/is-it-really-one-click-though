import { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home',
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
      name: 'Text',
      type: 'textarea',
      required: true
    },
  ],
}
