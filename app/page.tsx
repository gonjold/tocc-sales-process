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
  Award,
  Phone,
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
        <h1>Sales Training System</h1>
        <p>
          Your comprehensive guide to automotive sales excellence at Al Hendrickson Toyota Coconut Creek. 
          Master the Road to the Sale, build product expertise, and develop the skills to deliver 
          exceptional customer experiences.
        </p>
      </div>

      {/* The TOCC Approach */}
      <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
        The TOCC Approach
      </h2>
      <p className="text-gray-600 mb-6">
        At Al Hendrickson Toyota Coconut Creek, we believe in a process-driven approach to sales. 
        When you follow a proven system, success becomes repeatable and predictable.
      </p>

      <div className="card">
        <div className="card-header">
          <div className="card-icon red">
            <Target size={22} />
          </div>
          <div>
            <div className="card-title">Process Excellence</div>
            <div className="card-subtitle">Follow the Road to the Sale</div>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          Every successful sale follows the same 10-step process. Master each step and you'll consistently deliver great results.
        </p>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-icon blue">
            <Users size={22} />
          </div>
          <div>
            <div className="card-title">Customer First</div>
            <div className="card-subtitle">Build relationships, not transactions</div>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          Listen to understand, not to respond. When you genuinely help customers find the right vehicle, sales happen naturally.
        </p>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-icon green">
            <TrendingUp size={22} />
          </div>
          <div>
            <div className="card-title">Continuous Improvement</div>
            <div className="card-subtitle">Never stop learning</div>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          The best salespeople are always refining their skills. Use this training system, practice the scripts, and learn from every interaction.
        </p>
      </div>

      {/* How to Use */}
      <div className="info-box tip">
        <Lightbulb size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--info)' }} />
        <div className="info-box-content">
          <h5>How to Use This System</h5>
          <p>Navigate using the sidebar menu. Each step of the sale includes scripts, tips, and relevant documents. Use the Export button to print any section.</p>
        </div>
      </div>

      {/* Quick Start */}
      <h2 className="text-2xl font-display font-bold text-gray-900 mt-10 mb-4 pb-3 border-b-2 border-gray-200">
        Quick Start
      </h2>
      <p className="text-gray-600 mb-4">New to the team? Start here:</p>

      <Link href="/glossary" className="step-card">
        <div className="step-number">1</div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 mb-1">Learn the Language</h4>
          <p className="text-sm text-gray-500">Review the glossary of automotive sales terms</p>
        </div>
        <ArrowRight size={18} className="text-gray-400" />
      </Link>

      <Link href="/road-to-sale" className="step-card">
        <div className="step-number">2</div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 mb-1">Understand the Process</h4>
          <p className="text-sm text-gray-500">Read through the Road to the Sale overview</p>
        </div>
        <ArrowRight size={18} className="text-gray-400" />
      </Link>

      <Link href="/building-value" className="step-card">
        <div className="step-number">3</div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 mb-1">Know the Programs</h4>
          <p className="text-sm text-gray-500">Learn ToyotaCare, TSS, TCUV, and value-adds</p>
        </div>
        <ArrowRight size={18} className="text-gray-400" />
      </Link>

      <Link href="/skills/flashcards" className="step-card">
        <div className="step-number">4</div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 mb-1">Practice Your Skills</h4>
          <p className="text-sm text-gray-500">Use flashcards to memorize key talking points</p>
        </div>
        <ArrowRight size={18} className="text-gray-400" />
      </Link>

      {/* Quick Links */}
      <h2 className="text-2xl font-display font-bold text-gray-900 mt-10 mb-4 pb-3 border-b-2 border-gray-200">
        Jump To
      </h2>
      
      <div className="grid md:grid-cols-2 gap-3">
        <Link href="/road-to-sale" className="doc-card">
          <div className="doc-icon" style={{ color: 'var(--toyota-red)' }}>
            <Map size={20} />
          </div>
          <div className="doc-info">
            <div className="doc-title">Road to the Sale</div>
            <div className="doc-meta">10 steps to success</div>
          </div>
        </Link>

        <Link href="/building-value" className="doc-card">
          <div className="doc-icon" style={{ color: 'var(--success)' }}>
            <Award size={20} />
          </div>
          <div className="doc-info">
            <div className="doc-title">Building Value</div>
            <div className="doc-meta">Toyota programs & benefits</div>
          </div>
        </Link>

        <Link href="/skills/phone" className="doc-card">
          <div className="doc-icon" style={{ color: 'var(--info)' }}>
            <Phone size={20} />
          </div>
          <div className="doc-info">
            <div className="doc-title">Phone Skills</div>
            <div className="doc-meta">Scripts & best practices</div>
          </div>
        </Link>

        <Link href="/glossary" className="doc-card">
          <div className="doc-icon" style={{ color: 'var(--warning)' }}>
            <BookOpen size={20} />
          </div>
          <div className="doc-info">
            <div className="doc-title">Glossary</div>
            <div className="doc-meta">Industry terminology</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
