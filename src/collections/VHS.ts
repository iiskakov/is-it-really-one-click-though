import { CollectionConfig } from 'payload';
import { revalidateHome } from '../hooks/revalidatePath';

export const VHS: CollectionConfig = {
  slug: 'vhs', // The API slug for the collection
  
  access: {
    read: () => true,
  },
  admin:  {
    useAsTitle: 'title',
  },
  hooks: {
    afterChange: [revalidateHome], // Add the revalidate hook here
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'year',
      type: 'number',
      required: true,
      label: 'Year',
    },
    {
      name: 'directedBy',
      type: 'text',
      required: true,
      label: 'Directed By',
    },
    {
      name: 'client',
      type: 'text',
      required: true,
      label: 'Client',
    },
    {
      name: 'category',
      type: 'text',
      required: true,
      label: 'Category',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'SVG Logo',
      // Specify permitted MIME types for logos (SVG)
      mimeType: ['image/svg+xml'],
    },
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Video',
      // Specify permitted MIME types for video
      mimeType: ['video/mp4', 'video/webm', 'video/ogg'],
    },
    {
      name: 'color',
      type: 'text',
      label: 'Color',
      validate: (value) => {
        const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (!hexColorRegex.test(value)) {
          return 'Пожалуйста введите валидный hex код цвета (например #ff0000)';
        }
        return true;
      },
    },
  ],
};
