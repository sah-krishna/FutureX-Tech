'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import BookingLayout from './components/BookingLayout'

const plans = [
  {
    name: 'Free Plan',
    price: '$0',
    description: 'Basic consultation with standard scheduling',
    features: [
      'Video consultation',
      'Basic assessment',
      'Standard scheduling (2-3 weeks)',
      'Email support',
    ],
    buttonText: 'Choose Free Plan',
    type: 'free'
  },
  {
    name: 'Premium Plan',
    price: '$99',
    description: 'Priority consultation with premium benefits',
    features: [
      'Priority video consultation',
      'Comprehensive assessment',
      'Priority scheduling (within 1 week)',
      'Direct phone support',
      'Follow-up session',
      'Detailed written report',
      '24/7 emergency support'
    ],
    buttonText: 'Choose Premium Plan',
    type: 'premium',
    highlighted: true
  }
]

export default function BookingPlans() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handlePlanSelection = (planType: string) => {
    setSelectedPlan(planType)
    router.push(`/booking/details?plan=${planType}`)
  }

  return (
    <BookingLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Choose Your Consultation Plan
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the plan that best suits your needs. Our premium plan offers priority scheduling and additional benefits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {plans.map((plan) => (
            <motion.div
              key={plan.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className={`
                relative p-8 rounded-xl
                ${plan.highlighted 
                  ? 'bg-gradient-to-b from-blue-600 to-blue-700 shadow-xl' 
                  : 'bg-gray-800'
                }
              `}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    RECOMMENDED
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2 text-gray-300">{plan.description}</p>
                </div>

                <div className="text-4xl font-bold text-white">
                  {plan.price}
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <FaCheck className="text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePlanSelection(plan.type)}
                  className={`
                    w-full py-3 px-6 rounded-lg font-semibold transition-colors
                    ${plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                    }
                  `}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </BookingLayout>
  )
} 