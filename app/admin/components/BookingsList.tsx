'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function BookingsList() {
  const [bookings, setBookings] = useState([])
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error
        setBookings(data || [])
      } catch (err: any) {
        setError(err)
        console.error('Error fetching bookings:', err)
      }
    }

    fetchBookings()
  }, [])

  if (error) {
    throw error // This will be caught by the error boundary
  }

  return (
    <div className="grid gap-4">
      {bookings.map((booking) => (
        <div 
          key={booking.id} 
          className="p-4 bg-gray-800 rounded-lg"
        >
          {/* Existing booking card content */}
        </div>
      ))}
    </div>
  )
} 