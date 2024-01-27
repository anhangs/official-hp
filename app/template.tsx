'use client'

import { AnimatePresence, motion } from 'framer-motion';
import PageTransition from './_components/transition/pageTransition';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnimatePresence mode='wait'>{children}</AnimatePresence>
    </>
  );
}
