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
    transform: ` translateY(${scrollPosition * 0.1}px)`, // Adjust the speed of the movement
    transition: 'transform 3s ease-out',
  };

  return (
    <div className=" ">
      <div className="w-full h-full overflow-hidden opacity-[10%] -z-10 grayscale-[20%] absolute bottom-0 right-0 " style={bg2Style}>
        <img
          src={bg}
          alt="gravestone-background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* <div className="h-[80%] lg:w-full h-full overflow-hidden opacity-[65%] -z-10 grayscale-[40%] absolute bottom-0 right-[-160px]" style={bg2Style}>
        <img
          src={bg2}
          alt="gravestone-background"
          className="w-full h-full object-cover"
        />
      </div> */}
    </div>
  );
};
