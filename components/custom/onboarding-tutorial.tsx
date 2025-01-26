'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface Step {
  target: string
  title: string
  description: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const tutorialSteps: Step[] = [
  {
    target: '[data-tutorial="sidebar"]',
    title: 'Navigation Menu',
    description:
      'Access your account, view plans, and get support from this menu.',
    position: 'right',
  },
  {
    target: '[data-tutorial="portfolio"]',
    title: 'Portfolio Overview',
    description:
      'Track your investment performance and view your portfolio value over time.',
    position: 'right',
  },
  {
    target: '[data-tutorial="trading"]',
    title: 'Trading Interface',
    description: 'Buy and sell ETFs easily from this trading panel.',
    position: 'left',
  },
  {
    target: '[data-tutorial="buy-sell"]',
    title: 'Buy & Sell Options',
    description: 'Switch between buying and selling ETFs with these tabs.',
    position: 'left',
  },
  {
    target: '[data-tutorial="recent-orders"]',
    title: 'Recent Orders',
    description: 'View your trading history and track your recent orders here.',
    position: 'top',
  },
]

export function OnboardingTutorial() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsVisible(false)
    }
  }

  if (!isVisible) return null

  const step = tutorialSteps[currentStep]

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div
        className={`fixed p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-sm ${
          step.position === 'top'
            ? 'bottom-4'
            : step.position === 'bottom'
            ? 'top-4'
            : step.position === 'left'
            ? 'right-4'
            : 'left-4'
        } mx-4`}
      >
        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {step.description}
        </p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Step {currentStep + 1} of {tutorialSteps.length}
          </div>
          <Button onClick={handleNext}>
            {currentStep === tutorialSteps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  )
}
