// pages/index.js
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
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-56 border-r bg-gray-50 flex flex-col">
        <div className="p-4">
          <div className="flex items-center mb-6">
            <div className="h-8 w-8 mr-2">
              <svg viewBox="0 0 24 24" className="text-emerald-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xl font-medium">perplexity</span>
          </div>
          
          <Button variant="outline" className="w-full justify-start mb-6 bg-white">
            <span className="mr-2">New Thread</span>
            <span className="text-xs text-muted-foreground ml-auto">Ctrl ⌘ P</span>
          </Button>
          
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Compass className="mr-2 h-4 w-4" />
              Discover
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Grid className="mr-2 h-4 w-4" />
              Spaces
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Library className="mr-2 h-4 w-4" />
              Library
            </Button>
          </nav>
        </div>
        
        <div className="mt-auto p-4">
          <div className="rounded-lg bg-gray-100 p-4 mb-4">
            <div className="font-medium mb-1">Try Pro</div>
            <div className="text-sm text-muted-foreground mb-2">Upgrade for image upload, smarter AI, and more Pro Search.</div>
            <Button variant="outline" className="w-full justify-start text-sm">
              <span className="mr-2 transform rotate-45">↗</span>
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-purple-700 text-white flex items-center justify-center mr-2">
                D
              </div>
              <div className="text-sm truncate">divyamsing3...</div>
            </div>
            <Settings className="h-4 w-4 text-gray-500" />
          </div>
          
          <Button variant="ghost" className="w-full justify-start mt-4">
            <DownloadCloud className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center p-6">
          <h1 className="text-4xl font-medium text-center mb-8">What do you want to know?</h1>
          
          <div className="w-full max-w-xl mb-8">
            <div className="relative">
              <Input 
                className="pr-24 py-6 text-base" 
                placeholder="Ask anything..." 
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Globe className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center mt-2 ml-2">
              <Button variant="secondary" size="sm" className="text-xs rounded-full">
                <MessageSquareText className="h-3 w-3 mr-1" />
                Auto
                <ChevronLeft className="h-3 w-3 ml-1 rotate-270" />
              </Button>
            </div>
          </div>
          
          <div className="w-full max-w-xl mb-6">
            <Card className="mb-4">
              <CardContent className="p-4 flex items-center">
                <div className="flex-1">
                  <div className="text-sm mb-1">Introducing our Windows App</div>
                  <div className="text-xs text-muted-foreground">Install the native Windows App</div>
                </div>
                <div className="h-10 w-10 bg-blue-400 rounded flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="bg-blue-200 h-4 w-4"></div>
                    <div className="bg-blue-200 h-4 w-4"></div>
                    <div className="bg-blue-200 h-4 w-4"></div>
                    <div className="bg-blue-200 h-4 w-4"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="font-medium mb-1">27°C</div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Bombay</span>
                    <span>H: 29° L: 27°</span>
                  </div>
                  <div className="text-xs mt-2 text-gray-400">Mist</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex">
                  <div className="flex-1 text-xs">
                    <div className="font-medium">Brain-Spinal Implant Helps Paralyzed...</div>
                  </div>
                  <div className="h-10 w-10 bg-blue-100 rounded ml-2"></div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex">
                  <div className="flex-1 text-xs">
                    <div className="font-medium">Canada PM Calls for Snap Election</div>
                  </div>
                  <div className="h-10 w-10 bg-gray-200 rounded ml-2"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="border-t p-4 text-sm text-muted-foreground flex justify-center space-x-4">
          <span>Pro</span>
          <span>Enterprise</span>
          <span>API</span>
          <span>Blog</span>
          <span>Careers</span>
          <span>Store</span>
          <span>Finance</span>
          <span className="flex items-center">
            English
            <ChevronLeft className="h-4 w-4 ml-1 rotate-270" />
          </span>
          <div className="ml-4 h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center">
            <HelpCircle className="h-4 w-4 text-white" />
          </div>
        </footer>
      </div>
    </div>
  );
}