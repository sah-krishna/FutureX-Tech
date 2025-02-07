'use client';
import { useState, useRef, useEffect } from 'react';

const steps = [
  {
    id: 1,
    title: "Kickoff",
    stage: "Stage 1",
    description: "The kickoff stage is where everything begins. We align with you to understand your goals, vision, and expectations. Through in-depth discussions and thorough research.",
    features: ["Comprehensive Consultation", "Project Roadmap"],
    timestamp: 0
  },
  {
    id: 2,
    title: "Design",
    stage: "Stage 2",
    description: "From Design To Launch. We make it easy to bring your ideas to life, guiding you from concept to a fully launched product.",
    features: ["UI/UX Design", "Technical Architecture"],
    timestamp: 15
  },
  {
    id: 3,
    title: "Development",
    stage: "Stage 3",
    description: "We Simplify The Journey by implementing cutting-edge solutions and following industry best practices to ensure your success.",
    features: ["Agile Development", "Regular Updates"],
    timestamp: 30
  }
];

export default function WorkSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const [canScroll, setCanScroll] = useState(false);
  const [hasScrolledAll, setHasScrolledAll] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setCanScroll(entry.isIntersecting && entry.boundingClientRect.top <= 0);
        // Reset hasScrolledAll when section comes back into view from top
        if (entry.isIntersecting && entry.boundingClientRect.top > -100) {
          setHasScrolledAll(false);
        }
      },
      { threshold: [0, 1], rootMargin: "0px" }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let lastTime = 0;
    const scrollIncrement = 25;
    const throttleMs = 16;

    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current || !canScroll) return;

      const now = Date.now();
      if (now - lastTime < throttleMs) return;
      lastTime = now;

      const container = containerRef.current;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const maxScroll = scrollHeight - clientHeight;
      const delta = e.deltaY;

      // Check if scrolled to bottom
      const isAtBottom = Math.abs(scrollTop + clientHeight - scrollHeight) < 2;
      // Check if scrolled to top
      const isAtTop = scrollTop === 0;

      // Scrolling down
      if (delta > 0) {
        if (scrollTop < maxScroll) {
          e.preventDefault();
          container.scrollTop += scrollIncrement;
          setIsScrolling(true);
        } else if (isAtBottom) {
          setHasScrolledAll(true);
          setIsScrolling(false);
        }
      }
      // Scrolling up
      else if (delta < 0) {
        if (!isAtTop) {
          e.preventDefault();
          container.scrollTop -= scrollIncrement;
          setIsScrolling(true);
        } else if (hasScrolledAll) {
          // Allow page scroll only if we've scrolled through all content
          setIsScrolling(false);
        } else {
          // Prevent page scroll if we haven't seen all content
          e.preventDefault();
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [canScroll, isScrolling, hasScrolledAll]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const newActiveStep = steps.findIndex((step, index) => {
        const nextTimestamp = steps[index + 1]?.timestamp || Infinity;
        return currentTime >= step.timestamp && currentTime < nextTimestamp;
      });

      if (newActiveStep !== -1 && newActiveStep !== activeStep) {
        setActiveStep(newActiveStep);
        const activeCard = document.getElementById(`step-${newActiveStep}`);
        activeCard?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  return (
    <div 
      ref={sectionRef} 
      className="flex flex-col lg:flex-row items-start justify-between gap-12 pt-16 px-10 sm:px-14 md:px-16 lg:px-20 min-h-screen"
    >
      {/* Left side - Scrollable Content */}
      <div 
        ref={containerRef}
        className="lg:w-1/2 h-[105vh] overflow-y-auto no-scrollbar pr-4"
      >
        <div 
          ref={titleRef}
          className="top-0 bg-black/80 backdrop-blur-sm pt-2 pb-6 z-10"
        >
          {/* How We Work Tag */}
          <div className="inline-flex items-center rounded-lg border border-blue-500 bg-blue-500/10 px-3 py-2 text-sm text-blue-300 mb-6">
            <ul className="list-disc list-inside">
              <li>How We Work?</li>
            </ul>
          </div>

          {/* Main Title */}
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-medium mb-4">
              <span className="text-white">We Simplify The Journey</span>
              <br />
              <span className="text-gray-500">From Design To Launch.</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We make it easy to bring your ideas to life, guiding you from concept to a fully launched product.
            </p>
          </div>
        </div>
        
        {/* Scrollable Cards */}
        <div className="space-y-6 mb-10">
          {steps.map((step, index) => (
            <div
              key={step.id}
              id={`step-${index}`}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                activeStep === index 
                  ? 'bg-blue-900/20 border-blue-500/50' 
                  : 'bg-gray-900/50 border-white/5'
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm">
                  {step.stage}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{step.description}</p>
              <div className="flex flex-wrap gap-2">
                {step.features.map((feature, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Video */}
      <div className="lg:w-1/2 sticky top-24">
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            onTimeUpdate={handleTimeUpdate}
            controls
          >
            <source src="/your-process-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
} 