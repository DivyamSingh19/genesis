'use client'

import React, { useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
     
    try {
      const email = localStorage.getItem('email')
      
      if (!email) {
         
        router.push('/auth/login')
      } else {
         
        router.push('/model')
      }
    } catch (error) {
      console.error('Could not access localStorage:', error)
    }
  }, [router])

   
  return (
    <div className="w-full min-h-screen">
      {children}
    </div>
  )
}

export default AuthLayout