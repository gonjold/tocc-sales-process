'use client'

import { useState } from 'react'
import { Layers, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const flashcards = [
  { category: 'ToyotaCare', question: 'What is included with ToyotaCare?', answer: '2 years/25,000 miles of no-cost maintenance including oil changes, tire rotations, multi-point inspections, plus 24/7 roadside assistance.' },
  { category: 'ToyotaCare', question: 'How long does ToyotaCare roadside assistance last?', answer: '2 years with unlimited miles.' },
  { category: 'TSS 3.0', question: 'What does PCS stand for?', answer: 'Pre-Collision System - detects vehicles and pedestrians and can apply brakes automatically.' },
  { category: 'TSS 3.0', question: 'What are the 6 features of TSS 3.0?', answer: 'PCS (Pre-Collision), DRCC (Dynamic Radar Cruise), LDA (Lane Departure Alert), LTA (Lane Tracing Assist), AHB (Auto High Beams), RSA (Road Sign Assist).' },
  { category: 'PPP', question: 'What is the total value of Premium Protect Plus?', answer: 'Over $6,541 in value including LoJack, lifetime powertrain warranty, paint protection, and more.' },
  { category: 'PPP', question: 'How long is the LoJack coverage in PPP?', answer: '5 years of stolen vehicle recovery protection.' },
  { category: 'Process', question: 'What are the 10 steps of the Road to Sale?', answer: '1. Meet & Greet, 2. Qualify, 3. Vehicle Selection, 4. Walkaround, 5. Test Drive, 6. Trial Close, 7. Trade Evaluation, 8. Write-Up, 9. Negotiation, 10. Delivery' },
  { category: 'Process', question: 'What is the L.A.R.C. method?', answer: 'Listen, Acknowledge, Respond, Close - a framework for handling customer objections.' },
  { category: 'Process', question: 'What is the 70/30 rule?', answer: 'Listen 70% of the time, talk 30%. Great salespeople ask questions and listen more than they pitch.' },
  { category: 'Toyoguard', question: 'What does Toyoguard Platinum include?', answer: 'Paint protection film, interior protection, paintless dent repair, windshield repair, and key replacement.' },
]

const categories = ['All', ...Array.from(new Set(flashcards.map(f => f.category)))]

export default function FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredCards = selectedCategory === 'All' 
    ? flashcards 
    : flashcards.filter(f => f.category === selectedCategory)

  const currentCard = filteredCards[currentIndex]

  const nextCard = () => {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredCards.length)
    }, 150)
  }

  const prevCard = () => {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length)
    }, 150)
  }

  const resetCards = () => {
    setCurrentIndex(0)
    setIsFlipped(false)
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <Layers size={14} />
          Practice
        </div>
        <h1>Flashcard Practice</h1>
        <p>
          Test your knowledge of Toyota programs, sales processes, and key talking points. 
          Click a card to reveal the answer.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setSelectedCategory(cat); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? 'bg-toyota-red text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
        <span>Card {currentIndex + 1} of {filteredCards.length}</span>
        <button 
          onClick={resetCards}
          className="flex items-center gap-1 text-gray-500 hover:text-gray-700"
        >
          <RotateCcw size={14} />
          Reset
        </button>
      </div>

      {/* Flashcard */}
      <div 
        className="relative cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ perspective: '1000px' }}
      >
        <div 
          className={`relative transition-transform duration-500 ${isFlipped ? '' : ''}`}
          style={{ 
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front */}
          <div 
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 min-h-[280px] flex flex-col justify-center"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="text-xs font-bold text-toyota-red uppercase tracking-wider mb-4">
              {currentCard?.category}
            </div>
            <h3 className="text-xl text-white font-bold leading-relaxed">
              {currentCard?.question}
            </h3>
            <div className="mt-6 text-sm text-gray-400">
              Click to reveal answer
            </div>
          </div>

          {/* Back */}
          <div 
            className="absolute inset-0 bg-white rounded-xl border-2 border-toyota-red p-8 min-h-[280px] flex flex-col justify-center"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="text-xs font-bold text-success uppercase tracking-wider mb-4">
              Answer
            </div>
            <p className="text-gray-800 leading-relaxed">
              {currentCard?.answer}
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Click to see question
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button 
          onClick={prevCard}
          className="step-nav-btn"
        >
          <ChevronLeft size={18} />
          Previous
        </button>
        <button 
          onClick={nextCard}
          className="step-nav-btn"
        >
          Next
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Page Navigation */}
      <div className="flex justify-between items-center pt-8 mt-8 border-t border-gray-200">
        <Link href="/skills/objections" className="text-gray-600 hover:text-gray-900">
          ← Back to Objection Handling
        </Link>
        <Link 
          href="/skills/quiz"
          className="flex items-center gap-2 px-5 py-3 bg-toyota-red text-white rounded-xl font-medium hover:bg-red-700 transition-colors"
        >
          Next: Knowledge Quiz
          <ChevronRight size={20} />
        </Link>
      </div>
    </div>
  )
}
