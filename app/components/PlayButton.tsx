'use client';
import { useState } from 'react';

export default function PlayButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full aspect-square rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 p-2">
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <div className={`w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
              <svg 
                className="w-4 h-4 text-white" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 