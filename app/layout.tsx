import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Greentic Indonesia',
  description: 'Greentic adalah bisnis yang menggabungkan seni dan lingkungan untuk membuat dekorasi rumahan yang ramah lingkungan. Kami memanfaatkan vertical farming untuk menanam tanaman hias, obat, dan sayuran di dinding rumah Anda.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
