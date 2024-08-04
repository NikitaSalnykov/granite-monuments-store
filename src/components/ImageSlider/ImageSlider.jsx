import React, { useState } from 'react';
import Svg from '../Svg/Svg';
import { FullSizeImage } from '../Modals/FullSizeImage/FullSizeImage';
import { BasicImageModal } from '../Modals/BasicModal/BasicImageModal';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isModalFullSizeOpen, setModalFullSizeOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const onToggleFullSizeImageModal = (image) => {
    setSelectedImage(image);
    setModalFullSizeOpen(!isModalFullSizeOpen);
  };


  const previous = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute right-5 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white">
        <span>{currentIndex}</span>/<span>{images.length}</span>
      </div>

      <button 
        onClick={previous} 
        className={`absolute left-5 top-[90%] md:top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full transition-transform hover:scale-110 bg-gray-100 shadow-md rotate-180 ${currentIndex <= 1 && 'opacity-10'}`}
      >
        <Svg id={'icon-arrow'} size={24} fill={'black'} stroke={'black'}/>
      </button>

      <button 
        onClick={forward} 
        className={`absolute right-5 top-[85%] md:top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full transition-transform hover:scale-110 bg-gray-100 shadow-md ${currentIndex >= images.length && 'opacity-10'}`}
      >
        <Svg id={'icon-arrow'} size={24} fill={'black'} stroke={'black'}/>
      </button>



      <div className="w-full h-full">
        {images.map((image, index) => (
          <div 
            key={index} 
            style={{ display: currentIndex === index + 1 ? 'block' : 'none' }}
            className="transition-opacity duration-300 absolute w-full h-full top-0 left-0"
          >
            <img src={image} alt={`image-${index}`} className="w-full h-full object-cover cursor-pointer" />
            <button 
        onClick={() => onToggleFullSizeImageModal(image)}
        className={`absolute left-5 top-10 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-600 shadow-md opacity-100 transition-transform hover:scale-110`}
      >
        <Svg id={'icon-resize'} size={24} fill={'white'}/>
      </button>
          </div>
          
        ))}
      </div>

      <BasicImageModal
        isOpen={isModalFullSizeOpen}
        onCloseModal={onToggleFullSizeImageModal}
      >
        <FullSizeImage image={selectedImage} />
      </BasicImageModal>
    </div>
  );
};

export default ImageSlider;