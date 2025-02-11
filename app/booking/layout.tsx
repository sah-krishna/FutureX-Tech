import { Suspense } from 'react'
import { BookingProvider } from './context/BookingContext'
import LoadingSpinner from '../components/LoadingSpinner'

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      <div className="min-h-screen bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<LoadingSpinner />}>
            {children}
          </Suspense>
        </div>
      </div>
    </BookingProvider>
  )
} 