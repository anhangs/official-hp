"use client";

import Curtain from "./curtain";
import { NextPage } from "next";
import { useLoading } from "@/app/_hooks/useLoding";
import { useEffect } from "react";
import { useTransitionRouterPush } from "@/app/_hooks/useTransitionRouterPush";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * ページ遷移時のアニメーションコンポーネント
 * useLoadingのstartLoadingを使用して他コンポーネントからアニメーションを呼び出す
 *
 * @returns
 */
const PageTransition: NextPage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { isLoading, startLoading, endLoading } = useLoading();
  const { routerPushWithTransition } = useTransitionRouterPush();

  const animationend = (event: AnimationEvent) => {
    endLoading();
  };

  useEffect(() => {
    const handlePopState = async (event: PopStateEvent) => {
      // event.preventDefault();
      // ローディング画面呼び出し
      startLoading();
      // HACK: ローディングアニメーション0.75秒経過したタイミングで画面全てを覆うため、このタイミングで画面遷移をさせる
      setTimeout(() => {
        console.log("setTimeout");
        resolve();
      }, 1500 * 0.5);
    };

    window.addEventListener("popstate", handlePopState, false);
    return () => window.removeEventListener("popstate", handlePopState, false);
  }, []);

  return <>{isLoading && <Curtain animationend={animationend} />}</>;
};

export default PageTransition;
