import type { NextPage } from "next";
import styles from "./keyVisual.module.scss";
// import { Raleway } from "next/font/google";
import Image from "next/image";
import keyvisual from "../../../public/kv.png"

// const raleway = Raleway({ weight: "400", subsets: ['latin'] })

const KeyVisual: NextPage = async () => {
  return (
    <>
      <div className={styles.top}>
        {/* <h1 className={raleway.className}> */}
        <h1>
          PORTFOLIO
        </h1>
        <Image
          className={styles.keyVisual}
          src={keyvisual}
          alt="key visual"
          width={1073}
          height={788}
          priority
          sizes="100vw"
        ></Image>
      </div>
    </>
  );
};

export default KeyVisual;
