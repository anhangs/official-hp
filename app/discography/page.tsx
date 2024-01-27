'use client'
import Link from 'next/link';
import styles from './page.module.scss';
import WebGlSlider from '../_components/image/webGlSlider';

export default function Page() {
  return (
    <>
    <main className={styles.main}>
      <Link href={'/'}><div>home</div></Link>
      <WebGlSlider></WebGlSlider>
    </main>
    </>
  );
}
