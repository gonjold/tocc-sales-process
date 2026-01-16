'use client'

import Link from 'next/link'
import { 
  Target, 
  Users, 
  TrendingUp, 
  Lightbulb, 
  ArrowRight,
  BookOpen,
  Map,
  Star
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <Star size={14} />
          Welcome
        </div>
        <h1>Sales Process Portal</h1>
        <p>
          Your comprehensive guide to automotive sales excellence at Toyota of Coconut Creek. 
          Master the Road to the Sale, build product expertise, and deliver exceptional customer experiences.
        </p>
      </div>

      {/* Quick Start - Two Main Buttons */}
      <h2 className="text-lg sm:text-xl font-display font-bold text-gray-900 mb-3 sm:mb-4">Quick Start</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <Link 
          href="/road-to-sale" 
          className="bg-white border-2 border-toyota-red rounded-xl p-4 sm:p-6 hover:bg-red-50 hover:shadow-lg transition-all group active:scale-[0.98]"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-toyota-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Map size={24} className="text-toyota-red sm:hidden" />
              <Map size={28} className="text-toyota-red hidden sm:block" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-0.5 sm:mb-1">Road to the Sale</h3>
              <p className="text-gray-500 text-sm">The complete 10-step sales process</p>
            </div>
            <ArrowRight size={20} className="text-toyota-red opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0 sm:w-6 sm:h-6" />
          </div>
        </Link>

        <Link 
          href="/glossary" 
          className="bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 hover:border-navy hover:bg-blue-50 hover:shadow-lg transition-all group active:scale-[0.98]"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <BookOpen size={24} className="text-navy sm:hidden" />
              <BookOpen size={28} className="text-navy hidden sm:block" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-0.5 sm:mb-1">Glossary of Terms</h3>
              <p className="text-gray-500 text-sm">Learn the language of auto sales</p>
            </div>
            <ArrowRight size={20} className="text-gray-300 group-hover:text-navy group-hover:translate-x-1 transition-all flex-shrink-0 sm:w-6 sm:h-6" />
          </div>
        </Link>
      </div>

      {/* The TOCC Approach */}
      <h2 className="text-lg sm:text-xl font-display font-bold text-gray-900 mb-3 sm:mb-4 pb-3 border-b-2 border-gray-200">
        The TOCC Approach
      </h2>
      <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
        At Toyota of Coconut Creek, we believe in a process-driven approach to sales. 
        When you follow a proven system, success becomes repeatable and predictable.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="card">
          <div className="card-body">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-3">
              <Target className="text-toyota-red" size={20} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Process Excellence</h3>
            <p className="text-sm text-gray-600">Follow the Road to the Sale. Every successful sale follows the same 10-step process.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Users className="text-blue-600" size={20} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Customer First</h3>
            <p className="text-sm text-gray-600">Build relationships, not transactions. Listen to understand, not to respond.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <TrendingUp className="text-green-600" size={20} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Continuous Improvement</h3>
            <p className="text-sm text-gray-600">Never stop learning. Refine your skills and learn from every interaction.</p>
          </div>
        </div>
      </div>

      {/* How to Use */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 flex items-start gap-3">
        <Lightbulb size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <h5 className="font-bold text-blue-900 mb-1 text-sm sm:text-base">How to Use This Portal</h5>
          <p className="text-sm text-blue-800">Navigate using the sidebar menu. Each step includes scripts, tips, and relevant documents. Use the Downloads button to get the full guide.</p>
        </div>
      </div>

      {/* New to the Team - Getting Started */}
      <h2 className="text-lg sm:text-xl font-display font-bold text-gray-900 mb-3 sm:mb-4 pb-3 border-b-2 border-gray-200">
        New to the Team?
      </h2>
      <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Follow this path to get up to speed:</p>

      <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
        <Link href="/glossary" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg border border-gray-200 hover:border-toyota-red hover:shadow-sm transition-all active:scale-[0.99]">
          <div className="w-8 h-8 bg-toyota-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Learn the Language</h4>
            <p className="text-xs sm:text-sm text-gray-500">Review the glossary of automotive sales terms</p>
          </div>
          <ArrowRight size={18} className="text-gray-400 flex-shrink-0" />
        </Link>

        <Link href="/road-to-sale" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg border border-gray-200 hover:border-toyota-red hover:shadow-sm transition-all active:scale-[0.99]">
          <div className="w-8 h-8 bg-toyota-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Understand the Process</h4>
            <p className="text-xs sm:text-sm text-gray-500">Read through the 10-step Road to the Sale</p>
          </div>
          <ArrowRight size={18} className="text-gray-400 flex-shrink-0" />
        </Link>

        <Link href="/building-value" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg border border-gray-200 hover:border-toyota-red hover:shadow-sm transition-all active:scale-[0.99]">
          <div className="w-8 h-8 bg-toyota-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Know the Programs</h4>
            <p className="text-xs sm:text-sm text-gray-500">Learn ToyotaCare, TSS 3.0, warranties, and PP+</p>
          </div>
          <ArrowRight size={18} className="text-gray-400 flex-shrink-0" />
        </Link>

        <Link href="/skills/quiz" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg border border-gray-200 hover:border-toyota-red hover:shadow-sm transition-all active:scale-[0.99]">
          <div className="w-8 h-8 bg-toyota-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Test Your Knowledge</h4>
            <p className="text-xs sm:text-sm text-gray-500">Take the quiz to see what you've learned</p>
          </div>
          <ArrowRight size={18} className="text-gray-400 flex-shrink-0" />
        </Link>
      </div>

      {/* Key Numbers - Fixed contrast */}
      <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 sm:p-6">
        <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
          <Target size={20} className="text-toyota-red" />
          Key Numbers to Know
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          <div className="text-center bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
            <div className="text-2xl sm:text-3xl font-black text-toyota-red">40%</div>
            <div className="text-xs sm:text-sm text-gray-600">Sale success from Meet & Greet</div>
          </div>
          <div className="text-center bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
            <div className="text-2xl sm:text-3xl font-black text-toyota-red">65%</div>
            <div className="text-xs sm:text-sm text-gray-600">Test drives that convert</div>
          </div>
          <div className="text-center bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
            <div className="text-2xl sm:text-3xl font-black text-toyota-red">5</div>
            <div className="text-xs sm:text-sm text-gray-600">"No"s before average sale</div>
          </div>
          <div className="text-center bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
            <div className="text-2xl sm:text-3xl font-black text-toyota-red">2X</div>
            <div className="text-xs sm:text-sm text-gray-600">Referral close rate</div>
          </div>
        </div>
      </div>
    </div>
  )
}
