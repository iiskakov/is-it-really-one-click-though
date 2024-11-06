'use client'

import React from 'react';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { yandexCloudImage } from '@/utils/functions';

const ImageGalleryBlock = ({ data }) => {
  const containerRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const [imageAspectRatios, setImageAspectRatios] = useState([]);

  const images = data.fields?.images || [];

  useEffect(() => {
    if (images.length === 0) return;

    // Calculate aspect ratios for all images to maintain consistency in their display
    const ratios = images.map(imageObj => {
      const image = imageObj.image;
      return image.width && image.height ? image.width / image.height : 1;
    });
    setImageAspectRatios(ratios);

    const updateConstraints = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = containerRef.current.scrollWidth;

        setDragConstraints({
          left: -(contentWidth - containerWidth) - 100, // Allow dragging past the last image
          right: 100, // Allow some space on the right as well
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);

    return () => {
      window.removeEventListener("resize", updateConstraints);
    };
  }, [images]);

  if (images.length === 0) return null;

  return (
    <div className="w-full overflow-hidden" ref={containerRef} style={{ maxHeight: '60vh' }}>
      <motion.div
        className="flex cursor-grab items-end space-x-4"
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={0.2}
        dragTransition={{
          power: 0.2,
          timeConstant: 200,
          modifyTarget: (target) => Math.round(target / 100) * 100,
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {images.map((imageObj, index) => {
          const image = imageObj.image;
          const aspectRatio = imageAspectRatios[index] || 1;

          return (
            <div
              key={index}
              className="flex-shrink-0 w-auto"
              style={{
                transform: index % 2 !== 0 ? 'scale(0.9)' : 'scale(1)',
                maxHeight: '100%',
                width: 'auto',
                height: 0,
                paddingBottom: `${100 / aspectRatio}%`, // maintain aspect ratio using padding-bottom
              }}
            >
              <Image
                src={yandexCloudImage(image.url)}
                layout="fill"  // Use layout="fill" to let the image fill the container
                objectFit="contain"
                quality={90}
                className="object-contain max-h-full"
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ImageGalleryBlock;
