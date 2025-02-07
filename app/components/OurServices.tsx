'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import SectionHeader from './ui/SectionHeader';

const services = [
  {
    id: 1,
    title: "Full Website Sprint",
    tag: "Development",
    icon: "⚡",
    description: "By streamlining the process and focusing on key milestones, we ensure your website is ready to go live quickly, without sacrificing quality.",
    price: "$2500",
    duration: "2-3 Week",
    features: [
      "Design + Framer Development",
      "Interactive Elements"
    ]
  },
  {
    id: 2,
    title: "Full Design Package",
    tag: "Design",
    icon: "🎨",
    description: "From custom logo designs to comprehensive brand guidelines, web design, and marketing materials, we cover all aspects of your visual presence.",
    price: "$4500",
    duration: "3-4 Week",
    features: [
      "Files + Branding Assets",
      "Easy to Edit and Access"
    ]
  },
  {
    id: 3,
    title: "Full Stack Development",
    tag: "Development",
    icon: "💻",
    description: "Whether you're building a simple website or a complex web application, our team provides scalable solutions tailored to your needs, ensuring your project is robust.",
    price: "$7500",
    duration: "4-6 Week",
    features: [
      "HTML + JavaScript + React Code",
      "Database and Back-End"
    ]
  }
];

export default function OurServices() {
  const [activeService, setActiveService] = useState(0);
  const [canScroll, setCanScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setCanScroll(entry.isIntersecting && entry.boundingClientRect.top <= 0);
      },
      { threshold: [0, 1], rootMargin: "0px" }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current || !canScroll) return;

      const container = containerRef.current;
      const { scrollHeight, clientHeight } = container;
      const maxScroll = scrollHeight - clientHeight;
      const delta = e.deltaY;

      if (delta > 0 && container.scrollTop < maxScroll) {
        e.preventDefault();
        container.scrollTop += 25;
      } else if (delta < 0 && container.scrollTop > 0) {
        e.preventDefault();
        container.scrollTop -= 25;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [canScroll]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const scrollProgress = scrollTop / (scrollHeight - clientHeight);
      
      const newActiveService = Math.floor(scrollProgress * services.length);
      setActiveService(Math.min(newActiveService, services.length - 1));
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="flex flex-col lg:flex-row items-start justify-between gap-12 pt-16 px-10 sm:px-14 md:px-16 lg:px-20 min-h-screen"
    >
      {/* Left side - Fixed Image */}
      <div className="lg:w-1/2 sticky top-24">
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/about-poster.avif"
            alt="Our Services"
            width={800}
            height={600}
            className="w-full object-cover aspect-[4/3]"
          />
        </div>
      </div>

      {/* Right side - Scrollable Content */}
      <div 
        ref={containerRef}
        className="lg:w-1/2 h-[105vh] overflow-y-auto no-scrollbar"
      >
        <div 
          ref={titleRef}
          className=" bg-black/80 backdrop-blur-sm pt-2 pb-6 z-10"
        >
          <SectionHeader title="Our Services" className="mb-8" />
          {/* Main Title */}
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-medium mb-4">
              <span className="text-white">Get High-Quality</span>
              <br />
              <span className="text-gray-500">Clear Services Remotely.</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Discover our range of services designed to elevate your brand
              and propel your business to next level.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="space-y-8 mb-10 pt-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                activeService === index 
                  ? 'bg-blue-900/20 border-blue-500/50' 
                  : 'bg-gray-900/50 border-white/5'
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm">
                  {service.tag}
                </span>
              </div>
              
              <p className="text-gray-400 mb-6">{service.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-semibold">{service.price} <span className="text-gray-400">/ Project</span></span>
                <span className="text-gray-400">{service.duration}</span>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 