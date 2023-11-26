'use client'

import type { NextPage } from "next";
import styles from "./opening.module.scss";
import { useEffect, useState } from "react";

const Opening: NextPage<{ children: React.ReactNode; }>  = ({
  children,
}: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false);
    }, 2 * 100)
  }, [])
  
  return (
    isLoading ? 
      <>
        {"Opening Animation"}
      </>
      : 
      <>
        {children}
      </>
  );
};

export default Opening;
