'use client'

import { useState } from 'react'
import { Phone, ChevronDown, Lightbulb, AlertTriangle, Flame, PhoneMissed, Clock, Smile, FileText, Target } from 'lucide-react'
import { DocumentModal, useDocumentModal } from '@/components/ui/DocumentModal'
import { getDocumentUrl } from '@/data/documents'

const scripts = [
  {
    id: 'phone-up',
    name: 'Standard Phone-Up',
    icon: Phone,
    description: 'Initial inbound call from customer',
    path: 'scripts/Script-Phone-Up-Format.html',
    lines: [
      { speaker: 'sales', text: '"Thank you for calling Toyota of Coconut Creek, this is [Name]. How can I help you today?"' },
      { speaker: 'customer', text: '"I\'m calling about the Camry I saw online..."' },
      { speaker: 'sales', text: '"Excellent choice! Before I pull that up, may I get your name and a good callback number in case we get disconnected?"' },
      { speaker: 'sales', text: '"Great, [Name]. That Camry is beautiful and available. When would you like to come see it—this afternoon or tomorrow morning work better?"' },
    ],
  },
  {
    id: 'fire-phone',
    name: 'Fire Phone (Hot Lead)',
    icon: Flame,
    description: 'Urgent follow-up for ready buyers',
    path: 'scripts/Script-Fire-Phone.html',
    lines: [
      { speaker: 'sales', text: '"Hi [Name], this is [Your Name] from Toyota of Coconut Creek. Great news! That [vehicle] you were interested in is still available."' },
      { speaker: 'sales', text: '"I wanted to reach out personally because we\'ve had a lot of interest. When can you come back to finish up?"' },
    ],
  },
  {
    id: 'missed-appointment',
    name: 'Missed Appointment',
    icon: PhoneMissed,
    description: 'Customer who no-showed',
    path: 'scripts/Script-Missed-Appointment.html',
    lines: [
      { speaker: 'sales', text: '"Hi [Name], this is [Your Name] from Toyota of Coconut Creek. I had you on my calendar today—is everything okay?"' },
      { speaker: 'sales', text: '"I wanted to make sure the [vehicle] is still here for you. What time works better to reschedule?"' },
    ],
  },
  {
    id: 'dirty-thirty',
    name: 'Dirty Thirty (30-Day)',
    icon: Clock,
    description: 'Monthly follow-up call',
    path: 'scripts/Script-Dirty-Thirty-Call.html',
    lines: [
      { speaker: 'sales', text: '"Hi [Name], this is [Your Name] from Toyota of Coconut Creek. Just checking in—how\'s everything going with your car search?"' },
      { speaker: 'sales', text: '"Has anything changed since we last spoke? I\'d love to help you find exactly what you\'re looking for."' },
    ],
  },
]

const bestPractices = [
  { icon: Phone, title: 'Answer Within 3 Rings', desc: 'Every ring is a potential lost customer' },
  { icon: Smile, title: 'Smile While You Talk', desc: 'Customers can hear a smile in your voice' },
  { icon: FileText, title: 'Get Info First', desc: 'Name and phone before vehicle questions' },
  { icon: Target, title: 'Goal: The Appointment', desc: "Don't sell the car, sell the appointment" },
]

export default function PhoneSkillsPage() {
  const { isOpen, currentDoc, openModal, closeModal } = useDocumentModal()
  const [openAccordions, setOpenAccordions] = useState<string[]>(['phone-up'])

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  const openScript = (name: string, path: string) => {
    const url = getDocumentUrl(path)
    openModal(name, url, 'html')
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <Phone size={14} />
          Skills
        </div>
        <h1>Phone Skills & Scripts</h1>
        <p>
          The phone is often your first impression. Master these skills and you'll 
          set more appointments, show more cars, and sell more vehicles.
        </p>
      </div>

      {/* Best Practices Grid */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {bestPractices.map((practice, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
              <practice.icon className="text-blue-600" size={20} />
            </div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">{practice.title}</h4>
            <p className="text-xs text-gray-500">{practice.desc}</p>
          </div>
        ))}
      </div>

      {/* Scripts Accordion */}
      <h2 className="text-xl font-display font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
        Phone Scripts
      </h2>

      <div className="accordion">
        {scripts.map((script) => (
          <div 
            key={script.id}
            className={`accordion-item ${openAccordions.includes(script.id) ? 'active' : ''}`}
          >
            <button 
              className="accordion-header"
              onClick={() => toggleAccordion(script.id)}
            >
              <span className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-info-light flex items-center justify-center">
                  <script.icon size={20} className="text-info" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900">{script.name}</div>
                  <div className="text-xs text-gray-500">{script.description}</div>
                </div>
              </span>
              <ChevronDown size={18} className="accordion-icon" />
            </button>
            <div className="accordion-content">
              <div className="script-box mb-4">
                <div className="script-box-label">{script.name}</div>
                <div className="space-y-3 pt-2">
                  {script.lines.map((line, idx) => (
                    <div key={idx} className="script-line">
                      {line.speaker === 'sales' ? (
                        <div className="script-sales">
                          <div className="script-sales-label">You Say:</div>
                          <div className="text-gray-800">{line.text}</div>
                        </div>
                      ) : (
                        <div className="script-customer">
                          <div className="script-customer-label">Customer:</div>
                          <div>{line.text}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => openScript(script.name, script.path)}
                className="btn btn-secondary w-full"
              >
                View Full Script
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="info-box warning mt-8">
        <AlertTriangle size={20} className="flex-shrink-0" style={{ color: 'var(--warning)' }} />
        <div className="info-box-content">
          <h5>Never Quote Price on the Phone</h5>
          <p>If asked about price, redirect: "I want to make sure you're getting the best deal. Let me pull that vehicle and we can go over everything when you're here. Does 2pm or 4pm work better?"</p>
        </div>
      </div>

      <div className="info-box tip mt-4">
        <Lightbulb size={20} className="flex-shrink-0" style={{ color: 'var(--info)' }} />
        <div className="info-box-content">
          <h5>Practice Makes Perfect</h5>
          <p>Role-play these scripts with a colleague until they feel natural. The best phone salespeople practice daily.</p>
        </div>
      </div>

      {/* Document Modal */}
      <DocumentModal
        isOpen={isOpen}
        onClose={closeModal}
        title={currentDoc?.title || ''}
        documentUrl={currentDoc?.url || null}
        fileType={currentDoc?.type}
      />
    </div>
  )
}
