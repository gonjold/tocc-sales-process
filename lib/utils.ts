import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Firebase Storage Helper
const FIREBASE_STORAGE = 'https://firebasestorage.googleapis.com/v0/b/ahtocc-sales-training.firebasestorage.app/o'

export function getDocumentUrl(path: string): string {
  return `${FIREBASE_STORAGE}/${encodeURIComponent(path)}?alt=media`
}

// Format phone number
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

// Local storage helpers for progress tracking
export function getProgress(): Record<string, boolean> {
  if (typeof window === 'undefined') return {}
  const stored = localStorage.getItem('ahtocc-progress')
  return stored ? JSON.parse(stored) : {}
}

export function setProgress(key: string, completed: boolean): void {
  if (typeof window === 'undefined') return
  const progress = getProgress()
  progress[key] = completed
  localStorage.setItem('ahtocc-progress', JSON.stringify(progress))
}

export function clearProgress(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem('ahtocc-progress')
}
