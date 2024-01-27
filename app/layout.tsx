import "@styles/globals.scss";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import styles from "./layout.module.scss";
import Noise from "./_components/background/noise";
import Mouse from "./_components/global/mouse";
import Menu from "./_components/layout/menu";
import MovieBackground from "./_components/background/movieBackground";
import Opening from "./_components/global/opening";
import PageTransition from "./_components/transition/pageTransition";


// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "anhangs",
  description: "anhangs official hp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Noise></Noise>
        <Mouse></Mouse>
        <Opening>
            <PageTransition>{children}</PageTransition>
            {/* {children} */}
        </Opening>
        <Menu></Menu>
        {/* <AppFooter></AppFooter> */}
      </body>
    </html>
  );
}
