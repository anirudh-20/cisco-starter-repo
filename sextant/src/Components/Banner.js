import React, { useState, useEffect } from 'react';
import './Banner.css';

export default function Banner () {

  const [isSmall, setSmall] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const distanceY = window.pageYOffset || document.documentElement.scrollTop;
      const threshold = 50;

      if (distanceY > threshold) setSmall(true);
      else setSmall(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSmall]);

  return(
    <div className={`Banner bg-filter ` + (isSmall ? 'Small': '')}>
      Sextant
    </div>
  )
}