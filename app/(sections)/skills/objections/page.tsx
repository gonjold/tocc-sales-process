'use client'

import { useState } from 'react'
import { MessageCircle, ChevronDown, Lightbulb } from 'lucide-react'
import { objections } from '@/data/objections'

const categoryLabels: Record<string, string> = {
  price: 'Price',
  time: 'Time/Delay',
  trade: 'Trade-In',
  trust: 'Trust',
  payment: 'Payment',
}

export default function ObjectionsPage() {
  const [openAccordions, setOpenAccordions] = useState<string[]>(['think-about-it'])
  const [selectedCategory, setSelectedCategory] = useState('All')

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  const categories = ['All', ...Array.from(new Set(objections.map(o => o.category)))]

  const filteredObjections = selectedCategory === 'All'
    ? objections
    : objections.filter(o => o.category === selectedCategory)

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <MessageCircle size={14} />
          Skills
        </div>
        <h1>Objection Handling</h1>
        <p>
          Objections aren't rejections—they're requests for more information. 
          Use the L.A.R.C. method to handle any objection professionally.
        </p>
      </div>

      {/* L.A.R.C. Method */}
      <div className="bg-gray-50 rounded-lg border border-gray-200 p-5 mb-8">
        <h2 className="font-display font-bold text-lg text-gray-900 mb-4">The L.A.R.C. Method</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-2xl font-display font-black text-toyota-red mb-1">L</div>
            <div className="font-bold text-sm text-gray-900">Listen</div>
            <div className="text-xs text-gray-500">Let them finish. Don't interrupt.</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-2xl font-display font-black text-toyota-red mb-1">A</div>
            <div className="font-bold text-sm text-gray-900">Acknowledge</div>
            <div className="text-xs text-gray-500">Validate their concern.</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-2xl font-display font-black text-toyota-red mb-1">R</div>
            <div className="font-bold text-sm text-gray-900">Respond</div>
            <div className="text-xs text-gray-500">Address with value or solution.</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-2xl font-display font-black text-toyota-red mb-1">C</div>
            <div className="font-bold text-sm text-gray-900">Close</div>
            <div className="text-xs text-gray-500">Ask for the next step.</div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
              selectedCategory === cat
                ? 'bg-toyota-red text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat === 'All' ? 'All' : categoryLabels[cat] || cat}
          </button>
        ))}
      </div>

      {/* Common Objections */}
      <h2 className="text-xl font-display font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
        Common Objections & Responses
      </h2>

      <div className="accordion">
        {filteredObjections.map((objection) => (
          <div 
            key={objection.id}
            className={`accordion-item ${openAccordions.includes(objection.id) ? 'active' : ''}`}
          >
            <button 
              className="accordion-header"
              onClick={() => toggleAccordion(objection.id)}
            >
              <span className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-error-light flex items-center justify-center">
                  <MessageCircle size={18} className="text-toyota-red" />
                </div>
                <div className="text-left">
                  <span className="font-bold text-gray-900">"{objection.objection}"</span>
                  <div className="text-xs text-gray-400 capitalize">{categoryLabels[objection.category] || objection.category}</div>
                </div>
              </span>
              <ChevronDown size={18} className="accordion-icon" />
            </button>
            <div className="accordion-content">
              <div className="space-y-4">
                {/* Response */}
                <div className="script-sales">
                  <div className="script-sales-label" style={{ color: 'var(--success)' }}>Suggested Response</div>
                  <div className="text-gray-800">{objection.response}</div>
                </div>

                {/* Tips */}
                {objection.tips && objection.tips.length > 0 && (
                  <div className="info-box tip">
                    <Lightbulb size={18} style={{ color: 'var(--info)' }} />
                    <div className="info-box-content">
                      <h5>Tips</h5>
                      <ul className="mt-2 space-y-1">
                        {objection.tips.map((tip, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-info">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Practice Tip */}
      <div className="info-box tip mt-8">
        <Lightbulb size={20} className="flex-shrink-0" style={{ color: 'var(--info)' }} />
        <div className="info-box-content">
          <h5>Practice Makes Perfect</h5>
          <p>Role-play these objections with a colleague until the responses feel natural. The best salespeople practice objection handling daily.</p>
        </div>
      </div>
    </div>
  )
}
