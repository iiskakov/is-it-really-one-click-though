import { GlobalConfig } from 'payload';

export const Home: GlobalConfig = {
  slug: 'home',
  access: {
    read: () => true,
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
      name: 'video', // Add this field for the video
      type: 'upload',  // Specify 'upload' to use the media library
      relationTo: 'media',  // Referencing the 'media' collection
   },
    {
      name: 'showreel', // Add this field for the video
      type: 'upload',  // Specify 'upload' to use the media library
      relationTo: 'media',  // Referencing the 'media' collection
   },
  ],
};
