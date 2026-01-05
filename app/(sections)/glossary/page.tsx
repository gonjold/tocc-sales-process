'use client'

import { useState } from 'react'
import { BookOpen, Search } from 'lucide-react'
import { glossaryTerms } from '@/data/glossary'

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTerms = glossaryTerms.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Group by first letter
  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const letter = term.term[0].toUpperCase()
    if (!acc[letter]) acc[letter] = []
    acc[letter].push(term)
    return acc
  }, {} as Record<string, typeof glossaryTerms>)

  const letters = Object.keys(groupedTerms).sort()

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <BookOpen size={14} />
          Reference
        </div>
        <h1>Glossary of Terms</h1>
        <p>
          Key automotive and dealership terminology you'll encounter daily. 
          Master these terms to communicate professionally with customers and colleagues.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-toyota-red/20 focus:border-toyota-red"
        />
      </div>

      {/* Letter Navigation */}
      <div className="flex flex-wrap gap-1 mb-6">
        {letters.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="w-8 h-8 flex items-center justify-center rounded text-sm font-medium bg-gray-100 text-gray-600 hover:bg-toyota-red hover:text-white transition-colors"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Terms */}
      <div className="space-y-6">
        {letters.map((letter) => (
          <div key={letter} id={`letter-${letter}`}>
            <h2 className="text-xl font-display font-bold text-toyota-red mb-3 pb-2 border-b border-gray-200">
              {letter}
            </h2>
            <div className="space-y-3">
              {groupedTerms[letter].map((term) => (
                <div 
                  key={term.term}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                >
                  <h3 className="font-bold text-gray-900 mb-1">{term.term}</h3>
                  <p className="text-sm text-gray-600">{term.definition}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No terms found matching "{searchTerm}"
        </div>
      )}
    </div>
  )
}
