'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/lib/supabase'

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
        
        <div className="grid gap-4">
          {bookings.map((booking) => (
            <div 
              key={booking.id} 
              className="p-4 bg-gray-800 rounded-lg"
            >
              <h3 className="font-semibold text-white">{booking.name}</h3>
              <p className="text-gray-400">{booking.email}</p>
              <p className="mt-2 text-gray-300">{booking.message}</p>
              <div className="mt-2">
                <span className={`
                  px-2 py-1 rounded text-sm
                  ${booking.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-green-500/10 text-green-500'}
                `}>
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 