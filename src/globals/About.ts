import { GlobalConfig } from 'payload';
import { revalidateAbout } from '../hooks/revalidatePath'; 

export const About: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateAbout], // Attach the revalidation hook
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
    },
    {
      name: 'teamMembers', // Add this field
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',  // Change type to 'upload'
          relationTo: 'media',  // Referencing the 'media' collection
          required: true,
        },
      ],
    },
  ],
};
