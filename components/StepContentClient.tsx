'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Target,
  MessageSquare,
  HelpCircle,
  Lightbulb,
  AlertOctagon,
  FileText,
  Check,
  Play,
  Eye,
  Smile,
  Handshake,
  Search,
  Car,
  ClipboardList,
  Route,
  DollarSign,
  Calculator,
  MessageCircle,
  Clipboard,
  Award,
  Star,
  Users,
  Phone,
  Gift,
  Sparkles,
  Heart,
  ThumbsUp,
  CheckCircle,
  UserCheck,
  Wallet,
  FileCheck,
  Truck,
  Key,
  Camera,
  Shield,
  type LucideIcon
} from 'lucide-react'
import { StepData } from '@/data/steps'
import { forms, getDocumentUrl } from '@/data/documents'
import { DocumentModal, useDocumentModal } from '@/components/ui/DocumentModal'

// Map icon string names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Eye,
  Smile,
  Handshake,
  FileText,
  Search,
  Car,
  ClipboardList,
  Route,
  DollarSign,
  Calculator,
  MessageCircle,
  Clipboard,
  Award,
  Star,
  Users,
  Phone,
  Gift,
  Sparkles,
  Heart,
  ThumbsUp,
  CheckCircle,
  UserCheck,
  Wallet,
  FileCheck,
  Truck,
  Key,
  Camera,
  Shield,
  Target,
  Clock,
  Lightbulb,
  Check,
  // Fallback variants
  'Shirt': UserCheck,
  'Hand': Handshake,
  'Ear': Users,
  'Question': HelpCircle,
  'Steering': Car,
  'Features': Sparkles,
  'Benefits': Gift,
  'Trade': DollarSign,
  'Numbers': Calculator,
  'Paperwork': FileCheck,
  'Keys': Key,
  'Delivery': Truck,
  'Thank': Heart,
}

const getIconComponent = (iconName?: string): LucideIcon => {
  if (!iconName) return CheckCircle
  return iconMap[iconName] || CheckCircle
}

interface StepContentProps {
  step: StepData
  prevStep: { stepNum: number; title: string } | null
  nextStep: { stepNum: number; title: string } | null
}

type TabType = 'overview' | 'scripts' | 'questions' | 'tips'

export function StepContent({ step, prevStep, nextStep }: StepContentProps) {
  const { isOpen, currentDoc, openModal, closeModal } = useDocumentModal()
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const [activeScript, setActiveScript] = useState(0)
  const [expandedAction, setExpandedAction] = useState<number | null>(null)
  const [checkedQuestions, setCheckedQuestions] = useState<Set<number>>(new Set())

  const relatedForms = step.relatedForms 
    ? forms.filter(f => step.relatedForms?.includes(f.id))
    : []

  const openDocument = (name: string, path: string, type: 'html' | 'pdf') => {
    const url = getDocumentUrl(path)
    openModal(name, url, type)
  }

  const toggleQuestion = (idx: number) => {
    setCheckedQuestions(prev => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }

  const hasQuestions = step.needsAssessmentQuestions && step.needsAssessmentQuestions.length > 0

  const tabs = [
    { id: 'overview' as TabType, label: 'Overview', icon: Target, count: step.keyActions.length },
    { id: 'scripts' as TabType, label: 'Scripts', icon: MessageSquare, count: step.scripts.length },
    ...(hasQuestions ? [{ id: 'questions' as TabType, label: 'Questions', icon: HelpCircle, count: step.needsAssessmentQuestions?.length || 0 }] : []),
    { id: 'tips' as TabType, label: 'Tips & Warnings', icon: Lightbulb, count: step.tips.length + step.commonMistakes.length },
  ]

  return (
    <div className="animate-fade-in">
      {/* Step Header - Compact but informative */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 mb-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-5xl font-display font-black text-white/20">{step.stepNum}</span>
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                  <Clock size={14} />
                  {step.duration}
                </div>
                <h1 className="text-2xl font-display font-bold text-white">{step.title}</h1>
              </div>
            </div>
            <p className="text-gray-300 max-w-2xl">{step.goal}</p>
            {step.keyMetric && (
              <div className="mt-3 inline-flex items-center gap-2 bg-toyota-red/20 text-toyota-red px-3 py-1.5 rounded-full text-sm font-medium">
                <Target size={14} />
                {step.keyMetric}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {prevStep && (
              <Link 
                href={`/road-to-sale/step/${step.stepNum - 1}`}
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                title={`Step ${prevStep.stepNum}`}
              >
                <ChevronLeft size={20} />
              </Link>
            )}
            {nextStep && (
              <Link 
                href={`/road-to-sale/step/${step.stepNum + 1}`}
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                title={`Step ${nextStep.stepNum}`}
              >
                <ChevronRight size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-toyota-red text-white shadow-lg shadow-toyota-red/25'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${
              activeTab === tab.id ? 'bg-white/20' : 'bg-gray-200'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[500px]">
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fade-in">
            {/* Overview Text */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">What This Step Is About</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                {step.overview.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Key Actions - Expandable Cards */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Key Actions</h2>
              <div className="grid gap-3">
                {step.keyActions.map((action, idx) => {
                  const IconComponent = getIconComponent(action.icon)
                  return (
                    <div 
                      key={idx}
                      className={`bg-white rounded-xl border-2 transition-all cursor-pointer ${
                        expandedAction === idx ? 'border-toyota-red shadow-lg' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setExpandedAction(expandedAction === idx ? null : idx)}
                    >
                      <div className="flex items-center gap-4 p-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          expandedAction === idx ? 'bg-toyota-red text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          <IconComponent size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{action.title}</h3>
                          {expandedAction !== idx && (
                            <p className="text-sm text-gray-500 line-clamp-1">{action.description}</p>
                          )}
                        </div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          expandedAction === idx ? 'bg-toyota-red/20 text-toyota-red' : 'bg-gray-100 text-gray-400'
                        }`}>
                          {expandedAction === idx ? <Check size={16} /> : <Play size={14} />}
                        </div>
                      </div>
                      {expandedAction === idx && (
                        <div className="px-4 pb-4 pt-0">
                          <div className="bg-gray-50 rounded-lg p-4 ml-16">
                            <p className="text-gray-700">{action.description}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Related Forms */}
            {relatedForms.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Related Forms</h2>
                <div className="flex flex-wrap gap-2">
                  {relatedForms.map((form) => (
                    <button
                      key={form.id}
                      onClick={() => openDocument(form.name, form.path, form.type)}
                      className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 text-blue-700 rounded-xl font-medium hover:bg-blue-100 transition-colors"
                    >
                      <FileText size={18} />
                      {form.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* SCRIPTS TAB */}
        {activeTab === 'scripts' && (
          <div className="animate-fade-in">
            {/* Script Selector */}
            {step.scripts.length > 1 && (
              <div className="flex gap-2 mb-6">
                {step.scripts.map((script, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveScript(idx)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeScript === idx
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {script.label}
                  </button>
                ))}
              </div>
            )}

            {/* Script Display - Chat Style */}
            <div className="bg-gray-100 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-gray-900 mb-4">{step.scripts[activeScript]?.label}</h3>
              {step.scripts[activeScript]?.lines.map((line, idx) => (
                <div key={idx} className={`flex ${line.speaker === 'sales' ? 'justify-start' : line.speaker === 'customer' ? 'justify-end' : 'justify-center'}`}>
                  {line.speaker === 'sales' ? (
                    <div className="max-w-[80%]">
                      <div className="text-xs font-bold text-blue-600 mb-1">YOU</div>
                      <div className="bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-tl-none">
                        {line.text}
                      </div>
                    </div>
                  ) : line.speaker === 'customer' ? (
                    <div className="max-w-[80%]">
                      <div className="text-xs font-bold text-gray-500 mb-1 text-right">CUSTOMER</div>
                      <div className="bg-white text-gray-700 px-4 py-3 rounded-2xl rounded-tr-none shadow-sm">
                        {line.text}
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-gray-400 italic py-2">{line.text}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Transition Line */}
            <div className="mt-6 bg-gray-900 rounded-xl p-5 text-white">
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">Transition to Next Step</div>
              <p className="text-lg italic">"{step.transitionLine}"</p>
            </div>
          </div>
        )}

        {/* QUESTIONS TAB */}
        {activeTab === 'questions' && step.needsAssessmentQuestions && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Discovery Questions</h2>
                <div className="text-sm text-gray-500">
                  {checkedQuestions.size} of {step.needsAssessmentQuestions.length} asked
                </div>
              </div>
              <p className="text-gray-600 mb-6">Click questions as you ask them to track your progress. You don't need all 15—let the conversation flow naturally.</p>
              
              {/* Progress Bar */}
              <div className="h-2 bg-gray-100 rounded-full mb-6 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-toyota-red to-red-400 transition-all duration-500"
                  style={{ width: `${(checkedQuestions.size / step.needsAssessmentQuestions.length) * 100}%` }}
                />
              </div>

              {/* Questions Grid */}
              <div className="grid sm:grid-cols-2 gap-3">
                {step.needsAssessmentQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleQuestion(idx)}
                    className={`text-left p-4 rounded-xl border-2 transition-all ${
                      checkedQuestions.has(idx)
                        ? 'bg-green-50 border-green-500'
                        : 'bg-gray-50 border-transparent hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm ${
                        checkedQuestions.has(idx)
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {checkedQuestions.has(idx) ? <Check size={14} /> : idx + 1}
                      </div>
                      <div>
                        <p className={`font-medium ${checkedQuestions.has(idx) ? 'text-green-700' : 'text-gray-900'}`}>
                          "{q.question}"
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{q.purpose}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TIPS TAB */}
        {activeTab === 'tips' && (
          <div className="animate-fade-in space-y-6">
            {/* Pro Tips */}
            {step.tips.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lightbulb className="text-amber-500" size={20} />
                  Pro Tips
                </h2>
                <div className="space-y-3">
                  {step.tips.map((tip, idx) => (
                    <div 
                      key={idx}
                      className={`p-4 rounded-xl border-l-4 ${
                        tip.type === 'warning' 
                          ? 'bg-amber-50 border-amber-400' 
                          : tip.type === 'success'
                          ? 'bg-green-50 border-green-400'
                          : 'bg-blue-50 border-blue-400'
                      }`}
                    >
                      <h3 className="font-semibold text-gray-900 mb-1">{tip.title}</h3>
                      <p className="text-gray-700 text-sm">{tip.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Common Mistakes */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertOctagon className="text-red-500" size={20} />
                Avoid These Mistakes
              </h2>
              <div className="bg-red-50 rounded-xl p-5">
                <ul className="space-y-3">
                  {step.commonMistakes.map((mistake, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 text-sm font-bold">✕</span>
                      <span className="text-gray-700">{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
        {prevStep ? (
          <Link 
            href={`/road-to-sale/step/${step.stepNum - 1}`}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft size={20} />
            <span className="font-medium">Step {prevStep.stepNum}: {prevStep.title}</span>
          </Link>
        ) : (
          <Link href="/road-to-sale" className="text-gray-500 hover:text-gray-700">
            ← Back to Overview
          </Link>
        )}
        {nextStep ? (
          <Link 
            href={`/road-to-sale/step/${step.stepNum + 1}`}
            className="flex items-center gap-2 px-5 py-3 bg-toyota-red text-white rounded-xl font-medium hover:bg-red-700 transition-colors"
          >
            Next: {nextStep.title}
            <ChevronRight size={20} />
          </Link>
        ) : (
          <Link 
            href="/skills/phone"
            className="flex items-center gap-2 px-5 py-3 bg-toyota-red text-white rounded-xl font-medium hover:bg-red-700 transition-colors"
          >
            Continue to Phone Skills
            <ChevronRight size={20} />
          </Link>
        )}
      </div>

      {/* Document Modal */}
      <DocumentModal
        isOpen={isOpen}
        onClose={closeModal}
        title={currentDoc?.title || ''}
        documentUrl={currentDoc?.url || null}
        fileType={currentDoc?.type}
      />
    </div>
  )
}
