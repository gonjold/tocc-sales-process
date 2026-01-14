'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Map, 
  Phone, 
  MessageCircle, 
  Layers, 
  Award, 
  FileText, 
  Scroll,
  BookOpen,
  Car,
  FileSpreadsheet,
  Download,
  ArrowRight,
  Star,
  Users,
  Brain,
  Settings,
  Shield,
  X,
  LogOut
} from 'lucide-react'

const navigation = [
  {
    title: 'Start',
    items: [
      { name: 'Welcome', href: '/', icon: Home },
      { name: 'Glossary', href: '/glossary', icon: BookOpen },
    ]
  },
  {
    title: 'Road to the Sale',
    items: [
      { name: 'Overview', href: '/road-to-sale', icon: Map },
      { name: 'Meet & Greet', href: '/road-to-sale/step/1', stepNum: 1 },
      { name: 'Qualify', href: '/road-to-sale/step/2', stepNum: 2 },
      { name: 'Vehicle Selection', href: '/road-to-sale/step/3', stepNum: 3 },
      { name: 'Walkaround', href: '/road-to-sale/step/4', stepNum: 4 },
      { name: 'Test Drive', href: '/road-to-sale/step/5', stepNum: 5 },
      { name: 'Trial Close', href: '/road-to-sale/step/6', stepNum: 6 },
      { name: 'Trade Evaluation', href: '/road-to-sale/step/7', stepNum: 7 },
      { name: 'Write-Up', href: '/road-to-sale/step/8', stepNum: 8 },
      { name: 'Negotiation', href: '/road-to-sale/step/9', stepNum: 9 },
      { name: 'F&I Handoff', href: '/fi-handoff', icon: ArrowRight },
      { name: 'Delivery', href: '/road-to-sale/step/10', stepNum: 10 },
    ]
  },
  {
    title: 'After the Sale',
    items: [
      { name: 'CSI & Reviews', href: '/csi', icon: Star },
      { name: 'Follow-Up & Referrals', href: '/follow-up', icon: Users },
    ]
  },
  {
    title: 'Building Value',
    items: [
      { name: 'Toyota Programs', href: '/building-value', icon: Award },
      { name: 'Premium Protect Plus', href: '/ppp', icon: Shield },
      { name: 'Window Sticker', href: '/window-sticker', icon: FileSpreadsheet },
      { name: 'Model Information', href: '/model-information', icon: Car },
    ]
  },
  {
    title: 'Skills & Practice',
    items: [
      { name: 'Phone Skills', href: '/skills/phone', icon: Phone },
      { name: 'Objection Handling', href: '/skills/objections', icon: MessageCircle },
      { name: 'Flashcard Practice', href: '/skills/flashcards', icon: Layers },
      { name: 'Quiz Mode', href: '/skills/quiz', icon: Brain },
    ]
  },
  {
    title: 'Resources',
    items: [
      { name: 'Forms Library', href: '/resources/forms', icon: FileText },
      { name: 'Scripts Library', href: '/resources/scripts', icon: Scroll },
    ]
  },
]

// Helper to close sidebar on mobile
const closeMobileSidebar = () => {
  if (typeof window !== 'undefined' && window.innerWidth <= 1024) {
    document.querySelector('.sidebar')?.classList.remove('open')
    document.querySelector('.sidebar-overlay')?.classList.remove('active')
  }
}

// Logout function
const handleLogout = () => {
  sessionStorage.removeItem('tocc-auth')
  window.location.reload()
}

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Overlay for mobile - click to close */}
      <div 
        className="sidebar-overlay"
        onClick={closeMobileSidebar}
      />
      
      <nav className="sidebar">
        {/* Header */}
        <div className="sidebar-header">
          <Link href="/" className="sidebar-logo" onClick={closeMobileSidebar}>
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/ahtocc-sales-training.firebasestorage.app/o/images%2Flogos%2FTOCC%20Palm%20BUG%20-%20color.png?alt=media" 
              alt="TOCC"
            />
            <div className="sidebar-logo-text">
              <span className="dealership-name">Toyota of Coconut Creek</span>
              <span className="training-label">Sales Training</span>
            </div>
          </Link>
          {/* Close button for mobile */}
          <button 
            className="sidebar-close lg:hidden"
            onClick={closeMobileSidebar}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="sidebar-nav">
          {navigation.map((section) => (
            <div key={section.title} className="nav-section">
              <div className="nav-section-title">{section.title}</div>
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
                  onClick={closeMobileSidebar}
                >
                  {item.stepNum ? (
                    <span className="step-num">{item.stepNum}</span>
                  ) : item.icon ? (
                    <item.icon size={18} />
                  ) : null}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="sidebar-footer">
          <Link href="/export" className="sidebar-footer-btn" onClick={closeMobileSidebar}>
            <Download size={16} />
            Downloads
          </Link>
          <div className="flex gap-2 mt-2">
            <Link href="/admin" className="sidebar-footer-btn flex-1 opacity-60 hover:opacity-100 bg-gray-800" onClick={closeMobileSidebar}>
              <Settings size={16} />
              Admin
            </Link>
            <button 
              onClick={handleLogout}
              className="sidebar-footer-btn px-3 opacity-60 hover:opacity-100 bg-gray-800"
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
