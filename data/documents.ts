// Firebase Storage base URL
const FIREBASE_BASE = 'https://firebasestorage.googleapis.com/v0/b/ahtocc-sales-training.firebasestorage.app/o'

export function getDocumentUrl(path: string): string {
  const encodedPath = encodeURIComponent(path)
  return `${FIREBASE_BASE}/${encodedPath}?alt=media`
}

// Document categories and their items
export interface Document {
  id: string
  name: string
  description: string
  path: string
  type: 'html' | 'pdf'
  category: 'form' | 'script' | 'toyota' | 'brochure'
  relatedStep?: number // Which Road to Sale step this relates to
  tags?: string[]
}

// All forms available in Firebase /forms/ folder
export const forms: Document[] = [
  // Deal Documentation Forms
  {
    id: 'new-vehicle-checklist',
    name: 'New Vehicle Purchase Checklist',
    description: 'Complete checklist for new vehicle deliveries',
    path: 'forms/new-vehicle-purchase-checklist.html',
    type: 'html',
    category: 'form',
    relatedStep: 10,
    tags: ['delivery', 'checklist', 'new']
  },
  {
    id: 'used-vehicle-checklist',
    name: 'Used Vehicle Purchase Checklist',
    description: 'Complete checklist for used vehicle deliveries',
    path: 'forms/Used_Vehicle_Purchase_Checklist.html',
    type: 'html',
    category: 'form',
    relatedStep: 10,
    tags: ['delivery', 'checklist', 'used']
  },
  {
    id: 'street-purchase-cover',
    name: 'Street Purchase Cover Sheet',
    description: 'Cover sheet for street purchase deals',
    path: 'forms/street-purchase-cover-sheet.html',
    type: 'html',
    category: 'form',
    relatedStep: 8,
    tags: ['street purchase', 'cover sheet']
  },
  {
    id: 'street-purchase-checklist',
    name: 'Street Purchase Packet Checklist',
    description: 'Required documents for street purchase transactions',
    path: 'forms/street-purchase-packet-checklist.html',
    type: 'html',
    category: 'form',
    relatedStep: 8,
    tags: ['street purchase', 'checklist']
  },
  {
    id: 'trade-in-payoff',
    name: 'Trade-In Payoff Authorization',
    description: 'Authorization form for trade payoff verification',
    path: 'forms/Trade-In-Payoff.html',
    type: 'html',
    category: 'form',
    relatedStep: 7,
    tags: ['trade', 'payoff', 'authorization']
  },
  {
    id: 'vin-verification',
    name: 'VIN Verification Form',
    description: 'Vehicle identification number verification',
    path: 'forms/VIN-Verification.html',
    type: 'html',
    category: 'form',
    relatedStep: 7,
    tags: ['trade', 'VIN', 'verification']
  },
  {
    id: 'we-owe-you-owe',
    name: 'We Owe / You Owe Agreement',
    description: 'Document any outstanding obligations',
    path: 'forms/We-Owe-You-Owe.html',
    type: 'html',
    category: 'form',
    relatedStep: 10,
    tags: ['delivery', 'we owe', 'agreement']
  },
  {
    id: 'clean-up-work-order',
    name: 'Clean-Up Work Order',
    description: 'Service work order for delivery prep',
    path: 'forms/Clean-Up-Work-Order.html',
    type: 'html',
    category: 'form',
    relatedStep: 10,
    tags: ['delivery', 'detail', 'service']
  },
  {
    id: 'license-plate-info',
    name: 'License Plate Information',
    description: 'Tag and registration information form',
    path: 'forms/License-Plate-Information.html',
    type: 'html',
    category: 'form',
    relatedStep: 10,
    tags: ['delivery', 'tag', 'registration']
  },
  {
    id: 'media-release',
    name: 'Media Release Form',
    description: 'Photo and video release authorization',
    path: 'forms/Media-Release-Form.html',
    type: 'html',
    category: 'form',
    relatedStep: 10,
    tags: ['delivery', 'photo', 'media']
  },
  {
    id: 'agreement-insurance',
    name: 'Agreement to Provide Insurance',
    description: 'Customer insurance commitment form',
    path: 'forms/Agreement-Provide-Insurance.html',
    type: 'html',
    category: 'form',
    relatedStep: 8,
    tags: ['insurance', 'agreement', 'F&I']
  },
  {
    id: 'lemon-law',
    name: 'Lemon Law Acknowledgment',
    description: 'Florida Lemon Law disclosure receipt',
    path: 'forms/Acknowledgment-of-Receipt-Lemon-Law.html',
    type: 'html',
    category: 'form',
    relatedStep: 10,
    tags: ['disclosure', 'lemon law', 'legal']
  },
  {
    id: 'water-damage',
    name: 'Water Damage & Flood Warranties',
    description: 'Disclosure for flood and water damage history',
    path: 'forms/Water-Damage-Flood-Warranties.html',
    type: 'html',
    category: 'form',
    relatedStep: 10,
    tags: ['disclosure', 'flood', 'used']
  },
  {
    id: 'facts-privacy',
    name: 'FACTS Privacy Notice',
    description: 'Federal privacy disclosure requirements',
    path: 'forms/FACTS-Privacy-Notice.html',
    type: 'html',
    category: 'form',
    relatedStep: 8,
    tags: ['disclosure', 'privacy', 'F&I']
  },
  {
    id: 'sales-1on1-review',
    name: 'Sales Process 1-on-1 Review',
    description: 'Manager review form for sales process evaluation',
    path: 'forms/Sales-Process-1on1-Review-OptionC.html',
    type: 'html',
    category: 'form',
    tags: ['training', 'review', 'management']
  },
  {
    id: 'ppp-info-sheet',
    name: 'Premium Protect Plus Info Sheet',
    description: 'Customer-facing PPP benefits breakdown',
    path: 'forms/Premium-Protect-Plus-Information-Sheet.html',
    type: 'html',
    category: 'form',
    relatedStep: 10,
    tags: ['PPP', 'protection', 'value']
  },
  // Window Sticker
  {
    id: 'window-sticker-example',
    name: 'Window Sticker Example (Camry)',
    description: 'Sample Monroney sticker for training reference',
    path: 'forms/Camry - window sticker.pdf',
    type: 'pdf',
    category: 'form',
    relatedStep: 4,
    tags: ['window sticker', 'monroney', 'walkaround']
  },
]

// All scripts available in Firebase /scripts/ folder
export const scripts: Document[] = [
  {
    id: 'phone-up-format',
    name: 'Phone-Up Script Format',
    description: 'Complete phone-up call flow and script',
    path: 'scripts/Script-Phone-Up-Format.html',
    type: 'html',
    category: 'script',
    tags: ['phone', 'inbound', 'appointment']
  },
  {
    id: 'phone-up-best-practices',
    name: 'Phone-Up Best Practices',
    description: 'Tips for effective phone conversations',
    path: 'scripts/Script-Phone-Up-Best-Practices.html',
    type: 'html',
    category: 'script',
    tags: ['phone', 'tips', 'best practices']
  },
  {
    id: 'phone-up-key-points',
    name: 'Phone-Up Key Points',
    description: 'Quick reference for phone calls',
    path: 'scripts/Script-Phone-Up-Key-Points.html',
    type: 'html',
    category: 'script',
    tags: ['phone', 'quick reference']
  },
  {
    id: 'fire-phone',
    name: 'Fire Phone Script',
    description: 'Urgent follow-up call script',
    path: 'scripts/Script-Fire-Phone.html',
    type: 'html',
    category: 'script',
    tags: ['follow-up', 'urgent', 'hot lead']
  },
  {
    id: 'dirty-thirty',
    name: 'Dirty Thirty Call Script',
    description: '30-day follow-up call script',
    path: 'scripts/Script-Dirty-Thirty-Call.html',
    type: 'html',
    category: 'script',
    tags: ['follow-up', '30 day', 'orphan']
  },
  {
    id: 'missed-appointment',
    name: 'Missed Appointment Script',
    description: 'Script for customers who missed their appointment',
    path: 'scripts/Script-Missed-Appointment.html',
    type: 'html',
    category: 'script',
    tags: ['follow-up', 'no-show', 'appointment']
  },
  {
    id: 'unsold-traffic',
    name: 'Unsold Traffic Script',
    description: 'Follow-up script for customers who left without buying',
    path: 'scripts/Script-Unsold-Traffic.html',
    type: 'html',
    category: 'script',
    tags: ['follow-up', 'be-back', 'unsold']
  },
]

// Toyota program documents
export const toyotaPrograms: Document[] = [
  {
    id: 'toyotacare',
    name: 'ToyotaCare',
    description: '2 years/25,000 miles complimentary maintenance',
    path: 'toyota-programs/Toyotacare.pdf',
    type: 'pdf',
    category: 'toyota',
    tags: ['maintenance', 'value', 'standard']
  },
  {
    id: 'toyoguard',
    name: 'Toyoguard Platinum',
    description: 'Extended maintenance and protection coverage',
    path: 'toyota-programs/Toyoguard Brochures 2025.pdf',
    type: 'pdf',
    category: 'toyota',
    tags: ['protection', 'maintenance', 'value']
  },
  {
    id: 'tss',
    name: 'Toyota Safety Sense 3.0',
    description: 'Standard safety technology features',
    path: 'toyota-programs/TSS_3.0.pdf',
    type: 'pdf',
    category: 'toyota',
    tags: ['safety', 'technology', 'standard']
  },
  {
    id: 'tcuv',
    name: 'Toyota Certified Used Vehicles',
    description: '160-point inspection and warranty program',
    path: 'toyota-programs/TCUV.pdf',
    type: 'pdf',
    category: 'toyota',
    tags: ['certified', 'used', 'warranty']
  },
]

// Model brochures available in Firebase /toyota-products/ folder
export interface ModelBrochure {
  id: string
  model: string
  type: 'sedan' | 'suv' | 'truck' | 'sports' | 'hybrid' | 'electric'
  brochurePath?: string
  accessoryPath?: string
  year?: string
}

export const modelBrochures: ModelBrochure[] = [
  // Sedans
  { id: 'camry', model: 'Camry', type: 'sedan', brochurePath: 'toyota-products/camry_ebrochure.pdf', accessoryPath: 'toyota-products/my25-camry-accessory-ebrochure.pdf', year: '2025' },
  { id: 'corolla', model: 'Corolla', type: 'sedan', brochurePath: 'toyota-products/corolla_ebrochure.pdf' },
  { id: 'corolla-hatch', model: 'Corolla Hatchback', type: 'sedan', brochurePath: 'toyota-products/corollahatchback_ebrochure.pdf' },
  { id: 'crown', model: 'Crown', type: 'sedan', brochurePath: 'toyota-products/crown_ebrochure.pdf' },
  
  // SUVs & Crossovers
  { id: 'rav4', model: 'RAV4', type: 'suv', accessoryPath: 'toyota-products/rav4_accessory_ebrochure.pdf' },
  { id: '4runner', model: '4Runner', type: 'suv', accessoryPath: 'toyota-products/MY25_4Runner_Accessory_Ebrochure.pdf', year: '2025' },
  { id: 'highlander', model: 'Grand Highlander', type: 'suv', accessoryPath: 'toyota-products/my25-grandhighlander-accessory-ebrochure.pdf', year: '2025' },
  { id: 'sequoia', model: 'Sequoia', type: 'suv', brochurePath: 'toyota-products/sequoia_ebrochure.pdf' },
  { id: 'land-cruiser', model: 'Land Cruiser', type: 'suv', accessoryPath: 'toyota-products/my25-landcruiser-accessory_eBrochure.pdf', year: '2025' },
  
  // Trucks
  { id: 'tacoma', model: 'Tacoma', type: 'truck', accessoryPath: 'toyota-products/tacoma_accessory_ebrochure.pdf' },
  { id: 'tundra', model: 'Tundra', type: 'truck', brochurePath: 'toyota-products/tundra_ebrochure.pdf' },
  
  // Hybrids & Electric
  { id: 'prius', model: 'Prius', type: 'hybrid', brochurePath: 'toyota-products/prius_ebrochure.pdf' },
  { id: 'prius-prime', model: 'Prius Prime', type: 'hybrid', brochurePath: 'toyota-products/priuspluginhybrid_ebrochure.pdf' },
  { id: 'bz4x', model: 'bZ4X', type: 'electric', brochurePath: 'toyota-products/bz_ebrochure.pdf' },
  
  // Sports
  { id: 'gr86', model: 'GR86', type: 'sports', brochurePath: 'toyota-products/gr86_ebrochure.pdf', accessoryPath: 'toyota-products/gr86_accessory_ebrochure.pdf' },
  { id: 'gr-supra', model: 'GR Supra', type: 'sports', brochurePath: 'toyota-products/grsupra_ebrochure.pdf', accessoryPath: 'toyota-products/MY25_GRSupra_Accessory_eBrochure.pdf', year: '2025' },
  
  // Full Line
  { id: 'full-line', model: 'Full Line Overview', type: 'sedan', brochurePath: 'toyota-products/MY24_Full_Line_eBro.pdf', year: '2024' },
  { id: 'accessories', model: 'Accessories Catalog', type: 'sedan', brochurePath: 'toyota-products/accessory_brochure.pdf' },
]

// Helper to get all documents
export const allDocuments: Document[] = [...forms, ...scripts, ...toyotaPrograms]

// Helper to get documents by step
export function getDocumentsForStep(stepNum: number): Document[] {
  return allDocuments.filter(doc => doc.relatedStep === stepNum)
}

// Helper to search documents
export function searchDocuments(query: string): Document[] {
  const lower = query.toLowerCase()
  return allDocuments.filter(doc => 
    doc.name.toLowerCase().includes(lower) ||
    doc.description.toLowerCase().includes(lower) ||
    doc.tags?.some(tag => tag.toLowerCase().includes(lower))
  )
}
