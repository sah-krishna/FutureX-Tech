import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req: request, res })

    const {
      data: { session },
    } = await supabase.auth.getSession()

    // If accessing admin pages
    if (request.nextUrl.pathname.startsWith('/admin')) {
      // Allow access to login page if no session
      if (!session && request.nextUrl.pathname === '/admin/login') {
        return res
      }

      // If no session, redirect to login
      if (!session) {
        const redirectUrl = new URL('/admin/login', request.url)
        return NextResponse.redirect(redirectUrl)
      }

      // Verify admin status
      const { data: adminUser } = await supabase
        .from('admin_users')
        .select('*')
        .eq('id', session.user.id)
        .single()

      // If not admin, redirect to login
      if (!adminUser && request.nextUrl.pathname !== '/admin/login') {
        const redirectUrl = new URL('/admin/login', request.url)
        return NextResponse.redirect(redirectUrl)
      }
    }

    return res
  } catch (error) {
    console.error('Middleware error:', error)
    // On error, redirect to login
    const redirectUrl = new URL('/admin/login', request.url)
    return NextResponse.redirect(redirectUrl)
  }
}

export const config = {
  matcher: ['/admin/:path*']
} 