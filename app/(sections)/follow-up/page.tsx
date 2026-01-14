'use client'

import { Users, Phone, Calendar, TrendingUp, MessageSquare, Clock, CheckCircle2, ChevronRight } from 'lucide-react'
import { followUp } from '@/data/additional-content'
import Link from 'next/link'

export default function FollowUpPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <Users size={14} />
          After the Sale
        </div>
        <h1>{followUp.title}</h1>
        <p>{followUp.subtitle}</p>
      </div>

      {/* Key Fact - Big Callout */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="text-5xl font-black">2X</div>
          <div>
            <div className="text-xl font-bold text-white">{followUp.keyFact.text}</div>
            <div className="text-white/80">{followUp.keyFact.subtext}</div>
          </div>
        </div>
      </div>

      {/* Follow-Up Timeline */}
      <h2 className="text-xl font-bold mb-4 text-gray-900">Follow-Up Timeline</h2>
      <div className="bg-white rounded-xl border border-gray-200 mb-8 overflow-hidden">
        <div className="divide-y divide-gray-100">
          {followUp.timeline.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors">
              <div className="w-20 flex-shrink-0">
                <span className="inline-flex items-center justify-center px-3 py-1 bg-toyota-red text-white text-sm font-bold rounded-full">
                  {item.day}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{item.action}</h3>
                <p className="text-sm text-gray-600">{item.script}</p>
              </div>
              <Clock size={18} className="text-gray-400 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Referral Scripts */}
      <h2 className="text-xl font-bold mb-4 text-gray-900">Referral Scripts</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {followUp.referralScripts.map((script, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
              <MessageSquare size={18} className="text-gray-600" />
              <span className="font-semibold text-gray-900">{script.title}</span>
            </div>
            <div className="p-4">
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
                <p className="italic text-gray-700 text-sm">{script.script}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Orphan Owners */}
      <div className="bg-white rounded-xl border border-gray-200 mb-8 overflow-hidden">
        <div className="bg-amber-500 text-white px-5 py-3 flex items-center gap-2">
          <Users size={18} />
          <span className="font-bold">{followUp.orphanOwners.title}</span>
        </div>
        <div className="p-5">
          <p className="text-gray-700 mb-4">{followUp.orphanOwners.description}</p>
          <div className="grid md:grid-cols-2 gap-3">
            {followUp.orphanOwners.tips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-amber-50 p-3 rounded-lg">
                <CheckCircle2 size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DriveCentric Tasks */}
      <h2 className="text-xl font-bold mb-4 text-gray-900">DriveCentric Follow-Up Tasks</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-8">
        <div className="grid md:grid-cols-2 gap-3">
          {followUp.driveCentricTasks.map((task, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckCircle2 size={16} className="text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">{task}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pro Tips */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
        <div className="flex items-center gap-2 text-green-700 font-bold mb-3">
          <TrendingUp size={18} />
          Pro Tips for Building Your Referral Network
        </div>
        <ul className="space-y-2 text-sm text-green-800">
          <li><strong>Ask everyone:</strong> Every happy customer is a potential source of referrals.</li>
          <li><strong>Make it easy:</strong> Give them your business cards to hand out.</li>
          <li><strong>Follow through:</strong> When you get a referral, treat them like gold.</li>
          <li><strong>Say thank you:</strong> Always acknowledge referrals, even if they don't buy.</li>
          <li><strong>Stay top of mind:</strong> Regular follow-up keeps you in their Rolodex.</li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <Link href="/csi" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
          ← Back to CSI & Reviews
        </Link>
        <Link 
          href="/building-value"
          className="flex items-center gap-2 px-5 py-3 bg-toyota-red text-white rounded-xl font-medium hover:bg-red-700 transition-colors"
        >
          Continue to Building Value
          <ChevronRight size={20} />
        </Link>
      </div>
    </div>
  )
}
