import { GlobalConfig } from 'payload';
import { revalidateGHome } from '../hooks/revalidatePath'


export const Home: GlobalConfig = {
  slug: 'home',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateGHome], // Add the revalidate hook here
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
