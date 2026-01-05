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
  Download
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
      { name: 'Delivery', href: '/road-to-sale/step/10', stepNum: 10 },
    ]
  },
  {
    title: 'Building Value',
    items: [
      { name: 'Toyota Programs', href: '/building-value', icon: Award },
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

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <Link href="/" className="sidebar-logo">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/ahtocc-sales-training.firebasestorage.app/o/images%2Flogos%2FTOCC%20Palm%20BUG%20-%20color.png?alt=media" 
            alt="TOCC"
          />
          <div className="sidebar-logo-text">
            <span className="dealership-name">Al Hendrickson Toyota</span>
            <span className="training-label">Sales Training</span>
          </div>
        </Link>
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
        <Link href="/export" className="sidebar-footer-btn">
          <Download size={16} />
          Export / Print
        </Link>
      </div>
    </nav>
  )
}
