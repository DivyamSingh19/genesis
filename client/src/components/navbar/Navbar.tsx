"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const [userCredit, setUserCredit] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated on component mount and localStorage changes
    const checkAuth = (): void => {
      // Need to check if window is available for SSR compatibility
      if (typeof window !== 'undefined') {
        const email = localStorage.getItem('userEmail');
        const creditStr = localStorage.getItem('userCredit');
        
        if (email) {
          setIsAuthenticated(true);
          setUserEmail(email);
          setUserCredit(creditStr ? parseInt(creditStr, 10) : 0);
        } else {
          setIsAuthenticated(false);
          setUserEmail('');
          setUserCredit(0);
        }
      }
    };

    // Initial check
    checkAuth();

    // Listen for storage changes (in case another tab changes auth status)
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleLogout = (): void => {
    localStorage.clear();
    setIsAuthenticated(false);
    setUserEmail('');
    setUserCredit(0);
    // Optionally redirect to home page after logout
    router.push('/');
  };

  return (
    <header className="p-4 flex justify-between items-center border-b border-zinc-900 bg-black text-white">
      <div className="flex items-center">
        <div className="h-8 w-8 mr-2">
          <svg
            viewBox="0 0 24 24"
            className="text-emerald-400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Link href="/" className="text-xl font-medium text-white">Genesis</Link>
      </div>
      
      <div className="hidden md:flex space-x-8">
        <Link href="#features" className="text-zinc-400 hover:text-white transition duration-200">Features</Link>
        <Link href="#pricing" className="text-zinc-400 hover:text-white transition duration-200">Pricing</Link>
        <Link href="#about" className="text-zinc-400 hover:text-white transition duration-200">About</Link>
      </div>
      
      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <>
            <Link 
              href="/premium" 
              className="bg-emerald-600 hover:bg-emerald-700 transition duration-200 px-4 py-2 rounded-full text-sm flex items-center"
            >
              <span className="mr-1">Credits:</span>
              <span className="font-bold">{userCredit}</span>
            </Link>
            <button 
              onClick={handleLogout}
              className="text-zinc-400 hover:text-white transition duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/auth/login" className="text-zinc-400 hover:text-white transition duration-200">Log in</Link>
            <Link href="/auth/register" className="bg-emerald-600 hover:bg-emerald-700 transition duration-200 text-white px-4 py-2 rounded-full text-sm">
              Get started
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;