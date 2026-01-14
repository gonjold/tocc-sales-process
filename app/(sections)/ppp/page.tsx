'use client'

import { Shield, DollarSign, CheckCircle2, Car, Key, Droplets, Wind, CircleDot, AlertTriangle, TrendingUp } from 'lucide-react'

const pppBenefits = [
  {
    item: 'Collision Loyalty Credit',
    value: 'Up to $1,000',
    desc: 'Toward your deductible at our body shop',
    icon: Car
  },
  {
    item: 'Interior Protection',
    warranty: '3yr / 36k',
    desc: 'Professional stain & odor protection applied',
    icon: Droplets
  },
  {
    item: 'Paint Sealant',
    warranty: '3yr / 36k',
    desc: 'Professional paint protection applied',
    icon: Wind
  },
  {
    item: 'Key Replacement',
    value: 'Up to $800',
    desc: 'Lost or stolen key coverage',
    icon: Key
  },
  {
    item: 'Windshield Repair',
    value: 'Unlimited',
    desc: 'Chip repair coverage',
    icon: CircleDot
  },
  {
    item: 'PDR Coverage',
    value: 'Up to $500',
    desc: 'Paintless dent repair',
    icon: CircleDot
  },
  {
    item: 'Tire & Wheel',
    value: 'Up to $500',
    desc: 'Road hazard protection',
    icon: CircleDot
  },
]

export default function PPPPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <Shield size={14} />
          Building Value
        </div>
        <h1>Premium Protect Plus</h1>
        <p>TOCC Exclusive - Included with Every Vehicle</p>
      </div>

      {/* Value Callout */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-white/80 mb-1">Total Value</div>
            <div className="text-4xl font-black">$6,500+</div>
            <div className="text-white/80 mt-1">in Added Protection</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-white/80 mb-2">Customer Benefits:</div>
            <ul className="text-sm text-white/90 space-y-1">
              <li>Less stress from unexpected expenses</li>
              <li>Keep your vehicle looking new</li>
              <li>Stronger resale value</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <h2 className="text-xl font-bold mb-4">What's Included</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {pppBenefits.map((benefit, idx) => {
          const IconComponent = benefit.icon
          return (
            <div key={idx} className="card">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-green-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-gray-900">{benefit.item}</h3>
                      <span className="text-sm font-semibold text-green-600">
                        {benefit.value || benefit.warranty}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* How to Present PP+ */}
      <h2 className="text-xl font-bold mb-4">How to Present PP+</h2>
      <div className="card mb-8">
        <div className="card-body">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-toyota-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
              <div>
                <h4 className="font-semibold text-gray-900">Mention Early</h4>
                <p className="text-sm text-gray-600">Bring up PP+ during the walkaround or value building, not at negotiation.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-toyota-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
              <div>
                <h4 className="font-semibold text-gray-900">Emphasize Value</h4>
                <p className="text-sm text-gray-600">"Every vehicle at TOCC comes with our Premium Protect Plus package - that's over $6,500 in protection included."</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-toyota-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
              <div>
                <h4 className="font-semibold text-gray-900">Differentiate from Competition</h4>
                <p className="text-sm text-gray-600">"This is exclusive to Toyota of Coconut Creek - you won't find this package at other dealerships."</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Objection Handler */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-bold text-amber-900 mb-2">When They Say: "I found it cheaper online"</h3>
            <p className="text-amber-800 italic">
              "Does that price include our PP+ package - $6,500 in protection? And taxes, fees, delivery? Let me show you the real comparison."
            </p>
          </div>
        </div>
      </div>

      {/* Talking Points */}
      <h2 className="text-xl font-bold mb-4">Key Talking Points</h2>
      <div className="card mb-6">
        <div className="card-body">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">"This is a TOCC exclusive - you won't find this value anywhere else."</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">"Key replacement alone can cost $500-800 at Toyota - that's covered."</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">"The paint and interior protection keeps your car looking new longer."</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">"If you ever need our body shop, you get up to $1,000 toward your deductible."</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">"This adds to your resale value because the vehicle stays protected."</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Pro Tip */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
        <TrendingUp className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
        <div>
          <h5 className="font-bold text-blue-900 mb-1">Pro Tip</h5>
          <p className="text-sm text-blue-800">When presenting PP+, have the customer acknowledge each benefit. "You get key replacement - that's $800 right there. You get paint protection - there's another $500. See how this adds up to real value?"</p>
        </div>
      </div>
    </div>
  )
}
