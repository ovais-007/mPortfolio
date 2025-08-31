"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      setImageLoaded(false); // Reset loading state when modal opens
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-window w-full max-w-3xl h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-2">
            <div
              className="window-control close cursor-pointer"
              onClick={onClose}
            ></div>
            <div className="window-control minimize opacity-50"></div>
            <div className="window-control maximize opacity-50"></div>
          </div>
          
          <div className="flex-1 text-center">
            <h2 className="text-sm font-medium text-gray-800">Resume.pdf</h2>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={() => window.open("/resume/resume.pdf", "_blank")}
              className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors"
            >
              Download
            </button>
          </div>
        </div>

        {/* Resume Image Viewer */}
        <div className="flex-1 relative bg-gray-100 overflow-auto">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-700 font-medium">Loading Resume...</p>
              </div>
            </div>
          )}
          
          <div className="flex justify-center p-4">
            <div className="relative max-w-full">
              <Image
                src="/resume/resume.png"
                alt="Ovais Ahmad Resume"
                width={800}
                height={1000}
                className="shadow-lg rounded border border-gray-300"
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  objectFit: 'contain'
                }}
                onLoad={() => setImageLoaded(true)}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
