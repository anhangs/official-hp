import { useState, useEffect, useRef, useCallback } from 'react';

const useScrollSpeed = (callback = (speed: number) => {}) => {
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [lastTime, setLastTime] = useState(Date.now());
  const [lastScrollY, setLastScrollY] = useState(0);

  const timeElapsed = () => { return Date.now() - lastTime; }
  const distance = () => { return window.scrollY - lastScrollY; }
  const speed = () => { return timeElapsed ? distance() / timeElapsed() : 0; }

  const reqIdRef = useRef<number>();
  const loop = useCallback(() => {
    reqIdRef.current = requestAnimationFrame(loop);
    setLastScrollY(window.scrollY);
    setLastTime(Date.now());
    setScrollSpeed(speed());

    callback(scrollSpeed);
  }, [callback]);

  useEffect(() => {
    reqIdRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(reqIdRef.current!);
  }, [loop]);
};

export default useScrollSpeed;
