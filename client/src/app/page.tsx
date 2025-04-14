// pages/index.js
"use client"
import Navbar from '@/components/navbar/Navbar';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Genesis.ai - Advanced AI Image Generation</title>
        <meta name="description" content="Transform your ideas into stunning visuals with our fine-tuned Stable Diffusion and GAN models" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
       
      <main>
        <div className="w-full max-w-6xl mx-auto px-6 py-12">
          <div className="bg-gray-100 text-black rounded-3xl overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:max-w-2xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                  NEXT-GEN AI IMAGE CREATION
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Create professional-quality visuals in seconds with our fine-tuned Stable Diffusion and GAN models. 
                  From concept to finished artwork—unleash your creative vision without technical barriers.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link href="/signup" className="bg-purple-600 hover:bg-purple-700 transition duration-200 text-white px-8 py-4 rounded-full font-medium text-lg">
                    Get started
                  </Link>
                  
                  <Link href="/about" className="bg-gray-700 hover:bg-gray-800 transition duration-200 text-white px-8 py-4 rounded-full font-medium text-lg">
                    About
                  </Link>
                </div>
              </div>
              
              <div className="w-full md:w-auto">
                <div className="bg-gray-900 p-4 rounded-xl w-full max-w-sm mx-auto md:mx-0">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="text-green-400 font-mono text-sm mb-2">
                    pip i pytorch
                  </div>
                  
                  <div className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                          <path fill="#8B5CF6" d="M40,60 L160,60 L160,140 L40,140 Z" />
                          <circle cx="80" cy="80" r="20" fill="#EC4899" />
                          <path d="M120,100 L140,130 L100,130 Z" fill="#FBBF24" />
                          <rect x="65" y="110" width="30" height="15" fill="#34D399" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-6xl mx-auto px-6 pb-16">
          {/* USPs Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fine-tuned Models</h3>
              <p className="text-gray-400">Leverage our custom-trained Stable Diffusion and GAN models for superior image quality and style consistency.</p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="w-12 h-12 bg-pink-600 rounded-lg mb-4 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V16M8 12H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Developer-First API</h3>
              <p className="text-gray-400">Simple integration with any project using our powerful API. Generate images programmatically with just a few lines of code.</p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg mb-4 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2"/>
                  <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Generate high-quality images in seconds, not minutes. Our optimized infrastructure ensures minimal latency for all your creative needs.</p>
            </div>
          </div>
        </div>
      </main>
      
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
    </div>
  );
}