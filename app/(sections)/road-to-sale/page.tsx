'use client'

import Link from 'next/link'
import { Map, Clock, Target, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react'

const steps = [
  { num: 1, name: 'Meet & Greet', goal: 'Build rapport within 30 seconds', time: '2-5 min', tag: '40% of sale success' },
  { num: 2, name: 'Qualify', goal: 'Discover needs, wants, budget', time: '5-10 min', tag: 'Ask, don\'t tell' },
  { num: 3, name: 'Vehicle Selection', goal: 'Match customer to inventory', time: '5-10 min', tag: '2-3 options max' },
  { num: 4, name: 'Walkaround', goal: 'Present features as benefits', time: '10-15 min', tag: 'Build value' },
  { num: 5, name: 'Test Drive', goal: 'Create ownership experience', time: '15-20 min', tag: 'Let them drive' },
  { num: 6, name: 'Trial Close', goal: 'Confirm vehicle selection', time: '5 min', tag: 'Park & pivot' },
  { num: 7, name: 'Trade Evaluation', goal: 'Manage expectations', time: '10-15 min', tag: 'Use vAuto' },
  { num: 8, name: 'Write-Up', goal: 'Present numbers professionally', time: '10-15 min', tag: 'DriveCentric' },
  { num: 9, name: 'Negotiation', goal: 'Handle objections, close', time: '10-20 min', tag: 'L.A.R.C. method' },
  { num: 10, name: 'Delivery', goal: 'Create a memory', time: '20-30 min', tag: 'Ask for referrals' },
]

export default function RoadToSalePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <Map size={14} />
          Overview
        </div>
        <h1>Road to the Sale</h1>
        <p>
          The complete 10-step process that turns opportunities into deliveries. 
          Master each step and you'll consistently deliver great results.
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
          <div className="text-2xl font-display font-bold text-toyota-red">10</div>
          <div className="text-xs text-gray-500 uppercase tracking-wide">Steps</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
          <div className="text-2xl font-display font-bold text-toyota-red">2-4 hrs</div>
          <div className="text-xs text-gray-500 uppercase tracking-wide">Avg Sale</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
          <div className="text-2xl font-display font-bold text-toyota-red">30%+</div>
          <div className="text-xs text-gray-500 uppercase tracking-wide">Close Rate</div>
        </div>
      </div>

      {/* Key Principle */}
      <div className="info-box tip mb-8">
        <Lightbulb size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--info)' }} />
        <div className="info-box-content">
          <h5>The Golden Rule</h5>
          <p>Never skip a step. Each step builds on the previous one. Shortcuts lead to lost sales and lower grosses.</p>
        </div>
      </div>

      {/* Steps List */}
      <h2 className="text-xl font-display font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
        The 10 Steps
      </h2>

      <div className="space-y-3">
        {steps.map((step) => (
          <Link 
            key={step.num} 
            href={`/road-to-sale/step/${step.num}`}
            className="step-card"
          >
            <div className="step-number">{step.num}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-bold text-gray-900">{step.name}</h4>
                <span className="text-xs bg-success-light text-success px-2 py-0.5 rounded-full font-semibold">
                  {step.tag}
                </span>
              </div>
              <p className="text-sm text-gray-500 flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Target size={12} />
                  {step.goal}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {step.time}
                </span>
              </p>
            </div>
            <ArrowRight size={18} className="text-gray-400 flex-shrink-0" />
          </Link>
        ))}
      </div>

      {/* Common Mistakes */}
      <div className="info-box warning mt-8">
        <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--warning)' }} />
        <div className="info-box-content">
          <h5>Common Mistakes</h5>
          <p>Rushing to the numbers, skipping the walkaround, not asking discovery questions, and forgetting to ask for referrals at delivery.</p>
        </div>
      </div>
    </div>
  )
}
