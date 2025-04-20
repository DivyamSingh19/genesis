"use client"
import React, { useState, KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Paperclip,
  Send,
  Loader2,
  Home,
  Image as ImageIcon,
  Code,
  FileText,
  Menu,
  X
} from "lucide-react";
import Image from "next/image";
import localImage from "./image.png";

interface Message {
  type: "user" | "bot" | "error";
  content: string;
  imageUrl?: string;
}

export default function HomePage() {
  const [prompt, setPrompt] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const generateImage = async () => {
    function checkAndDeductUserCredits(userId:string) {
      if (!userId) {
        console.error("User ID is required");
        return false;
      }
      
      try {
         
        const creditsKey = `user_${userId}_credits`;
        
        
        const storedCredits = localStorage.getItem(creditsKey);
        const currentCredits = storedCredits ? parseInt(storedCredits, 10) : 0;
        
        console.log(`User ${userId} has ${currentCredits} credits available`);
        
         
        if (currentCredits < 10) {
          console.warn(`User ${userId} doesn't have enough credits for generation`);
          return false;
        }
        
        
        const newBalance = currentCredits - 10;
        localStorage.setItem(creditsKey, newBalance.toString());
        
        console.log(`Deducted 10 credits from user ${userId}. New balance: ${newBalance}`);
        return true;
        
      } catch (error) {
        console.error("Error checking or updating credits in localStorage:", error);
        return false;
      }
    }
    if (!prompt.trim()) return;
    
     
    const userMessage: Message = {
      type: "user",
      content: prompt
    };
    
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);
    setError(null);
    
    
    setPrompt("");
    
    try {
      const response = await fetch("http://127.0.0.1:5000/generate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          membership_type: "basic" 
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.image_urls && data.image_urls.length > 0) {
        // Add bot response with image
        const botMessage: Message = {
          type: "bot",
          content: prompt,
          imageUrl: data.image_urls[0]
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error("No images were generated");
      }
    } catch (err) {
      console.error("Error generating image:", err);
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
      
      // Add error message
      const errorMsg: Message = {
        type: "error",
        content: `Error: ${errorMessage}`
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
      // Prompt is already cleared at the beginning of the function
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !loading) {
      generateImage();
    }
  };

  const resetToHome = () => {
    setMessages([]);
    setPrompt("");
    setError(null);
  };

  return (
    <div className="bg-black h-screen flex">
      
      <div className={`bg-zinc-950 border-r border-zinc-900 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0 md:w-16'} flex flex-col overflow-hidden`}>
        
        <div 
          className="p-4 flex items-center cursor-pointer hover:bg-zinc-900 transition-colors"
          onClick={resetToHome}
        >
          <div className="h-8 w-8 text-emerald-400 mr-3">
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full"
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
          {sidebarOpen && <span className="font-bold text-lg text-gray-300">Genesis</span>}
        </div>
        
         
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header with Toggle Button */}
        <div className="md:hidden bg-zinc-950 border-b border-zinc-900 p-3 flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2 text-gray-400 hover:bg-zinc-900 hover:text-gray-300"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <div className="h-6 w-6 text-emerald-400 mr-2">
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full"
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
          <span className="font-bold text-gray-300">Genesis</span>
        </div>

        {/* Chat Messages Area - Added top padding and reduced bottom padding */}
        <div className="flex-1 overflow-y-auto p-3 pt-8 flex flex-col space-y-2">
          {messages.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center pt-10">
              <div className="h-16 w-16 mb-3">
                <svg
                  viewBox="0 0 24 24"
                  className="text-emerald-400 w-full h-full"
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
              <h1 className="text-3xl font-bold text-gray-300 mb-3">Genesis</h1>
              <p className="text-gray-400 max-w-md mb-6">Spark of genius? Let's shape it!</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-xl">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 hover:border-zinc-700 transition-all">
                  <div className="font-medium mb-1 text-gray-300">Image Creation</div>
                  <div className="text-xs text-gray-400">Generate stunning visuals</div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 hover:border-zinc-700 transition-all flex">
                  <div className="flex-1 text-xs">
                    <div className="font-medium text-gray-300">Code Generation</div>
                    <div className="text-gray-400">Create functional code</div>
                  </div>
                  <div className="h-8 w-8 bg-gray-800 rounded-lg ml-2 flex items-center justify-center">
                    <div className="h-5 w-5 border-t-2 border-r-2 border-gray-500"></div>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 hover:border-zinc-700 transition-all flex">
                  <div className="flex-1 text-xs">
                    <div className="font-medium text-gray-300">Content Writer</div>
                    <div className="text-gray-400">Draft professional text</div>
                  </div>
                  <div className="h-8 w-8 bg-gray-800 rounded-lg ml-2 flex items-center justify-center">
                    <div className="h-5 w-5 border-b-2 border-l-2 border-gray-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`max-w-[90%] rounded-xl p-3 ${
                    message.type === "user" 
                      ? "bg-gray-700 text-gray-200" 
                      : message.type === "error" 
                      ? "bg-gray-800 text-gray-300 border border-gray-700" 
                      : "bg-gray-800 text-gray-300"
                  }`}
                >
                  <p className="mb-2">{message.content}</p>
                  
                  {message.imageUrl && (
                    <div className="relative rounded-lg overflow-hidden bg-zinc-900 aspect-[4/3] w-64 md:w-80">
                      <Image
                        src={message.imageUrl}
                        alt="AI generated image"
                        fill
                        priority
                        className="object-cover"
                        quality={100}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input Area - Fixed at bottom with added padding */}
        <div className="p-3 pb-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Input
                className="pr-20 py-5 text-base bg-zinc-900 border-zinc-800 text-gray-300 placeholder-gray-500 rounded-xl"
                placeholder="Generate anything..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-gray-400 hover:bg-zinc-800 hover:text-gray-300"
                >
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
                  onClick={generateImage}
                  disabled={loading || !prompt.trim()}
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            {error && !messages.some(m => m.type === "error") && (
              <div className="mt-2 ml-2 text-gray-400 text-xs">{error}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}