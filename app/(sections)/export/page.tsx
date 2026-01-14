'use client'

import { useState, useEffect } from 'react'
import { Download, FileText, CheckCircle, BookOpen, Package } from 'lucide-react'

// Default Firebase URLs - can be overridden in Admin
const DEFAULT_URLS = {
  guide: 'https://firebasestorage.googleapis.com/v0/b/ahtocc-sales-training.firebasestorage.app/o/Guide%20Export%2FTOCC-SPG-FINAL-DS.pdf?alt=media',
  appendix: 'https://firebasestorage.googleapis.com/v0/b/ahtocc-sales-training.firebasestorage.app/o/Guide%20Export%2FAHTOCC-Training-Appendix-011126.pdf?alt=media',
}

// Firebase base for building URLs from partial paths
const FIREBASE_BASE = 'https://firebasestorage.googleapis.com/v0/b/ahtocc-sales-training.firebasestorage.app/o'

// Helper to convert partial path to full Firebase URL
const toFirebaseUrl = (path: string): string => {
  // If it's already a full URL, return as-is
  if (path.startsWith('http')) return path
  // Otherwise build the Firebase URL
  const encoded = encodeURIComponent(path)
  return `${FIREBASE_BASE}/${encoded}?alt=media`
}

export default function ExportPage() {
  const [urls, setUrls] = useState(DEFAULT_URLS)

  // Load custom URLs from localStorage if set in Admin
  useEffect(() => {
    const savedTraining = localStorage.getItem('tocc-training-urls')
    if (savedTraining) {
      const parsed = JSON.parse(savedTraining)
      setUrls({
        guide: parsed['training-manual'] ? toFirebaseUrl(parsed['training-manual']) : DEFAULT_URLS.guide,
        appendix: parsed['training-appendix'] ? toFirebaseUrl(parsed['training-appendix']) : DEFAULT_URLS.appendix,
      })
    }
  }, [])

  const downloadFullPackage = () => {
    // Open both files in new tabs
    window.open(urls.guide, '_blank')
    setTimeout(() => {
      window.open(urls.appendix, '_blank')
    }, 500)
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <Download size={14} />
          Export
        </div>
        <h1>Download Training Materials</h1>
        <p>
          Download the official training documents for offline use, new hire orientation, or desk reference.
        </p>
      </div>

      {/* Download Options */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {/* Training Guide */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-toyota-red hover:shadow-lg transition-all">
          <div className="w-14 h-14 bg-toyota-red/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FileText className="text-toyota-red" size={28} />
          </div>
          <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
            Training Guide
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Complete sales process training manual with all 10 steps, scripts, and techniques.
          </p>
          <a
            href={urls.guide}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full"
          >
            <Download size={18} />
            Download Guide
          </a>
          <p className="text-xs text-gray-400 mt-2">PDF • ~35 pages</p>
        </div>

        {/* Appendix */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-toyota-red hover:shadow-lg transition-all">
          <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="text-blue-600" size={28} />
          </div>
          <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
            Training Appendix
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Supplementary materials including forms, scripts, and reference documents.
          </p>
          <a
            href={urls.appendix}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary w-full"
          >
            <Download size={18} />
            Download Appendix
          </a>
          <p className="text-xs text-gray-400 mt-2">PDF • Reference docs</p>
        </div>

        {/* Full Package */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 p-6 text-center hover:shadow-lg transition-all">
          <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Package className="text-white" size={28} />
          </div>
          <h3 className="font-display font-bold text-lg text-white mb-2">
            Full Package
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Download both the Training Guide and Appendix together.
          </p>
          <button
            onClick={downloadFullPackage}
            className="w-full py-2.5 px-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Download Both
          </button>
          <p className="text-xs text-gray-400 mt-2">Opens both PDFs</p>
        </div>
      </div>

      {/* What's in the Guide */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FileText size={18} className="text-toyota-red" />
          What's in the Training Guide
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Cover Page with TOCC Branding',
            'Complete Glossary of Terms',
            'All 10 Road to Sale Steps',
            'Sample Scripts & Talk Tracks',
            'Toyota Programs (ToyotaCare, TSS, etc.)',
            'Premium Protect Plus Overview',
            'Window Sticker Reading Guide',
            'L.A.R.C. Objection Handling Method',
            'Phone Skills & Scripts',
            'CSI Excellence Guidelines',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* What's in the Appendix */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BookOpen size={18} className="text-blue-600" />
          What's in the Appendix
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'All Printable Forms',
            'Script PDFs for Download',
            'Toyota Brochures Reference',
            'DriveCentric Quick Guides',
            'Buyer\'s Order Templates',
            'Trade-In Appraisal Forms',
            'Credit Application',
            'Delivery Checklist',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <CheckCircle size={14} className="text-blue-500 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Admin Note */}
      <p className="text-xs text-gray-400 text-center mt-6">
        Document URLs can be updated in the Admin panel under Training Documents.
      </p>
    </div>
  )
}
