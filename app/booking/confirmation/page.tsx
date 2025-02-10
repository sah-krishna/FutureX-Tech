'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useBooking } from '../context/BookingContext'
import { FaCheckCircle } from 'react-icons/fa'

export default function Confirmation() {
  const router = useRouter()
  const { plan, formData } = useBooking()

  useEffect(() => {
    if (!plan || !formData.firstName) {
      router.replace('/booking')
    }
  }, [plan, formData, router])

  if (!formData.firstName) {
    return null
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gray-800 rounded-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-green-500 text-6xl" />
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">
          Booking Confirmed!
        </h2>

        <p className="text-gray-300 mb-6">
          Thank you for booking a consultation with us, {formData.firstName}!
        </p>

        <div className="bg-gray-700 p-6 rounded-lg mb-6 text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Booking Details:</h3>
          <div className="space-y-2 text-gray-300">
            <p><span className="font-medium text-white">Name:</span> {formData.firstName} {formData.lastName}</p>
            <p><span className="font-medium text-white">Email:</span> {formData.email}</p>
            <p><span className="font-medium text-white">Phone:</span> {formData.phone}</p>
            <p><span className="font-medium text-white">Plan:</span> {plan === 'premium' ? 'Premium' : 'Free'} Consultation</p>
            {formData.message && (
              <p><span className="font-medium text-white">Message:</span> {formData.message}</p>
            )}
          </div>
        </div>

        <p className="text-gray-300 mb-6">
          We will contact you shortly to schedule your consultation.
          {plan === 'premium' && ' As a premium member, you will receive priority scheduling within 1 week.'}
        </p>

        <button
          onClick={() => router.push('/')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return to Home
        </button>
      </div>
    </div>
  )
} 