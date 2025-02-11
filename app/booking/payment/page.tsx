'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useBooking } from '../context/BookingContext'
import BookingTemplate from '../components/BookingTemplate'
import { loadStripe } from '@stripe/stripe-js'

// Replace with your Stripe publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function Payment() {
  const router = useRouter()
  const { plan, currentStep, setCurrentStep, formData } = useBooking()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!plan || plan !== 'premium' || !formData.firstName) {
      router.replace('/booking')
      return
    }
    setCurrentStep(4)
  }, [plan, formData, setCurrentStep, router])

  const handlePayment = async () => {
    try {
      setIsLoading(true)
      setError('')

      // Create payment session
      const response = await fetch('/api/create-payment-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          plan,
        }),
      })

      if (!response.ok) {
        throw new Error('Payment session creation failed')
      }

      const { sessionId } = await response.json()
      
      // Redirect to Stripe checkout
      const stripe = await stripePromise
      const { error } = await stripe!.redirectToCheckout({
        sessionId,
      })

      if (error) {
        throw error
      }

    } catch (err: any) {
      console.error('Payment error:', err)
      setError(err.message || 'Payment failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <BookingTemplate title="Payment Details">
      <div className="bg-gray-700 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between text-gray-300">
            <span>Premium Consultation Package</span>
            <span className="font-semibold text-white">$99.00</span>
          </div>
          <div className="border-t border-gray-600 pt-4 flex justify-between text-white font-semibold">
            <span>Total</span>
            <span>$99.00</span>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 rounded p-4 mb-6">
          {error}
        </div>
      )}

      <div className="flex items-center justify-between pt-6">
        <button
          onClick={() => router.back()}
          className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handlePayment}
          disabled={isLoading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Processing...' : 'Proceed to Payment'}
        </button>
      </div>
    </BookingTemplate>
  )
} 