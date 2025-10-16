import { useState, useEffect } from 'react';
import Svg from '../Svg/Svg';
import { PhotoProvider, PhotoView } from 'react-image-previewer';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // отслеживаем ширину окна
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const previous = () => currentIndex > 1 && setCurrentIndex(currentIndex - 1);
  const forward = () => currentIndex < images.length && setCurrentIndex(currentIndex + 1);

  return (
    <div className="relative w-full h-full">
      <div className="absolute right-5 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white">
        <span>{currentIndex}</span>/<span>{images.length}</span>
      </div>

      {/* стрелки */}
      <button
        onClick={previous}
        className={`absolute left-5 top-[90%] md:top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md rotate-180 transition-transform hover:scale-110 ${
          currentIndex <= 1 ? 'opacity-10' : ''
        }`}
      >
        <Svg id="icon-arrow" size={24} fill="black" stroke="black" />
      </button>

      <button
        onClick={forward}
        className={`absolute right-5 top-[90%] md:top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md transition-transform hover:scale-110 ${
          currentIndex >= images.length ? 'opacity-10' : ''
        }`}
      >
        <Svg id="icon-arrow" size={24} fill="black" stroke="black" />
      </button>

      {/* изображения */}
      <div className="w-full h-full relative">
        {isDesktop ? (
          // 🖥️ — на компьютере открываем PhotoProvider
          <PhotoProvider onVisibleChange={setIsOpen}>
            {images.map((image, index) => (
              <div
                key={index}
                style={{ display: currentIndex === index + 1 ? 'block' : 'none' }}
                className="transition-opacity duration-300 absolute w-full top-0 left-0"
              >
                <PhotoView src={image}>
                  <div className="w-full h-[400px] md:h-[600px]">
                    <img
                      src={image}
                      alt={`image-${index}`}
                      className="w-full h-full cursor-pointer object-center object-scale-down"
                    />
                  </div>
                </PhotoView>

                <button className="absolute pointer-events-none left-5 top-10 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-600 shadow-md transition-transform hover:scale-110">
                  <Svg id="icon-resize" size={24} fill="white" />
                </button>
              </div>
            ))}

            {/* крестик */}
            {isOpen && (
              <button
                className="fixed top-6 right-6 z-[1001] rounded-full bg-grey px-8 py-3 hover:bg-black transition pointer-events-none"
              >
                <span className="text-white text-5xl leading-none">×</span>
              </button>
            )}
          </PhotoProvider>
        ) : (
          // 📱 — на мобильных и планшетах просто картинки
          images.map((image, index) => (
            <div
              key={index}
              style={{ display: currentIndex === index + 1 ? 'block' : 'none' }}
              className="transition-opacity duration-300 absolute w-full top-0 left-0"
            >
              <div className="w-full h-[400px] md:h-[600px]">
                <img
                  src={image}
                  alt={`image-${index}`}
                  className="w-full h-full object-center object-scale-down"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
