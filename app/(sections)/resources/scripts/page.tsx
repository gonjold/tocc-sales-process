'use client'

import { useState } from 'react'
import { Scroll, Search, Phone, Flame, PhoneMissed, Clock, FileText, Users, ChevronDown, ChevronUp, User, Mic, Download, ExternalLink } from 'lucide-react'
import { scripts as firebaseScripts, getDocumentUrl } from '@/data/documents'
import { DocumentModal, useDocumentModal } from '@/components/ui/DocumentModal'
import { phoneScripts } from '@/data/additional-content'

const inlineScripts = [
  { 
    id: 'fire-phone', 
    name: 'Fire Phone Script', 
    icon: Flame, 
    data: phoneScripts.firePhone,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  { 
    id: 'dirty-thirty', 
    name: 'Dirty Thirty Call', 
    icon: Clock, 
    data: phoneScripts.dirtyThirty,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  { 
    id: 'missed-appointment', 
    name: 'Missed Appointment', 
    icon: PhoneMissed, 
    data: phoneScripts.missedAppointment,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  { 
    id: 'unsold-traffic', 
    name: 'Unsold Traffic', 
    icon: FileText, 
    data: phoneScripts.unsoldTraffic,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  { 
    id: 'service-to-sales', 
    name: 'Service to Sales', 
    icon: Users, 
    data: phoneScripts.serviceToSales,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
]

export default function ScriptsLibraryPage() {
  const { isOpen, currentDoc, openModal, closeModal } = useDocumentModal()
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedScript, setExpandedScript] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'inline' | 'download'>('inline')

  const filteredInline = inlineScripts.filter(script => 
    script.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    script.data.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredDownloads = firebaseScripts.filter(script =>
    script.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    script.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleScript = (id: string) => {
    setExpandedScript(expandedScript === id ? null : id)
  }

  const openScript = (script: typeof firebaseScripts[0]) => {
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
        <p>Phone scripts and talk tracks for every situation.</p>
      </div>

      {/* Tab Toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('inline')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'inline'
              ? 'bg-toyota-red text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Mic size={16} className="inline mr-2" />
          Practice Scripts
        </button>
        <button
          onClick={() => setActiveTab('download')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'download'
              ? 'bg-toyota-red text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Download size={16} className="inline mr-2" />
          Download & Print
        </button>
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

      {/* Inline Practice Scripts */}
      {activeTab === 'inline' && (
        <div className="space-y-4">
          {filteredInline.map((script) => {
            const IconComponent = script.icon
            const isExpanded = expandedScript === script.id
            
            return (
              <div key={script.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                {/* Header - Always visible */}
                <button
                  onClick={() => toggleScript(script.id)}
                  className="w-full p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className={`w-12 h-12 rounded-lg ${script.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={script.color} size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900">{script.name}</h3>
                    <p className="text-sm text-gray-500">{script.data.purpose}</p>
                  </div>
                  <div className="flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="text-gray-400" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-400" size={20} />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t animate-fade-in">
                    {/* Dialog */}
                    <div className="p-4 bg-gray-50">
                      <h4 className="font-semibold text-sm text-gray-700 mb-3 flex items-center gap-2">
                        <Mic size={14} />
                        Script Dialog
                      </h4>
                      <div className="space-y-3">
                        {script.data.dialog.map((line, idx) => (
                          <div key={idx} className={`flex gap-3 ${line.speaker === 'instruction' ? 'justify-center' : ''}`}>
                            {line.speaker === 'instruction' ? (
                              <div className="text-xs text-gray-500 italic bg-gray-200 px-3 py-1 rounded-full">
                                {line.text}
                              </div>
                            ) : (
                              <>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                  line.speaker === 'sales' ? 'bg-toyota-red text-white' : 'bg-gray-300 text-gray-600'
                                }`}>
                                  <User size={14} />
                                </div>
                                <div className={`flex-1 p-3 rounded-lg ${
                                  line.speaker === 'sales' ? 'bg-white border border-toyota-red/20' : 'bg-white border border-gray-200'
                                }`}>
                                  <div className={`text-xs font-semibold mb-1 ${
                                    line.speaker === 'sales' ? 'text-toyota-red' : 'text-gray-500'
                                  }`}>
                                    {line.speaker === 'sales' ? 'You' : 'Customer'}
                                  </div>
                                  <p className="text-sm">{line.text}</p>
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tips */}
                    <div className="p-4 border-t">
                      <h4 className="font-semibold text-sm text-gray-700 mb-3">Tips for This Script</h4>
                      <ul className="space-y-2">
                        {script.data.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                              {idx + 1}
                            </span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          {filteredInline.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No scripts found matching your search
            </div>
          )}
        </div>
      )}

      {/* Downloadable Scripts */}
      {activeTab === 'download' && (
        <div>
          <p className="text-sm text-gray-600 mb-4">Click any script to view, print, or download.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {filteredDownloads.map((script) => (
              <button
                key={script.id}
                onClick={() => openScript(script)}
                className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-toyota-red hover:shadow-sm transition-all text-left"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scroll className="text-blue-600" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 truncate">{script.name}</div>
                  <div className="text-sm text-gray-500 truncate">{script.description}</div>
                </div>
                <ExternalLink size={18} className="text-gray-400 flex-shrink-0" />
              </button>
            ))}
          </div>

          {filteredDownloads.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No downloadable scripts found
            </div>
          )}
        </div>
      )}

      {/* Tips Section */}
      <div className="mt-8 bg-gray-50 rounded-lg border border-gray-200 p-5">
        <h3 className="font-bold text-gray-900 mb-3">Script Mastery Tips</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Mic className="text-blue-600" size={20} />
            </div>
            <h4 className="font-semibold text-sm text-gray-900 mb-1">Practice Out Loud</h4>
            <p className="text-xs text-gray-500">Reading silently isn't enough. Say the words until natural.</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <User className="text-purple-600" size={20} />
            </div>
            <h4 className="font-semibold text-sm text-gray-900 mb-1">Personalize It</h4>
            <p className="text-xs text-gray-500">These are frameworks. Add your personality.</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Users className="text-green-600" size={20} />
            </div>
            <h4 className="font-semibold text-sm text-gray-900 mb-1">Role Play</h4>
            <p className="text-xs text-gray-500">Partner with a colleague to practice scenarios.</p>
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
