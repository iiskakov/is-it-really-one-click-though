import { GlobalConfig } from 'payload'

export const Works: GlobalConfig = {
  slug: 'works',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true
    },
  ],
}
