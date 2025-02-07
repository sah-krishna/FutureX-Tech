'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const images = [
  { id: 1, src: '/about-poster.avif', alt: 'Night city view' },
  { id: 2, src: '/about-poster.avif', alt: 'Portrait in shadows' },
  { id: 3, src: '/about-poster.avif', alt: 'Modern office space' },
  { id: 4, src: '/about-poster.avif', alt: 'Night street scene' },
  { id: 5, src: '/about-poster.avif', alt: 'Woman in city' },
  { id: 6, src: '/about-poster.avif', alt: 'Jellyfish in dark' },
  { id: 7, src: '/about-poster.avif', alt: 'Vintage gas station' },
  { id: 8, src: '/about-poster.avif', alt: 'Night sky' },
];

export default function ImageGallery() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    if (!row1 || !row2) return;

    // Clone images for seamless loop
    row1.innerHTML += row1.innerHTML;
    row2.innerHTML += row2.innerHTML;

    let scrollPos1 = 0;
    let scrollPos2 = 0;
    const speed = 0.5;

    const animate = () => {
      if (!row1 || !row2) return;

      // First row - scroll left
      scrollPos1 -= speed;
      if (scrollPos1 <= -row1.firstElementChild!.scrollWidth * (images.length)) {
        scrollPos1 = 0;
      }
      row1.style.transform = `translateX(${scrollPos1}px)`;

      // Second row - scroll right
      scrollPos2 += speed;
      if (scrollPos2 >= 0) {
        scrollPos2 = -row2.firstElementChild!.scrollWidth * (images.length);
      }
      row2.style.transform = `translateX(${scrollPos2}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className=" max-w-[1000px] mx-auto overflow-hidden py-10">
      {/* First Row - Sliding Left */}
      <div className="relative mb-8 ">
        <div 
          ref={row1Ref} 
          className="flex gap-8 transition-transform duration-100 ease-linear"
        >
          {images.map((image) => (
            <div 
              key={image.id} 
              className="relative flex-shrink-0 w-[300px] h-[200px] rounded-2xl overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Sliding Right */}
      <div className="relative">
        <div 
          ref={row2Ref} 
          className="flex gap-8 transition-transform duration-100 ease-linear"
        >
          {images.map((image) => (
            <div 
              key={image.id} 
              className="relative flex-shrink-0 w-[300px] h-[200px] rounded-2xl overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 