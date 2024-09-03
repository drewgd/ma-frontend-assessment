// src/components/Hero.js
import React, { useState, useEffect } from 'react';

const Hero = () => {
  // isMobile on resize
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="hero_container relative w-full">
      <img
        src={isMobile ? "https://via.placeholder.com/600x600" : "https://via.placeholder.com/1920x650"}
        alt="Hero"
        className="hero__image relative inset-0 w-full h-full object-cover"
        style={{ minHeight: isMobile ? '400px' : '650px' }}
      />
      <div className="hero__text absolute top-0 flex items-center justify-center flex-col w-full h-full bg-black bg-opacity-50 p-2.5">
        <h1 className="text-white text-6xl md:text-7xl font-bold text-center">Hello Developer!</h1>
        <p className="text-white text-2xl md:text-4xl mt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default Hero;

