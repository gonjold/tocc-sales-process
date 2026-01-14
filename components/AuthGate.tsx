'use client'

import { useState, useEffect, ReactNode } from 'react'
import { Lock, Eye, EyeOff, AlertCircle } from 'lucide-react'

// ============================================
// SITE PASSWORD - Change this to update access
// Default password (can be overridden in Admin panel)
// ============================================
const DEFAULT_SITE_PASSWORD = 'tocc2026'
const SESSION_TIMEOUT_HOURS = 24 // Session expires after 24 hours
// ============================================

// Get the current password (checks localStorage first for admin override)
const getSitePassword = (): string => {
  if (typeof window !== 'undefined') {
    const customPassword = localStorage.getItem('tocc-site-password')
    if (customPassword) return customPassword
  }
  return DEFAULT_SITE_PASSWORD
}

// Check if session is still valid (within timeout period)
const isSessionValid = (): boolean => {
  if (typeof window === 'undefined') return false
  
  const authTime = sessionStorage.getItem('tocc-auth-time')
  if (!authTime) return false
  
  const loginTime = parseInt(authTime, 10)
  const now = Date.now()
  const hoursSinceLogin = (now - loginTime) / (1000 * 60 * 60)
  
  return hoursSinceLogin < SESSION_TIMEOUT_HOURS
}

interface AuthGateProps {
  children: ReactNode
}

export function AuthGate({ children }: AuthGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check for existing session on mount
  useEffect(() => {
    const session = sessionStorage.getItem('tocc-auth')
    if (session === 'authenticated' && isSessionValid()) {
      setIsAuthenticated(true)
    } else {
      // Clear expired session
      sessionStorage.removeItem('tocc-auth')
      sessionStorage.removeItem('tocc-auth-time')
      setIsAuthenticated(false)
    }
    setIsLoading(false)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === getSitePassword()) {
      sessionStorage.setItem('tocc-auth', 'authenticated')
      sessionStorage.setItem('tocc-auth-time', Date.now().toString())
      setIsAuthenticated(true)
      setError(false)
    } else {
      setError(true)
      setPassword('')
    }
  }

  // Show loading state while checking auth
  if (isLoading || isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/ahtocc-sales-training.firebasestorage.app/o/images%2Flogos%2FTOCC%20Palm%20BUG%20-%20color.png?alt=media" 
            alt="TOCC"
            className="h-16 w-auto opacity-50"
          />
        </div>
      </div>
    )
  }

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/ahtocc-sales-training.firebasestorage.app/o/images%2Flogos%2FTOCC%20Palm%20BUG%20-%20color.png?alt=media" 
              alt="Toyota of Coconut Creek"
              className="h-20 w-auto mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-white">Sales Training Portal</h1>
            <p className="text-gray-400 text-sm mt-1">Toyota of Coconut Creek</p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-4">
              <Lock className="text-toyota-red" size={24} />
            </div>
            
            <h2 className="text-xl font-bold text-center text-gray-900 mb-2">
              Staff Access
            </h2>
            <p className="text-gray-500 text-center text-sm mb-6">
              Enter the team password to access training materials
            </p>

            <form onSubmit={handleLogin}>
              <div className="relative mb-4">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError(false)
                  }}
                  placeholder="Enter password"
                  className={`w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    error 
                      ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                      : 'border-gray-200 focus:ring-toyota-red/20 focus:border-toyota-red'
                  }`}
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-600 text-sm mb-4 bg-red-50 px-3 py-2 rounded-lg">
                  <AlertCircle size={16} />
                  <span>Incorrect password. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-toyota-red text-white font-semibold py-3 rounded-lg hover:bg-toyota-red-dark transition-colors"
              >
                Access Training
              </button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-6">
              Contact your manager if you need the password
            </p>
          </div>

          {/* Footer */}
          <p className="text-gray-500 text-xs text-center mt-6">
            © {new Date().getFullYear()} Toyota of Coconut Creek
          </p>
        </div>
      </div>
    )
  }

  // Render children if authenticated
  return <>{children}</>
}

// Export logout function for use elsewhere
export function useLogout() {
  return () => {
    sessionStorage.removeItem('tocc-auth')
    window.location.reload()
  }
}
