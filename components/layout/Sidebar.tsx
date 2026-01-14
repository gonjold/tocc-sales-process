'use client'

import { useState, useEffect } from 'react'
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
  LogOut,
  ChevronDown,
  PanelLeftClose,
  PanelLeft
} from 'lucide-react'

interface NavItem {
  name: string
  href: string
  icon?: React.ElementType
  stepNum?: number
}

interface NavSection {
  title: string
  id: string
  icon: React.ElementType
  items: NavItem[]
}

const navigation: NavSection[] = [
  {
    title: 'Start',
    id: 'start',
    icon: Home,
    items: [
      { name: 'Welcome', href: '/', icon: Home },
      { name: 'Glossary', href: '/glossary', icon: BookOpen },
    ]
  },
  {
    title: 'Road to the Sale',
    id: 'road-to-sale',
    icon: Map,
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
    id: 'after-sale',
    icon: Star,
    items: [
      { name: 'CSI & Reviews', href: '/csi', icon: Star },
      { name: 'Follow-Up & Referrals', href: '/follow-up', icon: Users },
    ]
  },
  {
    title: 'Building Value',
    id: 'building-value',
    icon: Award,
    items: [
      { name: 'Toyota Programs', href: '/building-value', icon: Award },
      { name: 'Premium Protect Plus', href: '/ppp', icon: Shield },
      { name: 'Window Sticker', href: '/window-sticker', icon: FileSpreadsheet },
      { name: 'Model Information', href: '/model-information', icon: Car },
    ]
  },
  {
    title: 'Skills & Practice',
    id: 'skills',
    icon: Brain,
    items: [
      { name: 'Phone Skills', href: '/skills/phone', icon: Phone },
      { name: 'Objection Handling', href: '/skills/objections', icon: MessageCircle },
      { name: 'Flashcard Practice', href: '/skills/flashcards', icon: Layers },
      { name: 'Quiz Mode', href: '/skills/quiz', icon: Brain },
    ]
  },
  {
    title: 'Resources',
    id: 'resources',
    icon: FileText,
    items: [
      { name: 'Forms Library', href: '/resources/forms', icon: FileText },
      { name: 'Scripts Library', href: '/resources/scripts', icon: Scroll },
    ]
  },
]

// Find which section contains a path
const findSectionForPath = (pathname: string): string | null => {
  for (const section of navigation) {
    for (const item of section.items) {
      if (item.href === pathname || (item.href !== '/' && pathname.startsWith(item.href))) {
        return section.id
      }
    }
  }
  // Default to 'start' for home page
  if (pathname === '/') return 'start'
  return null
}

export function Sidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  // Initialize - only expand section containing current page
  useEffect(() => {
    const activeSection = findSectionForPath(pathname)
    const initial: Record<string, boolean> = {}
    navigation.forEach(section => {
      initial[section.id] = section.id === activeSection
    })
    setOpenSections(initial)
  }, []) // Only on mount

  // Auto-expand section when navigating to a new page
  useEffect(() => {
    const activeSection = findSectionForPath(pathname)
    if (activeSection && !openSections[activeSection]) {
      setOpenSections(prev => ({ ...prev, [activeSection]: true }))
    }
  }, [pathname])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  const isSectionActive = (section: NavSection) => {
    return section.items.some(item => isActive(item.href))
  }

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const handleLogout = () => {
    sessionStorage.removeItem('tocc-auth')
    sessionStorage.removeItem('tocc-auth-time')
    window.location.reload()
  }

  const handleNavClick = () => {
    setMobileOpen(false)
  }

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <nav className={`
        fixed top-0 left-0 h-full z-50 
        bg-gradient-to-b from-gray-900 via-gray-900 to-black
        text-white flex flex-col
        transition-all duration-300 ease-in-out
        ${collapsed ? 'w-16' : 'w-64'}
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <Link href="/" onClick={handleNavClick} className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/ahtocc-sales-training.firebasestorage.app/o/images%2Flogos%2FTOCC%20Palm%20BUG%20-%20color.png?alt=media" 
              alt="TOCC"
              className="h-10 w-10 flex-shrink-0"
            />
            {!collapsed && (
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wide leading-tight">Toyota of Coconut Creek</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Sales Training</span>
              </div>
            )}
          </Link>
          
          {/* Mobile close button */}
          <button 
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-3">
          {navigation.map((section) => (
            <div key={section.id} className="mb-1">
              {/* Section Header - Clickable to expand/collapse */}
              <button
                onClick={() => !collapsed && toggleSection(section.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-2.5
                  transition-all duration-150
                  ${collapsed ? 'justify-center' : 'justify-between'}
                  ${isSectionActive(section) 
                    ? 'text-white bg-white/5' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                `}
                title={collapsed ? section.title : undefined}
              >
                <div className="flex items-center gap-3">
                  <section.icon size={18} className={isSectionActive(section) ? 'text-red-500' : ''} />
                  {!collapsed && (
                    <span className="font-semibold text-sm">{section.title}</span>
                  )}
                </div>
                {!collapsed && (
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${openSections[section.id] ? 'rotate-180' : ''}`}
                  />
                )}
              </button>
              
              {/* Section Items */}
              {!collapsed && openSections[section.id] && (
                <div className="mt-1 ml-4 pl-4 border-l border-white/10">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleNavClick}
                      className={`
                        flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px]
                        transition-all duration-150
                        ${isActive(item.href) 
                          ? 'bg-red-600 text-white font-medium' 
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                        }
                      `}
                    >
                      {item.stepNum ? (
                        <span className={`
                          flex items-center justify-center w-5 h-5 text-[10px] font-bold rounded
                          ${isActive(item.href) ? 'bg-white/20' : 'bg-white/10'}
                        `}>
                          {item.stepNum}
                        </span>
                      ) : item.icon ? (
                        <item.icon size={14} className="opacity-70" />
                      ) : null}
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-white/10 space-y-2">
          {/* Downloads Button */}
          <Link 
            href="/export" 
            onClick={handleNavClick}
            className={`
              flex items-center justify-center gap-2 w-full py-2.5 
              bg-red-600 hover:bg-red-700 text-white text-sm font-semibold 
              rounded-lg transition-colors
              ${collapsed ? 'px-2' : 'px-4'}
            `}
            title={collapsed ? 'Downloads' : undefined}
          >
            <Download size={18} />
            {!collapsed && <span>Downloads</span>}
          </Link>
          
          {/* Admin & Logout Row */}
          <div className={`flex gap-2 ${collapsed ? 'flex-col' : ''}`}>
            <Link 
              href="/admin" 
              onClick={handleNavClick}
              className={`
                flex items-center justify-center gap-2 py-2 
                bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white
                text-sm rounded-lg transition-colors
                ${collapsed ? 'w-full px-2' : 'flex-1 px-3'}
              `}
              title={collapsed ? 'Admin' : undefined}
            >
              <Settings size={16} />
              {!collapsed && <span>Admin</span>}
            </Link>
            <button 
              onClick={handleLogout}
              className={`
                flex items-center justify-center py-2 
                bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white
                rounded-lg transition-colors
                ${collapsed ? 'w-full px-2' : 'px-3'}
              `}
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>

          {/* Collapse Toggle - Desktop Only */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex items-center justify-center gap-2 w-full py-2 text-gray-500 hover:text-gray-300 text-xs transition-colors"
          >
            {collapsed ? <PanelLeft size={16} /> : <PanelLeftClose size={16} />}
            {!collapsed && <span>Collapse</span>}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Button - Exposed for Header to use */}
      <MobileMenuButton onClick={() => setMobileOpen(true)} />
      
      {/* Spacer for main content */}
      <div className={`hidden lg:block flex-shrink-0 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`} />
    </>
  )
}

// Separate component for mobile menu button that Header can trigger
function MobileMenuButton({ onClick }: { onClick: () => void }) {
  useEffect(() => {
    (window as any).openMobileMenu = onClick
  }, [onClick])
  
  return null
}
