import { stepsData, getStep } from '@/data/steps'
import { StepContent } from '@/components/StepContentClient'
import { notFound } from 'next/navigation'

interface Props {
  params: { stepNum: string }
}

export default function StepPage({ params }: Props) {
  const stepNum = parseInt(params.stepNum)
  const step = getStep(stepNum)

  if (!step) {
    notFound()
  }

  const prevStep = stepNum > 1 ? getStep(stepNum - 1) : null
  const nextStep = stepNum < 10 ? getStep(stepNum + 1) : null

  return (
    <StepContent 
      step={step} 
      prevStep={prevStep ? { stepNum: prevStep.stepNum, title: prevStep.title } : null}
      nextStep={nextStep ? { stepNum: nextStep.stepNum, title: nextStep.title } : null}
    />
  )
}

export function generateStaticParams() {
  return Array.from({ length: 10 }, (_, i) => ({
    stepNum: String(i + 1),
  }))
}
