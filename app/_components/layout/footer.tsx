import Image from 'next/image';

import styles from './footer.module.scss';
import type { NextPage } from 'next';

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

const AppFooter: NextPage = async () => {
  return (
    <>
      <footer className={styles.footer}>
        <img src='/footer.svg' alt='fotter'></img>
        <small>© 2023 anhangs All Rights Reserved</small>
      </footer>
    </>
  );
};

export default AppFooter;
