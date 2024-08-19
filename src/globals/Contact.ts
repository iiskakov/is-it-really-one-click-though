import { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
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
