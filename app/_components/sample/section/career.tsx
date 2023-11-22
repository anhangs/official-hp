"use client";
import type { NextPage } from "next";
import styles from "./career.module.scss";
import variable from "@/app/_styles/theme.module.scss"
import SectionTitle from "../parts/sectionTitle";
// import { Introduction } from "@/apollo/__generated__/client/graphql";
// import { request } from "@/apollo/client";
// import introduction from "@/apollo/query/introduction.gql";
import Image from "next/image";
// import { Noto_Sans_JP } from "next/font/google";
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver'
import { useRef } from "react";
import { profileData } from "@/app/assets/profile";

// const notoSans = Noto_Sans_JP({ weight: "400", subsets: ['latin'] })
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

const Career: NextPage = async () => {
  const ref = useRef<HTMLHeadingElement>(null)
  useIntersectionObserver([ref], showElements)

  // const body = {
  //   operationName: "Query",
  //   query: introduction.loc.source.body,
  //   variables: {},
  // };
  // const response = await request<{ introduction: Introduction }>(process.env.NEXT_PUBLIC_GRAPHQL_SERVER!, {
  //   body: body,
  //   // cache: "force-cache",
  //   // next: { revalidate: 10 },
  // });

  return (
    <>
    <div id="career" className={styles.career}>
      <div className={styles.title} ref={ref}>
        <SectionTitle content="Career" size={300} color={variable.accentColor} position={{x: 355, y: -35 }}></SectionTitle>
      </div>
      {/* <div className={`${styles.items} ${notoSans.className}`}> */}
        <div className={styles.items}>
          {
            profileData.career.map((item:any) => {
              return (
                <div className={styles.item} key={item.title}>
                  <Image
                    src={item.icon}
                    alt="career"
                    width={300}
                    height={200}
                    priority
                  ></Image>
                  <h3>
                    {item.title}
                  </h3>
                  <p>{item.description}</p>
                </div>
              )
            })
          }
      </div>
    </div>
    </>
  );
};

export default Career;
