"use client"
import React from 'react';
import Link from "next/link";

const Navbar = () => {
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
        <Link href="/auth/login" className="text-zinc-400 hover:text-white transition duration-200">Log in</Link>
        <Link href="/auth/register" className="bg-emerald-600 hover:bg-emerald-700 transition duration-200 text-white px-4 py-2 rounded-full text-sm">
          Get started
        </Link>
      </div>
    </header>
  );
};

export default Navbar;