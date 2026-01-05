export interface Objection {
  id: string
  category: 'price' | 'time' | 'trade' | 'trust' | 'payment'
  objection: string
  response: string
  tips?: string[]
}

export const objections: Objection[] = [
  {
    id: 'think-about-it',
    category: 'time',
    objection: 'I need to think about it',
    response: 'I completely understand. What specifically would you like to think about? Is it the vehicle, the numbers, or something else? I want to make sure you have all the information you need.',
    tips: [
      'Isolate the real concern',
      'Offer to address any unanswered questions',
      'Create urgency without pressure',
    ],
  },
  {
    id: 'payment-too-high',
    category: 'payment',
    objection: 'The payment is too high',
    response: 'What payment range works for your budget? We can adjust down payment, term, or look at alternatives. What\'s most important - lower payment or overall cost?',
    tips: [
      'Get a specific target number',
      'Discuss term adjustments',
      'Consider different vehicle options',
    ],
  },
  {
    id: 'trade-worth-more',
    category: 'trade',
    objection: 'My trade is worth more',
    response: 'Our appraisal is based on current market data. Let me show you the comparables. Is there something about your vehicle I might have missed?',
    tips: [
      'Use market data to support valuation',
      'Ask about condition or features not noted',
      'Get manager involved if needed',
    ],
  },
  {
    id: 'talk-to-spouse',
    category: 'time',
    objection: 'I need to talk to my spouse',
    response: 'Absolutely! Would you like to video call them now so they can see it? Or I can prepare everything so your conversation at home is easy.',
    tips: [
      'Offer to include them via phone/video',
      'Prepare a summary sheet to take home',
      'Schedule a follow-up appointment',
    ],
  },
  {
    id: 'cheaper-elsewhere',
    category: 'price',
    objection: 'I can get it cheaper elsewhere',
    response: 'Let\'s look at that offer together - sometimes the numbers look similar but terms differ. Do you have their quote? Let\'s compare apples to apples.',
    tips: [
      'Ask to see the other offer',
      'Compare total cost, not just price',
      'Highlight value-adds we include',
    ],
  },
  {
    id: 'sleep-on-it',
    category: 'time',
    objection: 'I\'m going to sleep on it',
    response: 'I respect that. Can you help me understand what\'s holding you back? I want to make sure when you sleep on it, you have all the facts.',
    tips: [
      'Uncover the real objection',
      'Provide clear next steps',
      'Get commitment for follow-up timing',
    ],
  },
  {
    id: 'out-of-budget',
    category: 'price',
    objection: 'This is out of our budget',
    response: 'I appreciate your honesty. Let\'s find something that works. What range are you comfortable with? We have great options at every price point.',
    tips: [
      'Get specific budget parameters',
      'Present alternative vehicles',
      'Focus on value within their range',
    ],
  },
  {
    id: 'not-making-rash-decision',
    category: 'time',
    objection: 'I\'m not making a rash decision',
    response: 'And you shouldn\'t! Smart buying takes consideration. You\'ve done your research and test driven - what additional information would help you feel confident?',
    tips: [
      'Acknowledge their smart approach',
      'Review what they\'ve already done',
      'Identify remaining questions',
    ],
  },
  {
    id: 'need-more-time',
    category: 'time',
    objection: 'I need more time to decide',
    response: 'Of course. What timeline are you working with? I want to make sure any incentives or specials are still available when you\'re ready.',
    tips: [
      'Understand their timeline',
      'Create urgency around expiring offers',
      'Schedule specific follow-up',
    ],
  },
  {
    id: 'dont-trust-salespeople',
    category: 'trust',
    objection: 'I don\'t trust salespeople',
    response: 'I understand that concern. My job isn\'t to sell you something - it\'s to help you find the right vehicle. Ask me anything, and I\'ll give you a straight answer.',
    tips: [
      'Build trust through transparency',
      'Encourage questions',
      'Don\'t oversell or pressure',
    ],
  },
  {
    id: 'best-price',
    category: 'price',
    objection: 'Is that your best price?',
    response: 'I always want to give you our best deal. Let me check with my manager to see what we can do. What price would earn your business today?',
    tips: [
      'Get their target number',
      'Involve management',
      'Reinforce value of the deal',
    ],
  },
  {
    id: 'term-too-long',
    category: 'payment',
    objection: 'The term is too long',
    response: 'I agree shorter terms save money on interest. Let\'s look at what a shorter term would mean for your payment. We can also discuss putting more down to shorten it.',
    tips: [
      'Show total cost difference',
      'Discuss down payment options',
      'Balance payment comfort with term length',
    ],
  },
  {
    id: 'price-higher-than-theirs',
    category: 'price',
    objection: 'Your price is higher than theirs',
    response: 'I want to earn your business. Can you share their offer? Sometimes the bottom line differs from the sticker. Let\'s make sure we\'re comparing everything.',
    tips: [
      'Request to see the competitor offer',
      'Look for hidden fees in their quote',
      'Highlight our value-adds',
    ],
  },
  {
    id: 'too-expensive',
    category: 'price',
    objection: 'It\'s too expensive',
    response: 'I hear you. Help me understand - is it the vehicle price, the payment, or both? There might be ways to get you into this vehicle within your comfort zone.',
    tips: [
      'Clarify price vs payment concern',
      'Offer alternatives',
      'Discuss value justification',
    ],
  },
  {
    id: 'talk-to-someone-else',
    category: 'time',
    objection: 'I need to talk to someone else',
    response: 'Who else is involved in this decision? Would it help if I prepared some information for them, or could we include them in our conversation?',
    tips: [
      'Identify the decision maker',
      'Offer to include them',
      'Prepare take-home materials',
    ],
  },
  {
    id: 'no-upfront-fees',
    category: 'payment',
    objection: 'I don\'t want to pay up-front fees',
    response: 'Let me break down what those fees cover. Some are required by law, but we can discuss rolling others into financing if that helps your cash flow.',
    tips: [
      'Explain mandatory vs optional fees',
      'Discuss financing options',
      'Be transparent about all costs',
    ],
  },
  {
    id: 'not-enough-for-trade',
    category: 'trade',
    objection: 'You\'re not giving me enough for my trade',
    response: 'I understand. Our offer is based on market data and condition. Can you tell me more about what you expected? Maybe there\'s something we missed in our appraisal.',
    tips: [
      'Show supporting data',
      'Review condition assessment',
      'Get manager TO if needed',
    ],
  },
]

export const objectionCategories = [
  { id: 'all', label: 'All Objections' },
  { id: 'price', label: 'Price' },
  { id: 'payment', label: 'Payment' },
  { id: 'time', label: 'Time/Stall' },
  { id: 'trade', label: 'Trade' },
  { id: 'trust', label: 'Trust' },
] as const

export function getObjectionsByCategory(category: string): Objection[] {
  if (category === 'all') return objections
  return objections.filter(obj => obj.category === category)
}

export function getRandomObjections(count: number, category?: string): Objection[] {
  const filtered = category && category !== 'all' 
    ? objections.filter(obj => obj.category === category)
    : objections
  return [...filtered].sort(() => Math.random() - 0.5).slice(0, count)
}
