export interface StepData {
  stepNum: number
  title: string
  goal: string
  duration: string
  icon: string
  keyMetric?: string
  overview: string
  needsAssessmentQuestions?: {
    question: string
    purpose: string
  }[]
  keyActions: {
    title: string
    description: string
    icon?: string
  }[]
  scripts: {
    label: string
    lines: {
      speaker: 'sales' | 'customer' | 'instruction'
      text: string
    }[]
  }[]
  tips: {
    type: 'tip' | 'warning' | 'success'
    title: string
    content: string
  }[]
  checklist: string[]
  commonMistakes: string[]
  toolCallouts?: {
    tool: 'drivecentric' | 'vauto' | 'cdk' | 'window-sticker'
    title: string
    description: string
  }[]
  relatedForms?: string[] // IDs from documents.ts
  transitionLine: string
  nextStepPreview: string
}

export const stepsData: StepData[] = [
  {
    stepNum: 1,
    title: 'Meet & Greet',
    goal: 'Build rapport and establish trust within the first 30 seconds',
    duration: '2-5 minutes',
    icon: '👋',
    keyMetric: '40% of sale success determined here',
    overview: `First impressions are everything in automotive sales. The Meet & Greet sets the tone for the entire customer experience. Studies show that customers decide within the first 10 seconds whether they trust you. Your goal is to make them feel welcome, relaxed, and confident that they're in good hands.

A proper Meet & Greet isn't about jumping into a sales pitch—it's about creating a human connection. Remember: people buy from people they like and trust.`,
    keyActions: [
      {
        title: 'Acknowledge Immediately',
        description: 'Make eye contact and smile within 10 seconds of seeing the customer, even if you\'re with someone else. A simple wave and "I\'ll be right with you!" goes a long way.',
        icon: '👁️'
      },
      {
        title: 'Professional Appearance',
        description: 'Dress code compliance, name badge visible, confident posture. Your appearance speaks before you do.',
        icon: '👔'
      },
      {
        title: 'Warm Greeting',
        description: 'Enthusiastic but not overwhelming. Match the customer\'s energy level. Some want high energy, others prefer calm professionalism.',
        icon: '😊'
      },
      {
        title: 'Get Their Name',
        description: 'Learn their name and use it naturally 2-3 times in the conversation. It shows you\'re paying attention and builds connection.',
        icon: '📝'
      },
      {
        title: 'Put Them at Ease',
        description: 'Acknowledge their time is valuable. Set expectations: "I\'m here to help you find the right vehicle, no pressure." This reduces defensive barriers.',
        icon: '🤝'
      },
    ],
    scripts: [
      {
        label: 'Standard Opening',
        lines: [
          { speaker: 'sales', text: 'Welcome to Al Hendrickson Toyota! How are you doing today?' },
          { speaker: 'customer', text: 'Good, thanks. Just looking around.' },
          { speaker: 'sales', text: 'Absolutely, that\'s what we\'re here for. I\'m [Name], and you are?' },
          { speaker: 'customer', text: 'I\'m John.' },
          { speaker: 'sales', text: 'Great to meet you, John! Are you here to see anyone specific today, or is this your first time visiting us?' },
        ]
      },
      {
        label: 'Be-Back Customer',
        lines: [
          { speaker: 'sales', text: 'Welcome back! Good to see you again. Did you get a chance to think things over?' },
          { speaker: 'customer', text: 'Yeah, we did some research...' },
          { speaker: 'sales', text: 'That\'s great—you\'re making an informed decision. What questions came up that I can help with?' },
        ]
      }
    ],
    tips: [
      {
        type: 'tip',
        title: 'The 70/30 Rule Starts Here',
        content: 'Let the customer do 70% of the talking from the very beginning. Ask open-ended questions and actively listen. The more they talk, the more you learn.'
      },
      {
        type: 'warning',
        title: 'Never Say "Can I Help You?"',
        content: 'This invites "No, just looking." Instead, make a statement or ask an engaging question like "What brings you in today?"'
      },
      {
        type: 'success',
        title: 'Body Language Matters',
        content: 'Smile genuinely, offer a firm handshake if they extend first, keep an open stance (no crossed arms), and maintain comfortable eye contact.'
      }
    ],
    checklist: [
      'Acknowledged customer within 10 seconds',
      'Introduced myself with name and position',
      'Got customer\'s name and used it',
      'Offered a business card',
      'Set expectations (no pressure, here to help)',
      'Offered refreshments if appropriate',
      'Identified who else is involved in the decision',
    ],
    commonMistakes: [
      'Approaching with a clipboard or immediately asking about budget',
      'Talking too much about yourself or the dealership',
      'Jumping straight into inventory without building rapport',
      'Being too pushy or following too closely',
      'Not identifying all decision-makers present',
    ],
    transitionLine: '"Let me ask you a few questions so I can point you in the right direction..."',
    nextStepPreview: 'Now that we\'ve connected, it\'s time to learn about their needs in the Qualify step.',
  },
  {
    stepNum: 2,
    title: 'Qualify / Needs Assessment',
    goal: 'Understand their needs, wants, timeline, and buying situation',
    duration: '10-15 minutes',
    icon: '🎯',
    keyMetric: 'Identify hot buttons for later',
    overview: `The Qualify step is where you become a consultant, not a salesperson. Your job is to understand everything about their situation: what they need, what they want, who\'s involved in the decision, when they\'re looking to buy, and what their budget looks like.

The information you gather here will be gold throughout the rest of the process. Take notes—it shows you care and helps you remember important details.`,
    needsAssessmentQuestions: [
      { question: 'What are you currently driving?', purpose: 'Understand their baseline and potential trade-in' },
      { question: 'What do you like most about your current vehicle?', purpose: 'Identify must-have features' },
      { question: 'What would you change about your current vehicle?', purpose: 'Find pain points to solve' },
      { question: 'What will this vehicle primarily be used for?', purpose: 'Commute, family, work, recreation' },
      { question: 'How many miles do you drive per week/year?', purpose: 'Fuel economy importance' },
      { question: 'Who else will be driving this vehicle?', purpose: 'Multiple driver considerations' },
      { question: 'Do you have children? Car seats?', purpose: 'Safety and space needs' },
      { question: 'What features are most important to you?', purpose: 'Technology, safety, comfort priorities' },
      { question: 'Is there anyone else involved in this decision?', purpose: 'Identify all decision makers' },
      { question: 'When do you need to make a decision by?', purpose: 'Timeline and urgency' },
      { question: 'Are you looking to buy or lease?', purpose: 'Ownership preference' },
      { question: 'Do you have a monthly payment in mind?', purpose: 'Budget range' },
      { question: 'Will you be trading in your current vehicle?', purpose: 'Trade-in equity situation' },
      { question: 'How did you hear about us?', purpose: 'Marketing attribution' },
      { question: 'Have you looked at any other vehicles or dealerships?', purpose: 'Competition awareness' },
    ],
    keyActions: [
      {
        title: 'Ask Open-Ended Questions',
        description: 'Use who, what, when, where, why, and how questions. "What will this vehicle primarily be used for?" opens conversation better than "Do you need an SUV?"',
        icon: '❓'
      },
      {
        title: 'Identify Hot Buttons',
        description: 'Listen for emotional triggers: safety for family, reliability concerns, technology wants, style preferences. These become your selling points later.',
        icon: '🔥'
      },
      {
        title: 'Qualify Timeline',
        description: 'Are they buying today, this week, this month? "When do you need to have this decision made?" helps you gauge urgency.',
        icon: '📅'
      },
      {
        title: 'Understand Budget',
        description: 'Payment-focused or price-focused? "Do you have a monthly payment in mind, or are you more focused on the overall price?"',
        icon: '💰'
      },
      {
        title: 'Identify All Decision Makers',
        description: '"Is there anyone else involved in this decision who should be here today?" This prevents "I need to talk to my spouse" later.',
        icon: '👥'
      },
    ],
    scripts: [
      {
        label: 'Discovery Questions Flow',
        lines: [
          { speaker: 'sales', text: 'So, John, tell me a little about what brings you in today. What are you currently driving?' },
          { speaker: 'customer', text: 'A 2019 Camry. Looking to get into something bigger.' },
          { speaker: 'sales', text: 'Got it—looking for more space. Is that for family, cargo, or both?' },
          { speaker: 'customer', text: 'We have two kids now, need more room.' },
          { speaker: 'sales', text: 'Congratulations! How old are the kids? I ask because some features like built-in sunshades and easy-clean surfaces make a huge difference with little ones.' },
        ]
      },
      {
        label: 'Timeline & Budget',
        lines: [
          { speaker: 'sales', text: 'When are you looking to make a decision? Is there a specific timeframe?' },
          { speaker: 'customer', text: 'Probably within the next couple weeks.' },
          { speaker: 'sales', text: 'That\'s great—gives us time to find exactly what you need. In terms of budget, are you more focused on the monthly payment or the overall price?' },
          { speaker: 'customer', text: 'The monthly payment is more important to us.' },
          { speaker: 'sales', text: 'Perfect. Do you have a range in mind that works for your budget?' },
        ]
      }
    ],
    tips: [
      {
        type: 'tip',
        title: 'Take Notes',
        content: 'Write down key details. It shows you\'re listening and helps you remember their hot buttons. Plus, you can reference them later: "You mentioned safety was important..."'
      },
      {
        type: 'warning',
        title: 'Don\'t Interrogate',
        content: 'Keep it conversational. Sprinkle questions naturally throughout dialogue. If it feels like an interview, you\'re doing it wrong.'
      },
      {
        type: 'success',
        title: 'Listen for Pain Points',
        content: 'What frustrates them about their current vehicle? These are opportunities: "It\'s too small" = space is a priority. "It\'s always breaking down" = reliability matters.'
      }
    ],
    checklist: [
      'Asked what they\'re currently driving',
      'Identified primary use (commute, family, work, etc.)',
      'Learned who else is involved in the decision',
      'Understood their timeline',
      'Discussed budget (payment vs. price focus)',
      'Asked about trade-in situation',
      'Identified 2-3 hot buttons',
      'Took notes on key points',
    ],
    commonMistakes: [
      'Asking too many closed-ended (yes/no) questions',
      'Not listening—just waiting to talk',
      'Assuming you know what they want',
      'Forgetting to ask about the trade',
      'Moving to vehicle selection before fully qualifying',
    ],
    transitionLine: '"Based on what you\'ve told me, I have a couple vehicles in mind. Let me show you..."',
    nextStepPreview: 'Armed with their needs, you\'ll now select the perfect vehicle to show them.',
  },
  {
    stepNum: 3,
    title: 'Vehicle Selection',
    goal: 'Select the right vehicle(s) based on their qualified needs',
    duration: '5-10 minutes',
    icon: '🚗',
    keyMetric: 'Limit to 2-3 options maximum',
    overview: `Now it's time to match their needs to inventory. The key here is to select vehicles strategically—not just show them everything on the lot. Too many options leads to analysis paralysis.

Use what you learned in qualification to guide your selection. If they said safety is paramount for their kids, lead with our safety technology. If they mentioned wanting to look good, emphasize style and design.`,
    keyActions: [
      {
        title: 'Review Your Notes',
        description: 'Before walking to inventory, mentally review what you learned. What are their hot buttons? What\'s the budget? New or used?',
        icon: '📋'
      },
      {
        title: 'Limit Options',
        description: 'Show 2-3 vehicles maximum. "I\'ve picked out two that I think are perfect for what you described. Let me show you why."',
        icon: '✌️'
      },
      {
        title: 'Lead with Best Fit',
        description: 'Start with the vehicle that best matches their needs, not the one with the highest profit. Trust is more valuable than one deal.',
        icon: '🎯'
      },
      {
        title: 'Know Your Inventory',
        description: 'Be familiar with what\'s in stock, incoming units, and competitive advantages of each model.',
        icon: '📊'
      },
      {
        title: 'Plant Seeds',
        description: 'As you walk to the vehicle, mention key features: "This one has the Toyota Safety Sense 3.0 you\'ll love for family driving."',
        icon: '🌱'
      },
    ],
    scripts: [
      {
        label: 'Presenting Options',
        lines: [
          { speaker: 'sales', text: 'Based on what you\'ve told me—growing family, need more space, safety is a priority—I\'ve got two vehicles I think you\'ll love.' },
          { speaker: 'sales', text: 'First is the Highlander. It\'s our most popular family SUV—three rows, standard Toyota Safety Sense, and it\'s incredibly reliable.' },
          { speaker: 'sales', text: 'Second is the Grand Highlander. If you want even more space, this gives you that plus some premium features.' },
          { speaker: 'sales', text: 'Let me show you both and you can see which feels right.' },
        ]
      },
      {
        label: 'If They Ask About Price',
        lines: [
          { speaker: 'customer', text: 'How much are these?' },
          { speaker: 'sales', text: 'Great question—let\'s make sure it\'s the right vehicle first. Once we know this is the one, we\'ll work together on the numbers. Does that sound fair?' },
        ]
      }
    ],
    tips: [
      {
        type: 'tip',
        title: 'Use "Perfect For" Language',
        content: '"This would be perfect for your situation because..." connects features to their stated needs.'
      },
      {
        type: 'warning',
        title: 'Avoid Information Overload',
        content: 'Don\'t rattle off every spec. Focus on 2-3 features that directly relate to their hot buttons.'
      },
      {
        type: 'success',
        title: 'Walk and Talk',
        content: 'As you walk to the vehicle, build anticipation: "Wait until you see this color in person—it\'s even better than the photos."'
      }
    ],
    checklist: [
      'Selected 2-3 vehicles based on qualification',
      'Checked vehicle availability and location',
      'Verified vehicle is clean and presentable',
      'Grabbed keys if needed',
      'Reviewed key features to highlight',
      'Connected features to customer\'s hot buttons',
    ],
    commonMistakes: [
      'Showing too many vehicles',
      'Showing the wrong vehicle first',
      'Not knowing where the vehicle is located',
      'Showing a dirty or unprepared vehicle',
      'Focusing on features they didn\'t ask about',
    ],
    transitionLine: '"Let me walk you through this vehicle and show you exactly why I think it\'s perfect for you..."',
    nextStepPreview: 'Time to showcase the vehicle with a proper walkaround presentation.',
  },
  {
    stepNum: 4,
    title: 'Walkaround / Presentation',
    goal: 'Build value and excitement through a professional vehicle presentation',
    duration: '15-20 minutes',
    icon: '🔍',
    keyMetric: 'Touch every feature you mention',
    overview: `The walkaround is your chance to showcase the vehicle and build value. This isn't about listing features—it's about connecting features to benefits that matter to THIS customer.

Use the 6-point walkaround method: Front, Driver Side, Rear, Passenger Side, Engine, and Interior. Touch every feature you mention—physical engagement increases retention by 50%.`,
    keyActions: [
      {
        title: '6-Point Walkaround',
        description: 'Systematic approach: Front → Driver Side → Rear → Passenger Side → Engine/Under Hood → Interior. This ensures you cover everything.',
        icon: '🔄'
      },
      {
        title: 'Feature-Benefit-Hot Button',
        description: 'Connect features to benefits, then to their specific need: "This has blind spot monitoring (feature), which alerts you to cars you can\'t see (benefit)—perfect for keeping the kids safe (hot button)."',
        icon: '🎯'
      },
      {
        title: 'Touch Everything',
        description: 'Physically touch and demonstrate each feature. Open doors, adjust seats, show storage. Physical interaction creates ownership feelings.',
        icon: '✋'
      },
      {
        title: 'Involve the Customer',
        description: '"Go ahead, sit in the driver\'s seat and adjust it to your comfort. How does that feel?" Get them touching the vehicle.',
        icon: '🤝'
      },
      {
        title: 'Build Value with Programs',
        description: 'Integrate ToyotaCare, Toyoguard Platinum, and TSS 3.0 into your presentation. These are included values they won\'t get elsewhere.',
        icon: '💎'
      },
    ],
    scripts: [
      {
        label: 'Starting the Walkaround',
        lines: [
          { speaker: 'sales', text: 'Let me show you around this vehicle. I\'ll point out some features I think you\'ll really appreciate based on what you told me.' },
          { speaker: 'sales', text: 'Starting up front here—see this bold front grille? It\'s not just styling. Notice these openings provide better engine cooling for reliability.' },
        ]
      },
      {
        label: 'TSS 3.0 Presentation',
        lines: [
          { speaker: 'sales', text: 'Now, you mentioned safety is your top priority with the kids. Look here—behind this emblem is the radar and camera for Toyota Safety Sense 3.0.' },
          { speaker: 'sales', text: 'It\'s like having a co-pilot that\'s always watching. If it detects a potential collision, it can alert you and even brake automatically.' },
          { speaker: 'sales', text: 'With pedestrian detection, even if a child runs into the street, the system can help react faster than you can. It\'s standard on every new Toyota.' },
        ]
      },
      {
        label: 'Interior Presentation',
        lines: [
          { speaker: 'sales', text: 'Go ahead and have a seat in the driver\'s seat. I want you to see how it feels.' },
          { speaker: 'instruction', text: '[Let them sit and adjust]' },
          { speaker: 'sales', text: 'How\'s the visibility? One thing families love is the commanding seating position—you can see everything around you.' },
          { speaker: 'sales', text: 'Check out this center console storage—perfect for keeping snacks and toys within reach but out of sight.' },
        ]
      }
    ],
    tips: [
      {
        type: 'tip',
        title: 'Read the Window Sticker Together',
        content: 'Walk through the Monroney sticker to explain MSRP components, standard features, fuel economy, and safety ratings. It builds transparency and trust.'
      },
      {
        type: 'warning',
        title: 'Don\'t Overwhelm',
        content: 'You don\'t have to show every feature. Focus on 8-10 key features that matter to them. Quality over quantity.'
      },
      {
        type: 'success',
        title: 'Use Visualization',
        content: '"Imagine loading the kids\' sports gear here..." helps them see themselves owning the vehicle.'
      }
    ],
    checklist: [
      'Started at the front of the vehicle',
      'Covered exterior features (both sides, rear)',
      'Showed engine bay / under hood',
      'Had customer sit in driver\'s seat',
      'Demonstrated interior features',
      'Connected features to their hot buttons',
      'Presented ToyotaCare and Toyoguard',
      'Mentioned TSS 3.0 safety features',
      'Reviewed window sticker if new vehicle',
    ],
    commonMistakes: [
      'Not having a systematic approach',
      'Talking about features they don\'t care about',
      'Not physically touching/demonstrating features',
      'Rushing through the walkaround',
      'Forgetting to mention included value (ToyotaCare, TSS, etc.)',
    ],
    toolCallouts: [
      {
        tool: 'window-sticker',
        title: 'Window Sticker Walkthrough',
        description: 'Use the window sticker as a trust-building tool. Walk through MSRP, packages, standard features, and fuel economy ratings. See the "Reading Window Stickers" section for a complete guide.'
      }
    ],
    relatedForms: ['window-sticker-example'],
    transitionLine: '"Now that you\'ve seen it, let\'s take it for a drive so you can really experience what it\'s like..."',
    nextStepPreview: 'The test drive is where customers fall in love with the vehicle.',
  },
  {
    stepNum: 5,
    title: 'Test Drive',
    goal: 'Let them experience ownership and fall in love with the vehicle',
    duration: '20-30 minutes',
    icon: '🛣️',
    keyMetric: 'Test drives increase closing rate by 50%',
    overview: `The test drive is the most powerful step in the sales process. It's where the customer mentally transitions from "shopping" to "owning." Your goal is to create an emotional connection between them and the vehicle.

Every minute on a test drive increases your closing probability. Use a planned route that showcases the vehicle's strengths: highway for power, neighborhoods for comfort, and include different road surfaces.`,
    keyActions: [
      {
        title: 'Always Offer the Drive',
        description: 'Every customer should drive. "Let me get the keys so you can see how it feels behind the wheel." Not "Would you like to drive?"',
        icon: '🔑'
      },
      {
        title: 'Pre-Drive Setup',
        description: 'Adjust mirrors, seat position, and steering wheel for the driver. Pair their phone to Bluetooth. Make them comfortable.',
        icon: '⚙️'
      },
      {
        title: 'Use a Planned Route',
        description: 'Have a route that shows off the vehicle: highway merge (power), neighborhoods (quiet ride), hills if available. 10-15 minutes minimum.',
        icon: '🗺️'
      },
      {
        title: 'Let Them Drive',
        description: 'You drive first to demonstrate features, then swap. The customer should drive the majority of the test drive.',
        icon: '🚙'
      },
      {
        title: 'Ask Trial Close Questions',
        description: 'During the drive: "How do you like the acceleration?" "Could you see yourself driving this every day?" Plant seeds for Step 6.',
        icon: '💬'
      },
    ],
    scripts: [
      {
        label: 'Initiating the Test Drive',
        lines: [
          { speaker: 'sales', text: 'I\'m going to grab the keys. You really need to drive this to appreciate it—words don\'t do it justice.' },
          { speaker: 'customer', text: 'Oh, I wasn\'t planning to drive today.' },
          { speaker: 'sales', text: 'I understand, but I wouldn\'t be doing my job if I didn\'t let you feel the difference. It\'ll only take about 15 minutes and I promise it\'s worth it.' },
        ]
      },
      {
        label: 'During the Drive',
        lines: [
          { speaker: 'sales', text: 'Go ahead and merge onto the highway here. Feel that acceleration?' },
          { speaker: 'customer', text: 'Wow, it really moves.' },
          { speaker: 'sales', text: 'That\'s the V6. And notice how quiet it is even at highway speed? That\'s the acoustic glass doing its job.' },
          { speaker: 'sales', text: 'Imagine your commute feeling like this every day instead of your old car...' },
        ]
      },
      {
        label: 'Soft Trial Closes',
        lines: [
          { speaker: 'sales', text: 'So what do you think? How does it compare to what you\'re driving now?' },
          { speaker: 'customer', text: 'It\'s so much nicer.' },
          { speaker: 'sales', text: 'Right? And this is just the base model. Could you see yourself in this every day?' },
        ]
      }
    ],
    tips: [
      {
        type: 'tip',
        title: 'Smartphone Integration',
        content: 'Before the drive, pair their phone and play their music. It creates instant ownership feeling when they hear their playlist through the car speakers.'
      },
      {
        type: 'warning',
        title: 'Don\'t Over-Talk',
        content: 'Let them enjoy the experience. Periods of silence are okay—let them absorb the drive. Don\'t fill every moment with features.'
      },
      {
        type: 'success',
        title: 'Multiple Drivers',
        content: 'If spouse/partner is present, make sure they drive too. Both decision-makers need to connect with the vehicle.'
      }
    ],
    checklist: [
      'Got valid driver\'s license copied',
      'Adjusted seat, mirrors, and wheel for driver',
      'Paired their phone for Bluetooth',
      'Used a planned demonstration route',
      'Let customer drive majority of the time',
      'Demonstrated key features during drive',
      'Asked trial close questions',
      'All decision-makers got to drive',
    ],
    commonMistakes: [
      'Skipping the test drive',
      'Letting them just go around the block',
      'Not letting the customer drive',
      'Talking non-stop during the drive',
      'Not having a planned route',
      'Forgetting to have spouse/partner drive',
    ],
    transitionLine: '"So, what do you think? Is this the one you\'ve been looking for?"',
    nextStepPreview: 'After the drive, it\'s time to gauge their interest with trial closes.',
  },
  {
    stepNum: 6,
    title: 'Trial Close',
    goal: 'Confirm interest, identify concerns, and prepare for the write-up',
    duration: '5-10 minutes',
    icon: '🤔',
    keyMetric: 'Uncover objections early',
    overview: `The trial close happens after the test drive while emotions are high. You're not asking them to buy—you're confirming they've found the right vehicle and identifying any remaining concerns.

This is where you smoke out objections before getting to numbers. It's much easier to handle "I need to talk to my spouse" now than after you've spent an hour on paperwork.`,
    keyActions: [
      {
        title: 'Park and Pivot',
        description: 'Park the vehicle in a good spot for delivery photos. Turn toward them and have a conversation—don\'t rush back inside.',
        icon: '🅿️'
      },
      {
        title: 'Assumptive Language',
        description: 'Use "when" not "if": "When you take this home..." not "If you decide to buy..." Subtle but powerful.',
        icon: '💬'
      },
      {
        title: 'Ask for Feedback',
        description: '"What did you like most about the drive?" "Is there anything you were hoping for that you didn\'t see?"',
        icon: '❓'
      },
      {
        title: 'Confirm the Right Vehicle',
        description: '"So, is this the one? Based on everything you\'ve told me, this seems like the perfect fit."',
        icon: '✅'
      },
      {
        title: 'Identify Concerns',
        description: '"What questions do you still have?" "Is there anything holding you back from moving forward today?"',
        icon: '🎯'
      },
    ],
    scripts: [
      {
        label: 'Post-Drive Trial Close',
        lines: [
          { speaker: 'sales', text: 'So, what do you think? How did it compare to what you expected?' },
          { speaker: 'customer', text: 'It\'s really nice. We liked it.' },
          { speaker: 'sales', text: 'I could tell by your faces during the drive! Is this the vehicle you\'ve been looking for, or do you want to see something else?' },
          { speaker: 'customer', text: 'No, this is the one. We just need to figure out the numbers.' },
          { speaker: 'sales', text: 'Perfect. Let\'s head inside and see what we can work out for you.' },
        ]
      },
      {
        label: 'Handling Hesitation',
        lines: [
          { speaker: 'sales', text: 'You seem a little hesitant. Is there something about this vehicle that concerns you, or is it something else?' },
          { speaker: 'customer', text: 'We\'re just worried about the payment.' },
          { speaker: 'sales', text: 'That\'s completely understandable. Let\'s go see what options we have. I\'d hate for you to miss out on the perfect vehicle over numbers we haven\'t even looked at yet.' },
        ]
      }
    ],
    tips: [
      {
        type: 'tip',
        title: 'Use the Vehicle as a Prop',
        content: 'Stay by the vehicle for this conversation. Their emotional connection is strongest right now. Going inside breaks that connection.'
      },
      {
        type: 'warning',
        title: 'Don\'t Rush to Numbers',
        content: 'Make sure the vehicle is right before discussing price. If they have vehicle concerns, handle those first.'
      },
      {
        type: 'success',
        title: 'Plant Delivery Seeds',
        content: '"This would look great in your driveway. Let\'s take a quick photo by it for the records..." Creates ownership mental imagery.'
      }
    ],
    checklist: [
      'Asked how they liked the test drive',
      'Confirmed this is the right vehicle',
      'Identified any remaining concerns',
      'Handled vehicle-related objections',
      'Identified who all decision makers are',
      'Asked if ready to look at numbers',
      'Got commitment to move forward',
    ],
    commonMistakes: [
      'Rushing back inside after the drive',
      'Not asking for their opinion',
      'Avoiding the close question',
      'Not identifying hidden objections',
      'Moving forward without confirming vehicle selection',
    ],
    transitionLine: '"Great! While we work on some numbers, let me get some information about your trade-in..."',
    nextStepPreview: 'If they have a trade, now\'s the time to evaluate it properly.',
  },
  {
    stepNum: 7,
    title: 'Trade Evaluation',
    goal: 'Accurately appraise the trade-in while managing expectations',
    duration: '15-20 minutes',
    icon: '🔄',
    keyMetric: 'Transparency builds trust',
    overview: `Trade evaluation is where deals can go off the rails if not handled properly. Customers almost always overvalue their trade because of emotional attachment. Your job is to set realistic expectations while gathering accurate information for appraisal.

Be thorough, be transparent, and document everything. Use tools like vAuto to show market data—it removes you from being the "bad guy" on value.`,
    keyActions: [
      {
        title: 'Walk the Trade Together',
        description: 'Don\'t just take the keys and disappear. Walk around the trade WITH the customer, pointing out what you see.',
        icon: '👀'
      },
      {
        title: 'Document Everything',
        description: 'Note every scratch, dent, stain, worn tire. Take photos. This protects you and sets expectations.',
        icon: '📸'
      },
      {
        title: 'Ask About History',
        description: 'Accidents, service history, payoff amount. "Has this vehicle ever been in an accident?" Get honest answers.',
        icon: '📋'
      },
      {
        title: 'Set Expectations Early',
        description: '"The market has really changed. Let me show you what similar vehicles are actually selling for..."',
        icon: '📊'
      },
      {
        title: 'Use Market Data',
        description: 'Show them vAuto or similar tool data. Third-party validation is more credible than "trust me."',
        icon: '💻'
      },
    ],
    scripts: [
      {
        label: 'Starting the Trade Walk',
        lines: [
          { speaker: 'sales', text: 'Let\'s take a look at your trade together. I want to make sure we capture everything accurately.' },
          { speaker: 'sales', text: 'First, tell me a little about the history. Any accidents, even minor ones?' },
          { speaker: 'customer', text: 'Just a small fender bender about a year ago.' },
          { speaker: 'sales', text: 'Okay, I appreciate your honesty—that helps me give you an accurate number. Anything else I should know?' },
        ]
      },
      {
        label: 'Managing Trade Value Expectations',
        lines: [
          { speaker: 'customer', text: 'I was hoping to get at least $25,000 for my trade.' },
          { speaker: 'sales', text: 'I understand—it\'s been a great vehicle for you. Let me show you something...' },
          { speaker: 'sales', text: '[Showing vAuto data] This shows what similar vehicles with your mileage are actually selling for at auction. See how the market has these around $21,000?' },
          { speaker: 'sales', text: 'We want to give you a fair number, but we also need to be realistic based on what the market is showing.' },
        ]
      }
    ],
    tips: [
      {
        type: 'tip',
        title: 'Get Payoff Information',
        content: 'Always ask about payoff amount and lender. Negative equity changes the deal structure significantly.'
      },
      {
        type: 'warning',
        title: 'Never Belittle Their Trade',
        content: 'Even if it\'s rough, it\'s their car. "I can see you\'ve taken care of it" goes further than pointing out every flaw.'
      },
      {
        type: 'success',
        title: 'Involve the Used Car Manager',
        content: 'Having a manager look at the trade adds credibility. "Let me have our used car manager take a look—he\'ll know exactly where we can be."'
      }
    ],
    checklist: [
      'Walked around trade with customer',
      'Documented condition (photos, notes)',
      'Asked about accident history',
      'Got payoff amount and lender',
      'Checked for second key, manuals, etc.',
      'Showed market data (vAuto)',
      'Set realistic value expectations',
      'Completed trade appraisal form',
    ],
    commonMistakes: [
      'Disappearing with the trade for 30 minutes',
      'Not setting value expectations early',
      'Not asking about accidents (CarFax surprises)',
      'Forgetting to get payoff information',
      'Arguing about trade value',
    ],
    toolCallouts: [
      {
        tool: 'vauto',
        title: 'vAuto Market Report',
        description: 'Use vAuto to show customers real market data on their trade. This removes emotion from the conversation and provides third-party validation for your appraisal number.'
      }
    ],
    relatedForms: ['trade-in-payoff', 'vin-verification'],
    transitionLine: '"While they\'re finalizing your trade value, let me get some information to put together numbers for you..."',
    nextStepPreview: 'Now it\'s time to structure the deal in the Write Up step.',
  },
  {
    stepNum: 8,
    title: 'Write Up / Pencil',
    goal: 'Present a complete deal structure to the customer',
    duration: '15-20 minutes',
    icon: '✏️',
    keyMetric: 'First pencil sets the tone',
    overview: `The write-up is where you structure the deal and present your first offer. This is where your CRM and desking tools become essential. You need to gather information, work with your manager, and present numbers in a way that makes sense for the customer.

The first pencil sets the tone for negotiation. Present it professionally, confidently, and be prepared to justify value.`,
    keyActions: [
      {
        title: 'Gather All Information',
        description: 'Customer info, trade details, desired vehicle, their stated budget. Have everything ready before going to the desk.',
        icon: '📝'
      },
      {
        title: 'Work With Your Manager',
        description: 'Present the customer\'s situation to your desk manager. Include hot buttons, concerns, and any relevant details.',
        icon: '👥'
      },
      {
        title: 'Understand the Numbers',
        description: 'Know what every number means before presenting. If you don\'t understand it, don\'t present it.',
        icon: '🧮'
      },
      {
        title: 'Present Confidently',
        description: 'Don\'t apologize for the numbers. Present the complete picture: price, trade, payment, terms.',
        icon: '💪'
      },
      {
        title: 'Use Visual Tools',
        description: 'DriveCentric or four-square worksheet helps customers visualize the deal. Pictures are worth 1000 words.',
        icon: '📊'
      },
    ],
    scripts: [
      {
        label: 'Setting Up the Write Up',
        lines: [
          { speaker: 'sales', text: 'Let me grab some information and I\'ll put together some options for you. What\'s the best phone number to reach you?' },
          { speaker: 'instruction', text: '[Gather customer info: name, address, phone, email, employer, etc.]' },
          { speaker: 'sales', text: 'Perfect. Give me a few minutes to work with my manager and I\'ll come back with some numbers for you.' },
        ]
      },
      {
        label: 'Presenting the Pencil',
        lines: [
          { speaker: 'sales', text: 'Okay, I\'ve got some great news. Let me walk you through what we worked out.' },
          { speaker: 'sales', text: 'For the Highlander, you\'re looking at [price]. With your trade valued at [trade amount], that brings your amount to finance to [amount].' },
          { speaker: 'sales', text: 'At 72 months with approved credit, that puts your payment right around [payment].' },
          { speaker: 'sales', text: 'How does that look to you?' },
        ]
      }
    ],
    tips: [
      {
        type: 'tip',
        title: 'Be Transparent',
        content: 'Don\'t hide fees or surprise them later. Build trust by showing the complete picture upfront.'
      },
      {
        type: 'warning',
        title: 'Don\'t Prejudge',
        content: 'Present the numbers without assuming they can\'t afford it. Let them tell you their response.'
      },
      {
        type: 'success',
        title: 'Tie Back to Value',
        content: '"Remember the ToyotaCare, Toyoguard, and safety features? That\'s all included in this price."'
      }
    ],
    checklist: [
      'Collected all customer information',
      'Verified trade payoff and value',
      'Presented deal to desk manager',
      'Understood all numbers before presenting',
      'Presented pencil professionally',
      'Tied payment to value points',
      'Asked for customer feedback',
    ],
    commonMistakes: [
      'Not having complete information',
      'Not understanding the numbers yourself',
      'Apologizing for the price',
      'Not tying price to value',
      'Forgetting about included programs (ToyotaCare, Toyoguard, PPP)',
    ],
    toolCallouts: [
      {
        tool: 'drivecentric',
        title: 'DriveCentric Desking',
        description: 'Use DriveCentric to build and present deal structures. The visual tools help customers understand their options and make comparison shopping easier.'
      }
    ],
    relatedForms: ['street-purchase-cover', 'street-purchase-checklist', 'agreement-insurance', 'facts-privacy'],
    transitionLine: '"What are your thoughts on these numbers? Let\'s see what we can do..."',
    nextStepPreview: 'Be prepared for negotiation—this is where the deal comes together.',
  },
  {
    stepNum: 9,
    title: 'Negotiation & Close',
    goal: 'Work through objections and reach a mutually agreeable deal',
    duration: '20-45 minutes',
    icon: '🤝',
    keyMetric: 'Win-win deals create referrals',
    overview: `Negotiation isn't a battle—it's a collaborative process to find a deal that works for everyone. The customer needs to feel they got a fair deal, and the dealership needs to maintain profitability.

Use the L.A.R.C. method for objections: Listen, Acknowledge, Respond, Close. Stay calm, stay positive, and remember—if they're negotiating, they want to buy.`,
    keyActions: [
      {
        title: 'Listen First',
        description: 'When they object, let them finish completely. Don\'t interrupt or get defensive. Understanding their concern is half the battle.',
        icon: '👂'
      },
      {
        title: 'Acknowledge Their Concern',
        description: '"I completely understand how you feel..." validates them. Fighting makes them dig in.',
        icon: '🤗'
      },
      {
        title: 'Respond With Value',
        description: 'Answer with value, not just concessions. Why is this price fair? What are they getting?',
        icon: '💎'
      },
      {
        title: 'Ask Closing Questions',
        description: 'After addressing the concern: "Does that address your concern? Are we ready to move forward?"',
        icon: '❓'
      },
      {
        title: 'Work With Your Manager',
        description: 'Don\'t make promises you can\'t keep. "Let me take that to my manager and see what we can do."',
        icon: '👥'
      },
    ],
    scripts: [
      {
        label: 'L.A.R.C. in Action - Price Objection',
        lines: [
          { speaker: 'customer', text: 'That\'s more than I wanted to spend.' },
          { speaker: 'sales', text: '[Listen - let them finish, nod]' },
          { speaker: 'sales', text: 'I understand—staying within budget is important. [Acknowledge]' },
          { speaker: 'sales', text: 'Let me remind you of the value here: you\'re getting ToyotaCare, Toyoguard Platinum, TSS 3.0, and our Premium Protect Plus package—that\'s over $6,500 in included value. [Respond]' },
          { speaker: 'sales', text: 'If we can work together on the down payment or term, we might be able to get that payment where you need it. Would that help? [Close]' },
        ]
      },
      {
        label: '"I Need to Think About It"',
        lines: [
          { speaker: 'customer', text: 'We need to think about it.' },
          { speaker: 'sales', text: 'I completely understand—this is a big decision. What specifically would you like to think about?' },
          { speaker: 'customer', text: 'Just making sure we\'re making the right choice.' },
          { speaker: 'sales', text: 'That makes sense. Is it the vehicle itself, or are you comfortable with the vehicle and it\'s more about the numbers?' },
          { speaker: 'customer', text: 'The numbers, really.' },
          { speaker: 'sales', text: 'Okay—let me take one more run at my manager and see if there\'s anything else we can do. If we can hit a number you\'re comfortable with, would you be ready to move forward today?' },
        ]
      }
    ],
    tips: [
      {
        type: 'tip',
        title: 'Silence is Golden',
        content: 'After presenting numbers or responding to an objection, stop talking. Let them process. Silence makes people uncomfortable—they\'ll fill it.'
      },
      {
        type: 'warning',
        title: 'Don\'t Give Without Getting',
        content: 'If you make a concession, get a commitment: "If I can get you X, are you ready to move forward today?"'
      },
      {
        type: 'success',
        title: 'Ask "What Will It Take?"',
        content: '"What would it take to earn your business today?" Gets them to tell you exactly what they need.'
      }
    ],
    checklist: [
      'Listened to all concerns completely',
      'Acknowledged their position',
      'Responded with value points',
      'Asked closing questions',
      'Got commitment before concessions',
      'Worked with manager on final numbers',
      'Got signatures on deal',
    ],
    commonMistakes: [
      'Getting defensive or arguing',
      'Giving concessions without getting commitment',
      'Not involving management appropriately',
      'Taking rejection personally',
      'Letting them leave without getting contact info',
    ],
    transitionLine: '"Congratulations! Let me get your paperwork started and introduce you to our finance team..."',
    nextStepPreview: 'With a signed deal, it\'s time for a memorable delivery experience.',
  },
  {
    stepNum: 10,
    title: 'Delivery',
    goal: 'Create a memorable experience that generates referrals',
    duration: '30-45 minutes',
    icon: '🎉',
    keyMetric: 'CSI scores drive future business',
    overview: `The delivery is NOT the end—it's the beginning of a relationship. A great delivery experience generates referrals, repeat business, and positive reviews. A poor delivery can undo all your hard work and lead to bad CSI scores.

Take your time, be thorough, and make it special. This is their moment—they just made a major purchase and should feel great about it.`,
    keyActions: [
      {
        title: 'Prepare the Vehicle',
        description: 'Vehicle should be immaculate: full tank, dealer tag/plates, remove all stickers, parked in delivery area.',
        icon: '✨'
      },
      {
        title: 'Technology Setup',
        description: 'Pair their phones, set radio presets, program garage door opener. Make the car theirs.',
        icon: '📱'
      },
      {
        title: 'Walk Through All Features',
        description: 'Review key features, safety systems, and how to use technology. Don\'t assume they know.',
        icon: '📋'
      },
      {
        title: 'Explain Programs',
        description: 'Review ToyotaCare, Toyoguard Platinum, TSS 3.0, PPP, and any warranties purchased. They need to understand what they have.',
        icon: '📄'
      },
      {
        title: 'Create a Memory',
        description: 'Photo by the car with a bow, congratulations sign. Make it social media worthy.',
        icon: '📸'
      },
      {
        title: 'Ask for Referrals',
        description: '"Who else do you know that might be in the market?" Capture names while they\'re happy.',
        icon: '🗣️'
      },
    ],
    scripts: [
      {
        label: 'Starting the Delivery',
        lines: [
          { speaker: 'sales', text: 'Congratulations! Your new [vehicle] is ready and waiting. Let me take you to see it.' },
          { speaker: 'sales', text: 'I\'ve already fueled it up, cleaned it up, and it\'s looking beautiful. Let me go over some features to make sure you\'re comfortable with everything.' },
        ]
      },
      {
        label: 'Technology Walkthrough',
        lines: [
          { speaker: 'sales', text: 'Let\'s get your phones connected. Pull out your phone and we\'ll pair it right now.' },
          { speaker: 'instruction', text: '[Pair both phones to Bluetooth and CarPlay/Android Auto]' },
          { speaker: 'sales', text: 'Perfect—now whenever you get in, your phone connects automatically. Let me show you how the navigation and entertainment system work...' },
        ]
      },
      {
        label: 'Referral Ask',
        lines: [
          { speaker: 'sales', text: 'I really enjoyed working with you today. Who else do you know that might be shopping for a vehicle soon?' },
          { speaker: 'customer', text: 'Actually, my brother was talking about getting a truck.' },
          { speaker: 'sales', text: 'Perfect! Let me give you a couple of my business cards. When he\'s ready, have him ask for me and I\'ll make sure he\'s taken care of.' },
        ]
      }
    ],
    tips: [
      {
        type: 'tip',
        title: 'Schedule Service Before They Leave',
        content: 'Book their first service appointment before they leave. It ensures they come back and keeps them in the Toyota family.'
      },
      {
        type: 'warning',
        title: 'Don\'t Rush',
        content: 'They just spent 4+ hours buying a car. Don\'t kick them out in 5 minutes. Take the time to do it right.'
      },
      {
        type: 'success',
        title: 'Follow Up Within 24 Hours',
        content: 'Call or text the next day to make sure everything is great. This sets you apart and catches problems early.'
      }
    ],
    checklist: [
      'Vehicle clean and fueled',
      'All paperwork present (title, registration, warranty)',
      'Phones paired to Bluetooth',
      'Radio presets programmed',
      'Garage door opener programmed (if applicable)',
      'Reviewed all safety features',
      'Explained ToyotaCare and service intervals',
      'Took delivery photos',
      'Asked for referrals',
      'Got Google/Yelp review commitment',
      'Scheduled first service appointment',
      'Walked them to the car',
    ],
    commonMistakes: [
      'Vehicle not ready (dirty, low fuel, stickers on)',
      'Rushing through the delivery',
      'Not explaining features and programs',
      'Forgetting to ask for referrals and reviews',
      'No follow-up call/text next day',
    ],
    relatedForms: ['new-vehicle-checklist', 'used-vehicle-checklist', 'we-owe-you-owe', 'lemon-law', 'media-release', 'ppp-info-sheet'],
    transitionLine: '"It\'s been a pleasure working with you! Here\'s my card—call me anytime you need anything."',
    nextStepPreview: 'The sale may be complete, but the relationship is just beginning. Follow up is key!',
  },
]

// Helper function to get step by number
export function getStep(stepNum: number): StepData | undefined {
  return stepsData.find(s => s.stepNum === stepNum)
}

// Helper to get all steps for navigation
export function getAllSteps() {
  return stepsData.map(s => ({
    stepNum: s.stepNum,
    title: s.title,
    icon: s.icon,
  }))
}
