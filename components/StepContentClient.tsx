'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  Clock, 
  Target, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb,
  XCircle,
  FileText,
  Star,
  Check,
  PlayCircle,
  ListChecks,
  MessageSquare
} from 'lucide-react'
import { StepData } from '@/data/steps'
import { forms, getDocumentUrl } from '@/data/documents'
import { DocumentModal, useDocumentModal } from '@/components/ui/DocumentModal'

interface StepContentProps {
  step: StepData
  prevStep: { stepNum: number; title: string } | null
  nextStep: { stepNum: number; title: string } | null
}

export function StepContent({ step, prevStep, nextStep }: StepContentProps) {
  const { isOpen, currentDoc, openModal, closeModal } = useDocumentModal()
  const [activeScript, setActiveScript] = useState(0)
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set())
  const [showScripts, setShowScripts] = useState(false)

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const relatedForms = step.relatedForms 
    ? forms.filter(f => step.relatedForms?.includes(f.id))
    : []

  const openDocument = (name: string, path: string, type: 'html' | 'pdf') => {
    const url = getDocumentUrl(path)
    openModal(name, url, type)
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section - Better contrast */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 mb-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-32 h-32 bg-toyota-red rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-toyota-red text-white text-xs font-bold px-3 py-1 rounded-full">
              STEP {step.stepNum} OF 10
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Clock size={14} />
              {step.duration}
            </span>
          </div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">{step.title}</h1>
          <p className="text-gray-300 flex items-center gap-2 mb-4">
            <Target size={18} className="text-toyota-red" />
            {step.goal}
          </p>
          {step.keyMetric && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-medium text-white">
              <Star size={14} className="text-toyota-red" />
              {step.keyMetric}
            </div>
          )}
        </div>
      </div>

      {/* CTA Bar - Quick Actions */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowScripts(true)}
            className="flex items-center gap-2 px-4 py-2 bg-toyota-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            <PlayCircle size={18} />
            View Scripts
          </button>
          <button 
            onClick={() => scrollToSection('checklist')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <ListChecks size={18} />
            Checklist ({checkedItems.size}/{step.checklist.length})
          </button>
          {relatedForms.length > 0 && (
            <button 
              onClick={() => scrollToSection('forms')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              <FileText size={18} />
              Forms ({relatedForms.length})
            </button>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm">
          {prevStep && (
            <Link 
              href={`/road-to-sale/step/${step.stepNum - 1}`}
              className="flex items-center gap-1 px-3 py-1.5 text-gray-500 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft size={16} />
              Prev
            </Link>
          )}
          <Link 
            href="/road-to-sale"
            className="px-3 py-1.5 text-toyota-red font-medium hover:underline"
          >
            All Steps
          </Link>
          {nextStep && (
            <Link 
              href={`/road-to-sale/step/${step.stepNum + 1}`}
              className="flex items-center gap-1 px-3 py-1.5 text-gray-500 hover:text-gray-900 transition-colors"
            >
              Next
              <ChevronRight size={16} />
            </Link>
          )}
        </div>
      </div>

      {/* Main Content Grid - Fuller Layout */}
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main Content - 3 columns */}
        <div className="lg:col-span-3 space-y-6">
          {/* Overview */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target size={18} className="text-blue-600" />
              </div>
              Overview
            </h2>
            <div className="prose prose-gray max-w-none">
              {step.overview.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-3 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </section>

          {/* Key Actions Grid */}
          <section>
            <h2 className="text-lg font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle2 size={18} className="text-green-600" />
              </div>
              Key Actions
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {step.keyActions.map((action, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-gray-300 transition-all">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{action.icon || '✓'}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{action.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{action.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Scripts Section */}
          <section id="scripts" className="bg-white rounded-xl border border-gray-200 p-6">
            <button 
              onClick={() => setShowScripts(!showScripts)}
              className="w-full text-left flex items-center justify-between"
            >
              <h2 className="text-lg font-display font-bold text-gray-900 flex items-center gap-2">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <MessageSquare size={18} className="text-toyota-red" />
                </div>
                Sample Scripts ({step.scripts.length})
              </h2>
              <ChevronDown 
                size={20} 
                className={`text-gray-400 transition-transform ${showScripts ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {showScripts && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                {step.scripts.length > 1 && (
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {step.scripts.map((script, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveScript(idx)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeScript === idx 
                            ? 'bg-toyota-red text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {script.label}
                      </button>
                    ))}
                  </div>
                )}
                <div className="space-y-3">
                  {step.scripts[activeScript]?.lines.map((line, idx) => (
                    <div key={idx}>
                      {line.speaker === 'sales' ? (
                        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg px-4 py-3">
                          <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">You Say:</div>
                          <div className="text-gray-800">{line.text}</div>
                        </div>
                      ) : line.speaker === 'customer' ? (
                        <div className="bg-gray-50 rounded-lg px-4 py-3 ml-8">
                          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Customer:</div>
                          <div className="text-gray-600 italic">{line.text}</div>
                        </div>
                      ) : (
                        <div className="text-center text-xs text-gray-400 italic py-2">
                          {line.text}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Tips - Always Visible */}
          {step.tips.length > 0 && (
            <section>
              <h2 className="text-lg font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Lightbulb size={18} className="text-yellow-600" />
                </div>
                Tips & Best Practices
              </h2>
              <div className="space-y-3">
                {step.tips.map((tip, idx) => (
                  <div 
                    key={idx}
                    className={`rounded-xl p-4 flex items-start gap-3 ${
                      tip.type === 'tip' ? 'bg-blue-50 border border-blue-200' :
                      tip.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
                      'bg-green-50 border border-green-200'
                    }`}
                  >
                    {tip.type === 'tip' && <Lightbulb size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />}
                    {tip.type === 'warning' && <AlertTriangle size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />}
                    {tip.type === 'success' && <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-0.5" />}
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">{tip.title}</h5>
                      <p className="text-sm text-gray-700">{tip.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Common Mistakes */}
          <section className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle size={18} className="text-red-600" />
              </div>
              Avoid These Mistakes
            </h3>
            <ul className="space-y-3">
              {step.commonMistakes.map((mistake, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar - 1 column, sticky */}
        <div className="lg:col-span-1 space-y-6">
          {/* Checklist - Sticky */}
          <section id="checklist" className="bg-white rounded-xl border border-gray-200 p-5 lg:sticky lg:top-4">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-green-600" />
                </div>
                Step Checklist
              </span>
              <span className="text-sm font-medium text-gray-400">
                {checkedItems.size}/{step.checklist.length}
              </span>
            </h3>
            
            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-100 rounded-full mb-4 overflow-hidden">
              <div 
                className="h-full bg-green-500 rounded-full transition-all duration-300"
                style={{ width: `${(checkedItems.size / step.checklist.length) * 100}%` }}
              />
            </div>

            <ul className="space-y-2">
              {step.checklist.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => toggleCheck(idx)}
                    className="w-full text-left flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div 
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                        checkedItems.has(idx)
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-300 group-hover:border-green-400'
                      }`}
                    >
                      {checkedItems.has(idx) && <Check size={12} strokeWidth={3} />}
                    </div>
                    <span className={`text-sm leading-tight ${checkedItems.has(idx) ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                      {item}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Related Forms */}
          {relatedForms.length > 0 && (
            <section id="forms" className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                  <FileText size={14} className="text-blue-600" />
                </div>
                Related Forms
              </h3>
              <div className="space-y-2">
                {relatedForms.map((form) => (
                  <button
                    key={form.id}
                    onClick={() => openDocument(form.name, form.path, form.type)}
                    className="w-full text-left flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <FileText size={16} className="text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{form.name}</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Transition Box */}
          <section className="bg-gray-900 rounded-xl p-5 text-white">
            <h4 className="font-bold text-sm mb-3 text-gray-300 uppercase tracking-wide">Transition to Next Step</h4>
            <p className="text-white italic mb-3">"{step.transitionLine}"</p>
            <p className="text-sm text-gray-400">{step.nextStepPreview}</p>
          </section>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
        {prevStep ? (
          <Link 
            href={`/road-to-sale/step/${step.stepNum - 1}`}
            className="flex items-center gap-3 px-5 py-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft size={20} />
            <div className="text-left">
              <div className="text-xs text-gray-500">Previous</div>
              <div className="font-medium text-gray-900">Step {prevStep.stepNum}: {prevStep.title}</div>
            </div>
          </Link>
        ) : <div />}
        {nextStep ? (
          <Link 
            href={`/road-to-sale/step/${step.stepNum + 1}`}
            className="flex items-center gap-3 px-5 py-3 bg-toyota-red text-white rounded-xl hover:bg-red-700 transition-colors"
          >
            <div className="text-right">
              <div className="text-xs text-red-200">Next</div>
              <div className="font-medium">Step {nextStep.stepNum}: {nextStep.title}</div>
            </div>
            <ChevronRight size={20} />
          </Link>
        ) : (
          <Link 
            href="/skills/phone"
            className="flex items-center gap-3 px-5 py-3 bg-toyota-red text-white rounded-xl hover:bg-red-700 transition-colors"
          >
            <div className="text-right">
              <div className="text-xs text-red-200">Continue to</div>
              <div className="font-medium">Phone Skills</div>
            </div>
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
