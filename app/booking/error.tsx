'use client'

export default function BookingError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-xl font-bold text-white mb-4">
          Booking Error
        </h2>
        <p className="text-gray-300 mb-6">
          {error.message || 'There was an error with your booking'}
        </p>
        <button
          onClick={reset}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
} 