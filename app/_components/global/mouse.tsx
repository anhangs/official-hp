"use client";

import type { NextPage } from "next";
import styles from "./mouse.module.scss";

import { useEffect, useState } from "react";
import useAnimationFrame from "@/app/_hooks/useAnimationFrame"
import useIsFinePointer from "@/app/_hooks/useIsFinePointer";
import useScrollSpeed from "@/app/_hooks/useScrollSpeed";

type Position = { x: number, y: number };
type PositionState = {
  mouse: Position,
  stalkerMoveTo: Position,
  stalkerMoveToRounded: Position,
}

const Mouse: NextPage = () => {
  /**
   * マウスストーカーのrefオブジェクト
   */
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [stalkerMoveToPosition, setStalkerMoveToPosition] = useState<Position>({ x: 0, y: 0 });
  const [stalkerMoveToRounded, setStalkerMoveToRounded] = useState<Position>({ x: 0, y: 0 });
  /**
   * マウスカーソルとマウスストーカーのポジション
   */
  const positionState: PositionState = {
    mouse: mousePosition,
    stalkerMoveTo: stalkerMoveToPosition,
    stalkerMoveToRounded: stalkerMoveToRounded
  }

  /**
   * マウスカーソル移動時に位置を受け取る
   * @param event マウスカーソルの移動イベント
   */
  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  /**
   * マウスカーソルの変更検知をイベント登録
   */
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);


  /**
   * マウスストーカーの移動スピードを返す
   * 　1. XとYの距離が5px以上離れている場合は0.25を返す
   * 　2. XとYの距離が5px以内の場合は0.1を返す
   * @param xDistance マウスポジションとマウスストーカーのX距離
   * @param yDistance マウスポジションとマウスストーカーのY距離
   * @returns 
   */
  const stalkerSpeed = (xDistance: number, yDistance: number): number => {
    if(xDistance < 3 && yDistance < 3) return 0.1;
    else return 0.5;
  }

  /**
   * マウスストーカーをどれだけ進めるか？をstate更新する
   */
  const moveStalker = () => {
    const xDistance = positionState.mouse.x - positionState.stalkerMoveTo.x;
    const yDistance = positionState.mouse.y - positionState.stalkerMoveTo.y;
    setStalkerMoveToPosition({
      x: positionState.stalkerMoveTo.x + xDistance * stalkerSpeed(xDistance, yDistance),
      y: positionState.stalkerMoveTo.y + yDistance * stalkerSpeed(xDistance, yDistance),
    });
    setStalkerMoveToRounded({
      x: Math.round(positionState.stalkerMoveTo.x * 10) / 10,
      y: Math.round(positionState.stalkerMoveTo.y * 10) / 10
    })
  }

  /**
   * マウスポジションの変更を追跡する
   * ※そのままstateの変更までしてくれるため、再レンダリングもされる
   */
  useAnimationFrame(moveStalker);

  /**
   * マウスを使用できる環境にあるか？判定する
   * @returns true: ある / false: ない
   */
  const canUseMouse = () => useIsFinePointer();

  /**
   * マウスストーカーのラッパースタイル
   */
  const wrapperStyle = canUseMouse() ?
  `${styles["stalker-wrapper"]} ${"position"}`
  : `${styles["stalker-wrapper"]}`

  /**
   * マウスストーカーのスタイル
   */
  const stalkerStyle = canUseMouse() ?
  `${styles["stalker"]} ${"active"}`
  : `${styles["stalker"]}`

  return (
    <>
      <div className={wrapperStyle}>
        <div className={stalkerStyle}></div>
      </div>
      <style jsx>{`
        .position {
          transform: translate3d(${positionState.stalkerMoveToRounded.x}px, ${positionState.stalkerMoveToRounded.y}px, 0);
        }
        .active {
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default Mouse;
