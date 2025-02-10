'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface BookingContextType {
  plan: string | null
  setPlan: (plan: string) => void
  currentStep: number
  setCurrentStep: (step: number) => void
  formData: any
  setFormData: (data: any) => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})

  return (
    <BookingContext.Provider value={{
      plan,
      setPlan,
      currentStep,
      setCurrentStep,
      formData,
      setFormData
    }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
} 