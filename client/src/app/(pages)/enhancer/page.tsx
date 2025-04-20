"use client"
import React, { useState, KeyboardEvent, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Paperclip,
  Send,
  Loader2,
  Home,
  Image as ImageIcon,
  Upload,
  X
} from "lucide-react";
import Image from "next/image";

interface Message {
  type: "user" | "bot" | "error";
  content: string;
  imageUrl?: string;
  originalImageUrl?: string;
}

export default function ImageEnhancerPage() {
  const [prompt, setPrompt] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Create a preview URL for the selected image
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      
      // Clean up the object URL when component unmounts or when a new file is selected
      return () => URL.revokeObjectURL(objectUrl);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const clearSelectedFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const enhanceImage = async () => {
    if (!selectedFile || !prompt.trim()) {
      setError("Please select an image and enter a prompt");
      return;
    }
    
    const userMessage: Message = {
      type: "user",
      content: prompt,
      originalImageUrl: previewUrl || undefined
    };
    
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);
    setError(null);
    
    // Keep the original prompt before clearing
    const currentPrompt = prompt;
    setPrompt("");
    
    try {
      // Create form data to send the file and prompt
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("prompt", currentPrompt);
      formData.append("membership_type", "basic");
      
      const response = await fetch("http://127.0.0.1:5000/enhance/", {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.enhanced_image_url) {
         
        const botMessage: Message = {
          type: "bot",
          content: currentPrompt,
          imageUrl: data.enhanced_image_url
        };
        setMessages(prev => [...prev, botMessage]);
        
        // Clear the selected file after successful enhancement
        clearSelectedFile();
      } else {
        throw new Error("No enhanced image was received");
      }
    } catch (err) {
      console.error("Error enhancing image:", err);
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
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !loading && selectedFile) {
      enhanceImage();
    }
  };

  const resetToHome = () => {
    setMessages([]);
    setPrompt("");
    setError(null);
    clearSelectedFile();
  };

  return (
    <div className="bg-black h-screen flex">
      {/* Sidebar */}
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
            {sidebarOpen ? <X className="h-5 w-5" /> : <Upload className="h-5 w-5" />}
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
          <span className="font-bold text-gray-300">Image Enhancer</span>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-3 pt-8 flex flex-col space-y-4">
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
              <h1 className="text-3xl font-bold text-gray-300 mb-3">Image Enhancer</h1>
              <p className="text-gray-400 max-w-md mb-6">Upload an image and provide instructions to enhance it</p>
              
              {/* File Upload Area */}
              <div className="w-full max-w-xl mb-6">
                <div 
                  className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors
                    ${previewUrl ? 'border-emerald-600 bg-zinc-900' : 'border-zinc-700 hover:border-zinc-500 bg-zinc-900'}
                  `}
                  onClick={triggerFileInput}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  
                  {previewUrl ? (
                    <div className="relative w-full max-w-sm aspect-auto">
                      <div className="relative rounded-lg overflow-hidden bg-zinc-800 aspect-[4/3] w-full">
                        <Image
                          src={previewUrl}
                          alt="Preview"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <button
                        className="absolute -top-2 -right-2 bg-zinc-800 rounded-full p-1 text-gray-400 hover:text-gray-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          clearSelectedFile();
                        }}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <ImageIcon className="h-12 w-12 text-zinc-600 mb-2" />
                      <p className="text-gray-400 mb-1">Click to upload an image</p>
                      <p className="text-xs text-gray-500">JPG, PNG, WEBP supported</p>
                    </>
                  )}
                </div>
              </div>

              <div className="relative w-full max-w-xl">
                <Input
                  className="py-5 pr-20 text-base bg-zinc-900 border-zinc-800 text-gray-300 placeholder-gray-500 rounded-xl"
                  placeholder="Enter your enhancement instructions..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={!selectedFile}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Button
                    size="icon"
                    className="h-8 w-8 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 disabled:bg-zinc-700"
                    onClick={enhanceImage}
                    disabled={loading || !prompt.trim() || !selectedFile}
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              
              {error && (
                <div className="mt-4 text-gray-400 text-xs bg-red-900/30 p-2 rounded-lg">
                  {error}
                </div>
              )}
            </div>
          ) : (
            <>
              {messages.map((message, index) => (
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
                    
                    {message.originalImageUrl && (
                      <div className="relative rounded-lg overflow-hidden bg-zinc-900 aspect-[4/3] w-64 md:w-80 mb-2">
                        <Image
                          src={message.originalImageUrl}
                          alt="Original image"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    )}
                    
                    {message.imageUrl && (
                      <div className="relative rounded-lg overflow-hidden bg-zinc-900 aspect-[4/3] w-64 md:w-80">
                        <Image
                          src={message.imageUrl}
                          alt="Enhanced image"
                          fill
                          priority
                          className="object-contain"
                          quality={100}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* File Upload Area when there are messages */}
              <div className="w-full flex justify-center mt-6">
                <div className="w-full max-w-xl flex space-x-4">
                  <div 
                    className={`flex-shrink-0 w-24 h-24 border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-colors
                      ${previewUrl ? 'border-emerald-600 bg-zinc-900' : 'border-zinc-700 hover:border-zinc-500 bg-zinc-900'}
                    `}
                    onClick={triggerFileInput}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    
                    {previewUrl ? (
                      <div className="relative w-full h-full">
                        <div className="relative rounded-lg overflow-hidden bg-zinc-800 w-full h-full">
                          <Image
                            src={previewUrl}
                            alt="Preview"
                            fill
                            priority
                            className="object-contain"
                          />
                        </div>
                        <button
                          className="absolute -top-2 -right-2 bg-zinc-800 rounded-full p-1 text-gray-400 hover:text-gray-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            clearSelectedFile();
                          }}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <ImageIcon className="h-8 w-8 text-zinc-600" />
                    )}
                  </div>
                  
                  <div className="flex-1 relative">
                    <Input
                      className="py-5 pr-20 text-base bg-zinc-900 border-zinc-800 text-gray-300 placeholder-gray-500 rounded-xl h-24"
                      placeholder="Enter your enhancement instructions..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      onKeyPress={handleKeyPress}
                      disabled={!selectedFile}
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <Button
                        size="icon"
                        className="h-8 w-8 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 disabled:bg-zinc-700"
                        onClick={enhanceImage}
                        disabled={loading || !prompt.trim() || !selectedFile}
                      >
                        {loading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Send className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {error && !messages.some(m => m.type === "error") && (
                <div className="mt-2 ml-2 text-gray-400 text-xs bg-red-900/30 p-2 rounded-lg">
                  {error}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}