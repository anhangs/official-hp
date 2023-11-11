"use client"

import { useState } from 'react';

const useIsFinePointer = () => {
  // 初期状態を設定する
  const [isFinePointer, setIsFinePointer] = useState(
    () => typeof window !== 'undefined' ? window.matchMedia("(pointer: fine)").matches : false
  );
  return isFinePointer;
};

export default useIsFinePointer;
