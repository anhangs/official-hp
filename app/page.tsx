'use client'
// import Image from "next/image";
import styles from "./page.module.scss";

// import { request } from "@/apollo/client";

// import introduction from "@/apollo/query/introduction.gql";
import KeyVisual from "./_components/section/keyVisual";
import Profile from "./_components/section/profile";
import Career from "./_components/section/career";
import Skill from "./_components/section/skill";
import Contact from "./_components/section/contact";
import Hamburger from "./_components/hamburger/hamburger";
import ReturnTopButton from "./_components/parts/topButton";
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
      {/* HACK: pageはtemplateの中に表示される */}
      <Hamburger></Hamburger>
      <ReturnTopButton></ReturnTopButton>
    </main>
  );
}
