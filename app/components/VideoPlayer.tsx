'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface VideoPlayerProps {
  thumbnailUrl: string;
  videoUrl: string;
}

export default function VideoPlayer({ thumbnailUrl, videoUrl }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    if (videoRef.current) {
      // Store current timestamp before closing
      const iframe = videoRef.current;
      const player = iframe as any;
      if (player.getCurrentTime) {
        setCurrentTime(player.getCurrentTime());
      }
    }
    setIsPlaying(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isPlaying) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isPlaying]);

  return (
    <>
      {/* Thumbnail */}
      <div 
        className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer group"
        onClick={handlePlay}
      >
        <Image
          src={thumbnailUrl}
          alt="Video Thumbnail"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <svg 
                  className="w-6 h-6 text-white" 
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

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />
          <div className="relative w-[80vw] aspect-video">
            <iframe
              ref={videoRef}
              width="100%"
              height="100%"
              src={`${videoUrl}?autoplay=1&start=${Math.floor(currentTime)}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
} 