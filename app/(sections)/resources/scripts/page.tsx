'use client'

import { useState } from 'react'
import { Scroll, Search, Phone, Flame, PhoneMissed, Clock, FileText } from 'lucide-react'
import { scripts as allScripts, getDocumentUrl } from '@/data/documents'
import { DocumentModal, useDocumentModal } from '@/components/ui/DocumentModal'

const categories = ['All', 'Phone-Up', 'Follow-Up']

const scriptIcons: Record<string, React.ElementType> = {
  'Phone-Up Format': Phone,
  'Phone-Up Best Practices': Phone,
  'Phone-Up Key Points': Phone,
  'Fire Phone Script': Flame,
  'Dirty Thirty Call': Clock,
  'Unsold Traffic Script': FileText,
  'Missed Appointment Script': PhoneMissed,
}

export default function ScriptsLibraryPage() {
  const { isOpen, currentDoc, openModal, closeModal } = useDocumentModal()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredScripts = allScripts.filter(script => {
    const matchesSearch = script.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         script.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || script.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const openScript = (script: typeof allScripts[0]) => {
    const url = getDocumentUrl(script.path)
    openModal(script.name, url, script.type)
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <Scroll size={14} />
          Resources
        </div>
        <h1>Scripts Library</h1>
        <p>
          Phone scripts and talk tracks for every situation. Practice these until they feel natural.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search scripts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-toyota-red/20 focus:border-toyota-red"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? 'bg-toyota-red text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Scripts Grid */}
      <div className="doc-grid">
        {filteredScripts.map((script) => {
          const IconComponent = scriptIcons[script.name] || Scroll
          return (
            <button
              key={script.id}
              onClick={() => openScript(script)}
              className="doc-card text-left"
            >
              <div className="doc-icon" style={{ color: 'var(--info)' }}>
                <IconComponent size={20} />
              </div>
              <div className="doc-info">
                <div className="doc-title">{script.name}</div>
                <div className="doc-meta">{script.category}</div>
              </div>
            </button>
          )
        })}
      </div>

      {filteredScripts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No scripts found matching your criteria
        </div>
      )}

      {/* Tips */}
      <div className="mt-8 bg-gray-50 rounded-lg border border-gray-200 p-5">
        <h3 className="font-bold text-gray-900 mb-3">Script Mastery Tips</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl mb-2">🗣️</div>
            <h4 className="font-semibold text-sm text-gray-900 mb-1">Practice Out Loud</h4>
            <p className="text-xs text-gray-500">Reading silently isn't enough. Say the words until they feel natural.</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">✨</div>
            <h4 className="font-semibold text-sm text-gray-900 mb-1">Personalize It</h4>
            <p className="text-xs text-gray-500">These are frameworks. Make them yours by adding your personality.</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🎭</div>
            <h4 className="font-semibold text-sm text-gray-900 mb-1">Role Play</h4>
            <p className="text-xs text-gray-500">Partner with a colleague and practice different scenarios.</p>
          </div>
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
