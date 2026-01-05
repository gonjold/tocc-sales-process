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
  Check
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

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <span>Step {step.stepNum} of 10</span>
          <span style={{ margin: '0 8px', opacity: 0.5 }}>•</span>
          <Clock size={12} />
          <span>{step.duration}</span>
        </div>
        <h1>{step.title}</h1>
        <p className="flex items-center gap-2">
          <Target size={18} style={{ color: 'var(--toyota-red)' }} />
          {step.goal}
        </p>
        {step.keyMetric && (
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-medium">
            <Star size={14} style={{ color: 'var(--toyota-red)' }} />
            {step.keyMetric}
          </div>
        )}
      </div>

      {/* Quick Nav */}
      <div className="flex items-center justify-between mb-6 text-sm">
        {prevStep ? (
          <Link 
            href={`/road-to-sale/step/${step.stepNum - 1}`}
            className="flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft size={16} />
            Step {step.stepNum - 1}
          </Link>
        ) : <div />}
        <Link 
          href="/road-to-sale"
          className="text-toyota-red font-medium hover:underline"
        >
          All Steps
        </Link>
        {nextStep ? (
          <Link 
            href={`/road-to-sale/step/${step.stepNum + 1}`}
            className="flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors"
          >
            Step {step.stepNum + 1}
            <ChevronRight size={16} />
          </Link>
        ) : <div />}
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content - 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overview */}
          <section>
            <h2 className="text-lg font-display font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Target size={20} className="text-info" />
              Overview
            </h2>
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              {step.overview.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-3 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </section>

          {/* Key Actions Grid */}
          <section>
            <h2 className="text-lg font-display font-bold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle2 size={20} className="text-success" />
              Key Actions
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {step.keyActions.map((action, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{action.icon || '✓'}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{action.title}</h4>
                      <p className="text-xs text-gray-600">{action.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Scripts - Toggled Section */}
          <section>
            <button 
              onClick={() => setShowScripts(!showScripts)}
              className="w-full text-left text-lg font-display font-bold text-gray-900 mb-3 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <FileText size={20} className="text-toyota-red" />
                Sample Scripts ({step.scripts.length})
              </span>
              <ChevronDown 
                size={20} 
                className={`text-gray-400 transition-transform ${showScripts ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {showScripts && (
              <div className="bg-white rounded-lg border border-gray-200 p-4 animate-fade-in">
                {step.scripts.length > 1 && (
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {step.scripts.map((script, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveScript(idx)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
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
                        <div className="bg-info-light border-l-3 border-info rounded-r-lg px-4 py-3">
                          <div className="text-xs font-bold text-info uppercase tracking-wide mb-1">You Say:</div>
                          <div className="text-gray-800 text-sm">{line.text}</div>
                        </div>
                      ) : line.speaker === 'customer' ? (
                        <div className="bg-gray-100 rounded-lg px-4 py-3 ml-6">
                          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Customer:</div>
                          <div className="text-gray-600 text-sm italic">{line.text}</div>
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

          {/* Tips - Inline Boxes */}
          {step.tips.length > 0 && (
            <section>
              <h2 className="text-lg font-display font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Lightbulb size={20} className="text-warning" />
                Tips & Best Practices
              </h2>
              <div className="space-y-3">
                {step.tips.map((tip, idx) => (
                  <div 
                    key={idx}
                    className={`info-box ${tip.type}`}
                  >
                    {tip.type === 'tip' && <Lightbulb size={18} className="text-info flex-shrink-0" />}
                    {tip.type === 'warning' && <AlertTriangle size={18} className="text-warning flex-shrink-0" />}
                    {tip.type === 'success' && <CheckCircle2 size={18} className="text-success flex-shrink-0" />}
                    <div>
                      <h5 className="font-bold text-sm text-gray-900 mb-0.5">{tip.title}</h5>
                      <p className="text-sm text-gray-600">{tip.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Common Mistakes */}
          <section>
            <div className="bg-error-light rounded-lg border border-error/20 p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                <XCircle size={18} className="text-error" />
                Avoid These Mistakes
              </h3>
              <ul className="space-y-2">
                {step.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-error mt-0.5">✕</span>
                    {mistake}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Sidebar - 1 column */}
        <div className="space-y-6">
          {/* Checklist */}
          <section className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-success" />
              Step Checklist
              <span className="text-xs text-gray-400 ml-auto">
                {checkedItems.size}/{step.checklist.length}
              </span>
            </h3>
            <ul className="space-y-2">
              {step.checklist.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => toggleCheck(idx)}
                    className="w-full text-left flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div 
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        checkedItems.has(idx)
                          ? 'bg-success border-success text-white'
                          : 'border-gray-300 hover:border-success'
                      }`}
                    >
                      {checkedItems.has(idx) && <Check size={12} />}
                    </div>
                    <span className={`text-sm ${checkedItems.has(idx) ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                      {item}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Related Forms */}
          {relatedForms.length > 0 && (
            <section className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                <FileText size={18} className="text-info" />
                Related Forms
              </h3>
              <div className="space-y-2">
                {relatedForms.map((form) => (
                  <button
                    key={form.id}
                    onClick={() => openDocument(form.name, form.path, form.type)}
                    className="w-full text-left flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <FileText size={16} className="text-info flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700 truncate">{form.name}</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Transition Box */}
          <section className="bg-gray-900 rounded-lg p-4 text-white">
            <h4 className="font-bold text-sm mb-2">Transition to Next Step</h4>
            <p className="text-sm text-gray-300 italic mb-2">"{step.transitionLine}"</p>
            <p className="text-xs text-gray-400">{step.nextStepPreview}</p>
          </section>
        </div>
      </div>

      {/* Step Navigation */}
      <div className="step-nav mt-8">
        {prevStep ? (
          <Link 
            href={`/road-to-sale/step/${step.stepNum - 1}`}
            className="step-nav-btn"
          >
            <ChevronLeft size={18} />
            <div className="text-left">
              <div className="text-xs text-gray-400">Previous</div>
              <div className="font-medium">Step {prevStep.stepNum}: {prevStep.title}</div>
            </div>
          </Link>
        ) : <div />}
        {nextStep ? (
          <Link 
            href={`/road-to-sale/step/${step.stepNum + 1}`}
            className="step-nav-btn"
          >
            <div className="text-right">
              <div className="text-xs text-gray-400">Next</div>
              <div className="font-medium">Step {nextStep.stepNum}: {nextStep.title}</div>
            </div>
            <ChevronRight size={18} />
          </Link>
        ) : (
          <Link 
            href="/skills/phone"
            className="step-nav-btn"
          >
            <div className="text-right">
              <div className="text-xs text-gray-400">Continue to</div>
              <div className="font-medium">Phone Skills</div>
            </div>
            <ChevronRight size={18} />
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
