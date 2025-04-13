// pages/index.js
"use client"
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [prompt, setPrompt] = useState('');
  
  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden relative">
      <Head>
        <title>Imagen - AI Image Generation</title>
        <meta name="description" content="Generate amazing images with AI in seconds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Colorful blobs decoration */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] rounded-full bg-pink-500 opacity-40 blur-[80px]"></div>
      <div className="absolute top-[100px] right-[-100px] w-[350px] h-[350px] rounded-full bg-purple-500 opacity-40 blur-[80px]"></div>
      <div className="absolute bottom-[-150px] left-[300px] w-[400px] h-[400px] rounded-full bg-orange-500 opacity-40 blur-[80px]"></div>
      <div className="absolute bottom-[100px] right-[100px] w-[300px] h-[300px] rounded-full bg-blue-500 opacity-40 blur-[80px]"></div>
      <div className="absolute top-[400px] left-[100px] w-[250px] h-[250px] rounded-full bg-green-500 opacity-40 blur-[80px]"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center py-6 px-8 md:px-16">
        <div className="flex items-center">
          <span className="text-white text-3xl font-bold">Genesis.ai</span>
        </div>
        <div className="hidden md:flex space-x-8 text-gray-300">
          <Link href="#features" className="hover:text-white transition">Features</Link>
          <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="#examples" className="hover:text-white transition">Gallery</Link>
          <Link href="#docs" className="hover:text-white transition">Docs</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/auth/login" className="text-gray-300 hover:text-white transition px-4 py-2">Log in</Link>
          <Link href="/auth/register" className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-2 rounded-full">
            Get started
          </Link>
        </div>
      </nav>
      
      {/* Hero section */}
      <main className="relative z-10">
        <div className="container mx-auto px-8 pt-12 pb-24 md:pt-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
                CREATE WITH <br />
                AI IMAGINATION
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Generate beautiful images in seconds with our advanced AI — because you've got better things to do than struggle with design tools.
              </p>
              
             
              <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md">
                <h3 className="text-gray-800 text-xl font-semibold mb-6">Try it now</h3>
                <div className="mb-4">
                  <label htmlFor="prompt" className="block text-gray-600 mb-2">Describe your image</label>
                  <input 
                    type="text" 
                    id="prompt" 
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                    placeholder="A cyberpunk city with flying cars..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-600 mb-2">Email address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-medium transition">
                  Generate Image
                </button>
                <p className="text-gray-500 text-center mt-4 text-sm">
                  No account? <Link href="/signup" className="text-purple-600 hover:text-purple-700">Create one</Link>
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="bg-gray-800 rounded-3xl p-4 shadow-xl w-full max-w-md">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="aspect-square rounded-xl bg-gray-700 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Sample generated image placeholder */}
                      <img src="/api/placeholder/400/400" alt="AI generated image example" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-gray-700 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-300">Prompt: "Colorful futuristic cityscape"</div>
                      <div className="flex space-x-2">
                        <button className="p-1 rounded hover:bg-gray-600">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m4-5l5 5 5-5m-5 5V3"></path>
                          </svg>
                        </button>
                        <button className="p-1 rounded hover:bg-gray-600">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                 
                <div className="absolute -bottom-12 -left-12 w-16 h-24 bg-green-400 clip-triangle rotate-12"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-xl bg-purple-400 rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Trusted by section similar to Pinata */}
      <div className="relative z-10 bg-gray-800 py-10">
        <div className="container mx-auto px-8">
          <p className="text-center text-gray-400 text-lg font-bold mb-8">TRUSTED BY 400,000+ CREATORS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="w-24 h-12 bg-gray-700 rounded flex items-center justify-center"></div>
            <div className="w-24 h-12 bg-gray-700 rounded flex items-center justify-center"></div>
            <div className="w-24 h-12 bg-gray-700 rounded flex items-center justify-center"></div>
            <div className="w-24 h-12 bg-gray-700 rounded flex items-center justify-center"></div>
            <div className="w-24 h-12 bg-gray-700 rounded flex items-center justify-center"></div>
          </div>
        </div>
      </div>
      
     
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-8 py-3 rounded-full">
              Get started
            </button>
            <button className="bg-teal-500 hover:bg-teal-600 transition text-white px-8 py-3 rounded-full">
              View gallery
            </button>
            <button className="bg-pink-500 hover:bg-pink-600 transition text-white px-8 py-3 rounded-full">
              Join Discord
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded-full">
              Read docs
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
}