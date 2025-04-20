import React from "react";
import { Sparkles, Image, Clock, Award, ArrowRight } from "lucide-react";
import { BackgroundBeams } from "../ui/Background-Beams";

export default function Landing() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-12 md:pt-24">
        <div className="inline-block mb-6 p-2 bg-blue-900/20 rounded-full">
          <Sparkles size={24} className="text-blue-500" />
        </div>
        <h2 className="text-blue-500 text-xl font-medium">AI IMAGE CREATOR</h2>
        <h1 className="text-white text-4xl md:text-6xl font-bold mt-2 mb-6">
          Bring Your <span className="text-blue-500">Imagination</span> to Life
        </h1>
        <p className="text-gray-300 mb-8 max-w-xl">
          Create stunning visuals in seconds with our advanced AI technology. 
          No design skills required.
        </p>
        
        <div className="flex gap-4">
          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">
            Try for free
          </button>
          <button className="px-6 py-3 rounded-md border border-blue-900 text-white hover:bg-blue-900/30 transition">
            View gallery
          </button>
        </div>
      </main>
      
      {/* Feature Cards */}
      <section className="relative z-10 max-w-6xl mx-auto mt-24 px-6">
        <h3 className="text-white text-2xl font-bold text-center mb-12">Create amazing images with powerful AI</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-900/10 border border-blue-900/40 rounded-xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-900/40 rounded-lg flex items-center justify-center mb-4">
              <Image className="text-blue-500" size={24} />
            </div>
            <h4 className="text-white text-xl font-medium mb-2">Multiple Styles</h4>
            <p className="text-gray-400">
              Choose from dozens of artistic styles or create your own unique look with custom parameters.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-blue-900/10 border border-blue-900/40 rounded-xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-900/40 rounded-lg flex items-center justify-center mb-4">
              <Clock className="text-blue-500" size={24} />
            </div>
            <h4 className="text-white text-xl font-medium mb-2">Lightning Fast</h4>
            <p className="text-gray-400">
              Generate high-quality images in seconds with our optimized AI processing pipeline.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-blue-900/10 border border-blue-900/40 rounded-xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-900/40 rounded-lg flex items-center justify-center mb-4">
              <Award className="text-blue-500" size={24} />
            </div>
            <h4 className="text-white text-xl font-medium mb-2">Premium Quality</h4>
            <p className="text-gray-400">
              Enjoy high-resolution outputs perfect for social media, marketing, or personal projects.
            </p>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="relative z-10 max-w-6xl mx-auto mt-24 px-6">
        <h3 className="text-white text-2xl font-bold text-center mb-12">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-900/40 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-blue-500 font-bold">1</span>
            </div>
            <h4 className="text-white text-lg font-medium mb-2">Describe</h4>
            <p className="text-gray-400 text-sm">
              Enter a detailed description of what you want to create
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-900/40 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-blue-500 font-bold">2</span>
            </div>
            <h4 className="text-white text-lg font-medium mb-2">Customize</h4>
            <p className="text-gray-400 text-sm">
              Select style, ratio, and other parameters
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-900/40 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-blue-500 font-bold">3</span>
            </div>
            <h4 className="text-white text-lg font-medium mb-2">Generate</h4>
            <p className="text-gray-400 text-sm">
              Our AI creates multiple variations based on your input
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-900/40 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-blue-500 font-bold">4</span>
            </div>
            <h4 className="text-white text-lg font-medium mb-2">Download</h4>
            <p className="text-gray-400 text-sm">
              Save your favorites in high resolution
            </p>
          </div>
        </div>
      </section>
      
      {/* Example Showcase */}
      <section className="relative z-10 max-w-6xl mx-auto mt-24 px-6 mb-24">
        <div className="bg-blue-900/10 border border-blue-900/40 rounded-xl p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">See what others are creating</h3>
              <p className="text-gray-400 mb-4 md:mb-0">
                Join thousands of creators making amazing AI-generated images
              </p>
            </div>
            <button className="flex items-center text-blue-500 hover:text-blue-400 transition">
              Explore gallery <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-blue-900/20 rounded-lg overflow-hidden"></div>
            <div className="aspect-square bg-blue-900/20 rounded-lg overflow-hidden"></div>
            <div className="aspect-square bg-blue-900/20 rounded-lg overflow-hidden"></div>
            <div className="aspect-square bg-blue-900/20 rounded-lg overflow-hidden"></div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative z-10 max-w-4xl mx-auto mt-12 px-6 mb-24 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
          Ready to create amazing images?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Join thousands of creators and start generating stunning AI images today.
          No credit card required to get started.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
            Start creating for free
          </button>
          <button className="px-8 py-3 rounded-md border border-blue-900 text-white hover:bg-blue-900/30 transition">
            Learn more
          </button>
        </div>
      </section>
      
      <BackgroundBeams />
    </div>
  );
}