import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CAC AGO ADURA NLA TI GBOGBO ENIYAN — The Great Prayer House for All People',
  description: 'A Spirit-filled Christ Apostolic Church in Ile Epo, Oke Odo, Abule Egba, Lagos. Join us for worship, prayer, and community.',
  keywords: ['CAC', 'Christ Apostolic Church', 'AGO ADURA', 'Abule Egba', 'Lagos', 'Church', 'Prayer House'],
  openGraph: {
    title: 'CAC AGO ADURA NLA TI GBOGBO ENIYAN',
    description: 'The Great Prayer House for All People — Ile Epo, Oke Odo, Abule Egba, Lagos',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
