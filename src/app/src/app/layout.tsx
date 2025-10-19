import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Golden Pips Alerts - Trading Signals',
  description: 'Professional trading signals and market alerts. Get real-time signals and expert analysis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
