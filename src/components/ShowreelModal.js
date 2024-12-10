'use client'


import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { createPortal } from 'react-dom';

const ShowreelModal = ({ url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    // Cleanup event listener when component is unmounted or modal is closed
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="text-[#F03021] cursor-pointer underline flex items-center gap-2"
        onClick={handleOpen}
      >
        Watch showreel
        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 9V0L7.2 4.5L0 9Z" fill="#F03021"/>
        </svg>
      </div>
      {/* <div */}
      {/*   className="text-[#F03021] cursor-pointer underline" */}
      {/*   onClick={handleOpen} */}
      {/* > */}
      {/*   Watch showreel */}
      {/* </div> */}

      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[50] bg-black bg-opacity-75 flex justify-center items-center">
            <div className="relative w-full h-full">
              <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                className="react-player"
                controls={true}
              />
              <button
                onClick={handleClose}
                className="brightness-200 absolute top-4 right-4 text-white text-6xl"
              >
                <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ShowreelModal;
