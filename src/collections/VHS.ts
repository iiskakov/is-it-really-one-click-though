import { CollectionConfig } from 'payload';
import { revalidateHome } from '../hooks/revalidatePath';
import { validateUpload } from 'payload/fields/validations';

export const VHS: CollectionConfig = {
  slug: 'vhs', // The API slug for the collection

  access: {
    read: () => true,
  },
  admin: {
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
  filterOptions: {
    mimeType: { equals: 'image/svg+xml' }, // Only allow SVG files
  },
  validate: (value, { siblingData }) => {
    if (!value) {
      return 'Logo is required.';
    }
    const isValid = validateUpload(value, {
      mimeType: { equals: 'image/svg+xml' },
    });
    return isValid || 'Only SVG files are allowed for the logo.';
  },
},
{
  name: 'video',
  type: 'upload',
  relationTo: 'media',
  required: true,
  label: 'Video',
  filterOptions: {
    mimeType: { in: ['video/mp4', 'video/webm', 'video/ogg'] }, // Allow only video formats
  },
  validate: (value, { siblingData }) => {
    if (!value) {
      return 'Video is required.';
    }
    const isValid = validateUpload(value, {
      mimeType: { in: ['video/mp4', 'video/webm', 'video/ogg'] },
    });
    return isValid || 'Only MP4, WebM, or Ogg video files are allowed.';
  },
}
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
