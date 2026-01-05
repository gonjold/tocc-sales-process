'use client'

import { useState } from 'react'
import { FileText, Search, Filter } from 'lucide-react'
import { forms, getDocumentUrl } from '@/data/documents'
import { DocumentModal, useDocumentModal } from '@/components/ui/DocumentModal'

const categories = ['All', 'Delivery', 'Trade-In', 'Disclosures', 'Deal Docs', 'Training']

export default function FormsLibraryPage() {
  const { isOpen, currentDoc, openModal, closeModal } = useDocumentModal()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredForms = forms.filter(form => {
    const matchesSearch = form.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         form.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || form.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const openForm = (form: typeof forms[0]) => {
    const url = getDocumentUrl(form.path)
    openModal(form.name, url, form.type)
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <FileText size={14} />
          Resources
        </div>
        <h1>Forms Library</h1>
        <p>
          All dealership forms in one place. Click any form to view, print, or reference during the sales process.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search forms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-toyota-red/20 focus:border-toyota-red"
          />
        </div>
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

      {/* Results Count */}
      <p className="text-sm text-gray-500 mb-4">
        Showing {filteredForms.length} form{filteredForms.length !== 1 ? 's' : ''}
      </p>

      {/* Forms Grid */}
      <div className="doc-grid">
        {filteredForms.map((form) => (
          <button
            key={form.id}
            onClick={() => openForm(form)}
            className="doc-card text-left"
          >
            <div className={`doc-icon ${form.type === 'pdf' ? 'pdf' : 'form'}`}>
              <FileText size={20} />
            </div>
            <div className="doc-info">
              <div className="doc-title">{form.name}</div>
              <div className="doc-meta">{form.category} • {form.type.toUpperCase()}</div>
            </div>
          </button>
        ))}
      </div>

      {filteredForms.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No forms found matching your criteria
        </div>
      )}

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
