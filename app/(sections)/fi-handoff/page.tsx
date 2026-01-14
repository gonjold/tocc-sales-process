'use client'

import { ArrowRight, FileCheck, Send, Clock, CheckCircle2, AlertTriangle, FileText, Users } from 'lucide-react'

export default function FIHandoffPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <ArrowRight size={14} />
          Between Steps 9 & 10
        </div>
        <h1>F&I Handoff</h1>
        <p>Smooth transition from sales to finance - keep the customer excited and comfortable.</p>
      </div>

      {/* Overview */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
        <p className="text-gray-700 leading-relaxed">
          The handoff to F&I is a critical moment. Done well, it maintains customer excitement and trust. 
          Done poorly, it can undo all the rapport you've built. Your job is to make this transition seamless.
        </p>
      </div>

      {/* 3-Step Process */}
      <h2 className="text-xl font-bold mb-4">The 3-Step Handoff Process</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-5 text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <FileCheck className="text-toyota-red" size={24} />
          </div>
          <div className="text-sm font-semibold text-toyota-red mb-1">Step 1</div>
          <h3 className="font-bold text-lg mb-2">Complete Paperwork</h3>
          <p className="text-sm text-gray-600">Ensure all documents are signed and organized before approaching the desk.</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Send className="text-blue-600" size={24} />
          </div>
          <div className="text-sm font-semibold text-blue-600 mb-1">Step 2</div>
          <h3 className="font-bold text-lg mb-2">Submit to Desk</h3>
          <p className="text-sm text-gray-600">Present the complete deal jacket to your sales manager for approval.</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Users className="text-green-600" size={24} />
          </div>
          <div className="text-sm font-semibold text-green-600 mb-1">Step 3</div>
          <h3 className="font-bold text-lg mb-2">Stay With Customer</h3>
          <p className="text-sm text-gray-600">Wait with your customer while F&I prepares. Use this time productively.</p>
        </div>
      </div>

      {/* Document Checklists */}
      <h2 className="text-xl font-bold mb-4">Document Checklists</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {/* All Deals */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-gray-800 text-white px-4 py-3 font-semibold flex items-center gap-2">
            <FileText size={18} />
            All Deals
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-sm">
              {[
                'Signed pencil/worksheet',
                'Completed credit application',
                'Copy of driver\'s license',
                'Tag/title application',
                'Odometer statement',
                'Proof of insurance',
                'VIN verification form',
                'We Owe / You Owe form',
                'Media release form',
                'Privacy notice acknowledgment',
                'Deal recap sheet'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* New/Used Cars */}
        <div className="space-y-4">
          {/* New Cars */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-3 font-semibold flex items-center gap-2">
              <FileText size={18} />
              New Cars Only
            </div>
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                {[
                  'Window sticker (Monroney)',
                  'Loyalty/conquest rebate verification',
                  'Lemon Law acknowledgment'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Used Cars */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-orange-500 text-white px-4 py-3 font-semibold flex items-center gap-2">
              <FileText size={18} />
              Used Cars Only
            </div>
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                {[
                  'Carfax/AutoCheck report',
                  'Open recall verification',
                  'Buyer\'s Guide (FTC)',
                  'As-Is disclosure (if applicable)',
                  'Book-out sheet'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Trade Documents */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
        <div className="bg-amber-600 text-white px-4 py-3 font-semibold flex items-center gap-2">
          <FileText size={18} />
          Trade-In Documents
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-3 gap-3">
            {[
              'Flood/water damage certification',
              'Payoff authorization',
              'ACV documentation'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-amber-50 p-3 rounded-lg text-sm">
                <CheckCircle2 size={16} className="text-amber-600 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Time Expectations & While Waiting */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <Clock size={18} className="text-gray-500" />
            Time Expectations
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm text-gray-600">First-time Finance Customer</span>
              <span className="font-semibold">~15 min</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm text-gray-600">Complex Deal / Second Finance</span>
              <span className="font-semibold">45-60 min</span>
            </div>
            <p className="text-xs text-gray-500 italic">Times vary based on deal complexity and F&I workload</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h3 className="font-bold mb-3">While Waiting</h3>
          <ul className="space-y-2">
            {[
              'Review vehicle features again',
              'Discuss service hours & first free service',
              'Confirm contact info in DriveCentric',
              'Prepare delivery checklist'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                  {idx + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Customer Script */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
        <h3 className="font-bold text-green-900 mb-2 flex items-center gap-2">
          <CheckCircle2 size={18} />
          What to Tell the Customer
        </h3>
        <p className="text-green-800 italic">
          "Great news! We're all set on my end. Now [F&I Manager's name] will go over your payment options, 
          warranty coverage, and finalize everything. They're really thorough and will make sure you understand 
          all your options. It usually takes about [time]. I'll be right here if you need anything."
        </p>
      </div>

      {/* Warning */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
        <div>
          <h5 className="font-bold text-amber-900 mb-1">Important</h5>
          <p className="text-sm text-amber-800">Never leave your customer alone during the F&I wait. Stay engaged, review the vehicle features, and keep them excited about their purchase. This prevents buyer's remorse.</p>
        </div>
      </div>
    </div>
  )
}
