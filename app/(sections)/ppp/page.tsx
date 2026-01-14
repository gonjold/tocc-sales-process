'use client'

import { 
  Shield, 
  CheckCircle2, 
  Car, 
  Lock, 
  Droplets, 
  Sparkles, 
  Phone, 
  Gift, 
  Battery, 
  CircleDot,
  AlertTriangle, 
  TrendingUp,
  FileText,
  ChevronRight
} from 'lucide-react'
import Link from 'next/link'
import { DocumentModal, useDocumentModal } from '@/components/ui/DocumentModal'
import { getDocumentUrl } from '@/data/documents'

const pppBenefits = [
  {
    item: 'Collision Loyalty Credit',
    value: '$2,500',
    desc: 'Up to $2,500 credit if your vehicle is totaled within the first 90 days - applies toward your next vehicle with us',
    icon: Car
  },
  {
    item: 'Stolen Vehicle Assistance',
    value: 'Up to $2,500',
    desc: 'Financial assistance if your vehicle is stolen and not recovered. Coverage for 3 years or 36,000 miles',
    icon: Lock
  },
  {
    item: 'Roadside Assistance',
    value: '$399',
    desc: '24/7 nationwide coverage: towing up to 60 miles, lockout service, jump starts, fuel delivery, tire changes',
    icon: Phone
  },
  {
    item: 'Exterior & Interior Protection',
    value: '$699',
    desc: 'Professional coating applied to paint and interior. Defends against stains, UV, bird & iguana droppings',
    icon: Sparkles
  },
  {
    item: 'Windshield Treatment',
    value: '$199',
    desc: 'Hydrophobic coating causes water to bead and roll off. Improves visibility in rain, reduces nighttime glare',
    icon: Droplets
  },
  {
    item: 'Door Edge & Cup Guards',
    value: '$199',
    desc: 'Clear protective film applied to door edges and handles. Blocks scratches from keys and door dings',
    icon: Shield
  },
  {
    item: 'Customer Welcome Kit',
    value: '$79',
    desc: 'Premium travel-sized car care detailing products included. Professional quality tools from day one',
    icon: Gift
  },
  {
    item: 'Battery Protection',
    value: '$59',
    desc: 'Protective application applied to battery terminals. Prevents corrosion that shortens battery life',
    icon: Battery
  },
  {
    item: 'Road Hazard Tire Repair',
    value: '$50 Credit',
    desc: 'Covers repair or replacement for tire damage from potholes, nails, or road debris',
    icon: CircleDot
  },
]

export default function PPPPage() {
  const { isOpen, currentDoc, openModal, closeModal } = useDocumentModal()

  const openBrochure = () => {
    openModal('Premium Protect Plus Information Sheet', getDocumentUrl('forms/Premium-Protect-Plus-Information-Sheet.html'), 'html')
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <Shield size={14} />
          Building Value
        </div>
        <h1>Premium Protect Plus</h1>
        <p>Included with every new vehicle at Toyota of Coconut Creek</p>
      </div>

      {/* Value Callout */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-sm font-medium text-white/80 mb-1">Total Value</div>
            <div className="text-4xl font-black">$6,500+</div>
            <div className="text-white/80 mt-1">in Added Protection</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-white/80 mb-2">Customer Benefits:</div>
            <ul className="text-sm text-white/90 space-y-1">
              <li>✓ Less stress from unexpected expenses</li>
              <li>✓ Keep your vehicle looking new</li>
              <li>✓ Stronger protection for resale value</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <h2 className="text-xl font-bold mb-4 text-gray-900">What's Included</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {pppBenefits.map((benefit, idx) => {
          const IconComponent = benefit.icon
          return (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <IconComponent className="text-green-600" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-sm">{benefit.item}</h3>
                    <span className="text-sm font-bold text-green-600 whitespace-nowrap">
                      {benefit.value}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* View Brochure Button */}
      <button
        onClick={openBrochure}
        className="w-full mb-8 flex items-center justify-center gap-2 px-6 py-4 bg-toyota-red text-white font-semibold rounded-xl hover:bg-red-700 transition-colors"
      >
        <FileText size={20} />
        View Premium Protect Plus Brochure
      </button>

      {/* How to Present PP+ */}
      <h2 className="text-xl font-bold mb-4 text-gray-900">How to Present PP+</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-toyota-red text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Mention Early</h4>
              <p className="text-gray-600">Bring up PP+ during the walkaround or value building, not at negotiation. It's a value-add, not a negotiation point.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-toyota-red text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Emphasize the Value</h4>
              <p className="text-gray-600">"Every vehicle at TOCC comes with our Premium Protect Plus package - that's over $6,500 in protection included at no extra cost."</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-toyota-red text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Differentiate from Competition</h4>
              <p className="text-gray-600">"This is exclusive to Toyota of Coconut Creek - you won't find this package at other dealerships. It's part of what makes buying here different."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Objection Handler */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <div className="flex items-start gap-4">
          <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={24} />
          <div>
            <h3 className="font-bold text-amber-900 mb-2">When They Say: "I found it cheaper online"</h3>
            <p className="text-amber-800 italic">
              "Does that price include our Premium Protect Plus package - over $6,500 in protection? And taxes, fees, delivery? Let me show you the real comparison so you're comparing apples to apples."
            </p>
          </div>
        </div>
      </div>

      {/* Key Talking Points */}
      <h2 className="text-xl font-bold mb-4 text-gray-900">Key Talking Points</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">"If something happens in the first 90 days and your car is totaled, you get up to $2,500 toward your next vehicle with us."</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">"24/7 roadside assistance is included - towing, lockouts, jump starts, flat tires. That alone is worth $399."</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">"We apply professional paint and interior protection - especially important here in South Florida with the sun and salt air."</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">"The windshield treatment makes a real difference in Florida rain - water just beads right off."</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">"This adds to your resale value because the vehicle stays protected from day one."</span>
          </li>
        </ul>
      </div>

      {/* Pro Tip */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
        <div className="flex items-start gap-4">
          <TrendingUp className="text-blue-600 flex-shrink-0 mt-0.5" size={24} />
          <div>
            <h5 className="font-bold text-blue-900 mb-2">Pro Tip: Stack the Value</h5>
            <p className="text-blue-800">When presenting PP+, walk through each benefit and let the value add up: "Collision credit - that's $2,500. Stolen vehicle protection - another $2,500. Roadside assistance - $399. Paint and interior protection - $699..." By the time you're done, the customer sees the real $6,500+ value.</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <Link href="/building-value" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
          ← Back to Toyota Programs
        </Link>
        <Link 
          href="/window-sticker"
          className="flex items-center gap-2 px-5 py-3 bg-toyota-red text-white rounded-xl font-medium hover:bg-red-700 transition-colors"
        >
          Next: Window Sticker Guide
          <ChevronRight size={20} />
        </Link>
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
