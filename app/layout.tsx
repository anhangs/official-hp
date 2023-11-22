import '@styles/globals.scss'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

import AppHeader from '@/app/_components/layout/header'
import AppFooter from './_components/layout/footer'
import Noise from './_components/global/noise'
import Mouse from './_components/global/mouse'
import Menu from './_components/global/menu'
import MovieBackground from './_components/global/movieBackground'
import Opening from './_components/global/opening'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'anhangs',
  description: 'anhangs official hp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <Noise></Noise>
        <Mouse></Mouse>
        <Menu></Menu>
        <Opening children={children}></Opening>
        {/* <AppFooter></AppFooter> */}
      </body>
    </html>
  )
}