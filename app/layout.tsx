import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import "./global.css"

const gothamBook = localFont({ src: '../public/fonts/Gotham Book.otf' })
export const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amaro Challenge'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gothamBook.className}>{children}</body>
    </html>
  )
}
