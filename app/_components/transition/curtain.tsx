'use client'

import type { NextPage } from 'next';
import styles from './curtain.module.scss';
import { useEffect, useRef } from 'react';

export type AnimationComponentProps = {
  animationstart?: (event: AnimationEvent) => void;
  animationInterval?: (event: AnimationEvent) => void;
  animationend?: (event: AnimationEvent) => void;
  animationiteration?: (event: AnimationEvent) => void;
};

const Curtain: NextPage<AnimationComponentProps> = ({ animationstart, animationInterval, animationend, animationiteration }) => {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current as unknown as HTMLDivElement;
    if (!element) return;

    element.addEventListener('animationstart', (e: AnimationEvent) => {
      if(animationstart) animationstart(e);
      setTimeout(() => {
        if(animationInterval) animationInterval(e);
      }, 750)
    });
    if(animationiteration) element.addEventListener('animationiteration', animationiteration);
    if(animationend) element.addEventListener('animationend', animationend);

    // クリーンアップ関数
    return () => {
      if(animationstart) element.removeEventListener('animationstart', animationstart);
      if(animationiteration) element.removeEventListener('animationiteration', animationiteration);
      if(animationend) element.removeEventListener('animationend', animationend);
    };
  }, [animationstart, animationiteration, animationend]);

  return (
    <>
      <div className={`${styles.curtain} ${styles.open}`} ref={ref} ></div>
    </>
  );
};

export default Curtain;
