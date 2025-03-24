"use client"
import { useState } from 'react';
 
import LoginBot from "@/components/3d/LoginBot"
import Link from 'next/link';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="flex h-screen w-screen bg-black text-white">
    
        
    <div className="w-1/2 relative hidden md:block">
  <div className="z-0 h-full w-full bg-[#0c111f] rounded-2xl overflow-hidden flex items-center justify-center">
     
    <div className="absolute inset-0 w-full h-full">
      <LoginBot />
    </div>
  </div>
</div>
     
      
       
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-1">Register Account</h2>
          <p className="text-gray-400 mb-8">
            Provide your details to register.
          </p>
          
          {/* Social Logins */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 border border-gray-700 rounded-lg p-3 flex justify-center items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#4285F4" />
                <path d="M12 12.2488V24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12H12V12.2488Z" fill="#34A853" />
                <path d="M12 24V12H0C0 18.6274 5.37258 24 12 24Z" fill="#FBBC05" />
                <path d="M12 0V12H24C24 5.37258 18.6274 0 12 0Z" fill="#EA4335" />
                <circle cx="12" cy="12" r="6" fill="white" />
              </svg>
              <span>Google</span>
            </button>
            <button className="flex-1 border border-gray-700 rounded-lg p-3 flex justify-center items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.44 21.82 8.21 23.4C8.81 23.5 9.03 23.15 9.03 22.84C9.03 22.56 9.02 21.69 9.02 20.68C5.67 21.39 4.97 19.16 4.97 19.16C4.42 17.78 3.63 17.41 3.63 17.41C2.54 16.67 3.71 16.68 3.71 16.68C4.92 16.76 5.56 17.9 5.56 17.9C6.63 19.73 8.36 19.21 9.05 18.91C9.16 18.14 9.47 17.62 9.81 17.31C7.14 17 4.34 15.97 4.34 11.37C4.34 10.06 4.81 9 5.58 8.17C5.45 7.88 5.04 6.64 5.69 4.99C5.69 4.99 6.7 4.67 9.01 6.23C9.97 5.96 11.02 5.83 12.01 5.83C13 5.83 14.05 5.96 15.01 6.23C17.32 4.67 18.33 4.99 18.33 4.99C18.98 6.64 18.57 7.88 18.44 8.17C19.21 9 19.68 10.06 19.68 11.37C19.68 15.98 16.88 16.99 14.2 17.3C14.63 17.69 15.01 18.46 15.01 19.64C15.01 21.33 14.99 22.45 14.99 22.84C14.99 23.15 15.21 23.51 15.82 23.4C20.58 21.82 24 17.31 24 12C24 5.37 18.63 0 12 0Z" fill="white" />
              </svg>
              <span>GitHub</span>
            </button>
          </div>
          
          {/* Divider */}
          <div className="flex items-center mb-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <div className="px-4 text-gray-500">or</div>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>
          
          {/* Form */}
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input 
                  type="text" 
                  placeholder="eg. Jane" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input 
                  type="text" 
                  placeholder="eg. Doe" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                placeholder="eg. janedoe@mail.com" 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="eg. janedoe@mail.com" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 014.02 8.971m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-white text-black font-medium rounded-lg p-3 hover:bg-opacity-90 transition-colors"
            >
              Register
            </button>
          </form>
          
          <p className="text-center mt-6 text-gray-400">
            Already have an account? <Link href="/login" className="text-white underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}