"use client";

import type { NextPage } from "next";
import styles from "./profile.module.scss";
import variable from "@/app/_styles/theme.module.scss"
import Image from "next/image";
// import { Noto_Sans_JP } from "next/font/google";

import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver'
import SectionTitle from "@/app/_components/parts/sectionTitle"
import { useRef } from "react";

const showElements = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // IntersectionObserver で設定された条件を満たした時に実行する処理
      // 要素に active クラスを適用する
      entry.target.classList.add(styles.active)
    }
    else {
      entry.target.classList.remove(styles.active)
    }
  })
}

// const notoSans = Noto_Sans_JP({ weight: "400", subsets: ['latin'] })

const Profile: NextPage = () => {
  const ref = useRef<HTMLHeadingElement>(null)
  useIntersectionObserver([ref], showElements)

  return (
    <>
    <div id="profile" className={styles.profile}>
      <div className={styles.title} ref={ref}>
        <SectionTitle content="Profile" size={140} color={variable.accentColor}  position={{x: -40, y: -10 }} ></SectionTitle>
      </div>
      <div className={styles.content}>
        <Image
          className={styles.image}
          src="/tentative.jpg"
          alt="my photo"
          width={420}
          height={560}
          priority
        >
        </Image>
          {/* <div className={`${styles.text} ${notoSans.className}`}> */}
          <div className={styles.text}>
            <p className={styles.name}>近江 愛結 （おうみ あゆ）</p>
            <p>1997年8月28日生まれ　宮城県仙台市出身<br/>
              2023年にSIer企業を退社し、以降フリーランスとして活動。</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
