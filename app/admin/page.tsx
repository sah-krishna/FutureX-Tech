'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/lib/supabase'
import LoadingCard from '../components/LoadingCard'

interface Booking {
  id: string
  name: string
  email: string
  message: string
  status: 'pending' | 'completed'
  created_at: string
}

export default function AdminDashboard() {
  const router = useRouter()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [bookingsCount, setBookingsCount] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    const checkAuthAndFetchBookings = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session) {
          router.replace('/admin/login')
          return
        }

        // Verify admin status
        const { data: adminUser, error: adminError } = await supabase
          .from('admin_users')
          .select('*')
          .eq('id', session.user.id)
          .single()

        if (adminError || !adminUser) {
          await supabase.auth.signOut()
          router.replace('/admin/login')
          return
        }

        // Fetch bookings count
        const { count } = await supabase
          .from('bookings')
          .select('*', { count: 'exact' })

        setBookingsCount(count || 0)

        // Fetch bookings
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error
        setBookings(data || [])
      } catch (error) {
        console.error('Admin page error:', error)
      } finally {
        setIsLoading(false)
      }
    }

    // Set up auth state change listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        router.replace('/admin/login')
      }
    })

    checkAuthAndFetchBookings()

    // Cleanup subscription
    return () => {
      subscription.unsubscribe()
    }
  }, [router, supabase])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="p-6 min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">Bookings Dashboard</h1>
        
        <div className="grid gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-2">Overview</h2>
            <p className="text-gray-300">Total Bookings: {bookingsCount}</p>
          </div>

          <div className="grid gap-4">
            {bookings.map((booking) => (
              <div 
                key={booking.id} 
                className="p-6 bg-gray-800 rounded-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{booking.name}</h3>
                    <p className="text-gray-400">{booking.email}</p>
                  </div>
                  <span className={`
                    px-3 py-1 rounded-full text-sm font-medium
                    ${booking.status === 'pending' 
                      ? 'bg-yellow-500/10 text-yellow-500' 
                      : 'bg-green-500/10 text-green-500'
                    }
                  `}>
                    {booking.status}
                  </span>
                </div>
                {booking.message && (
                  <p className="text-gray-300">{booking.message}</p>
                )}
                <p className="text-sm text-gray-400 mt-2">
                  {new Date(booking.created_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 