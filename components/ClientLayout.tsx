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
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Header />
          <div className="content-body">
            {children}
          </div>
        </main>
      </div>
    </AuthGate>
  )
}
