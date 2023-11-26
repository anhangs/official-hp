"use client"

import { useState } from 'react';

/**
 * マウスポインターが存在するかを判定する
 * @returns true: ポインターあり / false: ポインターなし
 */
const useIsFinePointer = () => {
  // 初期状態を設定する
  const [isFinePointer, setIsFinePointer] = useState(
    () => typeof window !== 'undefined' ? window.matchMedia("(pointer: fine)").matches : false
  );
  return isFinePointer;
};

export default useIsFinePointer;
