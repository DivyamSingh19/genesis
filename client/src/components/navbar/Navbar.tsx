"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Coins } from "lucide-react";

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userCredit, setUserCredit] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const email = localStorage.getItem("userEmail");
        const creditStr = localStorage.getItem("userCredits");

        if (email) {
          setIsAuthenticated(true);
          setUserEmail(email);
          setUserCredit(creditStr ? parseInt(creditStr, 10) : 0);
        } else {
          setIsAuthenticated(false);
          setUserEmail("");
          setUserCredit(0);
        }
      }
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setUserEmail("");
    setUserCredit(0);
    router.push("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-transparent backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-3">
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 text-indigo-400"
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
        <Link href="/" className="text-white text-xl font-semibold tracking-wide">
          Genesis
        </Link>
      </div>

      <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
        <Link href="/features" className="hover:text-white transition">
          Features
        </Link>
        <Link href="/pricing" className="hover:text-white transition">
          Pricing
        </Link>
        <Link href="/about" className="hover:text-white transition">
          About
        </Link>
        <Link href="/enhancer" className="hover:text-white transition">
          Enhancer
        </Link>
        <Link href="/model" className="hover:text-white transition">
          Model
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <Link
              href="/premium"
              className="flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1.5 text-sm rounded-full shadow-md hover:opacity-90 transition"
            >
              <Coins className="w-4 h-4 mr-1" />
              Credits: <span className="ml-1 font-bold">{userCredit}</span>
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm text-zinc-300 hover:text-white transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/auth/login"
              className="text-sm text-zinc-300 hover:text-white transition"
            >
              Log in
            </Link>
            <Link
              href="/auth/register"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1.5 text-sm rounded-full shadow-md hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
