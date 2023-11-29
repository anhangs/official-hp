'use client'

import type { NextPage } from "next";
import styles from "./opening.module.scss";
import { useEffect, useState } from "react";
import { useLoading } from "@/app/_hooks/useLoding";

const Opening: NextPage<{ children: React.ReactNode; }>  = ({
  children,
}: { children: React.ReactNode }) => {
  const [isOpening, setIsOpening] = useState(true);

  useEffect(() => {
    setIsOpening(true)
    setTimeout(() => {
      setIsOpening(false);
    }, 2 * 100)
  }, [])

  return (
    isOpening ? 
      <>
        {"Opening Animation"}
      </>
      : 
      <>{children}</>
  );
};

export default Opening;
