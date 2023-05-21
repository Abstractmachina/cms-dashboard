import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Content Dashboard',
  description: 'Edit your content here',
}

export default function RootLayout({children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
