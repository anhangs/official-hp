"use client";

import Curtain from "./curtain";
import { NextPage } from "next";
import { useLoading } from "@/app/_hooks/useLoding";
import { useEffect } from "react";
import { useTransitionRouterPush } from "@/app/_hooks/useTransitionRouterPush";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  NavigateEvent,
  NavigationApiNavigationType,
} from "@/@types/navigationApi";
import { useViewTransition } from "@/app/_hooks/useViewTransition";

/**
 * ページ遷移時のアニメーションコンポーネント
 * useLoadingのstartLoadingを使用して他コンポーネントからアニメーションを呼び出す
 *
 * @returns
 */
const PageTransition: NextPage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const { isLoading, startLoading, endLoading } = useLoading();
  const { routerPushWithTransition } = useTransitionRouterPush();

  const animationend = (event: AnimationEvent) => {
    endLoading();
  };

  const shouldNotIntercept = (navigationEvent: NavigateEvent) => {
    // 参考: https://developer.chrome.com/docs/web-platform/navigation-api/#deciding-how-to-handle-a-navigation
    return (
      !navigationEvent.canIntercept ||
      navigationEvent.hashChange ||
      navigationEvent.downloadRequest ||
      navigationEvent.formData
    );
  };

  useEffect(() => {
    (window as any).navigation.addEventListener(
      "navigate",
      async (e: NavigateEvent) => {
        const { startViewTransition } = useViewTransition(async () => {
          return await new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log("setTimeout");
              // router.push(e.destination.url);
              resolve();
            }, 750);
          });
        });

        // e.preventDefault();
        const accept = ["traverse"] as NavigationApiNavigationType[];
        if (shouldNotIntercept(e)) return;
        if (!accept.some((s) => s == e.navigationType)) return;
        // Exit early if this navigation shouldn't be intercepted.
        // The properties to look at are discussed later in the article.
        console.log(e);

        startLoading();
        e.intercept({
          handler: async () => {
            await startViewTransition();
          },
        });

        // await useViewTransition(async () => {
        //   console.log("useViewTransition");
        //   startLoading();
        //   return await new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //       console.log("intercept");
        //       // router.push(e.destination.url);
        //       resolve();
        //     }, 750);
        //   });
        // });
        // e.preventDefault();

        // e.intercept({
        //   handler: async () => {
        //     return new Promise((resolve, reject) => {
        //       setTimeout(() => {
        //         console.log("intercept");
        //         resolve();
        //       }, 750);
        //     });
        //   },
        // });
      }
    );

    const handlePopState = async (event: PopStateEvent) => {
      event.preventDefault();
      // ローディング画面呼び出し
      startLoading();
      // HACK: ローディングアニメーション0.75秒経過したタイミングで画面全てを覆うため、このタイミングで画面遷移をさせる
      setTimeout(() => {
        console.log("setTimeout");
        return true;
      }, 750);
    };

    // window.addEventListener("popstate", handlePopState, false);
    // return () => window.removeEventListener("popstate", handlePopState, false);
  }, []);

  return <>{isLoading && <Curtain animationend={animationend} />}</>;
};

export default PageTransition;
