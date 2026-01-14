'use client'

import { Users, Phone, Calendar, TrendingUp, MessageSquare, Clock, CheckCircle2 } from 'lucide-react'
import { followUp } from '@/data/additional-content'

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
            <div className="text-xl font-bold">{followUp.keyFact.text}</div>
            <div className="text-white/80">{followUp.keyFact.subtext}</div>
          </div>
        </div>
      </div>

      {/* Follow-Up Timeline */}
      <h2 className="text-xl font-bold mb-4">Follow-Up Timeline</h2>
      <div className="card mb-8">
        <div className="card-body p-0">
          <div className="divide-y">
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
      </div>

      {/* Referral Scripts */}
      <h2 className="text-xl font-bold mb-4">Referral Scripts</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {followUp.referralScripts.map((script, idx) => (
          <div key={idx} className="card">
            <div className="card-header">
              <MessageSquare size={18} />
              {script.title}
            </div>
            <div className="card-body">
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
                <p className="italic text-gray-700 text-sm">{script.script}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Orphan Owners */}
      <div className="card mb-8">
        <div className="card-header bg-amber-600">
          <Users size={18} />
          {followUp.orphanOwners.title}
        </div>
        <div className="card-body">
          <p className="text-gray-700 mb-4">{followUp.orphanOwners.description}</p>
          <div className="grid md:grid-cols-2 gap-3">
            {followUp.orphanOwners.tips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-amber-50 p-3 rounded-lg">
                <CheckCircle2 size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DriveCentric Tasks */}
      <h2 className="text-xl font-bold mb-4">DriveCentric Follow-Up Tasks</h2>
      <div className="card mb-6">
        <div className="card-body">
          <div className="grid md:grid-cols-2 gap-3">
            {followUp.driveCentricTasks.map((task, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={16} className="text-blue-600" />
                </div>
                <span className="text-sm font-medium">{task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="tip-box tip-success">
        <div className="tip-title">
          <TrendingUp size={16} />
          Pro Tips for Building Your Referral Network
        </div>
        <div className="tip-content">
          <ul className="space-y-2 text-sm">
            <li><strong>Ask everyone:</strong> Every happy customer is a potential source of referrals.</li>
            <li><strong>Make it easy:</strong> Give them your business cards to hand out.</li>
            <li><strong>Follow through:</strong> When you get a referral, treat them like gold.</li>
            <li><strong>Say thank you:</strong> Always acknowledge referrals, even if they don't buy.</li>
            <li><strong>Stay top of mind:</strong> Regular follow-up keeps you in their Rolodex.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
