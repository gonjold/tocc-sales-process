import type { Metadata } from 'next'
import './globals.css'
import { Sidebar } from '@/components/layout/Sidebar'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Sales Training | Al Hendrickson Toyota Coconut Creek',
  description: 'Comprehensive sales training system for automotive professionals',
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/ahtocc-sales-training.firebasestorage.app/o/images%2Flogos%2FTOCC%20Palm%20BUG%20-%20color.png?alt=media',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            <Header />
            <div className="content-body">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
