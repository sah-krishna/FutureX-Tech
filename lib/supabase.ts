import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

// Client for public operations
export const supabase = createClient(supabaseUrl, supabaseKey)

// Admin client with service role for checking admin status
export const adminSupabase = createClient(supabaseUrl, serviceRoleKey || supabaseKey)

export type Database = {
  public: {
    Tables: {
      admin_users: {
        Row: {
          id: string
          created_at: string
          email: string
        }
        Insert: {
          email: string
        }
        Update: {
          email?: string
        }
      }
      bookings: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          message: string
          status: 'pending' | 'completed'
        }
        Insert: {
          name: string
          email: string
          message?: string
          status?: 'pending' | 'completed'
        }
        Update: {
          name?: string
          email?: string
          message?: string
          status?: 'pending' | 'completed'
        }
      }
    }
  }

} 