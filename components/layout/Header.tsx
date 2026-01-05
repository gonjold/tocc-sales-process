'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home, ChevronRight, Menu } from 'lucide-react'

const pageTitles: Record<string, string> = {
  '/': 'Welcome',
  '/glossary': 'Glossary',
  '/road-to-sale': 'Road to the Sale',
  '/road-to-sale/step/1': 'Step 1: Meet & Greet',
  '/road-to-sale/step/2': 'Step 2: Qualify',
  '/road-to-sale/step/3': 'Step 3: Vehicle Selection',
  '/road-to-sale/step/4': 'Step 4: Walkaround',
  '/road-to-sale/step/5': 'Step 5: Test Drive',
  '/road-to-sale/step/6': 'Step 6: Trial Close',
  '/road-to-sale/step/7': 'Step 7: Trade Evaluation',
  '/road-to-sale/step/8': 'Step 8: Write-Up',
  '/road-to-sale/step/9': 'Step 9: Negotiation',
  '/road-to-sale/step/10': 'Step 10: Delivery',
  '/building-value': 'Building Value',
  '/window-sticker': 'Window Sticker Guide',
  '/model-information': 'Model Information',
  '/skills/phone': 'Phone Skills',
  '/skills/objections': 'Objection Handling',
  '/skills/flashcards': 'Flashcard Practice',
  '/resources/forms': 'Forms Library',
  '/resources/scripts': 'Scripts Library',
  '/resources/programs': 'Toyota Programs',
  '/export': 'Export & Print',
}

export function Header() {
  const pathname = usePathname()
  
  const getPageTitle = () => {
    return pageTitles[pathname] || 'Training Portal'
  }

  const getBreadcrumbs = () => {
    const parts = pathname.split('/').filter(Boolean)
    const crumbs = []
    
    if (parts.length === 0) return []
    
    // Road to Sale steps
    if (parts[0] === 'road-to-sale') {
      crumbs.push({ name: 'Road to Sale', href: '/road-to-sale' })
      if (parts[1] === 'step' && parts[2]) {
        crumbs.push({ name: `Step ${parts[2]}`, href: pathname })
      }
    }
    // Skills
    else if (parts[0] === 'skills') {
      crumbs.push({ name: 'Skills', href: null })
      if (parts[1]) {
        const skillNames: Record<string, string> = {
          'phone': 'Phone Skills',
          'objections': 'Objection Handling',
          'flashcards': 'Flashcards'
        }
        crumbs.push({ name: skillNames[parts[1]] || parts[1], href: pathname })
      }
    }
    // Resources
    else if (parts[0] === 'resources') {
      crumbs.push({ name: 'Resources', href: null })
      if (parts[1]) {
        const resourceNames: Record<string, string> = {
          'forms': 'Forms Library',
          'scripts': 'Scripts Library',
          'programs': 'Programs'
        }
        crumbs.push({ name: resourceNames[parts[1]] || parts[1], href: pathname })
      }
    }
    // Other pages
    else {
      crumbs.push({ name: getPageTitle(), href: pathname })
    }
    
    return crumbs
  }

  const breadcrumbs = getBreadcrumbs()

  return (
    <header className="content-header">
      <div className="header-breadcrumb">
        <Link href="/" className="text-gray-400 hover:text-gray-600 transition-colors">
          <Home size={16} />
        </Link>
        {breadcrumbs.map((crumb, idx) => (
          <span key={idx} className="flex items-center gap-2">
            <ChevronRight size={14} className="text-gray-300" />
            {crumb.href && idx < breadcrumbs.length - 1 ? (
              <Link href={crumb.href} className="hover:text-gray-900 transition-colors">
                {crumb.name}
              </Link>
            ) : (
              <span className="current">{crumb.name}</span>
            )}
          </span>
        ))}
      </div>
      <div className="header-actions">
        <button 
          className="btn btn-ghost p-2 lg:hidden"
          onClick={() => document.querySelector('.sidebar')?.classList.toggle('open')}
        >
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
