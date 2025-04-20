"use client"
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface FileUploadDemoProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  previewUrl: string | null;
  clearSelectedFile: () => void;
}

export function FileUploadDemo({ 
  onFileSelect, 
  selectedFile, 
  previewUrl, 
  clearSelectedFile 
}: FileUploadDemoProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      onFileSelect(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
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
  );
}