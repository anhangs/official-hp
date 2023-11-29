'use client'
import Link from "next/link";
import styles from "./page.module.scss";

export default async function Page() {
  
  return (
    <>
    <main className={styles.main}>
      <Link href={"/"}><div>home</div></Link>
    </main>
    </>
  );
}
