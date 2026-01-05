'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Target,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  XCircle,
  FileText,
  ArrowRight,
  Star,
  ChevronDown
} from 'lucide-react'
import { StepData } from '@/data/steps'
import { forms, getDocumentUrl } from '@/data/documents'
import { DocumentModal, useDocumentModal } from '@/components/ui/DocumentModal'

interface StepContentProps {
  step: StepData
  prevStep: { stepNum: number; title: string } | null
  nextStep: { stepNum: number; title: string } | null
}

// Accordion Item Component
function AccordionItem({ 
  title, 
  children, 
  defaultOpen = false,
  icon
}: { 
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  icon?: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <button 
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {icon}
          {title}
        </span>
        <ChevronDown size={18} className="accordion-icon" />
      </button>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  )
}

export function StepPageContent({ step, prevStep, nextStep }: StepContentProps) {
  const { isOpen, currentDoc, openModal, closeModal } = useDocumentModal()
  const [activeScript, setActiveScript] = useState(0)

  const relatedForms = step.relatedForms 
    ? forms.filter(f => step.relatedForms?.includes(f.id))
    : []

  const openDocument = (name: string, path: string, type: 'html' | 'pdf') => {
    const url = getDocumentUrl(path)
    openModal(name, url, type)
  }

  return (
    <div className="animate-fade-in">
      {/* Step Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        {prevStep ? (
          <Link 
            href={`/road-to-sale/step/${step.stepNum - 1}`}
            style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', color: 'var(--gray-500)', textDecoration: 'none' }}
          >
            <ChevronLeft size={16} />
            Step {step.stepNum - 1}
          </Link>
        ) : <div />}
        <Link 
          href="/road-to-sale"
          style={{ fontSize: '14px', color: 'var(--toyota-red)', fontWeight: '500', textDecoration: 'none' }}
        >
          All Steps
        </Link>
        {nextStep ? (
          <Link 
            href={`/road-to-sale/step/${step.stepNum + 1}`}
            style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', color: 'var(--gray-500)', textDecoration: 'none' }}
          >
            Step {step.stepNum + 1}
            <ChevronRight size={16} />
          </Link>
        ) : <div />}
      </div>

      {/* Hero */}
      <div className="section-hero">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
          <div style={{ 
            width: '64px', 
            height: '64px', 
            background: 'var(--toyota-red)', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '28px',
            fontWeight: '800',
            fontFamily: 'var(--font-display)',
            flexShrink: 0
          }}>
            {step.stepNum}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', color: 'var(--gray-400)' }}>Step {step.stepNum} of 10</span>
              <span style={{ color: 'var(--gray-600)' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: 'var(--gray-400)' }}>
                <Clock size={14} />
                {step.duration}
              </span>
            </div>
            <h1 style={{ margin: '0 0 8px 0' }}>{step.title}</h1>
            <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Target size={16} style={{ color: 'var(--toyota-red)' }} />
              {step.goal}
            </p>
            {step.keyMetric && (
              <div style={{ 
                marginTop: '16px', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px',
                background: 'rgba(255,255,255,0.1)',
                padding: '6px 14px',
                borderRadius: '100px',
                fontSize: '13px'
              }}>
                <Star size={14} style={{ color: 'var(--toyota-red)' }} />
                {step.keyMetric}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overview - Always Visible */}
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '12px', color: 'var(--gray-900)' }}>Overview</h2>
        <div style={{ color: 'var(--gray-600)', lineHeight: '1.7' }}>
          {step.overview.split('\n\n').map((para, i) => (
            <p key={i} style={{ marginBottom: '12px' }}>{para}</p>
          ))}
        </div>
      </div>

      {/* Accordions */}
      <div className="accordion">
        {/* Key Actions */}
        <AccordionItem 
          title={`Key Actions (${step.keyActions.length})`} 
          icon={<CheckCircle size={16} style={{ color: 'var(--success)' }} />}
          defaultOpen={true}
        >
          <div style={{ display: 'grid', gap: '12px' }}>
            {step.keyActions.map((action, idx) => (
              <div 
                key={idx}
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '12px',
                  padding: '12px',
                  background: 'var(--gray-50)',
                  borderRadius: '8px'
                }}
              >
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  background: 'var(--info-light)', 
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  flexShrink: 0
                }}>
                  {action.icon || '✓'}
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--gray-900)', marginBottom: '2px' }}>{action.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--gray-600)' }}>{action.description}</div>
                </div>
              </div>
            ))}
          </div>
        </AccordionItem>

        {/* Scripts */}
        <AccordionItem 
          title={`Sample Scripts (${step.scripts.length})`}
          icon={<FileText size={16} style={{ color: 'var(--toyota-red)' }} />}
        >
          {step.scripts.length > 1 && (
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              {step.scripts.map((script, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScript(idx)}
                  className={activeScript === idx ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
                >
                  {script.label}
                </button>
              ))}
            </div>
          )}
          <div className="script-box">
            <div className="script-box-label">{step.scripts[activeScript]?.label}</div>
            <div style={{ paddingTop: '8px' }}>
              {step.scripts[activeScript]?.lines.map((line, idx) => (
                <div key={idx} className="script-line">
                  {line.speaker === 'sales' ? (
                    <div className="script-sales">
                      <div className="script-sales-label">You Say:</div>
                      {line.text}
                    </div>
                  ) : line.speaker === 'customer' ? (
                    <div className="script-customer">
                      <div className="script-customer-label">Customer:</div>
                      {line.text}
                    </div>
                  ) : (
                    <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--gray-400)', fontStyle: 'italic', padding: '8px 0' }}>
                      {line.text}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AccordionItem>

        {/* Tips */}
        <AccordionItem 
          title={`Tips & Best Practices (${step.tips.length})`}
          icon={<Lightbulb size={16} style={{ color: 'var(--warning)' }} />}
        >
          <div style={{ display: 'grid', gap: '12px' }}>
            {step.tips.map((tip, idx) => (
              <div 
                key={idx}
                className={`info-box ${tip.type}`}
              >
                {tip.type === 'tip' && <Lightbulb size={18} style={{ flexShrink: 0 }} />}
                {tip.type === 'warning' && <AlertTriangle size={18} style={{ flexShrink: 0 }} />}
                {tip.type === 'success' && <CheckCircle size={18} style={{ flexShrink: 0 }} />}
                <div className="info-box-content">
                  <h5>{tip.title}</h5>
                  <p>{tip.content}</p>
                </div>
              </div>
            ))}
          </div>
        </AccordionItem>

        {/* Checklist */}
        <AccordionItem 
          title={`Checklist (${step.checklist.length} items)`}
          icon={<CheckCircle size={16} style={{ color: 'var(--success)' }} />}
        >
          <ul className="checklist">
            {step.checklist.map((item, idx) => (
              <li key={idx} className="checklist-item">
                <div className="checklist-checkbox" />
                <span className="checklist-text">{item}</span>
              </li>
            ))}
          </ul>
        </AccordionItem>

        {/* Common Mistakes */}
        <AccordionItem 
          title={`Avoid These Mistakes (${step.commonMistakes.length})`}
          icon={<XCircle size={16} style={{ color: 'var(--error)' }} />}
        >
          <div style={{ background: 'var(--error-light)', padding: '16px', borderRadius: '8px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {step.commonMistakes.map((mistake, idx) => (
                <li key={idx} style={{ marginBottom: '8px', color: 'var(--gray-700)' }}>
                  {mistake}
                </li>
              ))}
            </ul>
          </div>
        </AccordionItem>

        {/* Related Forms */}
        {relatedForms.length > 0 && (
          <AccordionItem 
            title={`Related Forms (${relatedForms.length})`}
            icon={<FileText size={16} style={{ color: 'var(--info)' }} />}
          >
            <div className="doc-grid">
              {relatedForms.map((form) => (
                <button
                  key={form.id}
                  onClick={() => openDocument(form.name, form.path, form.type)}
                  className="doc-card"
                  style={{ border: 'none', textAlign: 'left', width: '100%' }}
                >
                  <div className="doc-icon form">
                    <FileText size={20} />
                  </div>
                  <div className="doc-info">
                    <div className="doc-title">{form.name}</div>
                    <div className="doc-meta">{form.type.toUpperCase()}</div>
                  </div>
                </button>
              ))}
            </div>
          </AccordionItem>
        )}
      </div>

      {/* Transition */}
      <div style={{ 
        background: 'var(--info-light)', 
        border: '1px solid var(--info)',
        borderRadius: '12px', 
        padding: '20px',
        marginTop: '24px' 
      }}>
        <h3 style={{ fontSize: '16px', marginBottom: '8px', color: 'var(--gray-900)' }}>Transition to Next Step</h3>
        <p style={{ color: 'var(--info)', fontStyle: 'italic', marginBottom: '8px' }}>"{step.transitionLine}"</p>
        <p style={{ fontSize: '14px', color: 'var(--gray-600)', margin: 0 }}>{step.nextStepPreview}</p>
      </div>

      {/* Step Navigation */}
      <div className="step-nav">
        {prevStep ? (
          <Link href={`/road-to-sale/step/${step.stepNum - 1}`} className="step-nav-btn">
            <ChevronLeft size={18} />
            <span>Step {prevStep.stepNum}: {prevStep.title}</span>
          </Link>
        ) : <div />}
        {nextStep ? (
          <Link href={`/road-to-sale/step/${step.stepNum + 1}`} className="step-nav-btn">
            <span>Step {nextStep.stepNum}: {nextStep.title}</span>
            <ChevronRight size={18} />
          </Link>
        ) : (
          <Link href="/skills/phone" className="step-nav-btn" style={{ background: 'var(--toyota-red)', color: 'white', borderColor: 'var(--toyota-red)' }}>
            <span>Continue to Phone Skills</span>
            <ArrowRight size={18} />
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
