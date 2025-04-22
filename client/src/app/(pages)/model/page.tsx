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
  X,
  Download
} from "lucide-react";
import Image from "next/image";
import localImage from "./image.png";
import AuthLayout from "@/layout/AuthLayout";

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

  // Function to handle image download
  const handleImageDownload = async (imageUrl: string) => {
    try {
      // Fetch the image
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      
      // Create a temporary anchor element
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      
      // Set the file name (extract from URL or use a default)
      const fileName = imageUrl.split('/').pop() || `genesis-image-${Date.now()}.png`;
      downloadLink.download = fileName;
      
      // Append to the DOM, trigger click, and clean up
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      // Clean up the object URL
      URL.revokeObjectURL(downloadLink.href);
    } catch (err) {
      console.error("Error downloading image:", err);
      setError("Failed to download image");
    }
  };

  return (
    <div> 
      <AuthLayout> 
    <div className="bg-black min-h-screen h-screen flex relative overflow-hidden">
      {/* Subtle gradient background with blur effects */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-700/10 rounded-full -top-48 -left-48 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full top-1/4 right-1/3 transform -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute w-80 h-80 bg-indigo-600/10 rounded-full bottom-1/4 left-1/3 transform translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full -bottom-48 -right-48 blur-3xl"></div>
      </div>
      
      {/* Sidebar */}
      <div className={`bg-black backdrop-blur-md border-r border-zinc-800/70 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0 md:w-16'} flex flex-col overflow-hidden relative z-10`}>
        
        <div 
          className="p-4 flex items-center cursor-pointer hover:bg-zinc-800/70 transition-colors"
          onClick={resetToHome}
        >
          <div className="h-8 w-8 text-indigo-400 mr-3">
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
          {sidebarOpen && <span className="font-bold text-lg text-gray-200">Genesis</span>}
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        {/* Mobile Header with Toggle Button */}
        <div className="md:hidden bg-zinc-900/70 backdrop-blur-md border-b border-zinc-800/70 p-3 flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2 text-gray-400 hover:bg-zinc-800/70 hover:text-gray-200"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <div className="h-6 w-6 text-indigo-400 mr-2">
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
          <span className="font-bold text-gray-200">Genesis</span>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 pt-8 flex flex-col space-y-3">
          {messages.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center pt-10">
              <div className="h-16 w-16 mb-4">
                <svg
                  viewBox="0 0 24 24"
                  className="text-indigo-400 w-full h-full"
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
              <h1 className="text-3xl font-bold text-gray-200 mb-3">Genesis</h1>
              <p className="text-gray-400 max-w-md mb-8">Transform your ideas into beautiful digital experiences</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-xl">
                <div className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-4 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                  <ImageIcon className="h-5 w-5 text-indigo-400 mb-2" />
                  <div className="font-medium mb-1 text-gray-200">Image Creation</div>
                  <div className="text-xs text-gray-400">Generate stunning visuals instantly</div>
                </div>

                <div className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-4 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                  <Code className="h-5 w-5 text-indigo-400 mb-2" />
                  <div className="font-medium mb-1 text-gray-200">Code Generation</div>
                  <div className="text-xs text-gray-400">Create functional code snippets</div>
                </div>

                <div className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-4 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                  <FileText className="h-5 w-5 text-indigo-400 mb-2" />
                  <div className="font-medium mb-1 text-gray-200">Content Writer</div>
                  <div className="text-xs text-gray-400">Draft professional content</div>
                </div>
              </div>
            </div>
          ) : (
            messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
              >
                <div 
                  className={`max-w-[90%] rounded-xl p-4 shadow-md ${
                    message.type === "user" 
                      ? "bg-indigo-600/90 text-gray-100" 
                      : message.type === "error" 
                      ? "bg-zinc-900/80 text-gray-200 border border-red-800/50" 
                      : "bg-zinc-900/80 text-gray-200 border border-zinc-800/50"
                  }`}
                >
                  <p className="mb-3">{message.content}</p>
                  
                  {message.imageUrl && (
                    <div className="relative rounded-lg overflow-hidden bg-zinc-800 aspect-[4/3] w-64 md:w-80 shadow-lg">
                      <Image
                        src={message.imageUrl}
                        alt="AI generated image"
                        fill
                        priority
                        className="object-cover"
                        quality={100}
                      />
                      
                      {/* Download button */}
                      <Button
                        size="icon"
                        className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full h-8 w-8 shadow-lg transition-colors duration-200"
                        onClick={() => handleImageDownload(message.imageUrl as string)}
                        title="Download image"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 pb-6 border-t border-zinc-900/50 bg-zinc-900/30 backdrop-blur-md">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Input
                className="pr-20 py-6 text-base bg-zinc-800/80 border-zinc-700/50 text-gray-200 placeholder-gray-500 rounded-xl shadow-lg focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
                placeholder="Generate anything..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-gray-400 hover:bg-zinc-700/50 hover:text-gray-200"
                >
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-9 w-9 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 shadow-md"
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
    </AuthLayout>
    </div>
  );
}