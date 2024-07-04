import React, { useState, useEffect } from 'react';
import bg from '../../assets/bg-monuments.jpg';
import bg2 from '../../assets/bg-monuments2.png';

export const Background = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bg2Style = {
    transform: ` translateY(${(scrollPosition * 0.98) - 50}px)`, // Adjust the speed of the movement
    transition: 'transform 0.05s ease-out-in',
  };

  return (
    <div className=" ">
      <div className="w-full h-full overflow-hidden opacity-[10%] -z-10 grayscale-[20%] absolute bottom-0 right-0 " style={bg2Style}>
        <img
          src={bg}
          alt="gravestone-background"
          className="h-screen w-full scale-120 lg:scale-150 object-cover"
        />
      </div>
    </div>
  );
};
