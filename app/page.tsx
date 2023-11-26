"use client";

import styles from "./page.module.scss";

import ReturnTopButton from "./_components/global/topButton";
import MovieBackground from "./_components/global/movieBackground";
import AnimationTransitionLink from "./_components/global/animationTransitionLink";
import Link from "next/link";

export default async function Page() {
  return (
    <main className={styles.main}>
      {/* <Link href={"/discography"}><div>discography</div></Link> */}
      <AnimationTransitionLink
        href="/discography"
      >
        <div>discography</div>
      </AnimationTransitionLink>
      <MovieBackground></MovieBackground>
      <ReturnTopButton></ReturnTopButton>
      <div style={{ height: "10000px" }}></div>
    </main>
  );
}
