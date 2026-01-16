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
      { name: 'Flashcards', href: '/skills/flashcards', icon: Layers },
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
  }, [])

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Exact match for active state (handle trailing slashes)
  const isActive = (href: string) => {
    const cleanPathname = pathname.replace(/\/$/, '') || '/'
    const cleanHref = href.replace(/\/$/, '') || '/'
    return cleanPathname === cleanHref
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
        bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950
        text-white flex flex-col
        transition-all duration-300 ease-in-out
        ${collapsed ? 'w-16' : 'w-60'}
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        safe-area-inset
      `}
      style={{
        paddingTop: 'env(safe-area-inset-top, 0px)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
      >
        {/* Header */}
        <div className="p-4 pl-5 border-b border-white/10 flex items-center justify-between">
          <Link href="/" onClick={handleNavClick} className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/ahtocc-sales-training.firebasestorage.app/o/images%2Flogos%2FTOCC%20Palm%20BUG%20-%20color.png?alt=media" 
              alt="TOCC"
              className="h-8 w-8 flex-shrink-0"
            />
            {!collapsed && (
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wide leading-tight">Toyota of Coconut Creek</span>
                <span className="text-[8px] text-gray-500 uppercase tracking-wider">Sales Process Portal</span>
              </div>
            )}
          </Link>
          
          <button 
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-2 -mr-1 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-2 scrollbar-thin">
          {navigation.map((section) => (
            <div key={section.id} className="mb-0.5">
              {/* Section Header - In collapsed mode, navigate to first item */}
              {collapsed ? (
                <Link
                  href={section.items[0].href}
                  onClick={handleNavClick}
                  className={`
                    w-full flex items-center justify-center px-3 py-2.5
                    transition-all duration-150
                    ${isSectionActive(section) 
                      ? 'text-white' 
                      : 'text-gray-500 hover:text-gray-300'
                    }
                  `}
                  title={section.title}
                >
                  <section.icon size={18} className={isSectionActive(section) ? 'text-red-500' : ''} />
                </Link>
              ) : (
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`
                    w-full flex items-center gap-2.5 px-3 py-2
                    transition-all duration-150 justify-between
                    min-h-[44px]
                    ${isSectionActive(section) 
                      ? 'text-white' 
                      : 'text-gray-500 hover:text-gray-300'
                    }
                  `}
                >
                  <div className="flex items-center gap-2.5">
                    <section.icon size={16} className={isSectionActive(section) ? 'text-red-500' : ''} />
                    <span className="text-xs font-semibold uppercase tracking-wide">{section.title}</span>
                  </div>
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-200 opacity-50 ${openSections[section.id] ? 'rotate-180' : ''}`}
                  />
                </button>
              )}
              
              {/* Section Items */}
              {!collapsed && openSections[section.id] && (
                <div className="pb-2">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleNavClick}
                      className={`
                        flex items-center gap-2 mx-2 px-3 py-2 rounded-lg text-sm
                        transition-all duration-150 relative
                        min-h-[44px]
                        ${isActive(item.href) 
                          ? 'text-white font-medium' 
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                        }
                      `}
                    >
                      {item.stepNum ? (
                        <span className={`
                          flex items-center justify-center w-5 h-5 text-[10px] font-bold rounded
                          ${isActive(item.href) ? 'bg-red-600 text-white' : 'bg-white/10'}
                        `}>
                          {item.stepNum}
                        </span>
                      ) : item.icon ? (
                        <item.icon size={14} className={isActive(item.href) ? 'text-white' : 'opacity-60'} />
                      ) : null}
                      <span className="truncate flex-1">{item.name}</span>
                      {/* Red dot indicator for active item */}
                      {isActive(item.href) && (
                        <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-2 border-t border-white/10 space-y-1.5">
          <Link 
            href="/export" 
            onClick={handleNavClick}
            className={`
              flex items-center justify-center gap-2 w-full py-2.5
              bg-red-600 hover:bg-red-700 text-white text-sm font-semibold 
              rounded-lg transition-colors min-h-[44px]
            `}
            title={collapsed ? 'Downloads' : undefined}
          >
            <Download size={16} />
            {!collapsed && <span>Downloads</span>}
          </Link>
          
          <div className={`flex gap-1.5 ${collapsed ? 'flex-col' : ''}`}>
            <Link 
              href="/admin" 
              onClick={handleNavClick}
              className={`
                flex items-center justify-center gap-2 py-2
                bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white
                text-xs rounded-lg transition-colors min-h-[40px]
                ${collapsed ? 'w-full px-2' : 'flex-1 px-3'}
              `}
              title={collapsed ? 'Admin' : undefined}
            >
              <Settings size={14} />
              {!collapsed && <span>Admin</span>}
            </Link>
            <button 
              onClick={handleLogout}
              className={`
                flex items-center justify-center py-2
                bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white
                rounded-lg transition-colors min-h-[40px]
                ${collapsed ? 'w-full px-2' : 'px-3'}
              `}
              title="Logout"
            >
              <LogOut size={14} />
            </button>
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex items-center justify-center gap-1.5 w-full py-1.5 text-gray-600 hover:text-gray-400 text-[10px] transition-colors"
          >
            {collapsed ? <PanelLeft size={14} /> : <PanelLeftClose size={14} />}
            {!collapsed && <span>Collapse</span>}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <MobileMenuButton onClick={() => setMobileOpen(true)} />
      
      {/* Spacer */}
      <div className={`hidden lg:block flex-shrink-0 transition-all duration-300 ${collapsed ? 'w-16' : 'w-60'}`} />
    </>
  )
}

function MobileMenuButton({ onClick }: { onClick: () => void }) {
  useEffect(() => {
    (window as any).openMobileMenu = onClick
  }, [onClick])
  
  return null
}
