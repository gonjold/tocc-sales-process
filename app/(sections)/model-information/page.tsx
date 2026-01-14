'use client'

import { useState, useEffect } from 'react'
import { Car, Search, FileText, ExternalLink, X, ChevronRight, AlertCircle } from 'lucide-react'

// Firebase base URL
const FIREBASE_BASE = 'https://firebasestorage.googleapis.com/v0/b/ahtocc-sales-training.firebasestorage.app/o'

// Mapping of model IDs to their actual Firebase filenames in toyota-products folder
// Based on actual files in storage as of Jan 2026
const brochureFileMap: Record<string, string | null> = {
  // Available main brochures
  'camry': 'camry_ebrochure.pdf',
  'corolla': 'corolla_ebrochure.pdf',
  'corolla-hatchback': 'corollahatchback_ebrochure.pdf',
  'prius': 'prius_ebrochure.pdf',
  'crown': 'crown_ebrochure.pdf',
  'bz4x': 'bz_ebrochure.pdf',
  'sequoia': 'sequoia_ebrochure.pdf',
  'tundra': 'tundra_ebrochure.pdf',
  'gr86': 'gr86_ebrochure.pdf',
  'supra': 'grsupra_ebrochure.pdf',
  
  // Missing main brochures - will show Toyota.com fallback
  'rav4': null,
  'corolla-cross': null,
  'venza': null,
  'highlander': null,
  'grand-highlander': null,
  '4runner': null,
  'land-cruiser': null,
  'tacoma': null,
  'sienna': null,
}

// Model data with Toyota.com brochure links as fallback
const modelCategories = [
  {
    name: 'Sedans',
    models: [
      { id: 'camry', name: 'Camry', year: '2025', tagline: 'Best-selling sedan in America', highlights: ['Up to 52 MPG Hybrid', 'Standard TSS 3.0', 'Available AWD'], toyotaUrl: 'https://www.toyota.com/camry' },
      { id: 'corolla', name: 'Corolla', year: '2025', tagline: 'Reliable & efficient', highlights: ['Up to 53 MPG Hybrid', 'Compact size', 'Great value'], toyotaUrl: 'https://www.toyota.com/corolla' },
      { id: 'prius', name: 'Prius', year: '2025', tagline: 'The original hybrid', highlights: ['Up to 57 MPG', 'Sleek new design', 'PHEV available'], toyotaUrl: 'https://www.toyota.com/prius' },
      { id: 'crown', name: 'Crown', year: '2025', tagline: 'Premium performance', highlights: ['Hybrid Turbo', 'All-wheel drive standard', 'Luxury features'], toyotaUrl: 'https://www.toyota.com/crown' },
    ]
  },
  {
    name: 'SUVs & Crossovers',
    models: [
      { id: 'rav4', name: 'RAV4', year: '2025', tagline: 'Best-selling SUV', highlights: ['Hybrid & Prime options', 'Adventure & TRD Off-Road', 'Versatile cargo'], toyotaUrl: 'https://www.toyota.com/rav4' },
      { id: 'corolla-cross', name: 'Corolla Cross', year: '2025', tagline: 'Compact crossover', highlights: ['Hybrid available', 'Elevated driving position', 'City-friendly size'], toyotaUrl: 'https://www.toyota.com/corollacross' },
      { id: 'venza', name: 'Venza', year: '2025', tagline: 'Stylish hybrid SUV', highlights: ['Hybrid only', 'Star Gaze roof', 'Premium interior'], toyotaUrl: 'https://www.toyota.com/venza' },
      { id: 'highlander', name: 'Highlander', year: '2025', tagline: '3-row family SUV', highlights: ['Seats up to 8', 'Hybrid available', 'Max towing 5,000 lbs'], toyotaUrl: 'https://www.toyota.com/highlander' },
      { id: 'grand-highlander', name: 'Grand Highlander', year: '2025', tagline: 'Spacious 3-row', highlights: ['More cargo space', 'Hybrid Max 362 HP', 'Premium features'], toyotaUrl: 'https://www.toyota.com/grandhighlander' },
      { id: '4runner', name: '4Runner', year: '2025', tagline: 'Off-road legend', highlights: ['Body-on-frame', 'i-FORCE MAX hybrid', 'TRD Pro available'], toyotaUrl: 'https://www.toyota.com/4runner' },
      { id: 'sequoia', name: 'Sequoia', year: '2025', tagline: 'Full-size SUV', highlights: ['i-FORCE MAX standard', 'Tows up to 9,520 lbs', 'Seats up to 8'], toyotaUrl: 'https://www.toyota.com/sequoia' },
      { id: 'land-cruiser', name: 'Land Cruiser', year: '2025', tagline: 'Iconic capability', highlights: ['i-FORCE MAX', 'Legendary reliability', 'Premium off-road'], toyotaUrl: 'https://www.toyota.com/landcruiser' },
      { id: 'bz4x', name: 'bZ4X', year: '2025', tagline: 'All-electric SUV', highlights: ['Up to 252 mile range', 'AWD available', 'Solar panel roof option'], toyotaUrl: 'https://www.toyota.com/bz4x' },
    ]
  },
  {
    name: 'Trucks',
    models: [
      { id: 'tacoma', name: 'Tacoma', year: '2025', tagline: 'Mid-size truck leader', highlights: ['i-FORCE MAX hybrid', 'TRD Pro off-road', 'Multi-Terrain Select'], toyotaUrl: 'https://www.toyota.com/tacoma' },
      { id: 'tundra', name: 'Tundra', year: '2025', tagline: 'Full-size power', highlights: ['i-FORCE MAX', 'Tows up to 12,000 lbs', 'TRD Pro available'], toyotaUrl: 'https://www.toyota.com/tundra' },
    ]
  },
  {
    name: 'Sports & Performance',
    models: [
      { id: 'gr86', name: 'GR86', year: '2025', tagline: 'Pure driving fun', highlights: ['228 HP boxer engine', 'Rear-wheel drive', 'Manual available'], toyotaUrl: 'https://www.toyota.com/gr86' },
      { id: 'supra', name: 'GR Supra', year: '2025', tagline: 'Legendary sports car', highlights: ['382 HP inline-6', 'BMW partnership', 'Manual now available'], toyotaUrl: 'https://www.toyota.com/grsupra' },
    ]
  },
  {
    name: 'Minivan',
    models: [
      { id: 'sienna', name: 'Sienna', year: '2025', tagline: 'Hybrid-only minivan', highlights: ['Hybrid standard', 'AWD available', 'Super Long Slide seats'], toyotaUrl: 'https://www.toyota.com/sienna' },
    ]
  }
]

type Model = typeof modelCategories[0]['models'][0]

export default function ModelInformationPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedModel, setSelectedModel] = useState<Model | null>(null)
  const [modelUrls, setModelUrls] = useState<Record<string, string>>({})
  const [brochureError, setBrochureError] = useState(false)

  // Load custom URLs from localStorage (admin overrides)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tocc-model-urls')
      if (saved) {
        setModelUrls(JSON.parse(saved))
      }
    } catch (e) {
      console.log('No saved model URLs')
    }
  }, [])

  const getBrochureUrl = (modelId: string): string | null => {
    // Check for custom URL first (from admin panel)
    if (modelUrls[modelId]) {
      return modelUrls[modelId]
    }
    
    // Get filename from map
    const filename = brochureFileMap[modelId]
    if (filename) {
      const encodedPath = encodeURIComponent(`toyota-products/${filename}`)
      return `${FIREBASE_BASE}/${encodedPath}?alt=media`
    }
    
    // No brochure available
    return null
  }

  const hasBrochure = (modelId: string): boolean => {
    return !!(modelUrls[modelId] || brochureFileMap[modelId])
  }

  const filteredCategories = modelCategories.map(cat => ({
    ...cat,
    models: cat.models.filter(m => 
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.tagline.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.models.length > 0)

  const openBrochure = (model: Model) => {
    setSelectedModel(model)
    setBrochureError(false)
  }

  const handleIframeError = () => {
    setBrochureError(true)
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
          Know your lineup. Click any model to view its brochure and key selling points.
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

      {/* Model Categories */}
      {filteredCategories.map((category) => (
        <div key={category.name} className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            {category.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.models.map((model) => (
              <button
                key={model.id}
                onClick={() => openBrochure(model)}
                className="bg-white rounded-lg border border-gray-200 p-4 text-left hover:border-toyota-red hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-toyota-red transition-colors flex items-center gap-2">
                      {model.year} {model.name}
                      {!hasBrochure(model.id) && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded font-normal">Web Only</span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-500">{model.tagline}</p>
                  </div>
                  <ChevronRight size={18} className="text-gray-300 group-hover:text-toyota-red transition-colors" />
                </div>
                <div className="space-y-1">
                  {model.highlights.map((highlight, idx) => (
                    <div key={idx} className="text-xs text-gray-600 flex items-center gap-1">
                      <span className="w-1 h-1 bg-toyota-red rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}

      {filteredCategories.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No models found matching "{searchTerm}"
        </div>
      )}

      {/* Brochure Modal */}
      {selectedModel && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedModel(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
              <div>
                <h2 className="font-bold text-xl text-gray-900">
                  {selectedModel.year} Toyota {selectedModel.name}
                </h2>
                <p className="text-sm text-gray-500">{selectedModel.tagline}</p>
              </div>
              <div className="flex items-center gap-2">
                {getBrochureUrl(selectedModel.id) && (
                  <a
                    href={getBrochureUrl(selectedModel.id)!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-toyota-red text-white text-sm font-medium rounded-lg hover:bg-toyota-red-dark transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={14} />
                    Open PDF
                  </a>
                )}
                <a
                  href={selectedModel.toyotaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-1"
                >
                  <ExternalLink size={14} />
                  Toyota.com
                </a>
                <button
                  onClick={() => setSelectedModel(null)}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-hidden relative" style={{ minHeight: '400px' }}>
              {!hasBrochure(selectedModel.id) || brochureError ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 p-8 text-center">
                  <AlertCircle size={48} className="text-gray-400 mb-4" />
                  <h3 className="font-semibold text-lg text-gray-700 mb-2">
                    {brochureError ? 'Brochure Failed to Load' : 'Brochure Coming Soon'}
                  </h3>
                  <p className="text-gray-500 mb-6 max-w-md">
                    {brochureError 
                      ? 'There was an issue loading the PDF. Try opening it directly or visit Toyota.com.'
                      : `The PDF brochure for the ${selectedModel.name} isn't uploaded yet. Visit Toyota.com for the official specs and brochure.`
                    }
                  </p>
                  <div className="flex gap-3 flex-wrap justify-center">
                    <a
                      href={selectedModel.toyotaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-toyota-red text-white font-medium rounded-lg hover:bg-toyota-red-dark transition-colors flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      View on Toyota.com
                    </a>
                    {getBrochureUrl(selectedModel.id) && (
                      <a
                        href={getBrochureUrl(selectedModel.id)!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                      >
                        <FileText size={16} />
                        Try PDF Link
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <iframe
                  src={getBrochureUrl(selectedModel.id)!}
                  className="w-full h-full"
                  style={{ minHeight: '500px' }}
                  title={`${selectedModel.name} Brochure`}
                  onError={handleIframeError}
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="text-sm text-gray-500">
                  Key Features: {selectedModel.highlights.join(' • ')}
                </div>
                <div className="flex gap-3">
                  {getBrochureUrl(selectedModel.id) && (
                    <a
                      href={getBrochureUrl(selectedModel.id)!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 font-medium hover:text-gray-900 flex items-center gap-1"
                    >
                      <FileText size={14} />
                      Download PDF
                    </a>
                  )}
                  <a
                    href={selectedModel.toyotaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-toyota-red font-medium hover:underline flex items-center gap-1"
                  >
                    <ExternalLink size={14} />
                    Toyota.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Reference */}
      <div className="mt-8 bg-navy text-white rounded-xl p-6">
        <h3 className="font-bold text-lg mb-4 text-white">Quick Reference: Best Sellers</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-black text-white">#1</div>
            <div className="text-sm text-white/80">RAV4 - Best-selling non-truck</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-white">#1</div>
            <div className="text-sm text-white/80">Camry - Best-selling sedan</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-white">#1</div>
            <div className="text-sm text-white/80">Tacoma - Mid-size truck leader</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-white">57</div>
            <div className="text-sm text-white/80">Prius MPG - Best in class</div>
          </div>
        </div>
      </div>
    </div>
  )
}
