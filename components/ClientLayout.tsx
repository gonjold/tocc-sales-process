'use client'

import { ReactNode } from 'react'
import { AuthGate } from './AuthGate'
import { Sidebar } from './layout/Sidebar'
import { Header } from './layout/Header'

interface ClientLayoutProps {
  children: ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <AuthGate>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 p-4 lg:p-8">
            <div className="max-w-5xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </AuthGate>
  )
}
