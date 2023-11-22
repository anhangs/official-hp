"use client";
// import Image from "next/image";
import styles from "./page.module.scss";

// import { request } from "@/apollo/client";

// import introduction from "@/apollo/query/introduction.gql";
import KeyVisual from "./_components/sample/section/keyVisual";
import Profile from "./_components/sample/section/profile";
import Career from "./_components/sample/section/career";
import Skill from "./_components/sample/section/skill";
import Contact from "./_components/sample/section/contact";
import Menu from "./_components/global/menu";
import ReturnTopButton from "./_components/global/topButton";
import Noise from "./_components/global/noise";
import MovieBackground from "./_components/global/movieBackground";
// import { Introduction } from "@/apollo/__generated__/client/graphql";

export default async function Page() {
  // const body = {
  //   operationName: "Query",
  //   query: introduction.loc.source.body,
  //   variables: {},
  // };
  // const r = await request<{ introduction: Introduction }>(process.env.NEXT_PUBLIC_GRAPHQL_SERVER!, {
  //   body: body,
  //   // cache: "force-cache",
  //   // next: { revalidate: 10 },
  // });
  // console.log(r);
  return (
    <main className={styles.main}>
      <MovieBackground></MovieBackground>
      <ReturnTopButton></ReturnTopButton>
      <div style={{ height: "10000px" }}></div>
    </main>
  );
}
