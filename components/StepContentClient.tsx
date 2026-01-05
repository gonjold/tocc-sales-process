'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  Clock, 
  AlertTriangle, 
  Lightbulb,
  FileText,
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
  const [showScripts, setShowScripts] = useState(false)

  const relatedForms = step.relatedForms 
    ? forms.filter(f => step.relatedForms?.includes(f.id))
    : []

  const openDocument = (name: string, path: string, type: 'html' | 'pdf') => {
    const url = getDocumentUrl(path)
    openModal(name, url, type)
  }

  return (
    <div className="animate-fade-in max-w-4xl">
      {/* Simple Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
          <span className="font-medium text-toyota-red">Step {step.stepNum} of 10</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {step.duration}
          </span>
        </div>
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-3">{step.title}</h1>
        <p className="text-lg text-gray-600">{step.goal}</p>
        {step.keyMetric && (
          <p className="text-sm text-toyota-red font-medium mt-2">💡 {step.keyMetric}</p>
        )}
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-gray-200">
        <a 
          href="#scripts"
          className="inline-flex items-center gap-2 px-4 py-2 bg-toyota-red text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
        >
          <MessageSquare size={16} />
          View Scripts
        </a>
        {relatedForms.length > 0 && (
          <a 
            href="#forms"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            <FileText size={16} />
            Related Forms
          </a>
        )}
        <div className="ml-auto flex items-center gap-1 text-sm">
          {prevStep && (
            <Link href={`/road-to-sale/step/${step.stepNum - 1}`} className="px-3 py-1.5 text-gray-500 hover:text-gray-900">
              ← Previous
            </Link>
          )}
          <Link href="/road-to-sale" className="px-3 py-1.5 text-toyota-red font-medium">
            All Steps
          </Link>
          {nextStep && (
            <Link href={`/road-to-sale/step/${step.stepNum + 1}`} className="px-3 py-1.5 text-gray-500 hover:text-gray-900">
              Next →
            </Link>
          )}
        </div>
      </div>

      {/* Main Content - Simple Flow */}
      <div className="space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            {step.overview.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Needs Assessment Questions - Only for Step 2 */}
        {step.needsAssessmentQuestions && step.needsAssessmentQuestions.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">15 Discovery Questions</h2>
            <p className="text-gray-500 text-sm mb-4">Use these to understand your customer's situation. Let the conversation flow naturally.</p>
            <div className="bg-gray-50 rounded-lg p-6">
              <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {step.needsAssessmentQuestions.map((q, idx) => (
                  <li key={idx} className="text-gray-700">
                    <span className="font-medium">{idx + 1}. "{q.question}"</span>
                    <span className="text-gray-400 text-sm ml-2">— {q.purpose}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* Key Actions */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Key Actions</h2>
          <div className="space-y-4">
            {step.keyActions.map((action, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-2xl">{action.icon || '•'}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{action.title}</h3>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scripts */}
        <section id="scripts" className="scroll-mt-4">
          <button 
            onClick={() => setShowScripts(!showScripts)}
            className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-4 hover:text-toyota-red transition-colors"
          >
            Sample Scripts
            <ChevronDown size={20} className={`transition-transform ${showScripts ? 'rotate-180' : ''}`} />
          </button>
          
          {showScripts && (
            <div className="bg-gray-50 rounded-lg p-6">
              {step.scripts.length > 1 && (
                <div className="flex gap-2 mb-4">
                  {step.scripts.map((script, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScript(idx)}
                      className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                        activeScript === idx 
                          ? 'bg-gray-900 text-white' 
                          : 'bg-white text-gray-600 hover:bg-gray-100'
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
                      <div className="bg-blue-50 border-l-4 border-blue-400 px-4 py-3 rounded-r">
                        <span className="text-xs font-bold text-blue-600 uppercase">You:</span>
                        <p className="text-gray-800 mt-1">{line.text}</p>
                      </div>
                    ) : line.speaker === 'customer' ? (
                      <div className="bg-white px-4 py-3 rounded ml-8">
                        <span className="text-xs font-bold text-gray-400 uppercase">Customer:</span>
                        <p className="text-gray-600 italic mt-1">{line.text}</p>
                      </div>
                    ) : (
                      <p className="text-center text-xs text-gray-400 italic py-2">{line.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Tips */}
        {step.tips.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Tips</h2>
            <div className="space-y-3">
              {step.tips.map((tip, idx) => (
                <div key={idx} className="flex gap-3">
                  {tip.type === 'warning' ? (
                    <AlertTriangle size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Lightbulb size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="font-medium text-gray-900">{tip.title}:</span>
                    <span className="text-gray-600 ml-1">{tip.content}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Mistakes to Avoid */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="space-y-2">
            {step.commonMistakes.map((mistake, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-600">
                <span className="text-red-500">✕</span>
                {mistake}
              </li>
            ))}
          </ul>
        </section>

        {/* Related Forms */}
        {relatedForms.length > 0 && (
          <section id="forms" className="scroll-mt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Forms</h2>
            <div className="flex flex-wrap gap-2">
              {relatedForms.map((form) => (
                <button
                  key={form.id}
                  onClick={() => openDocument(form.name, form.path, form.type)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  <FileText size={16} />
                  {form.name}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Transition */}
        <section className="bg-gray-900 text-white rounded-lg p-6">
          <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Transition to Next Step</p>
          <p className="text-xl italic mb-2">"{step.transitionLine}"</p>
          <p className="text-gray-400 text-sm">{step.nextStepPreview}</p>
        </section>
      </div>

      {/* Bottom Nav */}
      <div className="mt-10 pt-6 border-t border-gray-200 flex justify-between">
        {prevStep ? (
          <Link 
            href={`/road-to-sale/step/${step.stepNum - 1}`}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft size={20} />
            <div>
              <div className="text-xs text-gray-400">Previous</div>
              <div className="font-medium">Step {prevStep.stepNum}: {prevStep.title}</div>
            </div>
          </Link>
        ) : <div />}
        {nextStep ? (
          <Link 
            href={`/road-to-sale/step/${step.stepNum + 1}`}
            className="flex items-center gap-2 px-5 py-3 bg-toyota-red text-white rounded-lg hover:bg-red-700 transition-colors"
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
            className="flex items-center gap-2 px-5 py-3 bg-toyota-red text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <div className="text-right">
              <div className="text-xs text-red-200">Continue</div>
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
