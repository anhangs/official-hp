"use client";

import { NextPage } from "next";
import React, { createRef, useEffect, useRef, useState } from "react";
import styles from "./webGlSlider.module.scss";
import {
  PerspectiveCamera,
  Scene,
  TextureLoader,
  WebGLRenderer,
  PlaneGeometry,
  ShaderMaterial,
  Mesh,
  BufferGeometry,
  Object3DEventMap,
} from "three";
import vertexShader from "@shader/vertexShader.glsl";
import fragmentShader from "@shader/fragmentShader.glsl";
import useAnimationFrame from "@/app/_hooks/useAnimationFrame";

type ImageSource = { key: number; src: string; alt: string };
const IMAGES: ImageSource[] = [
  {
    key: 1,
    src: "https://source.unsplash.com/whOkVvf0_hU/",
    alt: "",
  },
  {
    key: 2,
    src: "https://source.unsplash.com/whOkVvf0_hU/",
    alt: "",
  },
  {
    key: 3,
    src: "https://source.unsplash.com/whOkVvf0_hU/",
    alt: "",
  },
  {
    key: 4,
    src: "https://source.unsplash.com/whOkVvf0_hU/",
    alt: "",
  },
];

const WebGlSlider: NextPage = () => {
  const ref = useRef(null);
  const imageRefs = IMAGES.map((m) => useRef(null));
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    const canvasSize = {
      w: window.innerWidth,
      h: window.innerHeight,
    };

    const renderer = new WebGLRenderer({ canvas: ref.current! });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvasSize.w, canvasSize.h);

    const fov = 60; // 視野角
    const fovRad = (fov / 2) * (Math.PI / 180);
    const dist = canvasSize.h / 2 / Math.tan(fovRad);
    const camera = new PerspectiveCamera(
      fov,
      canvasSize.w / canvasSize.h,
      0.1,
      1000
    );
    camera.position.z = dist;

    const scene = new Scene();
    const loader = new TextureLoader();

    const createMesh = (
      img: HTMLImageElement
    ): Mesh<PlaneGeometry, ShaderMaterial, Object3DEventMap> => {
      const texture = loader.load(img.src);
      const uniforms = {
        uTexture: { value: texture },
        uImageAspect: { value: img.naturalWidth / img.naturalHeight },
        uPlaneAspect: { value: img.clientWidth / img.clientHeight },
        uTime: { value: 0 },
      };
      const geo = new PlaneGeometry(img.width, img.height, 100, 100);
      // const geo = new PlaneGeometry(1, 1, 100, 100); // 後から画像のサイズにscaleするので1にしておく
      const mat = new ShaderMaterial({
        uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      });

      const mesh = new Mesh(geo, mat);
      return mesh;
    };

    // ------------------------- start
    const t_texture = loader.load("https://source.unsplash.com/whOkVvf0_hU/");
    const t_uniforms1 = {
      uTexture: { value: t_texture },
      uImageAspect: { value: 1920 / 1280 }, // 画像のアスペクト
      uPlaneAspect: { value: 800 / 500 }, // プレーンのアスペクト
      uTime: { value: 0 },
    };
    const t_geo1 = new PlaneGeometry(800, 500, 100, 100);
    const t_mat1 = new ShaderMaterial({
      uniforms: t_uniforms1,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });

    const t_uniforms2 = {
      uTexture: { value: t_texture },
      uImageAspect: { value: 800 / 200 }, // 画像のアスペクト
      uPlaneAspect: { value: 800 / 500 }, // プレーンのアスペクト
      uTime: { value: 0 },
    };
    
    const t_geo2 = new PlaneGeometry(800, 500, 200, 200);
    const t_mat2 = new ShaderMaterial({
      uniforms: t_uniforms2,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });

    const t_mesh1 = new Mesh(t_geo1, t_mat1);
    const t_mesh2 = new Mesh(t_geo2, t_mat2);

    t_mesh1.position.set(-0.015625, 500, 0);
    t_mesh2.position.set(-0.015625, 46.5, 0);

    // scene.add(t_mesh1);
    // scene.add(t_mesh2);

    // ------------------------- end

    imageRefs.forEach((f) => {
      // TODO: html上の画像ポジションが反映されていない
      const mesh = createMesh(f.current!);
      scene.add(mesh);

      // stateに補完をする（animation frameでレンダリング更新するため）
      slides.push({ htmlElement: f.current!, mesh: mesh });
      setSlides(slides);
    });

    const loop = () => {
      t_uniforms1.uTime.value++;
      t_uniforms2.uTime.value++;

      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  useAnimationFrame(() => {
    slides.forEach(async () => {
      
    })
  })

  return (
    <>
      <div className={styles["webgl-canvas"]}>
        <canvas ref={ref}></canvas>
      </div>

      <div className={styles["container"]}>
        <ul key={"key"} className={styles["image-list"]}>
          {IMAGES.map((m, i) => (
            <li key={m.key} className={styles["image-item"]}>
              <a href="" className={styles["image-wrapper"]}>
                <img src={m.src} alt={m.alt} ref={imageRefs[i]} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

type Slide = { htmlElement: HTMLImageElement, mesh: Mesh<PlaneGeometry, ShaderMaterial, Object3DEventMap> };

// 画像をテクスチャにしたplaneを扱うクラス
class ImagePlane {
  refImage: HTMLImageElement;
  mesh: Mesh<PlaneGeometry, ShaderMaterial, Object3DEventMap>;
  canvasSize: { w: number; h: number };
  constructor(
    mesh: Mesh<PlaneGeometry, ShaderMaterial, Object3DEventMap>,
    img: HTMLImageElement,
    canvasSize: { w: number; h: number }
  ) {
    this.refImage = img; // 参照するimg要素
    this.mesh = mesh;
    this.canvasSize = canvasSize;
  }

  setParams() {
    // 参照するimg要素から大きさ、位置を取得してセットする
    const rect = this.refImage.getBoundingClientRect();

    this.mesh.scale.x = rect.width;
    this.mesh.scale.y = rect.height;

    // window座標をWebGL座標に変換
    const x = rect.left - this.canvasSize.w / 2 + rect.width / 2;
    const y = -rect.top + this.canvasSize.h / 2 - rect.height / 2;
    this.mesh.position.set(x, y, this.mesh.position.z);
  }

  update() {
    this.setParams();

    this.mesh.material.uniforms.uTime.value++;
  }
}

export default WebGlSlider;
