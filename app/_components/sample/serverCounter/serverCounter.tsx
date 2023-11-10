import { NextPage } from "next";
import { useState } from "react";

type CounterProps = {
  initialCount: number;
};

const asyncFunc = async (value: number): Promise<string> => {
  return value + "async value";
};

const ServerCounter: NextPage<CounterProps> = async ({ initialCount }) => {
  const count = await asyncFunc(initialCount);

  return (
    <div>
      <p>ServerCount: {count}</p>
      {/* HACK: ↓のようなイベントハンドラを伴うコードはサーバーコンポーネントで書けない */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
    </div>
  );
};

export default ServerCounter;
