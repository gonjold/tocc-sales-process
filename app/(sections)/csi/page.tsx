'use client'

import { Star, MessageSquare, Wrench, Phone, AlertTriangle, CheckCircle2, TrendingUp } from 'lucide-react'
import { csiReviews } from '@/data/additional-content'

export default function CSIPage() {
  const actionIcons: Record<string, React.ElementType> = {
    MessageSquare: MessageSquare,
    Wrench: Wrench,
    Phone: Phone
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <Star size={14} />
          After the Sale
        </div>
        <h1>{csiReviews.title}</h1>
        <p>{csiReviews.subtitle}</p>
      </div>

      {/* Key Fact - Big Callout */}
      <div className="bg-gradient-to-r from-toyota-red to-red-700 text-white rounded-xl p-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="text-6xl font-black">5</div>
          <div>
            <div className="text-xl font-bold">{csiReviews.keyFact.text}</div>
            <div className="text-white/80">{csiReviews.keyFact.subtext}</div>
            <div className="text-sm text-white/60 mt-1">{csiReviews.keyFact.emphasis}</div>
          </div>
        </div>
      </div>

      {/* How to Earn Perfect Score */}
      <h2 className="text-xl font-bold mb-4">How to Earn a Perfect Score</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {csiReviews.earnPerfectScore.map((item, idx) => {
          const IconComponent = actionIcons[item.icon] || CheckCircle2
          return (
            <div key={idx} className="card">
              <div className="card-body text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="text-green-600" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Survey Areas Table */}
      <h2 className="text-xl font-bold mb-4">Survey Areas & How to Score 5</h2>
      <div className="card mb-8">
        <div className="card-body p-0">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="text-left p-4 font-semibold">Survey Area</th>
                <th className="text-left p-4 font-semibold">How to Ensure a 5</th>
              </tr>
            </thead>
            <tbody>
              {csiReviews.surveyAreas.map((area, idx) => (
                <tr key={idx} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="p-4 font-medium">
                    <div className="flex items-center gap-2">
                      <Star size={16} className="text-amber-500" />
                      {area.area}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{area.howToEnsureFive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tips */}
      <h2 className="text-xl font-bold mb-4">CSI Best Practices</h2>
      <div className="space-y-4 mb-8">
        {csiReviews.tips.map((tip, idx) => (
          <div key={idx} className={`tip-box tip-${tip.type}`}>
            <div className="tip-title">
              {tip.type === 'success' && <CheckCircle2 size={16} />}
              {tip.type === 'warning' && <AlertTriangle size={16} />}
              {tip.type === 'tip' && <TrendingUp size={16} />}
              {tip.title}
            </div>
            <div className="tip-content">
              <p>{tip.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Google Review Script */}
      <h2 className="text-xl font-bold mb-4">Asking for Google Reviews</h2>
      <div className="card mb-6">
        <div className="card-header">
          <Star size={18} />
          Google Review Script
        </div>
        <div className="card-body">
          <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-toyota-red">
            <p className="italic text-gray-700">{csiReviews.googleReviewScript}</p>
          </div>
          <div className="mt-4 p-3 bg-amber-50 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>Tip:</strong> Have Google review cards printed with a QR code. Hand one to every customer at delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Remember Box */}
      <div className="bg-navy text-white rounded-xl p-6">
        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
          <AlertTriangle size={20} />
          Remember
        </h3>
        <ul className="space-y-2 text-white/90">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
            CSI surveys directly impact dealership bonuses and manufacturer incentives
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
            Your individual CSI scores affect your standing and opportunities
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
            One bad survey can tank your monthly average - prevention is key
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
            Follow up BEFORE the survey arrives, not after
          </li>
        </ul>
      </div>
    </div>
  )
}
