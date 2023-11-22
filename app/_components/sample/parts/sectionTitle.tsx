"use client";

import { NextPage } from "next";
import { RefObject } from "react";

type SectionTitleProps = {
  content: string;
  size: number;
  position: { x: number; y: number };
  color: string;
};

const SectionTitle: NextPage<SectionTitleProps> = (
  prop: SectionTitleProps
) => {
  return (
    <>
      {/* <div className={styles.sectionTitle_wrap}> */}
      <div>
        <h2>
          {prop.content}
          <span></span>
        </h2>
      </div>
      <style jsx>{`
        h2 {
          font-size: 150px;
          position: relative;
          letter-spacing: 2px;
        }
        span {
          position: absolute;
          width: ${prop.size}px;
          height: ${prop.size}px;
          background: ${prop.color};
          border-radius: 50%;
          top: ${prop.position.y}px;
          left: ${prop.position.x}px;
          overflow: hidden;
          
        }
        span::before {
          position: absolute;
          top: ${prop.position.y * -1}px;
          left: ${prop.position.x * -1}px;
          content: "${prop.content}";
          color: #FFF;
        }
      `}</style>
    </>
  );
};

export default SectionTitle;
