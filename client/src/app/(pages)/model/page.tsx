import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  Compass, 
  Grid, 
  Library, 
  ChevronLeft, 
  DownloadCloud, 
  Globe, 
  Settings, 
  HelpCircle,
  Paperclip,
  Send,
  MessageSquareText
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex h-screen bg-zinc-900 text-white">
      
      <div className="w-56 border-r border-zinc-800 bg-zinc-950/50 flex flex-col hidden md:block">
        <div className="p-4">
          <div className="flex items-center mb-6">
            <div className="h-8 w-8 mr-2">
              <svg viewBox="0 0 24 24" className="text-emerald-400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xl font-medium text-white">Genesis</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center p-6">
          <h1 className="text-4xl font-medium text-center mb-8 text-zinc-100">What do you want to generate today?</h1>
          
          <div className="w-full max-w-xl mb-8">
            <div className="relative">
              <Input 
                className="pr-24 py-6 text-base bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500" 
                placeholder="Generate anything..." 
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                <Button size="icon" variant="ghost" className="h-8 w-8 text-zinc-400 hover:bg-zinc-700 hover:text-white">
                  <Globe className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8 text-zinc-400 hover:bg-zinc-700 hover:text-white">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full text-zinc-400 hover:bg-zinc-700 hover:text-white">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center mt-2 ml-2">
              <Button variant="secondary" size="sm" className="text-xs rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700">
                <MessageSquareText className="h-3 w-3 mr-1" />
                Auto
                <ChevronLeft className="h-3 w-3 ml-1 rotate-270" />
              </Button>
            </div>
          </div>
          
          <div className="w-full max-w-xl mb-6">
            <Card className="mb-4 bg-zinc-800 border-zinc-700">
              <CardContent className="p-4 flex items-center">
                <div className="flex-1">
                  <div className="text-sm mb-1 text-white"> </div>
                  <div className="text-xs text-zinc-400"> </div>
                </div>
                <div className="h-10 w-10 bg-blue-600 rounded flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="bg-blue-500 h-4 w-4"></div>
                    <div className="bg-blue-500 h-4 w-4"></div>
                    <div className="bg-blue-500 h-4 w-4"></div>
                    <div className="bg-blue-500 h-4 w-4"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-4">
                  <div className="font-medium mb-1 text-white"></div>
                 
                  <div className="text-xs mt-2 text-zinc-400"> </div>
                </CardContent>
              </Card>
              
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-4 flex">
                  <div className="flex-1 text-xs">
                    <div className="font-medium text-white"> </div>
                  </div>
                  <div className="h-10 w-10 bg-blue-900 rounded ml-2"></div>
                </CardContent>
              </Card>
              
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-4 flex">
                  <div className="flex-1 text-xs">
                    <div className="font-medium text-white"> </div>
                  </div>
                  <div className="h-10 w-10 bg-zinc-700 rounded ml-2"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}