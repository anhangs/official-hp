"use client";

import Image from "next/image";

import styles from "./menu.module.scss";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
// import { Bitter } from "next/font/google";

// const bitter = Bitter({ weight: "200", subsets: ['latin'] })

const Menu: NextPage = () => {
  // ハンバーガーメニューの表示簡易
  const [isMenuAppear, setIsMenuAppear] = useState(false);
  const scrollWindow = () => {
    const top = 100; //ボタンを表示させたい位置
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsMenuAppear(true);
    } else {
      setIsMenuAppear(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);
  
  // ハンバーガーメニューの開閉管理
  const [expand, setExpand] = useState(false);
  const appearStyle = isMenuAppear || expand
    ? `${styles.fadein} ${styles.appear}`
    : `${styles.fadein}`;
  const hamburgerStyle = expand
    ? `${styles.hamburger_container} ${styles.active}`
    : `${styles.hamburger_container}`;

  const menuStyle = expand
    ? `${styles.menu_container} ${styles.active}`
    : `${styles.menu_container}`;

  const backGround = expand
    ? `${styles.circle} ${styles.active}`
    : `${styles.circle}`;

  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const expandMenu = async (event: React.UIEvent) => {
    const bodyElm = document.getElementsByTagName("body");
    if(!expand) {

      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    }
    else {
      window.scrollTo(scrollPosition.x, scrollPosition.y);
    }
    setExpand(!expand);
  };

  useEffect(() => {
    const bodyElm = document.getElementsByTagName("body");
    if(expand) {
      if(bodyElm) {
        bodyElm[0].style.position = "fixed";
        bodyElm[0].style.overflow = "hidden";
      }
    }
    else {
      bodyElm[0].style.position = "relative";
      bodyElm[0].style.overflow = "auto";
      window.scrollTo(scrollPosition.x, scrollPosition.y);
    }
  },[expand])
  return (
    <>
      {/* ハンバーガーメニュー */}
      <div className={`${hamburgerStyle} ${appearStyle}`} onClick={expandMenu}>
        <span></span>
      </div>
      {/* メニュー本体 */}
      <div className={menuStyle}>
        <div className={styles.menu_content}>
          {/* ナビゲーション部分 */}
          <nav>
            {/* <ul className={bitter.className}> */}
            <ul>
              <li>
                <a href="#profile">Profile</a>
              </li>
              <li>
                <a href="#career">Career</a>
              </li>
              <li>
                <a href="#skill">Skill</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          {/* ロゴ部分 */}
          <div className={styles.logo_sns}>
            <Image
              src="/logo.svg"
              alt="key visual"
              width={450}
              height={300}
              priority
              sizes="100vw"
            ></Image>
            <span></span>
            <div className={styles.sns}>
              <a href="">
                <Image
                  src="/icon_x.svg"
                  alt="key visual"
                  width={60}
                  height={60}
                  priority
                ></Image>
              </a>
              <a href="">
                <Image
                  src="/icon_instagram.svg"
                  alt="key visual"
                  width={60}
                  height={60}
                  priority
                ></Image>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={backGround}></div>
    </>
  );
};

export default Menu;
