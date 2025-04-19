// app/login/page.tsx
"use client";

import { useState } from 'react';
 
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
    const res = await axios.post("http://localhost:4000/api/auth/register-user",{
      email,
      password
    })  
    console.log('Login with email:', email);
    router.push('/model');
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-black relative overflow-hidden shadow-2xl">
      
      <div className="absolute inset-0 w-full h-full overflow-hidden">
       
        <div className="absolute w-64 h-64 bg-yellow-400 rounded-full -top-20 -left-20"></div>
        <div className="absolute w-48 h-48 bg-purple-500 rounded-full -top-10 left-1/3 transform -translate-x-1/2"></div>
        <div className="absolute w-72 h-72 bg-green-500 rounded-full -top-24 -right-24"></div>

        
        <div className="absolute w-56 h-56 bg-pink-500 rounded-full top-1/3 transform -translate-y-1/2 -left-20"></div>
        <div className="absolute w-32 h-32 bg-blue-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-44 h-44 bg-sky-500 rounded-full top-1/3 transform -translate-y-1/2 -right-16"></div>

         
        <div className="absolute w-48 h-48 bg-orange-500 rounded-full -bottom-16 left-1/4 transform -translate-x-1/2"></div>
        <div className="absolute w-36 h-36 bg-purple-500 rounded-full -bottom-12 left-2/3 transform -translate-x-1/2"></div>
        <div className="absolute w-60 h-60 bg-sky-400 rounded-full -bottom-24 -right-20"></div>
      </div>

      <main className="relative z-10 w-full flex justify-center items-center p-4">
        <div className="bg-white rounded-2xl p-8 md:p-10 w-full max-w-md shadow-lg text-center">
           
          
          <h1 className="text-2xl font-bold mb-2 text-gray-800">GENESIS</h1>
          <p className="text-sm text-gray-500 mb-6">Welcome back! Please sign in to continue</p>
          
         
          
          <form onSubmit={handleSubmit} className="text-left">
            <div className="mb-6  ">
              <label htmlFor="email" className="block mb-2 text-sm text-gray-700  ">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-full text-base focus:outline-none focus:border-indigo-500   shadow-md"
                required
              />
            </div>
            <div className="mb-6  ">
              <label htmlFor="password" className="block mb-2 text-sm text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="text"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-full text-base focus:outline-none focus:border-indigo-500 shadow-md"
                required
              />
            </div>
            <div className='flex items-center justify-between'>
              <button className="w-full p-3 border border-gray-200 rounded-full text-base focus:outline-none focus:border-indigo-500 shadow-md">Login with Google</button>
              <button className="w-full p-3 border border-gray-200 rounded-full text-base focus:outline-none focus:border-indigo-500 shadow-md">Login with Github</button>

              <br></br>
            </div>
            <div className='flex items-center justify-center'> 
            <button 
              type="submit" 
              className="w-1/2 py-3 bg-indigo-500 text-white rounded-full text-base font-medium hover:bg-indigo-600 transition-colors"
            >
              Continue
            </button>
            </div>
          </form>
          
          <div className="mt-6 text-sm text-gray-500">
            <p>No account? <Link href="/auth/register" className="text-indigo-500 font-medium hover:underline">Create one</Link></p>
          </div>
        </div>
      </main>
    </div>
  );
}