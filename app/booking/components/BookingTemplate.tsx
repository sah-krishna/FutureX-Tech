'use client'

import { ReactNode } from 'react'
import { useBooking } from '../context/BookingContext'
import ProgressSteps from './ProgressSteps'

interface BookingTemplateProps {
  children: ReactNode
  title: string
  showProgress?: boolean
}

export default function BookingTemplate({ 
  children, 
  title,
  showProgress = true 
}: BookingTemplateProps) {
  const { plan, currentStep } = useBooking()
  const isPremium = plan === 'premium'
  const totalSteps = isPremium ? 4 : 2

  return (
    <div className="max-w-3xl mx-auto">
      {showProgress && (
        <div className="mb-16">
          <ProgressSteps
            currentStep={currentStep}
            totalSteps={totalSteps}
            isPremium={isPremium}
          />
        </div>
      )}

      <div className="bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          {title}
        </h2>
        {children}
      </div>
    </div>
  )
} 