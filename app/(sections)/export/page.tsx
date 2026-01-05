'use client'

import { Printer, FileText, CheckCircle, Info, ExternalLink } from 'lucide-react'

export default function ExportPage() {
  const openPrintManual = () => {
    window.open('/print-manual.html', '_blank')
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <Printer size={14} />
          Export
        </div>
        <h1>Export & Print Manual</h1>
        <p>
          Generate a printable PDF version for offline use, new hire orientation, or desk reference.
        </p>
      </div>

      {/* Main Action */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center mb-8">
        <div className="w-16 h-16 bg-toyota-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <FileText className="text-toyota-red" size={32} />
        </div>
        <h2 className="font-display font-bold text-xl text-gray-900 mb-2">
          Sales Training Manual
        </h2>
        <p className="text-gray-500 mb-6 max-w-md mx-auto text-sm">
          Complete 36+ page manual including Road to Sale, Building Value, Phone Skills, Objection Handling, and Forms Reference.
        </p>
        <button
          onClick={openPrintManual}
          className="btn btn-primary btn-lg"
        >
          <Printer size={20} />
          Open Print-Ready Manual
        </button>
        <p className="text-xs text-gray-400 mt-3">
          Opens in new tab • Use browser print to save as PDF
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Info size={18} className="text-info" />
          How to Print / Save as PDF
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-7 h-7 bg-info-light rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-info">
              1
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">Open the Manual</h4>
              <p className="text-sm text-gray-500">Click the button above to open in a new tab</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-7 h-7 bg-info-light rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-info">
              2
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">Use Browser Print</h4>
              <p className="text-sm text-gray-500">Press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">⌘P</kbd> (Mac) or <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">Ctrl+P</kbd> (Windows)</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-7 h-7 bg-info-light rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-info">
              3
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">Choose Destination</h4>
              <p className="text-sm text-gray-500">Select "Save as PDF" or choose your printer</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-7 h-7 bg-info-light rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-info">
              4
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">Settings</h4>
              <p className="text-sm text-gray-500">Portrait • Letter size • Enable "Background graphics"</p>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="bg-gray-900 rounded-xl p-6 text-white">
        <h3 className="font-bold mb-4">What's Included</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Cover Page with TOCC Branding',
            'Table of Contents',
            'Glossary of Terms',
            'All 10 Road to Sale Steps',
            'Sample Scripts & Talk Tracks',
            'Building Value Programs',
            'Window Sticker Guide',
            'Phone Skills & Scripts',
            'L.A.R.C. Objection Handling',
            'Forms & Scripts Reference',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <CheckCircle size={14} className="text-toyota-red flex-shrink-0" />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
