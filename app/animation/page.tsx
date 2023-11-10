'use client'
import { useEffect, useState } from 'react'
import css from './page.module.scss'

export default function Page() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const positionTop = window.scrollY;
      const windowH = window.innerHeight;
      let zoom_level = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
      console.log(zoom_level)
      const barWidth = (positionTop / windowH) * zoom_level * 100;
      console.log(barWidth)
      setWidth(barWidth);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main className={css.main}>
      <p>test</p>
      <div className={css.bar} style={{ width: `${width}%` }}></div>
    </main>
  )
}