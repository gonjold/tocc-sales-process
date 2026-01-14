'use client'

import { useState, useMemo } from 'react'
import { Brain, CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight } from 'lucide-react'

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What percentage of sale success is determined at Meet & Greet?',
    options: ['20%', '30%', '40%', '50%'],
    correctAnswer: 2,
    explanation: 'Studies show that 40% of sale success is determined in the first few minutes during Meet & Greet.',
    category: 'Road to Sale'
  },
  {
    id: 2,
    question: 'What is the ONLY passing CSI score?',
    options: ['3', '4', '5', '4.5'],
    correctAnswer: 2,
    explanation: 'A 5 is the ONLY passing score. A 4 is considered a fail in Toyota\'s eyes.',
    category: 'CSI'
  },
  {
    id: 3,
    question: 'How many "no\'s" does the average sale require?',
    options: ['1-2', '3-4', '5', '7+'],
    correctAnswer: 2,
    explanation: 'The average sale happens after 5 "no\'s". Most salespeople give up after 1-2.',
    category: 'Objections'
  },
  {
    id: 4,
    question: 'What does L.A.R.C. stand for in objection handling?',
    options: ['Listen, Ask, Respond, Close', 'Listen, Acknowledge, Respond, Close', 'Learn, Ask, Respond, Confirm', 'Listen, Answer, Repeat, Close'],
    correctAnswer: 1,
    explanation: 'L.A.R.C. stands for Listen, Acknowledge, Respond, Close.',
    category: 'Objections'
  },
  {
    id: 5,
    question: 'What is the Toyota hybrid battery warranty coverage?',
    options: ['5 years / 60,000 miles', '8 years / 100,000 miles', '10 years / 150,000 miles', '7 years / 100,000 miles'],
    correctAnswer: 2,
    explanation: 'Toyota offers industry-leading 10 year / 150,000 mile hybrid battery warranty.',
    category: 'Warranty'
  },
  {
    id: 6,
    question: 'What is included FREE with every new Toyota?',
    options: ['Toyoguard Platinum', 'ToyotaCare', 'Premium Protect Plus', 'Extended Warranty'],
    correctAnswer: 1,
    explanation: 'ToyotaCare (2 years/25,000 miles maintenance) is included FREE with every new Toyota.',
    category: 'Programs'
  },
  {
    id: 7,
    question: 'How many points does the TCUV inspection cover?',
    options: ['100+', '120+', '160+', '200+'],
    correctAnswer: 2,
    explanation: 'Toyota Certified Used Vehicles go through a rigorous 160+ point inspection.',
    category: 'Warranty'
  },
  {
    id: 8,
    question: 'What is the deductible for TCUV warranty repairs?',
    options: ['$50', '$100', '$0', '$75'],
    correctAnswer: 2,
    explanation: 'TCUV warranty repairs have a $0 deductible - nothing out of pocket.',
    category: 'Warranty'
  },
  {
    id: 9,
    question: 'When should you call back a customer after delivery for CSI?',
    options: ['Same day', 'Within 24 hours', 'Within a week', 'When the survey arrives'],
    correctAnswer: 1,
    explanation: 'Call within 24 hours of delivery to catch any issues before the survey arrives.',
    category: 'CSI'
  },
  {
    id: 10,
    question: 'At what rate do referrals close compared to regular leads?',
    options: ['Same rate', '1.5X', '2X', '3X'],
    correctAnswer: 2,
    explanation: 'Referrals close at 2X the rate of regular leads.',
    category: 'Follow-Up'
  },
  {
    id: 11,
    question: 'What percentage of customers who test drive will buy?',
    options: ['45%', '55%', '65%', '75%'],
    correctAnswer: 2,
    explanation: '65% of customers who take a test drive will buy a vehicle.',
    category: 'Road to Sale'
  },
  {
    id: 12,
    question: 'What is the maximum number of vehicles to show during selection?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: 'Show a maximum of 3 vehicles to avoid overwhelming the customer.',
    category: 'Road to Sale'
  },
  {
    id: 13,
    question: 'What is the basic bumper-to-bumper warranty on new Toyotas?',
    options: ['2 years / 24,000 miles', '3 years / 36,000 miles', '4 years / 48,000 miles', '5 years / 60,000 miles'],
    correctAnswer: 1,
    explanation: 'New Toyotas come with 3 years / 36,000 miles basic bumper-to-bumper warranty.',
    category: 'Warranty'
  },
  {
    id: 14,
    question: 'What is Premium Protect Plus (PP+) total value?',
    options: ['$3,500+', '$4,500+', '$5,500+', '$6,500+'],
    correctAnswer: 3,
    explanation: 'Premium Protect Plus provides over $6,500 in value.',
    category: 'Programs'
  },
  {
    id: 15,
    question: 'How quickly should you respond to a "Fire Phone" hot lead?',
    options: ['Within 1 hour', 'Within 30 minutes', 'Within 5 minutes', 'Same day'],
    correctAnswer: 2,
    explanation: 'Hot leads should be called within 5 minutes while they\'re still engaged.',
    category: 'Phone Skills'
  },
  {
    id: 16,
    question: 'What does F.A.B. stand for in walkaround presentations?',
    options: ['Features, Advantages, Benefits', 'Fast, Accurate, Brief', 'Friendly, Assertive, Bold', 'Facts, Attributes, Basics'],
    correctAnswer: 0,
    explanation: 'F.A.B. stands for Features, Advantages, Benefits - the proven presentation method.',
    category: 'Road to Sale'
  },
  {
    id: 17,
    question: 'When doing a trade evaluation, what tool provides market data?',
    options: ['KBB', 'NADA', 'vAuto', 'Carfax'],
    correctAnswer: 2,
    explanation: 'vAuto provides real market data based on actual transactions.',
    category: 'Road to Sale'
  },
  {
    id: 18,
    question: 'What is the typical wait time for a first-time F&I customer?',
    options: ['~5 minutes', '~15 minutes', '~30 minutes', '~45 minutes'],
    correctAnswer: 1,
    explanation: 'First-time F&I typically takes about 15 minutes.',
    category: 'F&I'
  },
  {
    id: 19,
    question: 'How many features does Toyota Safety Sense 3.0 include in its core package?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    explanation: 'TSS 3.0 includes 7 core safety features standard.',
    category: 'Programs'
  },
  {
    id: 20,
    question: 'What is the powertrain warranty coverage for new Toyotas?',
    options: ['3 years / 36,000 miles', '5 years / 60,000 miles', '7 years / 100,000 miles', '10 years / 150,000 miles'],
    correctAnswer: 1,
    explanation: 'Powertrain warranty is 5 years / 60,000 miles.',
    category: 'Warranty'
  }
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([])
  const [quizComplete, setQuizComplete] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(quizQuestions.map(q => q.category)))]
  
  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'All') return quizQuestions
    return quizQuestions.filter(q => q.category === selectedCategory)
  }, [selectedCategory])

  const question = filteredQuestions[currentQuestion]

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
    setShowResult(true)
    
    if (answerIndex === question.correctAnswer) {
      setScore(score + 1)
    }
    setAnsweredQuestions([...answeredQuestions, question.id])
  }

  const nextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizComplete(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions([])
    setQuizComplete(false)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    resetQuiz()
  }

  const percentage = Math.round((score / filteredQuestions.length) * 100)

  if (quizComplete) {
    return (
      <div className="animate-fade-in">
        <div className="section-hero">
          <div className="step-badge">
            <Brain size={14} />
            Skills & Practice
          </div>
          <h1>Quiz Complete!</h1>
        </div>

        <div className="card max-w-lg mx-auto">
          <div className="card-body text-center py-8">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${
              percentage >= 80 ? 'bg-green-100' : percentage >= 60 ? 'bg-amber-100' : 'bg-red-100'
            }`}>
              <Trophy size={48} className={
                percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-amber-600' : 'text-red-600'
              } />
            </div>
            
            <h2 className="text-3xl font-bold mb-2">{score} / {filteredQuestions.length}</h2>
            <p className="text-gray-600 mb-4">{percentage}% Correct</p>
            
            <div className={`text-lg font-semibold mb-6 ${
              percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-amber-600' : 'text-red-600'
            }`}>
              {percentage >= 80 ? 'Excellent! You know your stuff!' :
               percentage >= 60 ? 'Good job! Keep studying!' :
               'Keep practicing - you\'ll get there!'}
            </div>

            <button
              onClick={resetQuiz}
              className="btn btn-primary flex items-center gap-2 mx-auto"
            >
              <RotateCcw size={18} />
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="section-hero">
        <div className="step-badge">
          <Brain size={14} />
          Skills & Practice
        </div>
        <h1>Quiz Mode</h1>
        <p>Test your knowledge of the sales process, programs, and best practices.</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? 'bg-toyota-red text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Question {currentQuestion + 1} of {filteredQuestions.length}</span>
          <span>Score: {score}/{answeredQuestions.length}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-toyota-red transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="card mb-6">
        <div className="card-body">
          <div className="text-xs text-gray-500 mb-2">{question.category}</div>
          <h2 className="text-xl font-bold mb-6">{question.question}</h2>
          
          <div className="space-y-3">
            {question.options.map((option, idx) => {
              let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all '
              
              if (showResult) {
                if (idx === question.correctAnswer) {
                  buttonClass += 'border-green-500 bg-green-50'
                } else if (idx === selectedAnswer) {
                  buttonClass += 'border-red-500 bg-red-50'
                } else {
                  buttonClass += 'border-gray-200 opacity-50'
                }
              } else {
                buttonClass += 'border-gray-200 hover:border-toyota-red hover:bg-gray-50 cursor-pointer'
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={showResult}
                  className={buttonClass}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      showResult && idx === question.correctAnswer ? 'bg-green-500 text-white' :
                      showResult && idx === selectedAnswer ? 'bg-red-500 text-white' :
                      'bg-gray-100'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showResult && idx === question.correctAnswer && (
                      <CheckCircle2 className="text-green-500" size={20} />
                    )}
                    {showResult && idx === selectedAnswer && idx !== question.correctAnswer && (
                      <XCircle className="text-red-500" size={20} />
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Explanation & Next */}
      {showResult && (
        <div className="space-y-4 animate-fade-in">
          <div className={`p-4 rounded-lg ${
            selectedAnswer === question.correctAnswer ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'
          }`}>
            <p className="text-sm">
              <strong>Explanation:</strong> {question.explanation}
            </p>
          </div>
          
          <button
            onClick={nextQuestion}
            className="btn btn-primary w-full flex items-center justify-center gap-2"
          >
            {currentQuestion < filteredQuestions.length - 1 ? (
              <>
                Next Question
                <ChevronRight size={18} />
              </>
            ) : (
              <>
                See Results
                <Trophy size={18} />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  )
}
