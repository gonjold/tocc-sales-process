'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  icon?: React.ReactNode
}

export function AccordionItem({ title, children, defaultOpen = false, icon }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <button 
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {icon}
          {title}
        </span>
        <ChevronDown size={18} className="accordion-icon" />
      </button>
      <div className="accordion-content">
        {children}
      </div>
    </div>
  )
}

interface AccordionProps {
  children: React.ReactNode
}

export function Accordion({ children }: AccordionProps) {
  return (
    <div className="accordion">
      {children}
    </div>
  )
}
