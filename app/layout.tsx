import '@styles/globals.scss'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

import AppHeader from '@/app/_components/header'
import AppFooter from './_components/footer'
import Noise from './_components/global/noise'
import Mouse from './_components/global/mouse'
import Menu from './_components/global/menu'
import MovieBackground from './_components/global/movieBackground'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'anhangs',
  description: 'anhangs official hp',
}

const headerProps = {
  profile: "", career: "", skill: "", contact: ""
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
        <MovieBackground></MovieBackground>
        {children}
        {/* <AppFooter></AppFooter> */}
      </body>
    </html>
  )
}

