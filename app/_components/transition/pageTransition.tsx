'use client';

import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from './pageTransition.module.scss';
import { useLoading } from '@/app/_hooks/useLoding';
import { useViewTransition } from '@/app/_hooks/useViewTransition';
import {
  NavigateEvent,
  Navigation,
  NavigationCurrentEntryChangeEvent,
} from '@/@types/navigationApi';
import { usePathname } from 'next/navigation';
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  motion,
} from 'framer-motion';

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
  // 元々のコード
  const { isLoading, startLoading, endLoading } = useLoading();
  const [animationState, setAnimationState] = useState<
    'initial' | 'suspend' | 'turnAround' | 'complete'
  >('initial');

  const animationStart = () => {
    startLoading();
    setAnimationState('suspend');
  };
  const animationInterval = (event: AnimationEvent) => {
    setAnimationState('turnAround');
  };
  const animationend = (event: AnimationEvent) => {
    endLoading();
    setAnimationState('complete');
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

  return (
    <>
      {/* <AnimatePresence mode='wait' onExitComplete={() => alert('completed')}>
        <motion.div
          key={usePathname()}
          initial={{ translateY: 200 }}
          animate={{ translateY: 1 }}
          exit={{ translateY: 200 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      </AnimatePresence> */}

      {children}
    </>
  );
};

export default PageTransition;
