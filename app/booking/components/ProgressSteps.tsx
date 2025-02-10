'use client'

import { FaCheck, FaUser, FaFileContract, FaCreditCard } from 'react-icons/fa'
import { MdPayments } from 'react-icons/md'

interface ProgressStepsProps {
  currentStep: number
  totalSteps: number
  isPremium?: boolean
}

const steps = {
  free: [
    { title: 'Plan Selection', icon: MdPayments },
    { title: 'Personal Details', icon: FaUser },
  ],
  premium: [
    { title: 'Plan Selection', icon: MdPayments },
    { title: 'Personal Details', icon: FaUser },
    { title: 'Agreement', icon: FaFileContract },
    { title: 'Payment', icon: FaCreditCard },
  ],
}

export default function ProgressSteps({ currentStep, totalSteps, isPremium = false }: ProgressStepsProps) {
  const currentSteps = isPremium ? steps.premium : steps.free

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      {/* Progress bar */}
      <div className="relative">
        <div className="h-2 bg-gray-700 rounded-full">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-500"
            style={{
              width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Steps */}
        <div className="absolute top-0 left-0 w-full flex justify-between transform -translate-y-1/2">
          {currentSteps.map((step, index) => {
            const Icon = step.icon
            const isCompleted = index + 1 < currentStep
            const isCurrent = index + 1 === currentStep

            return (
              <div
                key={step.title}
                className="flex flex-col items-center relative group"
              >
                {/* Step circle */}
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    transition-all duration-300
                    ${isCompleted
                      ? 'bg-green-500 text-white'
                      : isCurrent
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-400'
                    }
                  `}
                >
                  {isCompleted ? (
                    <FaCheck className="w-5 h-5" />
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                </div>

                {/* Step title */}
                <div className="absolute top-12 transform -translate-x-1/2 left-1/2 w-32">
                  <span
                    className={`
                      block text-center text-sm font-medium
                      ${isCompleted || isCurrent ? 'text-white' : 'text-gray-400'}
                    `}
                  >
                    {step.title}
                  </span>
                </div>

                {/* Hover tooltip */}
                <div className="absolute bottom-full mb-2 hidden group-hover:block">
                  <div className="bg-gray-900 text-white text-xs py-1 px-2 rounded shadow-lg">
                    {step.title}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 