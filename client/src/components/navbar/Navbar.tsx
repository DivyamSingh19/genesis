import React from 'react'
import Link from "next/link"
const Navbar = () => {
  const handleCick = () =>{
     
  }
  return (
    <div>
      <nav className="flex justify-between items-center py-4 px-8 md:px-12 lg:px-16">
        <div className="flex items-center">
          <div className="flex items-center mr-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="#8B5CF6" />
              <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <Link href="/" className="text-xl font-bold">Genesis.ai</Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link href="#features" className="hover:text-purple-300 transition duration-200">Features</Link>
          <Link href="#pricing" className="hover:text-purple-300 transition duration-200">Pricing</Link>
          <Link href="#about" className="hover:text-purple-300 transition duration-200">About</Link>
          <Link href=""></Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/auth/login" className="hover:text-purple-300 transition duration-200">Log in</Link>
          <Link href="/auth/register" className="bg-purple-600 hover:bg-purple-700 transition duration-200 text-white px-6 py-2 rounded-full">
            Get started
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

 