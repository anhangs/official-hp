'use client'

import type { NextPage } from 'next';
import styles from './movieBackground.module.scss';
import { useEffect, useRef } from 'react';

const MovieBackground: NextPage = () => {
  const ref = useRef(null);
  useEffect(() => {
    (ref.current! as HTMLVideoElement).playbackRate = 1.2;
  }, [ref])
  return (
    <>
      <video className={styles['background-video']} autoPlay={true} muted={true} ref={ref}>
          <source src='/top.mp4' type='video/mp4'></source>
          Your browser does not support the video tag.
      </video>
    </>
  );
};

export default MovieBackground;
