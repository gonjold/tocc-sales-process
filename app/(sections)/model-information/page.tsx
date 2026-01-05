'use client'

import { useState } from 'react'
import { Car, Search, FileText } from 'lucide-react'
import { modelBrochures, getDocumentUrl } from '@/data/documents'
import { DocumentModal, useDocumentModal } from '@/components/ui/DocumentModal'

const categories = ['All', 'Sedan', 'SUV', 'Truck', 'Hybrid', 'Sports', 'Electric']

export default function ModelInformationPage() {
  const { isOpen, currentDoc, openModal, closeModal } = useDocumentModal()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredBrochures = modelBrochures.filter(brochure => {
    const matchesSearch = brochure.model.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || brochure.type.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  const openBrochure = (model: string, path: string | undefined) => {
    if (!path) return
    const url = getDocumentUrl(path)
    openModal(`${model} Brochure`, url, 'pdf')
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <Car size={14} />
          Building Value
        </div>
        <h1>Model Information</h1>
        <p>
          Product brochures for every Toyota model. Know the features, specs, and 
          selling points for every vehicle on the lot.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search models..."
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

      {/* Results Count */}
      <p className="text-sm text-gray-500 mb-4">
        Showing {filteredBrochures.length} model{filteredBrochures.length !== 1 ? 's' : ''}
      </p>

      {/* Brochures Grid */}
      <div className="doc-grid">
        {filteredBrochures.map((brochure) => (
          <button
            key={brochure.id}
            onClick={() => openBrochure(brochure.model, brochure.brochurePath)}
            className="doc-card text-left"
            disabled={!brochure.brochurePath}
          >
            <div className="doc-icon pdf">
              <FileText size={20} />
            </div>
            <div className="doc-info">
              <div className="doc-title">{brochure.model}</div>
              <div className="doc-meta capitalize">{brochure.type} {brochure.year && `• ${brochure.year}`}</div>
            </div>
          </button>
        ))}
      </div>

      {filteredBrochures.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No models found matching your criteria
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
