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
  MessageSquare,
  Bookmark
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
    <div className="animate-fade-in">
      {/* Hero Section */}
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

      {/* CTA Bar */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <a 
            href="#scripts"
            className="flex items-center gap-2 px-4 py-2 bg-toyota-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            <MessageSquare size={18} />
            View Scripts
          </a>
          {relatedForms.length > 0 && (
            <a 
              href="#forms"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              <FileText size={18} />
              Forms ({relatedForms.length})
            </a>
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

      {/* Main Content */}
      <div className="space-y-6">
        {/* Overview + Key Points Side by Side */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
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
          </div>
          
          {/* Key Points - Natural Integration */}
          <div className="lg:col-span-1">
            <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-toyota-red/10 rounded flex items-center justify-center">
                  <Bookmark size={14} className="text-toyota-red" />
                </div>
                Key Points
              </h3>
              <ul className="space-y-3">
                {step.checklist.slice(0, 5).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-toyota-red mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Key Actions Grid */}
        <section>
          <h2 className="text-lg font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle2 size={18} className="text-green-600" />
            </div>
            Key Actions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <section id="scripts" className="bg-white rounded-xl border border-gray-200 p-6 scroll-mt-4">
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

        {/* Tips & Mistakes - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Tips */}
          {step.tips.length > 0 && (
            <section>
              <h2 className="text-lg font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Lightbulb size={18} className="text-yellow-600" />
                </div>
                Pro Tips
              </h2>
              <div className="space-y-3">
                {step.tips.map((tip, idx) => (
                  <div 
                    key={idx}
                    className={`rounded-xl p-4 ${
                      tip.type === 'tip' ? 'bg-blue-50 border border-blue-200' :
                      tip.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
                      'bg-green-50 border border-green-200'
                    }`}
                  >
                    <h5 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                      {tip.type === 'tip' && <Lightbulb size={16} className="text-blue-600" />}
                      {tip.type === 'warning' && <AlertTriangle size={16} className="text-yellow-600" />}
                      {tip.type === 'success' && <CheckCircle2 size={16} className="text-green-600" />}
                      {tip.title}
                    </h5>
                    <p className="text-sm text-gray-700">{tip.content}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Common Mistakes */}
          <section className="bg-red-50 border border-red-200 rounded-xl p-6 h-fit">
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

        {/* Related Forms */}
        {relatedForms.length > 0 && (
          <section id="forms" className="scroll-mt-4">
            <h2 className="text-lg font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText size={18} className="text-blue-600" />
              </div>
              Related Forms & Documents
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedForms.map((form) => (
                <button
                  key={form.id}
                  onClick={() => openDocument(form.name, form.path, form.type)}
                  className="text-left flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <FileText size={20} className="text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">{form.name}</div>
                    <div className="text-xs text-gray-500 uppercase">{form.type}</div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Transition to Next Step */}
        <section className="bg-gray-900 rounded-xl p-6 text-white">
          <h4 className="font-bold text-sm mb-3 text-gray-400 uppercase tracking-wide">Transition to Next Step</h4>
          <p className="text-xl text-white italic mb-3">"{step.transitionLine}"</p>
          <p className="text-gray-400">{step.nextStepPreview}</p>
        </section>
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
