import Image from "next/image";

import styles from "./header.module.scss";
import type { NextPage } from "next";
// import { Raleway } from "next/font/google";

type Link = {
  profile: string;
  career: string;
  skill: string;
  contact: string;
};
type HeaderProps = {
  title: string;
  links: Link;
};

// const raleway = Raleway({ weight: "400", subsets: ['latin'] })

const AppHeader: NextPage<HeaderProps> = async (props: HeaderProps) => {
  return (
    <>
      <header className={styles.header}>
        <a href="/" className={styles.logo}>
          <Image
            className={styles.svg}
            src="/icon.svg"
            alt="logo"
            width={180}
            height={64}
            priority
          />
        </a>

        {/* <ul className={`${styles.menu} ${raleway.className}`}> */}
        <ul className={styles.menu}>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#career">Career</a></li>
          <li><a href="#skill">Skill</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
    </>
  );
};

export default AppHeader;
