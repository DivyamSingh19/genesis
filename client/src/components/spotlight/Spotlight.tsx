"use client";
import React from "react";
import { SpotlightBase } from "@/components/ui/spotlight-base";
import { Menu, ArrowRight } from 'lucide-react';
import { useRouter } from "next/navigation";  
export function Spotlight() {
    const router = useRouter();
    const handleClick = (()=>{
        router.push("/model")
    })
   
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <SpotlightBase />

    <div className="bg-black text-white min-h-screen relative overflow-hidden pt-15">
       
      <div className="absolute inset-0 bg-transparent"></div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-extralight tracking-tight">
          <span className="font-bold">G</span>ova
        </div>
        <div className="flex items-center space-x-6">
          <a href="" className="text-gray-300 hover:text-white transition">Solutions</a>
          <a href="" className="text-gray-300 hover:text-white transition">Features</a>
          <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition flex items-center">
            Get Started <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </nav>

      
      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-24 text-center">
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Transforming Ideas into 
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Digital Experiences
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          Innovative solutions that bridge creativity and technology, 
          delivering powerful digital products that redefine user interactions.
        </p>

        
        <div className="max-w-2xl mx-auto relative">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2 flex items-center shadow-2xl">
             
            <button onClick={handleClick}className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  </div>
  );
}
