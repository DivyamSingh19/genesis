// app/login/page.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('')
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    const login = await axios.post("http://localhost:4000/api/auth/register-user",
      
    )
    console.log('Login with email:', email);
    // router.push('/dashboard');
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-black relative overflow-hidden shadow-2xl">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-72 h-72 bg-sky-400 rounded-full -top-24 -left-24"></div>
        <div className="absolute w-48 h-48 bg-orange-500 rounded-full -bottom-12 left-1/10"></div>
        <div className="absolute w-64 h-64 bg-pink-500 rounded-full bottom-1/5 left-1/20"></div>
        <div className="absolute w-80 h-80 bg-green-500 rounded-full top-1/5 -right-24"></div>
        <div className="absolute w-44 h-44 bg-purple-500 rounded-full bottom-1/10 right-1/5"></div>
        <div className="absolute w-32 h-32 bg-blue-500 rounded-full top-1/3 right-1/3"></div>
        <div className="absolute w-24 h-24 bg-yellow-400 rounded-full top-1/10 right-3/5"></div>
        <div className="absolute w-20 h-20 bg-sky-500 rounded-full bottom-1/3 right-1/10"></div>
      </div>

      <main className="relative z-10 w-full flex justify-center items-center p-4">
        <div className="bg-white rounded-2xl p-8 md:p-10 w-full max-w-md shadow-lg text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative w-14 h-14">
               
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mb-2 text-gray-800">SIGN IN TO GENESIS</h1>
          <p className="text-sm text-gray-500 mb-6">Welcome back! Please sign in to continue</p>
          
         
          
          <form onSubmit={handleSubmit} className="text-left">
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg text-base focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="text"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg text-base focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full py-3 bg-indigo-500 text-white rounded-full text-base font-medium hover:bg-indigo-600 transition-colors"
            >
              Continue
            </button>
          </form>
          
          <div className="mt-6 text-sm text-gray-500">
            <p>No account? <Link href="/signup" className="text-indigo-500 font-medium hover:underline">Create one</Link></p>
          </div>
        </div>
      </main>
    </div>
  );
}