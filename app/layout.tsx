import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ClientLayout } from '@/components/ClientLayout'

const ICON_URL = 'https://firebasestorage.googleapis.com/v0/b/ahtocc-sales-training.firebasestorage.app/o/images%2Flogos%2FTOCC%20Palm%20BUG%20-%20color.png?alt=media'

export const metadata: Metadata = {
  title: 'Sales Training | Toyota of Coconut Creek',
  description: 'Comprehensive sales training system for automotive professionals',
  manifest: '/manifest.json',
  icons: {
    icon: ICON_URL,
    shortcut: ICON_URL,
    apple: ICON_URL,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'TOCC Train',
  },
  applicationName: 'TOCC Sales Training',
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  themeColor: '#EB0A1E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* PWA Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="TOCC Train" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href={ICON_URL} />
        <link rel="apple-touch-icon" sizes="152x152" href={ICON_URL} />
        <link rel="apple-touch-icon" sizes="167x167" href={ICON_URL} />
        <link rel="apple-touch-icon" sizes="180x180" href={ICON_URL} />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
