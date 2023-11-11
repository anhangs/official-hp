import { useState, useEffect } from 'react';

const useScrollSpeed = (callback = (speed: number) => {}) => {
  const [scrollSpeed, setScrollSpeed] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = Date.now();

    const updateScrollSpeed = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const timeElapsed = currentTime - lastTime;
      const distance = currentScrollY - lastScrollY;
      const speed = timeElapsed ? distance / timeElapsed : 0;

      setScrollSpeed(speed);
      callback(speed);

      lastScrollY = currentScrollY;
      lastTime = currentTime;
    };

    window.addEventListener('scroll', updateScrollSpeed);

    return () => {
      window.removeEventListener('scroll', updateScrollSpeed);
    };
  }, []);

  return scrollSpeed;
};

export default useScrollSpeed;
