'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useBooking } from '../context/BookingContext'
import BookingLayout from '../components/BookingLayout'

export default function Agreement() {
  const router = useRouter()
  const { plan, currentStep, setCurrentStep, formData } = useBooking()

  useEffect(() => {
    if (!plan || !formData.firstName) {
      router.replace('/booking')
      return
    }
    setCurrentStep(3)
  }, [plan, formData, setCurrentStep, router])

  const handleAccept = () => {
    router.push('/booking/payment')
  }

  return (
    <BookingLayout>
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Service Agreement
          </h2>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-700 p-6 rounded-lg mb-6 text-gray-300 space-y-4">
              <p>This agreement is between:</p>
              <p className="font-semibold text-white">
                {formData.firstName} {formData.lastName} ("Client")
              </p>
              <p>and</p>
              <p className="font-semibold text-white">
                FutureX AI Consulting ("Service Provider")
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">1. Services</h3>
              <p>
                The Service Provider agrees to provide premium AI consultation services including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Priority video consultation</li>
                <li>Comprehensive assessment</li>
                <li>Priority scheduling (within 1 week)</li>
                <li>Direct phone support</li>
                <li>Follow-up session</li>
                <li>Detailed written report</li>
                <li>24/7 emergency support</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">2. Payment</h3>
              <p>
                The Client agrees to pay $99 for the premium consultation package.
                Payment is due upon acceptance of this agreement.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">3. Confidentiality</h3>
              <p>
                All information shared during consultations will be kept strictly confidential
                and used only for the purpose of providing the agreed services.
              </p>
            </div>

            <div className="flex items-center justify-between pt-6">
              <button
                onClick={() => router.back()}
                className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Accept & Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </BookingLayout>
  )
} 