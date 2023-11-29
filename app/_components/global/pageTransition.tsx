"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "./pageTransition.module.scss";
import { useLoading } from "@/app/_hooks/useLoding";
import { useViewTransition } from "@/app/_hooks/useViewTransition";
import { delay } from "@/app/_lib/util";
import Curtain from "./curtain";
import {
  NavigateEvent,
  Navigation,
  NavigationCurrentEntryChangeEvent,
} from "@/@types/navigationApi";

/**
 * ページ遷移時のアニメーションコンポーネント
 * useLoadingのstartLoadingを使用して他コンポーネントからアニメーションを呼び出す
 *
 * @returns
 */
const PageTransition: NextPage<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isLoading, startLoading, endLoading } = useLoading();
  const [animationState, setAnimationState] = useState<
    "initial" | "suspend" | "turnAround" | "complete"
  >("initial");

  const animationStart = () => {
    startLoading();
    setAnimationState("suspend");
  };
  const animationInterval = (event: AnimationEvent) => {
    setAnimationState("turnAround");
  };
  const animationend = (event: AnimationEvent) => {
    endLoading();
    setAnimationState("complete");
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

  const updateDom = async (e: NavigateEvent) => {
    const { startViewTransition } = useViewTransition(async () => {
      animationStart();
    });

    if (shouldNotIntercept(e)) return;
    e.intercept({
      handler: async () => {
        startViewTransition();
      },
    });
  };

  const [previousNode, setPreviousNode] = useState<React.ReactNode>(null);
  useEffect(() => {
    (window as any).navigation.addEventListener("navigate", updateDom);
    return () => {
      (window as any).navigation.removeEventListener("navigate", updateDom);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Curtain
          animationInterval={animationInterval}
          animationend={animationend}
        ></Curtain>
      ) : null}
      {/* {animationState != "suspend" ? children : null} */}
      {children}
    </>
  );
};

export default PageTransition;
