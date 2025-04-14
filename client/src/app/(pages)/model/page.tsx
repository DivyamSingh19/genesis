import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Paperclip,
  Send,
  MessageSquareText,
  ChevronLeft,
} from "lucide-react";
import Image from "next/image";
import localImage from "./image.png";

export default function HomePage() {
  return (
    <div className="bg-black">
      <div className="flex h-screen bg-black text-white">
        <div className="flex-1 flex flex-col">
          <header className="p-4 flex justify-between items-center border-b border-zinc-900">
            <div className="flex items-center">
              <div className="h-8 w-8 mr-2">
                <svg
                  viewBox="0 0 24 24"
                  className="text-emerald-400"
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
              <span className="text-xl font-medium text-white">Genesis</span>
            </div>
          </header>

          <main className="flex-1 flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold text-center mb-10 text-white">
             Spark of genius? Let&apos;s shape it!
            </h1>

            {/* Static Prompt Section */}
            <div className="w-full max-w-xl mb-8">
              <Card className="bg-zinc-900 border-zinc-800 rounded-xl">
                <CardContent className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-white">Current prompt</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                    >
                      Retry prompt
                    </Button>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4">
                    "Create a fantasy bird with vibrant, multicolored feathers,
                    featuring a mix of deep blues, fiery oranges, and soft
                    pinks. The bird has a regal and majestic posture, with
                    intricate, detailed plumage resembling fine brushstrokes.
                    Surrounded by large, surreal feathers in warm tones."
                  </p>

                  {/* Static Image Placeholder */}
                  <div className="relative rounded-xl overflow-hidden bg-zinc-900 aspect-[4/3] mb-3">
                    <Image
                      src={localImage}
                      alt="AI generated fantasy bird with colorful feathers"
                      fill
                      priority
                      className="object-cover"
                      quality={100}
                    />
                    <div className="absolute bottom-3 right-3">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-black/70 hover:bg-black/90 text-white text-xs font-normal rounded-full px-3 py-1 flex items-center gap-1"
                      >
                        
                        Output
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="w-full max-w-xl mb-10">
              <div className="relative">
                <Input
                  className="pr-24 py-6 text-base bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500 rounded-xl"
                  placeholder="Generate anything..."
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  >
                    <Globe className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  >
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center mt-2 ml-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="text-xs rounded-full bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                >
                  <MessageSquareText className="h-3 w-3 mr-1" />
                  Auto
                  <ChevronLeft className="h-3 w-3 ml-1 rotate-270" />
                </Button>
              </div>
            </div>

            <div className="w-full max-w-xl mb-6">
              <Card className="mb-6 bg-zinc-900 border-zinc-800 rounded-xl hover:border-zinc-700 transition-all">
                <CardContent className="p-5 flex items-center">
                  <div className="flex-1">
                    <div className="text-sm mb-1 text-white font-medium">
                      Creative AI Assistant
                    </div>
                    <div className="text-xs text-zinc-400">
                      Generate content with advanced capabilities
                    </div>
                  </div>
                  <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-0.5">
                      <div className="bg-blue-500 h-5 w-5 rounded-sm"></div>
                      <div className="bg-blue-500 h-5 w-5 rounded-sm"></div>
                      <div className="bg-blue-500 h-5 w-5 rounded-sm"></div>
                      <div className="bg-blue-500 h-5 w-5 rounded-sm"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-zinc-900 border-zinc-800 rounded-xl hover:border-zinc-700 transition-all">
                  <CardContent className="p-4">
                    <div className="font-medium mb-1 text-white">
                      Image Creation
                    </div>
                    <div className="text-xs mt-2 text-zinc-400">
                      Generate stunning visuals
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-zinc-800 rounded-xl hover:border-zinc-700 transition-all">
                  <CardContent className="p-4 flex">
                    <div className="flex-1 text-xs">
                      <div className="font-medium text-white">
                        Code Generation
                      </div>
                      <div className="text-zinc-400 mt-1">
                        Create functional code
                      </div>
                    </div>
                    <div className="h-10 w-10 bg-blue-900 rounded-lg ml-2 flex items-center justify-center">
                      <div className="h-6 w-6 border-t-2 border-r-2 border-blue-500"></div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-zinc-800 rounded-xl hover:border-zinc-700 transition-all">
                  <CardContent className="p-4 flex">
                    <div className="flex-1 text-xs">
                      <div className="font-medium text-white">
                        Content Writer
                      </div>
                      <div className="text-zinc-400 mt-1">
                        Draft professional text
                      </div>
                    </div>
                    <div className="h-10 w-10 bg-zinc-800 rounded-lg ml-2 flex items-center justify-center">
                      <div className="h-6 w-6 border-b-2 border-l-2 border-emerald-500"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
