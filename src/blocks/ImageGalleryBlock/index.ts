import { Block } from 'payload';

export const ImageGalleryBlock: Block = {
  slug: 'ImageGallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      required: true,
    },
  ],
};
