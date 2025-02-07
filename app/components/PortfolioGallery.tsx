'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Way Fields",
    category: "E-Commerce",
    image: "/about-poster.avif",
    year: "2024",
    tags: ["E-Commerce", "Portfolio"]
  },
  {
    id: 2,
    title: "Raven Studio",
    category: "Business",
    image: "/about-poster.avif",
    year: "2025",
    tags: ["Business", "Agency"]
  },
  {
    id: 3,
    title: "Gotham Wonder",
    category: "Agency",
    image: "/about-poster.avif",
    year: "2024",
    tags: ["Portfolio", "Agency"]
  }
];

export default function PortfolioGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  return (
    <div ref={galleryRef} className="relative py-[10vh]">
      <div className="space-y-[20vh]">
        {portfolioItems.map((item, index) => (
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