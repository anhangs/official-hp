'use client'
import type { NextPage } from "next";
import Image from "next/image";
// import { profileData } from "@/app/assets/profile";

// import { Introduction } from "@/apollo/__generated__/client/graphql";
// import { request } from "@/apollo/client";
// import introduction from "@/apollo/query/introduction.gql";

import styles from "./skill.module.scss";

const Skill: NextPage = async () => {
  // const body = {
  //   operationName: "Query",
  //   query: introduction.loc.source.body,
  //   variables: {},
  // };
  // const response = await request<{ introduction: Introduction }>(
  //   process.env.NEXT_PUBLIC_GRAPHQL_SERVER!,
  //   {
  //     body: body,
  //     // cache: "force-cache",
  //     // next: { revalidate: 10 },
  //   }
  // );

  return (
    <>
      {/* <div id="skill" className={styles.skill}>
        <h2 className={styles.title}>Skill</h2>
        <div className={styles.items}>
          {profileData.skill.map((m) => {
            return (
              <>
                <div className={styles.item}>
                  <Image
                    src={m.icon!}
                    alt="key visual"
                    width={300}
                    height={300}
                    priority
                  ></Image>
                </div>
              </>
            );
          })}
        </div>
      </div> */}
    </>
  );
};

export default Skill;
