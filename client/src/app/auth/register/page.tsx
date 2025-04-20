// app/auth/register/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';

interface ApiError {
  message: string;
}

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000';
      
      console.log("Submitting registration to:", `${apiUrl}/api/auth/register-user`);
      
      const response = await axios.post(`${apiUrl}/api/auth/register-user`, {
        email,
        password,
        username
      });
      
      console.log('Registration response:', response.data);
      
      if (response.data) {
        // Store user data in local storage
        if (typeof window !== 'undefined') {
          localStorage.setItem('userEmail', email);
          localStorage.setItem('userName', username);
          // Store the entire response data or specific parts
          localStorage.setItem('userData', JSON.stringify(response.data));
        }
        
        setSuccess(true);
        
        // Redirect after a brief delay
        setTimeout(() => router.push('/model'), 1500);
      } else {
        throw new Error('Empty response from server');
      }
    } catch (err) {
      console.error("Registration error:", err);
      const axiosError = err as AxiosError<ApiError>;
      setError(
        axiosError.response?.data?.message || 
        axiosError.message || 
        'An error occurred during registration'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-black relative overflow-hidden shadow-2xl">
      {/* Colorful blobs with blur effect in dark theme */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Top row blobs */}
        <div className="absolute w-64 h-64 bg-yellow-400/30 rounded-full -top-20 -left-20 blur-2xl"></div>
        <div className="absolute w-48 h-48 bg-purple-500/30 rounded-full -top-10 left-1/3 transform -translate-x-1/2 blur-2xl"></div>
        <div className="absolute w-72 h-72 bg-green-500/30 rounded-full -top-24 -right-24 blur-2xl"></div>

        {/* Middle row blobs */}
        <div className="absolute w-56 h-56 bg-pink-500/30 rounded-full top-1/3 transform -translate-y-1/2 -left-20 blur-2xl"></div>
        <div className="absolute w-32 h-32 bg-blue-500/30 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute w-44 h-44 bg-sky-500/30 rounded-full top-1/3 transform -translate-y-1/2 -right-16 blur-2xl"></div>

        {/* Bottom row blobs */}
        <div className="absolute w-48 h-48 bg-orange-500/30 rounded-full -bottom-16 left-1/4 transform -translate-x-1/2 blur-2xl"></div>
        <div className="absolute w-36 h-36 bg-purple-500/30 rounded-full -bottom-12 left-2/3 transform -translate-x-1/2 blur-2xl"></div>
        <div className="absolute w-60 h-60 bg-sky-400/30 rounded-full -bottom-24 -right-20 blur-2xl"></div>
      </div>

      <main className="relative z-10 w-full flex justify-center items-center p-4">
        <div className="bg-gray-900 rounded-2xl p-8 md:p-10 w-full max-w-md shadow-2xl border border-gray-800 text-center backdrop-blur-sm bg-opacity-80">
          <h1 className="text-2xl font-bold mb-2 text-white">GENESIS</h1>
          <p className="text-sm text-gray-400 mb-6">Welcome to Genesis! Please register to continue</p>
          
          {error && (
            <div className="p-3 mb-4 bg-red-900/50 border border-red-800 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}
          
          {success && (
            <div className="p-3 mb-4 bg-green-900/50 border border-green-800 rounded-lg text-green-200 text-sm">
              Registration successful!
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="text-left">
            <div className="mb-6">
              <label htmlFor="username" className="block mb-2 text-sm text-gray-300">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-full text-base focus:outline-none focus:border-indigo-500 text-white shadow-md"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm text-gray-300">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-full text-base focus:outline-none focus:border-indigo-500 text-white shadow-md"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm text-gray-300">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-full text-base focus:outline-none focus:border-indigo-500 text-white shadow-md"
                required
              />
            </div>
             
            <div className="flex items-center justify-center"> 
              <button 
                type="submit" 
                disabled={loading}
                className="w-1/2 py-3 bg-indigo-600 text-white rounded-full text-base font-medium hover:bg-indigo-700 transition-colors disabled:bg-indigo-800 disabled:cursor-not-allowed"
              >
                {loading ? 'Loading...' : 'Continue'}
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-sm text-gray-400">
            <p>Already a member? <Link href="/auth/login" className="text-indigo-400 font-medium hover:underline">Login now</Link></p>
          </div>
        </div>
      </main>
    </div>
  );
}