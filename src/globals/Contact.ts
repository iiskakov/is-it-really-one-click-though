import { GlobalConfig } from 'payload'
import { revalidateContact } from '../hooks/revalidatePath';

export const Contact: GlobalConfig = {
  slug: 'contact',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateContact], // Attach the revalidation hook
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
