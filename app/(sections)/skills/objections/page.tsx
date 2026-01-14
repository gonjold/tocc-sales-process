'use client'

import { useState } from 'react'
import { MessageCircle, ChevronDown, ChevronRight, Lightbulb, Target, TrendingUp, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

const larcMethod = [
  { letter: 'L', word: 'Listen', desc: 'Hear the complete objection without interrupting. Let them express their full concern.' },
  { letter: 'A', word: 'Acknowledge', desc: 'Show empathy. Validate their concern with phrases like "I understand..." or "That makes sense..."' },
  { letter: 'R', word: 'Respond', desc: 'Address the objection directly with facts and value. Don\'t be defensive.' },
  { letter: 'C', word: 'Close', desc: 'Ask for the sale or next step. Don\'t leave it open-ended.' },
]

const objections = [
  {
    id: 'think-about-it',
    objection: '"I need to think about it"',
    category: 'delay',
    responses: {
      A: '"Of course, it\'s a big decision."',
      R: '"What specifically are you thinking about? Is it the vehicle, the payment, or something else?"',
      C: '"If I can address that concern, would you be ready today?"',
    },
    tips: [
      'This usually means there\'s a specific unaddressed concern',
      'Dig deeper - ask what specifically they need to think about',
      'Most "think about it" customers never come back'
    ]
  },
  {
    id: 'talk-spouse',
    objection: '"I need to talk to my spouse"',
    category: 'delay',
    responses: {
      A: '"Absolutely, important decisions should be made together."',
      R: '"Can we get them on a video call right now? Or should we schedule a time for both of you to come in?"',
      C: '"What time works for both of you today?"',
    },
    tips: [
      'Offer to call the spouse right now',
      'If they refuse, they may be using it as an excuse',
      'Ask what information their spouse would need to make a decision'
    ]
  },
  {
    id: 'cheaper-online',
    objection: '"I found it cheaper online"',
    category: 'price',
    responses: {
      A: '"That\'s smart shopping."',
      R: '"Does that price include our PP+ package - $6,500 in protection? And taxes, fees, delivery? Let me show you the real comparison."',
      C: '"When you see the full picture, which is the better deal?"',
    },
    tips: [
      'Online prices often exclude fees, taxes, and delivery',
      'Emphasize PP+ value that competitors don\'t include',
      'Show a side-by-side comparison of total out-the-door costs'
    ]
  },
  {
    id: 'not-buying-today',
    objection: '"I\'m not buying today"',
    category: 'delay',
    responses: {
      A: '"No pressure at all."',
      R: '"But let\'s at least get you numbers so you know what you\'re working with. That way when you ARE ready, you\'ll have everything."',
      C: '"Can I at least get your information to hold this price?"',
    },
    tips: [
      'The key is to keep them engaged',
      'Get them numbers even if they say no today',
      'Create a reason to follow up'
    ]
  },
  {
    id: 'trade-worth-more',
    objection: '"My trade-in is worth more"',
    category: 'trade',
    responses: {
      A: '"I understand, your car has been good to you."',
      R: '"Here\'s what the market data shows. But let\'s focus on your net cost - you\'re still getting $6,500 in PP+ value."',
      C: '"If this is the best we can do on trade, can we make the deal work?"',
    },
    tips: [
      'Show vAuto or market data to justify your number',
      'Shift focus from trade value to net cost',
      'Emphasize the PP+ value they\'re getting'
    ]
  },
  {
    id: 'payment-too-high',
    objection: '"The payment is too high"',
    category: 'payment',
    responses: {
      A: '"I hear you - budget matters."',
      R: '"Let\'s look at the options: we could adjust the term, increase down payment, or look at a similar pre-owned vehicle that saves $100-200/month."',
      C: '"Which option works best for you?"',
    },
    tips: [
      'Offer the Switch to pre-owned as an option',
      'Ask what payment they were hoping for',
      'Adjusting term is easier than adjusting price'
    ]
  },
  {
    id: 'just-looking',
    objection: '"I\'m just looking"',
    category: 'delay',
    responses: {
      A: '"That\'s great - it\'s important to research before you buy."',
      R: '"What specifically caught your eye today? I can give you information to help with your research."',
      C: '"Can I at least get you numbers so you have them when you\'re ready?"',
    },
    tips: [
      'This is usually a defense mechanism - be patient',
      'Ask questions to understand their real needs',
      'Stay engaged without being pushy'
    ]
  },
  {
    id: 'better-rate-bank',
    objection: '"I can get a better rate at my bank"',
    category: 'payment',
    responses: {
      A: '"Banks do offer great rates."',
      R: '"Let me show you what Toyota Financial can do - we often match or beat bank rates, plus you get special loyalty benefits."',
      C: '"If I can match your bank\'s rate, would you finance with us today?"',
    },
    tips: [
      'Ask what rate their bank is offering',
      'Emphasize convenience of handling everything in one place',
      'Mention Toyota Financial loyalty benefits'
    ]
  },
]

export default function ObjectionsPage() {
  const [openAccordions, setOpenAccordions] = useState<string[]>(['think-about-it'])
  const [selectedCategory, setSelectedCategory] = useState('All')

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  const categories = ['All', 'delay', 'price', 'payment', 'trade']
  const categoryLabels: Record<string, string> = {
    delay: 'Time/Delay',
    price: 'Price',
    payment: 'Payment',
    trade: 'Trade-In'
  }

  const filteredObjections = selectedCategory === 'All'
    ? objections
    : objections.filter(o => o.category === selectedCategory)

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <MessageCircle size={14} />
          Skills
        </div>
        <h1>L.A.R.C. Objection Handling</h1>
        <p>
          Objections aren't rejections—they're requests for more information. 
          Master the L.A.R.C. method to handle any objection professionally.
        </p>
      </div>

      {/* Key Stat */}
      <div className="bg-gradient-to-r from-navy to-deep-navy text-white rounded-xl p-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="text-5xl font-black">5</div>
          <div>
            <div className="text-xl font-bold">Average "No"s Before a Sale</div>
            <div className="text-white/70">Most salespeople give up after 1-2. Every "no" is progress.</div>
          </div>
        </div>
      </div>

      {/* L.A.R.C. Method */}
      <h2 className="text-xl font-bold mb-4">The L.A.R.C. Method</h2>
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {larcMethod.map((step) => (
          <div key={step.letter} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-3xl font-black text-toyota-red mb-2">{step.letter}</div>
            <div className="font-bold text-gray-900 mb-1">{step.word}</div>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? 'bg-toyota-red text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat === 'All' ? 'All' : categoryLabels[cat] || cat}
          </button>
        ))}
      </div>

      {/* Objections */}
      <h2 className="text-xl font-bold mb-4">Common Objections & L.A.R.C. Responses</h2>
      <div className="space-y-4">
        {filteredObjections.map((obj) => {
          const isOpen = openAccordions.includes(obj.id)
          
          return (
            <div key={obj.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleAccordion(obj.id)}
                className="w-full p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left"
              >
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-toyota-red" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{obj.objection}</h3>
                  <span className="text-xs text-gray-500">{categoryLabels[obj.category]}</span>
                </div>
                <ChevronDown size={20} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="border-t animate-fade-in">
                  {/* L.A.R.C. Response */}
                  <div className="p-4 bg-gray-50 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-toyota-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">A</span>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-gray-500 mb-1">ACKNOWLEDGE</div>
                        <p className="text-gray-700 italic">{obj.responses.A}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-toyota-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">R</span>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-gray-500 mb-1">RESPOND</div>
                        <p className="text-gray-700 italic">{obj.responses.R}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-toyota-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">C</span>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-gray-500 mb-1">CLOSE</div>
                        <p className="text-gray-700 italic">{obj.responses.C}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="p-4 border-t">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                      <Lightbulb size={14} className="text-amber-500" />
                      Tips for This Objection
                    </h4>
                    <ul className="space-y-1">
                      {obj.tips.map((tip, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-toyota-red">•</span>
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
      </div>

      {/* Practice Tips */}
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
          <Target className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h5 className="font-bold text-blue-900 mb-1">Practice Makes Perfect</h5>
            <p className="text-sm text-blue-800">Role-play these objections with a colleague until the responses feel natural.</p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
          <TrendingUp className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h5 className="font-bold text-green-900 mb-1">Track Your Objections</h5>
            <p className="text-sm text-green-800">Note which objections you hear most often. Focus practice on those.</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 mt-8 border-t border-gray-200">
        <Link href="/skills/phone" className="text-gray-600 hover:text-gray-900">
          ← Back to Phone Skills
        </Link>
        <Link 
          href="/skills/flashcards"
          className="flex items-center gap-2 px-5 py-3 bg-toyota-red text-white rounded-xl font-medium hover:bg-red-700 transition-colors"
        >
          Next: Flashcards
          <ChevronRight size={20} />
        </Link>
      </div>
    </div>
  )
}
