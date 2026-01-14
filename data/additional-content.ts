// Additional content for v4 enhancements
// F&I Handoff, CSI & Reviews, Follow-Up & Referrals, Warranty Coverage, Inline Scripts

// ============================================
// F&I HANDOFF PROCESS
// ============================================
export const fiHandoff = {
  title: 'F&I Handoff',
  subtitle: 'Smooth transition from sales to finance',
  overview: `The handoff to F&I is a critical moment. Done well, it maintains customer excitement and trust. Done poorly, it can undo all the rapport you've built. Your job is to make this transition seamless and keep the customer comfortable.`,
  
  steps: [
    {
      num: 1,
      title: 'Complete Your Paperwork',
      description: 'Ensure all documents are signed and organized before approaching the desk.',
      icon: 'FileCheck'
    },
    {
      num: 2,
      title: 'Submit to Desk',
      description: 'Present the complete deal jacket to your sales manager for approval.',
      icon: 'Send'
    },
    {
      num: 3,
      title: 'Wait With Customer',
      description: 'Stay with your customer while F&I prepares. Use this time productively.',
      icon: 'Clock'
    }
  ],

  documentChecklist: {
    allDeals: [
      'Signed pencil/worksheet',
      'Completed credit application',
      'Copy of driver\'s license',
      'Tag/title application',
      'Odometer statement',
      'Proof of insurance',
      'VIN verification form',
      'We Owe / You Owe form',
      'Media release form',
      'Privacy notice acknowledgment',
      'Deal recap sheet'
    ],
    newCarsOnly: [
      'Window sticker (Monroney)',
      'Loyalty/conquest rebate verification',
      'Lemon Law acknowledgment'
    ],
    usedCarsOnly: [
      'Carfax/AutoCheck report',
      'Open recall verification',
      'Buyer\'s Guide (FTC)',
      'As-Is disclosure (if applicable)',
      'Book-out sheet'
    ],
    trades: [
      'Flood/water damage certification',
      'Payoff authorization',
      'ACV documentation'
    ]
  },

  timeExpectations: {
    firstFinance: '~15 minutes',
    secondFinance: '45-60 minutes',
    note: 'Wait times vary based on deal complexity and F&I workload'
  },

  customerScript: `"Great news! We're all set on my end. Now [F&I Manager's name] will go over your payment options, warranty coverage, and finalize everything. They're really thorough and will make sure you understand all your options. It usually takes about [time]. I'll be right here if you need anything."`,

  whileWaiting: [
    'Review vehicle features again',
    'Discuss service department hours and first free service',
    'Confirm customer contact information in DriveCentric',
    'Prepare delivery checklist'
  ]
}

// ============================================
// CSI & CUSTOMER REVIEWS
// ============================================
export const csiReviews = {
  title: 'CSI & Customer Reviews',
  subtitle: 'The only score that matters is a 5',
  
  keyFact: {
    text: '5 is the ONLY passing score',
    subtext: 'A 4 is a FAIL in Toyota\'s eyes',
    emphasis: 'There is no "good enough" - only perfect'
  },

  earnPerfectScore: [
    {
      title: 'Set Expectations',
      description: 'Tell customers about the survey upfront. Explain that Toyota values their feedback and a 5 means you did your job right.',
      icon: 'MessageSquare'
    },
    {
      title: 'Fix Issues Immediately',
      description: 'If anything goes wrong, address it BEFORE the survey arrives. Follow up proactively.',
      icon: 'Wrench'
    },
    {
      title: 'Follow Up First',
      description: 'Call before the survey to make sure everything is perfect. This is your chance to catch problems.',
      icon: 'Phone'
    }
  ],

  surveyAreas: [
    {
      area: 'Sales Consultant',
      howToEnsureFive: 'Build genuine rapport, listen actively, don\'t pressure, be knowledgeable, follow through on promises'
    },
    {
      area: 'Dealership Facility',
      howToEnsureFive: 'Keep your workspace clean, offer refreshments, ensure customer comfort, apologize for any wait times'
    },
    {
      area: 'Delivery Process',
      howToEnsureFive: 'Thorough vehicle orientation, answer ALL questions, ensure vehicle is spotless, handle paperwork efficiently'
    },
    {
      area: 'Overall Experience',
      howToEnsureFive: 'Make buying easy and enjoyable, minimize stress, celebrate their purchase, express genuine gratitude'
    },
    {
      area: 'Likelihood to Recommend',
      howToEnsureFive: 'This is the ultimate test - if they would recommend you, you\'ve succeeded. Earn it with exceptional service.'
    }
  ],

  googleReviewScript: `"I really enjoyed working with you today! If you had a great experience, I'd really appreciate it if you could share that on Google. It helps other customers find us, and honestly, it helps my career too. Here's a card with our Google page - just scan the QR code when you have a minute. Thank you so much!"`,

  tips: [
    {
      type: 'success',
      title: 'Proactive Follow-Up',
      content: 'Call within 24 hours of delivery. Ask: "Is everything perfect with your new Toyota?" Address any concerns immediately.'
    },
    {
      type: 'warning',
      title: 'Survey Timing',
      content: 'Surveys typically arrive 3-5 days after delivery. Make your follow-up call before this window.'
    },
    {
      type: 'tip',
      title: 'The CSI Conversation',
      content: 'At delivery, say: "Toyota will send you a survey. If there\'s anything that would prevent you from giving all 5s, let me know right now so I can fix it."'
    }
  ]
}

// ============================================
// FOLLOW-UP & REFERRALS
// ============================================
export const followUp = {
  title: 'Follow-Up & Referrals',
  subtitle: 'The sale doesn\'t end at delivery',

  keyFact: {
    text: 'Referrals close at 2X the rate',
    subtext: 'Your best prospects come from happy customers'
  },

  timeline: [
    { day: 'Day 1', action: 'Thank-you call', script: 'Confirm everything is perfect, answer questions' },
    { day: 'Day 3', action: 'CSI reminder', script: '"Just a reminder - Toyota will send a survey. A 5 is the goal!"' },
    { day: 'Day 7', action: 'Ask for referrals', script: 'Use referral script below' },
    { day: 'Day 30', action: 'First month check-in', script: '"How\'s your new Toyota treating you? Need anything?"' },
    { day: 'Ongoing', action: 'Stay in touch', script: 'Birthday calls, service reminders, anniversary of purchase' }
  ],

  referralScripts: [
    {
      title: 'At Delivery',
      script: `"I really enjoyed working with you! Do you know anyone else who might be in the market for a vehicle? Friends, family, coworkers? I'd love to take care of them the same way I took care of you. Here are a few of my cards - feel free to pass them along."`
    },
    {
      title: 'Follow-Up Call (Day 7)',
      script: `"Hey [Name], it's [Your Name] from Toyota of Coconut Creek. Just checking in on your [Vehicle]. Everything still going great? ... Awesome! Hey, I have a quick question - do you know anyone who might be looking for a new car? I'd really appreciate the referral, and I promise to take great care of them."`
    }
  ],

  orphanOwners: {
    title: 'Orphan Owner Opportunity',
    description: 'When a salesperson leaves, their customers become "orphans." These are YOUR opportunity.',
    tips: [
      'Check with your manager for orphan lists',
      'Reach out with service reminders or equity offers',
      'Build relationships before they\'re in the market',
      'Be their "car person" for life'
    ]
  },

  driveCentricTasks: [
    'Log every customer interaction',
    'Set follow-up tasks with specific dates',
    'Track referral sources',
    'Use birthday and anniversary automations'
  ]
}

// ============================================
// WARRANTY COVERAGE
// ============================================
export const warranties = {
  title: 'Toyota Warranty Coverage',
  subtitle: 'Know what\'s covered to build value',

  newVehicle: {
    title: 'New Toyota Warranty',
    coverages: [
      {
        name: 'Basic Warranty',
        coverage: '3 years / 36,000 miles',
        description: 'Bumper-to-bumper coverage for defects in materials or workmanship',
        includes: 'All components except wear items (tires, brake pads, wiper blades)'
      },
      {
        name: 'Powertrain Warranty',
        coverage: '5 years / 60,000 miles',
        description: 'Engine, transmission, and drivetrain components',
        includes: 'Engine internals, transmission, transfer case, drive axles'
      },
      {
        name: 'Corrosion Perforation',
        coverage: '5 years / Unlimited miles',
        description: 'Rust-through protection for body sheet metal',
        includes: 'Protection against rust perforating from inside out'
      },
      {
        name: 'Hybrid Battery Warranty',
        coverage: '10 years / 150,000 miles',
        description: 'Industry-leading hybrid battery coverage',
        includes: 'HV battery, battery control module, hybrid control module',
        sellingPoint: 'MAJOR competitive advantage - longest in the industry!'
      },
      {
        name: 'Safety Restraint',
        coverage: '5 years / Unlimited miles',
        description: 'Seatbelts and airbag components',
        includes: 'All SRS components including sensors and modules'
      }
    ]
  },

  tcuv: {
    title: 'Toyota Certified Used Vehicles (TCUV)',
    intro: 'Every TCUV goes through a 160+ point inspection and reconditioning process.',
    coverages: [
      {
        name: 'Comprehensive Coverage',
        coverage: '12 months / 12,000 miles',
        description: '160+ component coverage from delivery date',
        includes: 'Engine, transmission, steering, brakes, electrical, A/C, and more',
        deductible: '$0 deductible'
      },
      {
        name: 'Powertrain Coverage',
        coverage: '7 years / 100,000 miles',
        description: 'From original in-service date',
        includes: 'Engine, transmission, drivetrain components',
        deductible: '$0 deductible'
      }
    ],
    additionalBenefits: [
      '1-year of 24/7 Roadside Assistance',
      '160+ point quality inspection',
      'Vehicle history report included',
      'Limited warranty transferable to new owner'
    ]
  },

  talkingPoints: {
    newCar: [
      'Toyota backs every new vehicle with comprehensive warranty coverage',
      'The hybrid battery warranty is 10 years/150,000 miles - longest in the industry',
      'You\'re covered bumper-to-bumper for 3 years or 36,000 miles',
      'Peace of mind comes standard with every Toyota'
    ],
    tcuv: [
      'This vehicle went through a rigorous 160+ point inspection',
      'You get $0 deductible on warranty repairs',
      'The powertrain is covered until 100,000 miles from original in-service',
      'It\'s not just used - it\'s Toyota Certified'
    ],
    hybridBattery: [
      '10 years/150,000 miles - that\'s confidence in the technology',
      'Toyota has been making hybrids since 1997 - over 25 years of perfection',
      'Most hybrid batteries last the life of the vehicle',
      'This is the longest hybrid battery warranty in the industry'
    ]
  }
}

// ============================================
// INLINE PHONE SCRIPTS
// ============================================
export const phoneScripts = {
  firePhone: {
    title: 'Fire Phone Script',
    purpose: 'Hot leads - respond within 5 minutes',
    dialog: [
      { speaker: 'sales', text: 'Hi, this is [Name] from Toyota of Coconut Creek. Am I speaking with [Customer Name]?' },
      { speaker: 'customer', text: 'Yes, this is [Name].' },
      { speaker: 'sales', text: 'Great! I saw you were looking at the [Vehicle] on our website. That\'s a fantastic choice. Are you still in the market?' },
      { speaker: 'customer', text: 'Yes, I\'m interested.' },
      { speaker: 'sales', text: 'Excellent! I have that vehicle here and available. When would be a good time for you to come in and take a look? I have availability today at [time] or tomorrow at [time].' },
      { speaker: 'customer', text: '[Responds with time]' },
      { speaker: 'sales', text: 'Perfect! I\'ll reserve that vehicle for you and have it ready when you arrive. Can I get a good cell number to text you the address and confirm the appointment?' }
    ],
    tips: [
      'Respond within 5 minutes - these leads are HOT',
      'Create urgency but not pressure',
      'Always offer specific appointment times',
      'Get their cell number for text confirmation'
    ]
  },

  dirtyThirty: {
    title: 'Dirty Thirty Call Script',
    purpose: '30-day follow-up on unsold prospects',
    dialog: [
      { speaker: 'sales', text: 'Hi [Customer Name], this is [Your Name] from Toyota of Coconut Creek. We spoke about a month ago when you were looking at the [Vehicle]. How are you doing?' },
      { speaker: 'customer', text: 'I\'m doing well, thanks.' },
      { speaker: 'sales', text: 'I wanted to reach out because I was thinking about you. Did you ever find what you were looking for?' },
      { speaker: 'instruction', text: '[If NO - they haven\'t bought yet]' },
      { speaker: 'sales', text: 'Well, I\'d love to help you find the perfect vehicle. We\'ve gotten some great new inventory in, and I have some options I think would be perfect for you. When would be a good time to come back in?' },
      { speaker: 'instruction', text: '[If YES - they bought elsewhere]' },
      { speaker: 'sales', text: 'Congratulations! I hope you love it. Hey, if you ever need anything - service, parts, or know anyone looking for a Toyota - keep me in mind. I\'d love to earn your business next time.' }
    ],
    tips: [
      'These customers have already shown interest',
      'Be friendly, not pushy',
      'If they bought elsewhere, stay positive - they might have referrals',
      'Log the outcome in DriveCentric'
    ]
  },

  missedAppointment: {
    title: 'Missed Appointment Script',
    purpose: 'Follow up on no-shows',
    dialog: [
      { speaker: 'sales', text: 'Hi [Customer Name], this is [Your Name] from Toyota of Coconut Creek. I had you on my calendar for today at [time] and wanted to make sure everything is okay.' },
      { speaker: 'customer', text: '[Responds - usually an excuse or apology]' },
      { speaker: 'sales', text: 'No problem at all - life happens! I still have the [Vehicle] you were interested in. Would tomorrow or [day] work better for you to come by?' },
      { speaker: 'instruction', text: '[If they\'re still interested, reschedule]' },
      { speaker: 'sales', text: 'Great! I\'ll put you down for [new time]. I\'ll send you a text to confirm. Is this the best number to reach you?' }
    ],
    tips: [
      'Don\'t make them feel guilty',
      'Life happens - be understanding',
      'Immediately offer to reschedule',
      'Send a text confirmation after the call'
    ]
  },

  unsoldTraffic: {
    title: 'Unsold Traffic Script',
    purpose: 'Same-day follow-up for customers who left without buying',
    dialog: [
      { speaker: 'sales', text: 'Hi [Customer Name], this is [Your Name] from Toyota of Coconut Creek. You came in earlier today looking at the [Vehicle]. I wanted to thank you for stopping by and see if you had any other questions.' },
      { speaker: 'customer', text: '[Responds]' },
      { speaker: 'sales', text: 'I understand you want to think it over. That\'s smart - this is a big decision. Is there anything specific I can help clarify? Sometimes people have questions after they leave that I can answer over the phone.' },
      { speaker: 'instruction', text: '[Address their concern, then]' },
      { speaker: 'sales', text: 'I\'d love to earn your business. What would it take to get you back in here to finalize things?' }
    ],
    tips: [
      'Call within 1-2 hours of them leaving',
      'Ask what\'s holding them back',
      'Address concerns directly',
      'Create a reason to come back (manager special, limited availability, etc.)'
    ]
  },

  serviceToSales: {
    title: 'Service to Sales Script',
    purpose: 'Converting service customers to sales prospects',
    dialog: [
      { speaker: 'sales', text: 'Hi [Customer Name], this is [Your Name] from the sales department at Toyota of Coconut Creek. I see you\'re here getting your [Year Vehicle] serviced. How\'s it treating you?' },
      { speaker: 'customer', text: '[Responds about their vehicle]' },
      { speaker: 'sales', text: 'That\'s great! I wanted to let you know that with your trade-in value right now, you might have some nice equity built up. Have you thought about upgrading to something newer with the latest safety features?' },
      { speaker: 'instruction', text: '[If interested]' },
      { speaker: 'sales', text: 'While your car is being serviced, would you like me to show you some of the new models? I can also get you a quick trade value - no obligation, just information.' }
    ],
    tips: [
      'Service customers already trust the dealership',
      'They\'re captive audience while waiting',
      'Focus on equity and upgrades, not problems with their car',
      'Offer to show them around while they wait'
    ]
  }
}

// ============================================
// 15 DISCOVERY QUESTIONS
// ============================================
export const discoveryQuestions = [
  { question: 'What brings you in today?', purpose: 'Open-ended, lets them tell their story' },
  { question: 'What are the most important things to you in your next vehicle?', purpose: 'Identifies hot buttons and priorities' },
  { question: 'How will you primarily use this vehicle?', purpose: 'Commute, family, work - helps match features' },
  { question: 'When are you looking to make a purchase?', purpose: 'Urgency and timeline' },
  { question: 'What\'s your budget or target payment range?', purpose: 'Sets financial expectations' },
  { question: 'Are you looking to finance, lease, or pay cash?', purpose: 'Determines deal structure' },
  { question: 'Do you have a vehicle to trade in?', purpose: 'Opens trade conversation early' },
  { question: 'Do you have a down payment in mind?', purpose: 'Helps structure the deal' },
  { question: 'What\'s most important: price, payments, reliability, or features?', purpose: 'Prioritizes their concerns' },
  { question: 'What do you like about your current vehicle? What would you change?', purpose: 'Reveals pain points and preferences' },
  { question: 'Have you researched any specific makes or models?', purpose: 'Shows where they are in the process' },
  { question: 'Are there any must-have features or deal-breakers?', purpose: 'Identifies non-negotiables' },
  { question: 'Are you replacing a vehicle or adding one?', purpose: 'Affects urgency and timing' },
  { question: 'Is anyone else involved in this decision?', purpose: 'Identifies all decision-makers' },
  { question: 'Who will be the primary driver?', purpose: 'Ensures right fit for the right person' }
]

// ============================================
// OFFER THE SWITCH
// ============================================
export const offerTheSwitch = {
  title: 'Offer the Switch',
  purpose: 'Move customers from new to quality pre-owned when appropriate',
  
  theSwitch: `"If I could save you $5,000-$7,000 on the purchase price, or $100-$200 per month on payments, would you consider a quality pre-owned Toyota that's been thoroughly inspected and comes with warranty coverage?"`,

  whenToUse: [
    'Customer is payment-focused and struggling to hit their target on new',
    'Credit challenges make new car approval difficult',
    'Customer wants more features than they can afford new',
    'Negotiation is stuck and you need a new approach'
  ],

  qualifyingScript: `"So just to make sure I understand - you're open to pre-owned as long as it meets your standards for quality and comes with some protection. Is that right? Great, let me show you some options that I think will really impress you."`,

  tips: [
    { type: 'success', title: 'Position as an upgrade', content: 'They get MORE car for less money - that\'s a win, not a compromise.' },
    { type: 'tip', title: 'Emphasize TCUV', content: 'Toyota Certified gives them warranty coverage and peace of mind.' },
    { type: 'warning', title: 'Read the room', content: 'Some customers are set on new. Don\'t push if they\'re not receptive.' }
  ]
}

// ============================================
// L.A.R.C. OBJECTION HANDLING METHOD
// ============================================
export const larcMethod = {
  title: 'L.A.R.C. Objection Handling',
  subtitle: 'Listen, Acknowledge, Respond, Close',
  
  keyFact: {
    text: 'Average sale happens after 5 "no"s',
    subtext: 'Most salespeople give up after 1-2'
  },

  steps: [
    { letter: 'L', name: 'Listen', description: 'Let them finish. Don\'t interrupt. Understand the real concern.' },
    { letter: 'A', name: 'Acknowledge', description: 'Show empathy. "I understand..." or "That makes sense..."' },
    { letter: 'R', name: 'Respond', description: 'Address the objection directly with facts, not arguments.' },
    { letter: 'C', name: 'Close', description: 'Ask for the next step. Don\'t leave it open-ended.' }
  ],

  commonObjections: [
    {
      objection: '"I need to think about it"',
      response: {
        listen: 'Let them explain what specifically they need to think about.',
        acknowledge: '"I completely understand - this is a big decision and you want to make sure it\'s right."',
        respond: '"What specific concerns can I help address right now? Sometimes talking it through helps."',
        close: '"If I could address those concerns today, would you be ready to move forward?"'
      }
    },
    {
      objection: '"I need to talk to my spouse"',
      response: {
        listen: 'Understand if this is genuine or a stall tactic.',
        acknowledge: '"Absolutely - it\'s important that you\'re both comfortable with this decision."',
        respond: '"Would it help if we gave them a call right now? Or I could put together all the details for you to share."',
        close: '"What time works best for you both to come back in together?"'
      }
    },
    {
      objection: '"I found it cheaper online"',
      response: {
        listen: 'Find out where and what the exact price includes.',
        acknowledge: '"I appreciate you doing your research - you\'re a smart shopper."',
        respond: '"Let\'s look at that together. Often online prices don\'t include fees, or the vehicle isn\'t actually available. Plus, with us you get [local benefits, service, warranty support]."',
        close: '"If I can match or beat that value with everything included, can we earn your business today?"'
      }
    },
    {
      objection: '"I\'m not buying today"',
      response: {
        listen: 'Understand what\'s preventing them from buying.',
        acknowledge: '"I hear you - there\'s no pressure here."',
        respond: '"I\'m curious though - if everything was perfect, is there any reason you wouldn\'t want to drive home in your new car today?"',
        close: '"Let\'s at least get you numbers so you know exactly where you stand. Then you can decide on your timeline."'
      }
    },
    {
      objection: '"My trade is worth more"',
      response: {
        listen: 'Find out where they got their value (KBB, offer, etc.).',
        acknowledge: '"I understand - your car has been good to you and you want fair value."',
        respond: '"Let me show you exactly how we arrived at this number using current market data. [Show vAuto appraisal]. We base it on real transactions, not estimates."',
        close: '"Based on the market data, this is a strong offer. Can we move forward with this?"'
      }
    },
    {
      objection: '"The payment is too high"',
      response: {
        listen: 'Find out what payment they\'re targeting.',
        acknowledge: '"I want to get you a payment that works for your budget."',
        respond: '"Let\'s look at some options. We could adjust the term, look at a different model, or explore pre-owned. What\'s most important to you?"',
        close: '"If I can get you to [target payment], are we good to go?"'
      }
    },
    {
      objection: '"I\'m just looking"',
      response: {
        listen: 'This is usually a defense mechanism. Be patient.',
        acknowledge: '"Absolutely, that\'s what we\'re here for. No pressure at all."',
        respond: '"While you\'re looking, would it help if I pointed out some things? I can answer questions and give you information to help with your research."',
        close: '"What specifically brought you in today? Maybe I can help narrow down what to look at."'
      }
    },
    {
      objection: '"I can get a better rate at my bank"',
      response: {
        listen: 'Find out what rate they\'re quoting.',
        acknowledge: '"It\'s great that you have a relationship with your bank."',
        respond: '"We work with multiple lenders and can often match or beat bank rates. Plus, we can handle everything here in one place. What rate did they offer you?"',
        close: '"If I can match that rate, would you prefer the convenience of handling everything here today?"'
      }
    }
  ]
}
