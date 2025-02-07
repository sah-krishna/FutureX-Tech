'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  tags: string[];
  description?: string;
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Way Fields",
    category: "E-Commerce",
    image: "/about-poster.avif",
    year: "2024",
    tags: ["E-Commerce", "Portfolio"],
    description: "A modern e-commerce platform with seamless user experience and robust backend.",
    link: "/portfolio/way-fields"
  },
  {
    id: 2,
    title: "Raven Studio",
    category: "Business",
    image: "/about-poster.avif",
    year: "2025",
    tags: ["Business", "Agency"],
    description: "Creative agency website with dynamic content and interactive elements.",
    link: "/portfolio/raven-studio"
  },
  {
    id: 3,
    title: "Gotham Wonder",
    category: "Agency",
    image: "/about-poster.avif",
    year: "2024",
    tags: ["Portfolio", "Agency"],
    description: "Digital agency platform showcasing services and client success stories.",
    link: "/portfolio/gotham-wonder"
  },
  // Add more portfolio items...
];

interface PortfolioGalleryProps {
  variant?: 'stack' | 'grid';
  limit?: number;
}

export default function PortfolioGallery({ variant = 'stack', limit }: PortfolioGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const items = limit ? portfolioItems.slice(0, limit) : portfolioItems;

  useEffect(() => {
    if (variant !== 'stack') return;

    const handleScroll = () => {
      if (!galleryRef.current) return;
      requestAnimationFrame(updateScroll);
    };

    const updateScroll = () => {
      if (!galleryRef.current) return;
      
      const items = galleryRef.current.querySelectorAll('.portfolio-item');
      const galleryTop = galleryRef.current.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.2;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const offsetTop = rect.top - galleryTop;
        const progress = Math.min(1, Math.max(0, (triggerPoint - offsetTop) / triggerPoint));
        
        if (progress > 0) {
          (item as HTMLElement).style.transform = `translateY(${progress * 100}px) scale(${1 - progress * 0.05})`;
          (item as HTMLElement).style.opacity = `${1 - progress * 0.3}`;
        } else {
          (item as HTMLElement).style.transform = 'translateY(0) scale(1)';
          (item as HTMLElement).style.opacity = '1';
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [variant]);

  if (variant === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item) => (
          <Link 
            key={item.id}
            href={item.link || '#'}
            className="group block"
          >
            <div className="bg-[#030711] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-300">
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                
                {/* Category Tag - Moved to top right of image */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-base text-gray-400 leading-relaxed">{item.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 text-xs bg-white/5 rounded-full text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Year */}
                    <span className="text-sm text-gray-400">{item.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div ref={galleryRef} className="relative py-[10vh]">
      <div className="space-y-[20vh]">
        {items.map((item, index) => (
          <div 
            key={item.id}
            className="portfolio-item sticky top-[20vh] w-full transition-all duration-300 ease-out will-change-transform"
            style={{ zIndex: index + 1 }}
          >
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm text-gray-300">{item.year}</span>
                      {item.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-white/10 rounded-full text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 