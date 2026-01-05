export interface GlossaryTerm {
  term: string
  definition: string
  category: 'finance' | 'sales' | 'inventory' | 'process' | 'product'
}

export const glossaryTerms: GlossaryTerm[] = [
  { term: 'ACV', definition: 'Actual Cash Value - wholesale market value of a trade-in', category: 'finance' },
  { term: 'Back End', definition: 'Profit from F&I products, warranties, and finance reserve', category: 'finance' },
  { term: 'Be-Back', definition: 'Customer who leaves but returns to purchase', category: 'sales' },
  { term: 'Bump', definition: 'Increasing an offer - price, payment, down payment, or trade value', category: 'sales' },
  { term: 'Buried/Flipped', definition: 'Customer owes more than trade is worth (negative equity)', category: 'finance' },
  { term: 'Closing Ratio', definition: 'Percentage who purchase vs total opportunities (goal: 30%)', category: 'sales' },
  { term: 'Desk', definition: 'Sales manager\'s station; also means structuring deals', category: 'process' },
  { term: 'F&I', definition: 'Finance and Insurance department', category: 'process' },
  { term: 'Front End', definition: 'Profit from vehicle sale before F&I products', category: 'finance' },
  { term: 'Gross', definition: 'Profit before expenses', category: 'finance' },
  { term: 'Heat Sheet', definition: 'List of vehicles that need to move (aged inventory)', category: 'inventory' },
  { term: 'Hold Back', definition: 'Manufacturer rebate to dealer (usually 2-3% of MSRP)', category: 'finance' },
  { term: 'Invoice', definition: 'What the dealer paid the manufacturer', category: 'finance' },
  { term: 'MSRP', definition: 'Manufacturer\'s Suggested Retail Price (sticker price)', category: 'finance' },
  { term: 'Lot Up', definition: 'Taking the next customer in rotation', category: 'process' },
  { term: 'Mini', definition: 'Minimum commission deal (low gross profit)', category: 'finance' },
  { term: 'Negative Equity', definition: 'Customer owes more than trade value (also: "upside down")', category: 'finance' },
  { term: 'Pencil', definition: 'First written offer presented to customer', category: 'sales' },
  { term: 'Pounder', definition: 'Deal with $1,000+ gross profit', category: 'finance' },
  { term: 'ROI', definition: 'Return on Investment', category: 'finance' },
  { term: 'Spiff', definition: 'Bonus for selling specific units or hitting targets', category: 'sales' },
  { term: 'T.O.', definition: 'Turn Over - manager taking over a deal to help close', category: 'process' },
  { term: 'TCUV', definition: 'Toyota Certified Used Vehicle', category: 'product' },
  { term: 'ToyotaCare', definition: '2yr/25K free maintenance on new Toyotas', category: 'product' },
  { term: 'Toyoguard', definition: 'Paint and fabric protection package', category: 'product' },
  { term: 'TSS', definition: 'Toyota Safety Sense - standard safety technology suite', category: 'product' },
  { term: 'Up', definition: 'A customer opportunity', category: 'sales' },
  { term: 'Upside Down', definition: 'Owing more than vehicle value (negative equity)', category: 'finance' },
  { term: 'VIN', definition: 'Vehicle Identification Number - 17 character unique ID', category: 'inventory' },
  { term: 'Walk-Around', definition: 'Presentation of vehicle features to customer', category: 'sales' },
  { term: 'Write-Up', definition: 'Completing paperwork for a deal', category: 'process' },
  { term: 'PPP', definition: 'Premium Protect Plus - dealer protection package with $6,500+ in value', category: 'product' },
  { term: 'DriveCentric', definition: 'The CRM system used for customer management and deal tracking', category: 'process' },
  { term: 'Bird Dog', definition: 'Referral fee paid to someone who brings in a buyer', category: 'sales' },
  { term: 'CSI', definition: 'Customer Satisfaction Index - survey scores from customers', category: 'process' },
  { term: 'Demo', definition: 'Demonstrator vehicle or test drive', category: 'sales' },
  { term: 'Flat', definition: 'Selling at invoice with no front-end profit', category: 'finance' },
  { term: 'Grinder', definition: 'Customer who negotiates aggressively', category: 'sales' },
  { term: 'Lay Down', definition: 'Customer who accepts first offer with no negotiation', category: 'sales' },
  { term: 'Pack', definition: 'Additional profit built into deal structure', category: 'finance' },
  { term: 'Payment Buyer', definition: 'Customer focused on monthly payment vs total price', category: 'sales' },
  { term: 'Rate Buy-Down', definition: 'Paying to lower customer\'s interest rate', category: 'finance' },
  { term: 'Reserve', definition: 'Profit from marking up customer\'s interest rate', category: 'finance' },
  { term: 'Skate', definition: 'Salesperson taking another\'s customer unethically', category: 'process' },
  { term: 'Split', definition: 'Dividing commission between salespeople', category: 'process' },
  { term: 'Stock Number', definition: 'Dealer\'s internal vehicle identification number', category: 'inventory' },
  { term: 'Straw Purchase', definition: 'Illegal - buying vehicle for someone else who can\'t qualify', category: 'process' },
  { term: 'Trade Walk', definition: 'Physical inspection of trade-in vehicle', category: 'sales' },
  { term: 'UCF', definition: 'Used Car Factory - preparing pre-owned vehicles for sale', category: 'inventory' },
]

export function searchGlossary(query: string): GlossaryTerm[] {
  const lowerQuery = query.toLowerCase()
  return glossaryTerms.filter(
    term =>
      term.term.toLowerCase().includes(lowerQuery) ||
      term.definition.toLowerCase().includes(lowerQuery)
  )
}

export function getTermsByCategory(category: GlossaryTerm['category']): GlossaryTerm[] {
  return glossaryTerms.filter(term => term.category === category)
}

export const categories: Array<{ id: GlossaryTerm['category']; label: string }> = [
  { id: 'finance', label: 'Finance' },
  { id: 'sales', label: 'Sales' },
  { id: 'process', label: 'Process' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'product', label: 'Products' },
]
