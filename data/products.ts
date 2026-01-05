export interface ProductFeature {
  icon?: string
  title: string
  description: string
}

export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  features: ProductFeature[]
  coverage?: {
    value: string
    label: string
  }[]
  pitchLine: string
  documentPath?: string
}

export const products: Product[] = [
  {
    id: 'toyotacare',
    name: 'ToyotaCare',
    tagline: 'No Cost Maintenance',
    description: '2 years/25,000 miles of complimentary maintenance including oil changes, tire rotations, multi-point inspections, plus 2 years of 24-hour roadside assistance.',
    features: [
      { icon: '🔧', title: 'Oil Changes', description: 'Factory-recommended intervals' },
      { icon: '🔄', title: 'Tire Rotations', description: 'Every 5,000 miles' },
      { icon: '✅', title: 'Multi-Point Inspection', description: 'Comprehensive vehicle check' },
      { icon: '🚗', title: 'Roadside Assistance', description: '24/7 nationwide coverage' },
    ],
    coverage: [
      { value: '2 Years', label: 'or 25,000 miles' },
      { value: '24/7', label: 'Roadside Assistance' },
    ],
    pitchLine: 'Your first two years of maintenance are on us. That\'s peace of mind and savings from day one.',
    documentPath: 'toyota-programs/Toyotacare.pdf',
  },
  {
    id: 'tss',
    name: 'Toyota Safety Sense 3.0',
    tagline: 'Standard Safety Technology',
    description: 'Standard on most models. A suite of active safety features designed to help protect you and your passengers.',
    features: [
      { icon: '🛑', title: 'Pre-Collision System', description: 'With Pedestrian Detection & automatic braking' },
      { icon: '🚙', title: 'Dynamic Radar Cruise', description: 'Full-Speed Range adaptive cruise control' },
      { icon: '↔️', title: 'Lane Departure Alert', description: 'With Steering Assist to keep you centered' },
      { icon: '🛤️', title: 'Lane Tracing Assist', description: 'Helps keep vehicle in lane' },
      { icon: '💡', title: 'Automatic High Beams', description: 'Smart light adjustment for safety' },
      { icon: '🚦', title: 'Road Sign Assist', description: 'Displays detected road signs' },
    ],
    pitchLine: 'You mentioned family safety is important. TSS 3.0 is like having a co-pilot that\'s always watching the road.',
    documentPath: 'toyota-programs/TSS_3.0.pdf',
  },
  {
    id: 'toyoguard',
    name: 'Toyoguard Platinum',
    tagline: 'Extends ToyotaCare Coverage',
    description: 'Toyoguard Platinum is included on every new Toyota we sell. It extends your ToyotaCare benefits and adds protection that lasts up to 5 years or 60,000 miles.',
    features: [
      { icon: '🔧', title: 'Additional Oil Changes', description: '2 synthetic oil changes (Years 3-4 or 45,000 miles)' },
      { icon: '🔄', title: 'Additional Tire Rotations', description: '4 tire rotations (Years 3-4 or 45,000 miles)' },
      { icon: '🚗', title: 'Extended Roadside Assistance', description: '5 years or 60,000 miles total coverage' },
      { icon: '🚙', title: 'Rental Car Assistance', description: 'Up to 5 rentals ($42/day) for warranty repairs' },
      { icon: '✨', title: 'Paint Sealant', description: 'Exterior protection against weather & salt air (3yr/36k)' },
      { icon: '🛋️', title: 'Interior Protector', description: 'Fabric seat & carpet stain protection (3yr/36k)' },
    ],
    coverage: [
      { value: '5 Years', label: 'Total Coverage' },
      { value: '60,000', label: 'Miles' },
    ],
    pitchLine: 'Your ToyotaCare coverage doesn\'t end at 2 years - Toyoguard Platinum extends your maintenance and roadside benefits for up to 5 years. It\'s included at no extra cost.',
    documentPath: 'toyota-programs/Toyoguard Brochures 2025.pdf',
  },
  {
    id: 'tcuv',
    name: 'Toyota Certified Used Vehicles',
    tagline: '160-Point Inspection',
    description: 'Every TCUV passes a rigorous 160-point quality assurance inspection. Backed by comprehensive warranty coverage.',
    features: [
      { icon: '🔍', title: '160-Point Inspection', description: 'Rigorous quality check' },
      { icon: '📋', title: 'CARFAX Report', description: 'Full vehicle history' },
      { icon: '🛡️', title: 'Comprehensive Warranty', description: '12 months / 12,000 miles' },
      { icon: '⚙️', title: 'Powertrain Warranty', description: '7 years / 100,000 miles' },
    ],
    coverage: [
      { value: '12 mo', label: 'Comprehensive' },
      { value: '7 yr', label: 'Powertrain' },
    ],
    pitchLine: 'It\'s not just used - it\'s Toyota Certified. That means reliability and warranty you can count on.',
    documentPath: 'toyota-programs/TCUV.pdf',
  },
  {
    id: 'ppp',
    name: 'Premium Protect Plus',
    tagline: 'Over $6,500 in Added Value',
    description: 'Premium Protect Plus is included with every new vehicle purchase, providing comprehensive protection that safeguards your vehicle inside and out.',
    features: [
      { icon: '💰', title: 'Collision Loyalty Credit', description: 'Up to $2,500 if totaled within 90 days - toward your next vehicle' },
      { icon: '🔐', title: 'Stolen Vehicle Assistance', description: 'Up to $2,500 coverage for 3 years / 36,000 miles' },
      { icon: '🚗', title: 'Roadside Assistance', description: '24/7 nationwide - towing, lockout, jump starts, fuel delivery ($399 value)' },
      { icon: '✨', title: 'Exterior & Interior Protection', description: 'Professional coating against stains, UV, bird droppings ($699 value)' },
      { icon: '💧', title: 'Windshield Treatment', description: 'Hydrophobic coating for visibility and safety ($199 value)' },
      { icon: '🚪', title: 'Door Edge & Cup Guards', description: 'Clear film protection against scratches ($199 value)' },
      { icon: '🎁', title: 'Customer Welcome Kit', description: 'Premium car care products ($79 value)' },
      { icon: '🔋', title: 'Battery Protection', description: 'Terminal protection to prevent corrosion ($59 value)' },
      { icon: '🛞', title: 'Road Hazard Tire Repair', description: '$50 credit for tire damage from road debris' },
    ],
    coverage: [
      { value: '$6,500+', label: 'Total Value' },
      { value: '3 Years', label: 'Coverage Period' },
    ],
    pitchLine: 'PPP is included with your purchase - over $6,500 in protection that covers you from road hazards to theft. It\'s our way of ensuring your investment is protected.',
    documentPath: 'forms/Premium-Protect-Plus-Information-Sheet.html',
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}
