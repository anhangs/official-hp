import type { NextPage } from "next";
import styles from "./noise.module.scss";

const Noise: NextPage = async () => {
  return (
    <>
      <div className={styles.noise}>
        <div className={styles["bg-repeat"]}></div>
      </div>
    </>
  );
};

export default Noise;
