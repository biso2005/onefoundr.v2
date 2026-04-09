import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'OneFoundr — The Operating System for Solo Founders',
  description:
    'AI-powered peer accountability for solo founders. Join the waitlist.',
  openGraph: {
    title: 'OneFoundr — The Operating System for Solo Founders',
    description:
      'AI-powered peer accountability for solo founders. Join the waitlist.',
    url: 'https://onefoundr.com',
    siteName: 'OneFoundr',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneFoundr',
    description: 'The Operating System for Solo Founders',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
