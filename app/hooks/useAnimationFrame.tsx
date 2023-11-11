import { useCallback, useEffect, useRef } from "react";

const useAnimationFrame = (callback = () => {}) => {
  const reqIdRef = useRef<number>();
  const loop = useCallback(() => {
    reqIdRef.current = requestAnimationFrame(loop);
    callback();
  }, [callback]);

  useEffect(() => {
    reqIdRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(reqIdRef.current!);
  }, [loop]);
};

export default useAnimationFrame;
