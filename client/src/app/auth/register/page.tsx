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
      
      console.log("Submitting login to:", `${apiUrl}/api/auth/register-user`);
      
      const response = await axios.post("http://localhost:4000/api/auth/register-user", {
        email,
        password,
        username
      });
      
      console.log('Login response:', response.data);
      
      if (response.data) {
        const userEmail = response.data.email || response.data.user?.email || email;
        
        if (typeof window !== 'undefined') {
          localStorage.setItem('userEmail', userEmail);
          
          const metadata = {
            name: response.data.metadata?.name || response.data.name,
            email: response.data.metadata?.email || userEmail,
            credits: response.data.metadata?.credit || response.data.credit,
            userId: response.data.metadata?.userId || response.data.userId,
          };
          
          localStorage.setItem('userName', metadata.name);
          localStorage.setItem('userCredits', metadata.credits);
          localStorage.setItem('userId', metadata.userId);
          localStorage.setItem('userMetadata', JSON.stringify(metadata));
        }
        
        setSuccess(true);
        setTimeout(() => router.push('/model'), 1200);
      } else {
        throw new Error('Empty response from server');
      }
    } catch (err) {
      console.error("Login error:", err);
      const axiosError = err as AxiosError<ApiError>;
      setError(
        axiosError.response?.data?.message || 
        axiosError.message || 
        'An error occurred during registration'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-black relative overflow-hidden">
      {/* Gradient background with blur effects */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Top row blobs */}
        <div className="absolute w-72 h-72 bg-purple-700/20 rounded-full -top-20 -left-20 blur-3xl"></div>
        <div className="absolute w-56 h-56 bg-blue-600/20 rounded-full top-10 left-1/3 transform -translate-x-1/2 blur-3xl"></div>
        <div className="absolute w-64 h-64 bg-indigo-500/20 rounded-full -top-24 right-1/4 blur-3xl"></div>

        {/* Middle row blobs */}
        <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full top-1/2 transform -translate-y-1/2 -left-32 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-indigo-600/20 rounded-full top-1/2 right-1/4 transform -translate-y-1/2 blur-3xl"></div>

        {/* Bottom row blobs */}
        <div className="absolute w-72 h-72 bg-violet-600/20 rounded-full -bottom-20 left-1/4 transform -translate-x-1/2 blur-3xl"></div>
        <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full -bottom-24 -right-20 blur-3xl"></div>
      </div>

      <main className="relative z-10 w-full flex justify-center items-center p-4">
        <div className="bg-gray-900/80 rounded-2xl p-8 w-full max-w-md shadow-2xl border border-gray-800/50 text-center backdrop-blur-md">
          <h1 className="text-3xl font-bold mb-2 text-white tracking-wide">GENESIS</h1>
          <p className="text-sm text-gray-400 mb-8">Welcome to Genesis! Please register to continue</p>
          
          {error && (
            <div className="p-3 mb-6 bg-red-900/40 border border-red-800/50 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}
          
          {success && (
            <div className="p-3 mb-6 bg-green-900/40 border border-green-800/50 rounded-lg text-green-200 text-sm">
              Registration successful!
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="text-left">
            <div className="mb-6">
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-white shadow-md"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-white shadow-md"
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-white shadow-md"
                required
              />
            </div>
             
            <div className="flex items-center justify-center"> 
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-indigo-600 text-white rounded-xl text-base font-medium hover:bg-indigo-500 transition-colors disabled:bg-indigo-800 disabled:cursor-not-allowed shadow-lg"
              >
                {loading ? 'Loading...' : 'Continue'}
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Already a member? <Link href="/auth/login" className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors">Login now</Link></p>
          </div>
        </div>
      </main>
    </div>
  );
}