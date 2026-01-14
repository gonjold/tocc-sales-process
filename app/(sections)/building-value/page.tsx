'use client'

import { useState } from 'react'
import { 
  Award, 
  Shield, 
  Wrench, 
  Car, 
  ChevronRight,
  CheckCircle,
  DollarSign,
  FileText,
  X
} from 'lucide-react'
import { DocumentModal, useDocumentModal } from '@/components/ui/DocumentModal'
import { getDocumentUrl } from '@/data/documents'

const programs = [
  {
    id: 'toyotacare',
    name: 'ToyotaCare',
    tagline: '2 Years / 25,000 Miles',
    icon: Wrench,
    color: '#2563EB',
    bgColor: '#DBEAFE',
    description: 'No-cost maintenance plan included with every new Toyota.',
    brochure: 'toyota-programs/Toyotacare.pdf',
    coverage: [
      'Oil & Filter Changes',
      'Tire Rotations',
      'Multi-Point Inspections',
      '24/7 Roadside Assistance',
    ],
    talkingPoints: [
      'Covers first 2 years or 25,000 miles of scheduled maintenance',
      'Includes roadside assistance for 2 years, unlimited miles',
      'Uses genuine Toyota parts and certified technicians',
      'No enrollment required - automatically included',
    ],
  },
  {
    id: 'toyoguard',
    name: 'Toyoguard Platinum',
    tagline: 'Extended Maintenance Coverage',
    icon: Shield,
    color: '#16A34A',
    bgColor: '#DCFCE7',
    description: 'Extends ToyotaCare maintenance coverage beyond the standard 2 years/25,000 miles.',
    brochure: 'toyota-programs/Toyoguard Brochures 2025.pdf',
    coverage: [
      'Extended Oil & Filter Changes',
      'Extended Tire Rotations',
      'Extended Multi-Point Inspections',
      'Extended Roadside Assistance',
      'Covers Additional Scheduled Maintenance',
    ],
    talkingPoints: [
      'Picks up where ToyotaCare leaves off at 2 years/25,000 miles',
      'Continue worry-free maintenance coverage',
      'Same genuine Toyota parts and certified technicians',
      'Keeps your maintenance on schedule without out-of-pocket costs',
    ],
  },
  {
    id: 'tss',
    name: 'Toyota Safety Sense 3.0',
    tagline: 'Advanced Driver Assistance',
    icon: Car,
    color: '#EB0A1E',
    bgColor: '#FEE2E2',
    description: 'Standard suite of safety technologies on new Toyotas.',
    brochure: 'toyota-programs/TSS_3.0.pdf',
    features: [
      { code: 'PCS', name: 'Pre-Collision System' },
      { code: 'DRCC', name: 'Dynamic Radar Cruise' },
      { code: 'LDA', name: 'Lane Departure Alert' },
      { code: 'LTA', name: 'Lane Tracing Assist' },
      { code: 'AHB', name: 'Auto High Beams' },
      { code: 'RSA', name: 'Road Sign Assist' },
    ],
    talkingPoints: [
      'Standard on virtually all new Toyota vehicles',
      'Helps prevent accidents before they happen',
      'Makes highway driving less fatiguing',
      'No extra cost - included in vehicle price',
    ],
  },
  {
    id: 'ppp',
    name: 'Premium Protect Plus',
    tagline: '$6,500+ in Value',
    icon: DollarSign,
    color: '#CA8A04',
    bgColor: '#FEF9C3',
    description: 'Comprehensive protection package included with every new vehicle purchase at TOCC.',
    brochure: 'forms/Premium-Protect-Plus-Information-Sheet.html',
    items: [
      { name: 'Collision Loyalty Credit', value: '$2,500' },
      { name: 'Stolen Vehicle Assistance', value: 'Up to $2,500' },
      { name: 'Exterior & Interior Protection', value: '$699' },
      { name: 'Roadside Assistance (24/7)', value: '$399' },
      { name: 'Windshield Treatment', value: '$199' },
      { name: 'Door Edge & Cup Guards', value: '$199' },
      { name: 'Customer Welcome Kit', value: '$79' },
      { name: 'Battery Protection', value: '$59' },
      { name: 'Road Hazard Tire Repair', value: '$50 Credit' },
    ],
    talkingPoints: [
      'Over $6,500 in value included with your purchase at no extra cost',
      '$2,500 Collision Loyalty Credit if totaled within first 90 days',
      'Stolen vehicle assistance coverage for 3 years / 36,000 miles',
      'Professional paint and interior protection against South Florida elements',
      '24/7 nationwide roadside assistance for peace of mind',
    ],
  },
]

export default function BuildingValuePage() {
  const { isOpen, currentDoc, openModal, closeModal } = useDocumentModal()
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)

  const openBrochure = (name: string, path: string) => {
    const type = path.endsWith('.pdf') ? 'pdf' : 'html'
    const url = getDocumentUrl(path)
    openModal(name, url, type as 'pdf' | 'html')
  }

  const selected = programs.find(p => p.id === selectedProgram)

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <Award size={14} />
          Building Value
        </div>
        <h1>Toyota Programs & Benefits</h1>
        <p>
          Know these programs inside and out. They're your tools for building value, 
          overcoming price objections, and differentiating from the competition.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
          <div className="text-2xl font-display font-bold text-info">2yr</div>
          <div className="text-xs text-gray-500">ToyotaCare</div>
        </div>
        <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
          <div className="text-2xl font-display font-bold text-success">5yr</div>
          <div className="text-xs text-gray-500">Toyoguard</div>
        </div>
        <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
          <div className="text-2xl font-display font-bold text-toyota-red">6</div>
          <div className="text-xs text-gray-500">TSS Features</div>
        </div>
        <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
          <div className="text-2xl font-display font-bold text-warning">$6.5k+</div>
          <div className="text-xs text-gray-500">PPP Value</div>
        </div>
      </div>

      {/* Program Cards Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {programs.map((program) => (
          <button
            key={program.id}
            onClick={() => setSelectedProgram(program.id)}
            className="text-left bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: program.bgColor, color: program.color }}
              >
                <program.icon size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-gray-900">{program.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{program.tagline}</p>
                <p className="text-sm text-gray-600">{program.description}</p>
              </div>
              <ChevronRight size={20} className="text-gray-300 flex-shrink-0 mt-1" />
            </div>
          </button>
        ))}
      </div>

      {/* Selected Program Detail Modal/Panel */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProgram(null)}>
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div 
              className="p-6 border-b border-gray-200"
              style={{ background: `linear-gradient(135deg, ${selected.bgColor} 0%, white 100%)` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'white', color: selected.color }}
                  >
                    <selected.icon size={28} />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl text-gray-900">{selected.name}</h2>
                    <p className="text-sm text-gray-600">{selected.tagline}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProgram(null)}
                  className="p-2 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Coverage/Features */}
              {selected.coverage && (
                <div>
                  <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wide mb-3">Coverage Includes</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selected.coverage.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm bg-gray-50 rounded-lg p-2">
                        <CheckCircle size={14} className="text-success flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selected.features && (
                <div>
                  <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wide mb-3">TSS 3.0 Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selected.features.map((feature, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3">
                        <span 
                          className="text-xs font-bold px-2 py-0.5 rounded mr-2"
                          style={{ backgroundColor: selected.bgColor, color: selected.color }}
                        >
                          {feature.code}
                        </span>
                        <span className="text-sm text-gray-700">{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selected.items && (
                <div>
                  <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wide mb-3">Included Items</h3>
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    {selected.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center px-4 py-2 border-b border-gray-200 last:border-0">
                        <span className="text-sm text-gray-700">{item.name}</span>
                        <span className="text-sm font-semibold text-success">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Talking Points */}
              <div>
                <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wide mb-3">Key Talking Points</h3>
                <ul className="space-y-2">
                  {selected.talkingPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span style={{ color: selected.color }}>•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brochure Button */}
              <button
                onClick={() => openBrochure(selected.name, selected.brochure)}
                className="btn btn-primary w-full"
              >
                <FileText size={18} />
                View {selected.name} Brochure
              </button>
            </div>
          </div>
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

      {/* Warranty Coverage Section */}
      <div id="warranties" className="mt-8 pt-8 border-t-2 border-gray-200">
        <h2 className="text-xl font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Shield className="text-navy" size={24} />
          Toyota Warranty Coverage
        </h2>
        <p className="text-gray-600 mb-6">Know what's covered to build confidence and close deals.</p>

        {/* New Vehicle Warranty */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="bg-navy text-white px-4 py-3 font-semibold rounded-t-lg">
            New Vehicle Warranty
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {[
                { coverage: 'Basic Warranty', duration: '3 years / 36,000 mi', includes: 'Bumper-to-bumper coverage for defects' },
                { coverage: 'Powertrain', duration: '5 years / 60,000 mi', includes: 'Engine, transmission, drivetrain' },
                { coverage: 'Corrosion Perforation', duration: '5 years / unlimited', includes: 'Rust-through protection' },
                { coverage: 'Hybrid Battery', duration: '10 years / 150,000 mi', includes: 'Hybrid system components', highlight: true },
                { coverage: 'Safety Restraint', duration: '5 years / unlimited', includes: 'Airbags, seatbelts' },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${item.highlight ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                  <div>
                    <div className="font-semibold text-gray-900">{item.coverage}</div>
                    <div className="text-sm text-gray-500">{item.includes}</div>
                  </div>
                  <div className={`font-bold ${item.highlight ? 'text-green-600' : 'text-navy'}`}>{item.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TCUV Warranty */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="bg-blue-600 text-white px-4 py-3 font-semibold rounded-t-lg">
            Toyota Certified Used Vehicle (TCUV) Warranty
          </div>
          <div className="p-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="font-bold text-blue-900 mb-1">Comprehensive Coverage</div>
                <div className="text-2xl font-black text-blue-600 mb-1">12 mo / 12,000 mi</div>
                <p className="text-sm text-blue-800">Covers 160+ components from date of certified purchase</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="font-bold text-blue-900 mb-1">Powertrain Coverage</div>
                <div className="text-2xl font-black text-blue-600 mb-1">7 yr / 100,000 mi</div>
                <p className="text-sm text-blue-800">From original in-service date with $0 deductible</p>
              </div>
            </div>
          </div>
        </div>

        {/* Warranty Talking Points */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h4 className="font-bold text-amber-900 mb-2">Warranty Talking Points</h4>
          <ul className="space-y-1 text-sm text-amber-800">
            <li><strong>New:</strong> "Your new Toyota comes with 3 years/36K bumper-to-bumper, plus 5 years/60K powertrain. That's peace of mind built in."</li>
            <li><strong>TCUV:</strong> "Certified means 160-point inspection, additional warranty, and Toyota-backed quality. It's almost like buying new."</li>
            <li><strong>Hybrid:</strong> "10 years / 150,000 miles hybrid battery warranty is industry-leading. Most competitors offer far less."</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
