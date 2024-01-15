import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'flowbite';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UI Lib Components',
  description: 'Biblioteca de componentes privada.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>Layout Header</header>
        {children}
      </body>
    </html>
  )
}
