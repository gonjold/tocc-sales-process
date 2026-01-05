'use client'

import { useState } from 'react'
import { FileSpreadsheet, ChevronDown, Lightbulb, DollarSign, Fuel, Shield, Star } from 'lucide-react'
import { DocumentModal, useDocumentModal } from '@/components/ui/DocumentModal'
import { getDocumentUrl } from '@/data/documents'

const sections = [
  {
    id: 'pricing',
    name: 'MSRP & Pricing',
    icon: DollarSign,
    items: [
      { label: 'Base MSRP', desc: 'Starting price before options', talk: '"This is the starting point for this trim."' },
      { label: 'Package Options', desc: 'Added packages (Premium, Tech)', talk: '"This has the XYZ package which adds..."' },
      { label: 'Port Options', desc: 'Accessories added at port', talk: '"These accessories were added before arrival."' },
      { label: 'Destination', desc: 'Shipping from factory', talk: '"This covers shipping from the factory."' },
      { label: 'Total MSRP', desc: 'All-in sticker price', talk: '"This is the total before any discounts."' },
    ],
  },
  {
    id: 'fuel',
    name: 'Fuel Economy',
    icon: Fuel,
    items: [
      { label: 'City MPG', desc: 'Stop-and-go urban driving', talk: '"In city traffic, you can expect around X MPG."' },
      { label: 'Highway MPG', desc: 'Steady highway speed', talk: '"On the highway, it gets up to X MPG."' },
      { label: 'Combined MPG', desc: '55% city / 45% highway blend', talk: '"Combined rating of X MPG."' },
      { label: 'Annual Fuel Cost', desc: 'Estimated yearly expense', talk: '"EPA estimates about $X per year in fuel."' },
    ],
  },
  {
    id: 'safety',
    name: 'Safety Ratings',
    icon: Shield,
    items: [
      { label: 'Overall Rating', desc: 'NHTSA 5-star scale', talk: '"This vehicle earned X stars overall."' },
      { label: 'Front Crash', desc: 'Frontal impact protection', talk: '"X stars in front crash testing."' },
      { label: 'Side Crash', desc: 'Side impact protection', talk: '"X stars in side impact."' },
      { label: 'Rollover', desc: 'Rollover resistance', talk: '"X stars for rollover resistance."' },
    ],
  },
  {
    id: 'features',
    name: 'Standard Features',
    icon: Star,
    items: [
      { label: 'Safety Features', desc: 'TSS 3.0 and other systems', talk: '"Includes the full Toyota Safety Sense 3.0 suite."' },
      { label: 'Comfort Features', desc: 'Interior amenities', talk: '"Standard features include..."' },
      { label: 'Technology', desc: 'Infotainment and connectivity', talk: '"Comes with X-inch touchscreen..."' },
    ],
  },
]

export default function WindowStickerPage() {
  const { isOpen, currentDoc, openModal, closeModal } = useDocumentModal()
  const [openAccordions, setOpenAccordions] = useState<string[]>(['pricing'])

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  const openSample = () => {
    // Note: Sample window sticker PDF needs to be uploaded to Firebase
    alert('Sample window sticker coming soon! Upload a Camry window sticker PDF to Firebase at toyota-products/2025_Camry_Window_Sticker.pdf')
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <FileSpreadsheet size={14} />
          Building Value
        </div>
        <h1>Reading Window Stickers</h1>
        <p>
          The window sticker (Monroney Label) is your transparency tool. 
          Walking customers through it builds trust and shows you have nothing to hide.
        </p>
      </div>

      {/* Sample Button */}
      <button
        onClick={openSample}
        className="btn btn-primary w-full mb-8"
      >
        <FileSpreadsheet size={18} />
        View Sample Window Sticker
      </button>

      {/* Sections */}
      <div className="accordion">
        {sections.map((section) => (
          <div 
            key={section.id}
            className={`accordion-item ${openAccordions.includes(section.id) ? 'active' : ''}`}
          >
            <button 
              className="accordion-header"
              onClick={() => toggleAccordion(section.id)}
            >
              <span className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-info-light flex items-center justify-center">
                  <section.icon size={20} className="text-info" />
                </div>
                <span className="font-bold text-gray-900">{section.name}</span>
              </span>
              <ChevronDown size={18} className="accordion-icon" />
            </button>
            <div className="accordion-content">
              <div className="space-y-3">
                {section.items.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-900">{item.label}</h4>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{item.desc}</p>
                    <div className="bg-info-light rounded px-3 py-2 text-sm text-info italic">
                      {item.talk}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pro Tip */}
      <div className="info-box success mt-8">
        <Lightbulb size={20} className="flex-shrink-0" style={{ color: 'var(--success)' }} />
        <div className="info-box-content">
          <h5>Use It Early</h5>
          <p>Review the sticker during the walkaround, not at negotiation. It positions you as transparent from the start. "Let me walk you through exactly what makes up this price—no surprises."</p>
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
