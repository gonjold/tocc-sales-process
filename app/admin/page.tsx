'use client'

import { useState, useEffect } from 'react'
import { 
  Settings, Lock, FileText, Save, ExternalLink, CheckCircle2, 
  AlertTriangle, Eye, EyeOff, ChevronDown, ChevronRight,
  Car, Scroll, Map, Award, Phone, ToggleLeft, ToggleRight,
  Home, BookOpen, Shield, Star, Users, Brain, Layers, Key
} from 'lucide-react'
import { forms, scripts } from '@/data/documents'

const DEFAULT_ADMIN_PASSWORD = 'ToyotaSuccess2026!@#'
const DEFAULT_SITE_PASSWORD = 'tocc2026'

// Get current admin password (checks localStorage for custom)
const getAdminPassword = (): string => {
  if (typeof window !== 'undefined') {
    const custom = localStorage.getItem('tocc-admin-password')
    if (custom) return custom
  }
  return DEFAULT_ADMIN_PASSWORD
}

// Model brochures configuration
const defaultModelBrochures = [
  { id: 'camry', name: '2025 Camry', path: 'brochures/2025-Camry.pdf' },
  { id: 'corolla', name: '2025 Corolla', path: 'brochures/2025-Corolla.pdf' },
  { id: 'corolla-cross', name: '2025 Corolla Cross', path: 'brochures/2025-Corolla-Cross.pdf' },
  { id: 'rav4', name: '2025 RAV4', path: 'brochures/2025-RAV4.pdf' },
  { id: 'highlander', name: '2025 Highlander', path: 'brochures/2025-Highlander.pdf' },
  { id: 'grand-highlander', name: '2025 Grand Highlander', path: 'brochures/2025-Grand-Highlander.pdf' },
  { id: 'venza', name: '2025 Venza', path: 'brochures/2025-Venza.pdf' },
  { id: '4runner', name: '2025 4Runner', path: 'brochures/2025-4Runner.pdf' },
  { id: 'sequoia', name: '2025 Sequoia', path: 'brochures/2025-Sequoia.pdf' },
  { id: 'land-cruiser', name: '2025 Land Cruiser', path: 'brochures/2025-Land-Cruiser.pdf' },
  { id: 'tacoma', name: '2025 Tacoma', path: 'brochures/2025-Tacoma.pdf' },
  { id: 'tundra', name: '2025 Tundra', path: 'brochures/2025-Tundra.pdf' },
  { id: 'prius', name: '2025 Prius', path: 'brochures/2025-Prius.pdf' },
  { id: 'crown', name: '2025 Crown', path: 'brochures/2025-Crown.pdf' },
  { id: 'gr86', name: '2025 GR86', path: 'brochures/2025-GR86.pdf' },
  { id: 'supra', name: '2025 GR Supra', path: 'brochures/2025-GR-Supra.pdf' },
  { id: 'sienna', name: '2025 Sienna', path: 'brochures/2025-Sienna.pdf' },
  { id: 'bz4x', name: '2025 bZ4X', path: 'brochures/2025-bZ4X.pdf' },
]

// Feature toggles configuration
const defaultFeatureToggles = {
  showQuizMode: true,
  showFlashcards: true,
  showCSISection: true,
  showFollowUpSection: true,
  showPPPPage: true,
  showWindowSticker: true,
  showModelInfo: true,
}

interface AdminSection {
  id: string
  title: string
  icon: React.ElementType
  description: string
}

const adminSections: AdminSection[] = [
  { id: 'security', title: 'Site Password', icon: Key, description: 'Change the staff access password' },
  { id: 'training', title: 'Training Documents', icon: BookOpen, description: 'Main training manual & appendix links' },
  { id: 'features', title: 'Feature Toggles', icon: ToggleRight, description: 'Enable/disable portal sections' },
  { id: 'forms', title: 'Forms Library', icon: FileText, description: 'Manage form document URLs' },
  { id: 'scripts', title: 'Scripts Library', icon: Scroll, description: 'Manage script document URLs' },
  { id: 'models', title: 'Model Brochures', icon: Car, description: 'Manage vehicle brochure URLs' },
  { id: 'programs', title: 'Toyota Programs', icon: Award, description: 'Manage program brochure URLs' },
]

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [activeSection, setActiveSection] = useState('security')
  const [saveMessage, setSaveMessage] = useState<string | null>(null)
  
  // State for all settings
  const [featureToggles, setFeatureToggles] = useState(defaultFeatureToggles)
  const [formUrls, setFormUrls] = useState<Record<string, string>>({})
  const [scriptUrls, setScriptUrls] = useState<Record<string, string>>({})
  const [modelUrls, setModelUrls] = useState<Record<string, string>>({})
  const [programUrls, setProgramUrls] = useState<Record<string, string>>({})
  const [trainingUrls, setTrainingUrls] = useState<Record<string, string>>({})
  
  // Editing state
  const [editingItem, setEditingItem] = useState<string | null>(null)
  const [tempUrl, setTempUrl] = useState('')
  
  // Site password state
  const [sitePassword, setSitePassword] = useState('')
  const [newSitePassword, setNewSitePassword] = useState('')
  const [confirmSitePassword, setConfirmSitePassword] = useState('')
  const [showSitePassword, setShowSitePassword] = useState(false)
  const [passwordChangeError, setPasswordChangeError] = useState<string | null>(null)
  
  // Admin password state
  const [adminPassword, setAdminPassword] = useState('')
  const [newAdminPassword, setNewAdminPassword] = useState('')
  const [confirmAdminPassword, setConfirmAdminPassword] = useState('')
  const [showAdminPassword, setShowAdminPassword] = useState(false)
  const [adminPasswordError, setAdminPasswordError] = useState<string | null>(null)

  // Load settings from localStorage
  useEffect(() => {
    const savedFeatures = localStorage.getItem('tocc-feature-toggles')
    const savedForms = localStorage.getItem('tocc-form-urls')
    const savedScripts = localStorage.getItem('tocc-script-urls')
    const savedModels = localStorage.getItem('tocc-model-urls')
    const savedPrograms = localStorage.getItem('tocc-program-urls')
    const savedTraining = localStorage.getItem('tocc-training-urls')
    const savedSitePassword = localStorage.getItem('tocc-site-password')
    
    if (savedFeatures) setFeatureToggles(JSON.parse(savedFeatures))
    if (savedForms) setFormUrls(JSON.parse(savedForms))
    if (savedScripts) setScriptUrls(JSON.parse(savedScripts))
    if (savedModels) setModelUrls(JSON.parse(savedModels))
    if (savedPrograms) setProgramUrls(JSON.parse(savedPrograms))
    if (savedTraining) setTrainingUrls(JSON.parse(savedTraining))
    setSitePassword(savedSitePassword || DEFAULT_SITE_PASSWORD)
    
    const savedAdminPassword = localStorage.getItem('tocc-admin-password')
    setAdminPassword(savedAdminPassword || DEFAULT_ADMIN_PASSWORD)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === getAdminPassword()) {
      setIsAuthenticated(true)
      setPasswordError(false)
    } else {
      setPasswordError(true)
    }
  }

  const handlePasswordChange = () => {
    setPasswordChangeError(null)
    
    if (!newSitePassword) {
      setPasswordChangeError('Please enter a new password')
      return
    }
    
    if (newSitePassword.length < 4) {
      setPasswordChangeError('Password must be at least 4 characters')
      return
    }
    
    if (newSitePassword !== confirmSitePassword) {
      setPasswordChangeError('Passwords do not match')
      return
    }
    
    localStorage.setItem('tocc-site-password', newSitePassword)
    setSitePassword(newSitePassword)
    setNewSitePassword('')
    setConfirmSitePassword('')
    showSaveMessage('Site password updated successfully!')
  }

  const resetToDefaultPassword = () => {
    localStorage.removeItem('tocc-site-password')
    setSitePassword(DEFAULT_SITE_PASSWORD)
    showSaveMessage('Password reset to default')
  }

  const handleAdminPasswordChange = () => {
    setAdminPasswordError(null)
    
    if (!newAdminPassword) {
      setAdminPasswordError('Please enter a new password')
      return
    }
    
    if (newAdminPassword.length < 6) {
      setAdminPasswordError('Password must be at least 6 characters')
      return
    }
    
    if (newAdminPassword !== confirmAdminPassword) {
      setAdminPasswordError('Passwords do not match')
      return
    }
    
    localStorage.setItem('tocc-admin-password', newAdminPassword)
    setAdminPassword(newAdminPassword)
    setNewAdminPassword('')
    setConfirmAdminPassword('')
    showSaveMessage('Admin password updated successfully!')
  }

  const resetAdminPassword = () => {
    localStorage.removeItem('tocc-admin-password')
    setAdminPassword(DEFAULT_ADMIN_PASSWORD)
    showSaveMessage('Admin password reset to default')
  }

  const showSaveMessage = (msg: string) => {
    setSaveMessage(msg)
    setTimeout(() => setSaveMessage(null), 3000)
  }

  const toggleFeature = (key: keyof typeof defaultFeatureToggles) => {
    const updated = { ...featureToggles, [key]: !featureToggles[key] }
    setFeatureToggles(updated)
    localStorage.setItem('tocc-feature-toggles', JSON.stringify(updated))
    showSaveMessage(`${key} ${updated[key] ? 'enabled' : 'disabled'}`)
  }

  const saveUrl = (type: 'form' | 'script' | 'model' | 'program' | 'training', id: string) => {
    let urls: Record<string, string>
    let setUrls: (urls: Record<string, string>) => void
    let storageKey: string

    switch (type) {
      case 'form':
        urls = { ...formUrls }
        setUrls = setFormUrls
        storageKey = 'tocc-form-urls'
        break
      case 'script':
        urls = { ...scriptUrls }
        setUrls = setScriptUrls
        storageKey = 'tocc-script-urls'
        break
      case 'model':
        urls = { ...modelUrls }
        setUrls = setModelUrls
        storageKey = 'tocc-model-urls'
        break
      case 'program':
        urls = { ...programUrls }
        setUrls = setProgramUrls
        storageKey = 'tocc-program-urls'
        break
      case 'training':
        urls = { ...trainingUrls }
        setUrls = setTrainingUrls
        storageKey = 'tocc-training-urls'
        break
    }

    if (tempUrl.trim()) {
      urls[id] = tempUrl.trim()
    } else {
      delete urls[id]
    }
    
    setUrls(urls)
    localStorage.setItem(storageKey, JSON.stringify(urls))
    setEditingItem(null)
    setTempUrl('')
    showSaveMessage(`Saved URL for ${id}`)
  }

  const startEditing = (id: string, currentUrl: string) => {
    setEditingItem(id)
    setTempUrl(currentUrl)
  }

  const getCustomUrl = (type: 'form' | 'script' | 'model' | 'program' | 'training', id: string): string | null => {
    switch (type) {
      case 'form': return formUrls[id] || null
      case 'script': return scriptUrls[id] || null
      case 'model': return modelUrls[id] || null
      case 'program': return programUrls[id] || null
      case 'training': return trainingUrls[id] || null
    }
  }

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-lg border border-gray-200 max-w-md w-full mx-4 p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock size={32} className="text-gray-600" />
            </div>
            <h1 className="text-2xl font-bold">Admin Access</h1>
            <p className="text-gray-600 text-sm mt-1">Enter password to continue</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setPasswordError(false) }}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-toyota-red/20 ${
                    passwordError ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Enter admin password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {passwordError && <p className="text-red-500 text-sm mt-1">Incorrect password</p>}
            </div>
            <button type="submit" className="btn btn-primary w-full">
              <Lock size={18} />
              Access Admin Panel
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2">
              <Settings size={24} />
              Admin Panel
            </h1>
            <p className="text-gray-600 text-sm">Manage portal settings and content</p>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Log out
          </button>
        </div>
      </div>

      {/* Save Message */}
      {saveMessage && (
        <div className="fixed top-4 right-4 z-50 bg-green-50 border border-green-200 rounded-lg px-4 py-3 flex items-center gap-2 text-green-700 shadow-lg animate-fade-in">
          <CheckCircle2 size={18} />
          {saveMessage}
        </div>
      )}

      <div className="max-w-6xl mx-auto p-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {adminSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-colors ${
                    activeSection === section.id
                      ? 'bg-toyota-red text-white'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <section.icon size={18} />
                  <div>
                    <div className="font-medium text-sm">{section.title}</div>
                    <div className={`text-xs ${activeSection === section.id ? 'text-white/70' : 'text-gray-500'}`}>
                      {section.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Security - Site Password */}
            {activeSection === 'security' && (
              <>
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200 font-semibold flex items-center gap-2">
                  <Key size={18} />
                  Site Password Management
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-6">
                    The site password is required for staff to access the training portal. Change it here as needed.
                  </p>
                  
                  {/* Current Password Display */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-gray-700 mb-2">Current Site Password</div>
                    <div className="flex items-center gap-3">
                      <code className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded font-mono text-lg">
                        {showSitePassword ? sitePassword : '••••••••'}
                      </code>
                      <button
                        onClick={() => setShowSitePassword(!showSitePassword)}
                        className="p-2 text-gray-500 hover:text-gray-700"
                      >
                        {showSitePassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {sitePassword !== DEFAULT_SITE_PASSWORD && (
                      <div className="mt-2 text-xs text-amber-600 flex items-center gap-1">
                        <AlertTriangle size={12} />
                        Custom password set (differs from default)
                      </div>
                    )}
                  </div>

                  {/* Change Password Form */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Change Password</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                      <input
                        type="password"
                        value={newSitePassword}
                        onChange={(e) => setNewSitePassword(e.target.value)}
                        placeholder="Enter new password"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-toyota-red/20 focus:border-toyota-red"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                      <input
                        type="password"
                        value={confirmSitePassword}
                        onChange={(e) => setConfirmSitePassword(e.target.value)}
                        placeholder="Confirm new password"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-toyota-red/20 focus:border-toyota-red"
                      />
                    </div>

                    {passwordChangeError && (
                      <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-3 py-2 rounded-lg">
                        <AlertTriangle size={16} />
                        {passwordChangeError}
                      </div>
                    )}

                    <div className="flex gap-3">
                      <button
                        onClick={handlePasswordChange}
                        className="px-4 py-2 bg-toyota-red text-white font-medium rounded-lg hover:bg-toyota-red-dark transition-colors"
                      >
                        Update Password
                      </button>
                      {sitePassword !== DEFAULT_SITE_PASSWORD && (
                        <button
                          onClick={resetToDefaultPassword}
                          className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          Reset to Default
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Lock className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                      <div className="text-sm text-blue-800">
                        <div className="font-semibold mb-1">How Site Password Works</div>
                        <ul className="space-y-1 text-blue-700">
                          <li>• Staff must enter this password to access the training portal</li>
                          <li>• Password changes take effect immediately</li>
                          <li>• Staff currently logged in will stay logged in until they close their browser</li>
                          <li>• Share the new password with your team after changing it</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Admin Password Section */}
              <div className="bg-white rounded-lg border border-gray-200 mt-6">
                <div className="px-4 py-3 border-b border-gray-200 font-semibold flex items-center gap-2">
                  <Shield size={18} />
                  Admin Password
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-6">
                    The admin password is required to access this admin panel. Keep it secure.
                  </p>
                  
                  {/* Current Admin Password Display */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-gray-700 mb-2">Current Admin Password</div>
                    <div className="flex items-center gap-3">
                      <code className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded font-mono text-lg">
                        {showAdminPassword ? adminPassword : '••••••••••••'}
                      </code>
                      <button
                        onClick={() => setShowAdminPassword(!showAdminPassword)}
                        className="p-2 text-gray-500 hover:text-gray-700"
                      >
                        {showAdminPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {adminPassword !== DEFAULT_ADMIN_PASSWORD && (
                      <div className="mt-2 text-xs text-amber-600 flex items-center gap-1">
                        <AlertTriangle size={12} />
                        Custom admin password set
                      </div>
                    )}
                  </div>

                  {/* Change Admin Password Form */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Change Admin Password</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">New Admin Password</label>
                      <input
                        type="password"
                        value={newAdminPassword}
                        onChange={(e) => setNewAdminPassword(e.target.value)}
                        placeholder="Enter new admin password"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-toyota-red/20 focus:border-toyota-red"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Admin Password</label>
                      <input
                        type="password"
                        value={confirmAdminPassword}
                        onChange={(e) => setConfirmAdminPassword(e.target.value)}
                        placeholder="Confirm new admin password"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-toyota-red/20 focus:border-toyota-red"
                      />
                    </div>

                    {adminPasswordError && (
                      <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-3 py-2 rounded-lg">
                        <AlertTriangle size={16} />
                        {adminPasswordError}
                      </div>
                    )}

                    <div className="flex gap-3">
                      <button
                        onClick={handleAdminPasswordChange}
                        className="px-4 py-2 bg-toyota-red text-white font-medium rounded-lg hover:bg-toyota-red-dark transition-colors"
                      >
                        Update Admin Password
                      </button>
                      {adminPassword !== DEFAULT_ADMIN_PASSWORD && (
                        <button
                          onClick={resetAdminPassword}
                          className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          Reset to Default
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              </>
            )}

            {/* Training Documents - Most Important */}
            {activeSection === 'training' && (
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200 font-semibold flex items-center gap-2">
                  <BookOpen size={18} />
                  Training Documents
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-4">These are the main training documents that appear throughout the portal. Update URLs to point to your current versions.</p>
                  
                  <div className="space-y-4">
                    {[
                      { id: 'training-manual', name: 'Sales Training Manual', desc: 'Main comprehensive training document', defaultPath: 'training/TOCC-Sales-Training-Manual.pdf' },
                      { id: 'training-appendix', name: 'Training Appendix', desc: 'Supplementary materials and reference documents', defaultPath: 'training/TOCC-Training-Appendix.pdf' },
                      { id: 'quick-reference', name: 'Quick Reference Card', desc: 'One-page summary for quick review', defaultPath: 'training/TOCC-Quick-Reference.pdf' },
                      { id: 'new-hire-checklist', name: 'New Hire Onboarding Checklist', desc: 'Checklist for new team members', defaultPath: 'training/New-Hire-Checklist.pdf' },
                    ].map((doc) => {
                      const customUrl = getCustomUrl('training', doc.id)
                      const isEditing = editingItem === `training-${doc.id}`
                      
                      return (
                        <div key={doc.id} className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <BookOpen size={16} className="text-toyota-red" />
                                <span className="font-semibold">{doc.name}</span>
                                {customUrl && (
                                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Custom URL Set</span>
                                )}
                              </div>
                              <div className="text-sm text-gray-500 mt-1">{doc.desc}</div>
                              
                              {isEditing ? (
                                <div className="mt-3">
                                  <input
                                    type="url"
                                    value={tempUrl}
                                    onChange={(e) => setTempUrl(e.target.value)}
                                    placeholder="Enter full URL to PDF document"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-toyota-red/20 focus:border-toyota-red"
                                  />
                                  <div className="flex gap-2 mt-2">
                                    <button
                                      onClick={() => saveUrl('training', doc.id)}
                                      className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700"
                                    >
                                      Save URL
                                    </button>
                                    <button
                                      onClick={() => { setEditingItem(null); setTempUrl('') }}
                                      className="px-4 py-2 text-gray-600 text-sm hover:bg-gray-200 rounded-lg"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div className="text-xs text-gray-400 mt-2 font-mono truncate">
                                  {customUrl || `Default: ${doc.defaultPath}`}
                                </div>
                              )}
                            </div>
                            
                            {!isEditing && (
                              <button
                                onClick={() => startEditing(`training-${doc.id}`, customUrl || '')}
                                className="px-4 py-2 bg-toyota-red text-white text-sm font-medium rounded-lg hover:bg-red-700"
                              >
                                Edit URL
                              </button>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Feature Toggles */}
            {activeSection === 'features' && (
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200 font-semibold flex items-center gap-2">
                  <ToggleRight size={18} />
                  Feature Toggles
                </div>
                <div className="p-4 space-y-4">
                  {[
                    { key: 'showQuizMode', label: 'Quiz Mode', desc: 'Interactive knowledge testing', icon: Brain },
                    { key: 'showFlashcards', label: 'Flashcards', desc: 'Practice flashcard deck', icon: Layers },
                    { key: 'showCSISection', label: 'CSI & Reviews', desc: 'Customer satisfaction info', icon: Star },
                    { key: 'showFollowUpSection', label: 'Follow-Up & Referrals', desc: 'Post-sale follow-up guide', icon: Users },
                    { key: 'showPPPPage', label: 'Premium Protect Plus', desc: 'PP+ information page', icon: Shield },
                    { key: 'showWindowSticker', label: 'Window Sticker Guide', desc: 'How to read window stickers', icon: FileText },
                    { key: 'showModelInfo', label: 'Model Information', desc: 'Vehicle lineup & brochures', icon: Car },
                  ].map((feature) => (
                    <div key={feature.key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <feature.icon size={18} className="text-gray-500" />
                        <div>
                          <div className="font-medium">{feature.label}</div>
                          <div className="text-sm text-gray-500">{feature.desc}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleFeature(feature.key as keyof typeof defaultFeatureToggles)}
                        className={`w-12 h-7 rounded-full transition-colors ${
                          featureToggles[feature.key as keyof typeof defaultFeatureToggles]
                            ? 'bg-green-500'
                            : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                          featureToggles[feature.key as keyof typeof defaultFeatureToggles]
                            ? 'translate-x-6'
                            : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Forms */}
            {activeSection === 'forms' && (
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200 font-semibold flex items-center gap-2">
                  <FileText size={18} />
                  Forms Library ({forms.length} forms)
                </div>
                <div className="divide-y max-h-[600px] overflow-y-auto">
                  {forms.map((form) => {
                    const customUrl = getCustomUrl('form', form.id)
                    const isEditing = editingItem === `form-${form.id}`
                    
                    return (
                      <div key={form.id} className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{form.name}</span>
                              {customUrl && (
                                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Custom</span>
                              )}
                            </div>
                            <div className="text-sm text-gray-500">{form.description}</div>
                            
                            {isEditing ? (
                              <div className="mt-2">
                                <input
                                  type="url"
                                  value={tempUrl}
                                  onChange={(e) => setTempUrl(e.target.value)}
                                  placeholder="Enter custom URL or leave empty for default"
                                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                />
                                <div className="flex gap-2 mt-2">
                                  <button
                                    onClick={() => saveUrl('form', form.id)}
                                    className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-lg"
                                  >
                                    Save
                                  </button>
                                  <button
                                    onClick={() => { setEditingItem(null); setTempUrl('') }}
                                    className="px-3 py-1.5 text-gray-500 text-sm"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className="text-xs text-gray-400 mt-1 truncate">
                                {customUrl || `forms/${form.path}`}
                              </div>
                            )}
                          </div>
                          
                          {!isEditing && (
                            <button
                              onClick={() => startEditing(`form-${form.id}`, customUrl || '')}
                              className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200"
                            >
                              Edit
                            </button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Scripts */}
            {activeSection === 'scripts' && (
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200 font-semibold flex items-center gap-2">
                  <Scroll size={18} />
                  Scripts Library ({scripts.length} scripts)
                </div>
                <div className="divide-y">
                  {scripts.map((script) => {
                    const customUrl = getCustomUrl('script', script.id)
                    const isEditing = editingItem === `script-${script.id}`
                    
                    return (
                      <div key={script.id} className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{script.name}</span>
                              {customUrl && (
                                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Custom</span>
                              )}
                            </div>
                            <div className="text-sm text-gray-500">{script.description}</div>
                            
                            {isEditing ? (
                              <div className="mt-2">
                                <input
                                  type="url"
                                  value={tempUrl}
                                  onChange={(e) => setTempUrl(e.target.value)}
                                  placeholder="Enter custom URL or leave empty for default"
                                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                />
                                <div className="flex gap-2 mt-2">
                                  <button
                                    onClick={() => saveUrl('script', script.id)}
                                    className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-lg"
                                  >
                                    Save
                                  </button>
                                  <button
                                    onClick={() => { setEditingItem(null); setTempUrl('') }}
                                    className="px-3 py-1.5 text-gray-500 text-sm"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className="text-xs text-gray-400 mt-1 truncate">
                                {customUrl || script.path}
                              </div>
                            )}
                          </div>
                          
                          {!isEditing && (
                            <button
                              onClick={() => startEditing(`script-${script.id}`, customUrl || '')}
                              className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200"
                            >
                              Edit
                            </button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Model Brochures */}
            {activeSection === 'models' && (
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200 font-semibold flex items-center gap-2">
                  <Car size={18} />
                  Model Brochures ({defaultModelBrochures.length} models)
                </div>
                <div className="divide-y max-h-[600px] overflow-y-auto">
                  {defaultModelBrochures.map((model) => {
                    const customUrl = getCustomUrl('model', model.id)
                    const isEditing = editingItem === `model-${model.id}`
                    
                    return (
                      <div key={model.id} className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{model.name}</span>
                              {customUrl && (
                                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Custom</span>
                              )}
                            </div>
                            
                            {isEditing ? (
                              <div className="mt-2">
                                <input
                                  type="url"
                                  value={tempUrl}
                                  onChange={(e) => setTempUrl(e.target.value)}
                                  placeholder="Enter brochure URL (PDF)"
                                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                />
                                <div className="flex gap-2 mt-2">
                                  <button
                                    onClick={() => saveUrl('model', model.id)}
                                    className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-lg"
                                  >
                                    Save
                                  </button>
                                  <button
                                    onClick={() => { setEditingItem(null); setTempUrl('') }}
                                    className="px-3 py-1.5 text-gray-500 text-sm"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className="text-xs text-gray-400 mt-1 truncate">
                                {customUrl || model.path}
                              </div>
                            )}
                          </div>
                          
                          {!isEditing && (
                            <button
                              onClick={() => startEditing(`model-${model.id}`, customUrl || '')}
                              className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200"
                            >
                              Edit
                            </button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Toyota Programs */}
            {activeSection === 'programs' && (
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200 font-semibold flex items-center gap-2">
                  <Award size={18} />
                  Toyota Program Brochures
                </div>
                <div className="divide-y">
                  {[
                    { id: 'toyotacare', name: 'ToyotaCare Brochure', defaultPath: 'toyota-programs/Toyotacare.pdf' },
                    { id: 'toyoguard', name: 'Toyoguard Platinum Brochure', defaultPath: 'toyota-programs/Toyoguard Brochures 2025.pdf' },
                    { id: 'tss', name: 'Toyota Safety Sense 3.0', defaultPath: 'toyota-programs/TSS_3.0.pdf' },
                    { id: 'ppp-info', name: 'Premium Protect Plus Info Sheet', defaultPath: 'forms/Premium-Protect-Plus-Information-Sheet.html' },
                    { id: 'tcuv', name: 'TCUV Program Overview', defaultPath: 'toyota-programs/TCUV-Overview.pdf' },
                  ].map((program) => {
                    const customUrl = getCustomUrl('program', program.id)
                    const isEditing = editingItem === `program-${program.id}`
                    
                    return (
                      <div key={program.id} className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{program.name}</span>
                              {customUrl && (
                                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Custom</span>
                              )}
                            </div>
                            
                            {isEditing ? (
                              <div className="mt-2">
                                <input
                                  type="url"
                                  value={tempUrl}
                                  onChange={(e) => setTempUrl(e.target.value)}
                                  placeholder="Enter brochure URL"
                                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                />
                                <div className="flex gap-2 mt-2">
                                  <button
                                    onClick={() => saveUrl('program', program.id)}
                                    className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-lg"
                                  >
                                    Save
                                  </button>
                                  <button
                                    onClick={() => { setEditingItem(null); setTempUrl('') }}
                                    className="px-3 py-1.5 text-gray-500 text-sm"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className="text-xs text-gray-400 mt-1 truncate">
                                {customUrl || program.defaultPath}
                              </div>
                            )}
                          </div>
                          
                          {!isEditing && (
                            <button
                              onClick={() => startEditing(`program-${program.id}`, customUrl || '')}
                              className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200"
                            >
                              Edit
                            </button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Instructions */}
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="font-semibold text-amber-800">How Settings Work</h3>
                  <ul className="text-sm text-amber-700 mt-2 space-y-1">
                    <li>• Settings are stored in your browser's localStorage</li>
                    <li>• Custom URLs override the default Firebase paths</li>
                    <li>• Leave URL empty and save to reset to default</li>
                    <li>• Changes only affect this browser/device</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
