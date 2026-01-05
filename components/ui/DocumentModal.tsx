'use client'

import { useState, useEffect } from 'react'
import { X, Download, Printer, ExternalLink, FileText } from 'lucide-react'

interface DocumentModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  documentUrl: string | null
  fileType?: 'html' | 'pdf'
}

export function DocumentModal({ isOpen, onClose, title, documentUrl, fileType = 'html' }: DocumentModalProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      setLoading(true)
      // Reset loading after a short delay to allow iframe to start loading
      const timer = setTimeout(() => setLoading(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isOpen, documentUrl])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleDownload = () => {
    if (documentUrl) {
      window.open(documentUrl, '_blank')
    }
  }

  const handlePrint = () => {
    const iframe = document.getElementById('doc-preview-iframe') as HTMLIFrameElement
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.print()
    }
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div 
      className="modal-overlay active"
      onClick={handleOverlayClick}
    >
      <div className="modal animate-scale-in">
        {/* Header */}
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <div className="flex items-center gap-2">
            <div className="modal-actions">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                title="Print"
              >
                <Printer size={16} />
                Print
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-toyota-red rounded-lg hover:bg-toyota-red-dark transition-colors"
                title="Download"
              >
                <Download size={16} />
                Download
              </button>
            </div>
            <button onClick={onClose} className="modal-close">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="modal-body bg-gray-100">
          {documentUrl ? (
            <div className="relative">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-gray-500">Loading document...</div>
                </div>
              )}
              <iframe
                id="doc-preview-iframe"
                src={documentUrl}
                className="w-full bg-white rounded-lg shadow-sm"
                style={{ height: '600px', border: 'none' }}
                onLoad={() => setLoading(false)}
              />
            </div>
          ) : (
            <div className="image-placeholder" style={{ minHeight: '400px' }}>
              <FileText className="image-placeholder-icon" />
              <div className="image-placeholder-text">{title}</div>
              <div className="image-placeholder-note">Document not yet available in Firebase Storage</div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <div className="text-sm text-gray-500">
            {fileType === 'pdf' ? 'PDF Document' : 'HTML Form'}
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1 text-sm text-toyota-red font-medium hover:underline"
          >
            <ExternalLink size={14} />
            Open in new tab
          </button>
        </div>
      </div>
    </div>
  )
}

// Hook for managing document modal state
export function useDocumentModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentDoc, setCurrentDoc] = useState<{ title: string; url: string | null; type: 'html' | 'pdf' } | null>(null)

  const openModal = (title: string, url: string | null, type: 'html' | 'pdf' = 'html') => {
    setCurrentDoc({ title, url, type })
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setCurrentDoc(null)
  }

  return {
    isOpen,
    currentDoc,
    openModal,
    closeModal,
  }
}
