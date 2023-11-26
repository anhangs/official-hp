'use client'

import type { NextPage } from "next";
import styles from "./curtain.module.scss";
import { useEffect, useRef } from "react";
import { AnimationComponentProps } from "./animationTransitionLink";

const Curtain: NextPage<AnimationComponentProps> = ({ animationstart, animationend, animationiteration }) => {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current as unknown as HTMLDivElement;
    if (!element) return;

    if(animationstart) element.addEventListener('animationstart', animationstart);
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
