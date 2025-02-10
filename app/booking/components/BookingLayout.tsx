'use client'

import { ReactNode } from 'react'
import { useBooking } from '../context/BookingContext'
import ProgressSteps from './ProgressSteps'
import { usePathname } from 'next/navigation'

interface BookingLayoutProps {
  children: ReactNode
  showProgress?: boolean
}

export default function BookingLayout({ children, showProgress = true }: BookingLayoutProps) {
  const { plan, currentStep } = useBooking()
  const isPremium = plan === 'premium'
  const totalSteps = isPremium ? 4 : 2
  const pathname = usePathname()

  // Hide progress steps on the main booking page
  const shouldShowProgress = showProgress && pathname !== '/booking'

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {shouldShowProgress && (
          <div className="mb-16">
            <ProgressSteps
              currentStep={currentStep}
              totalSteps={totalSteps}
              isPremium={isPremium}
            />
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
