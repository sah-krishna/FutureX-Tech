'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useScrollDirection } from '@/app/hooks/useScrollDirection';
import { navigationLinks } from '@/app/lib/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrollingDown = useScrollDirection();
  const pathname = usePathname();
  const router = useRouter();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    // Check if the href is for FAQ
    if (href === '/faq') {
      // If we're already on a page with FAQ section
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        const offset = 80; // Height of the fixed navbar
        const elementPosition = faqSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setIsOpen(false); // Close mobile menu if open
        return;
      }
      // If we're not on a page with FAQ, navigate to dedicated FAQ page
      router.push(href);
      return;
    }
    // For other links, just navigate normally
    router.push(href);
  };

  return (
    <nav 
      className={`fixed z-50 w-full border-b border-white/30 bg-black/50 backdrop-blur-xl
        transition-transform duration-300 ease-in-out
        ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Left side: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.avif"
              alt="FutureX Tech"
              width={160}
              height={160}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* Center: Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative group ${
                  pathname === link.href 
                    ? 'text-blue-400' 
                    : 'text-gray-400 hover:text-white'
                } transition-colors duration-300`}
              >
                {link.name}
                {/* Active Indicator */}
                <span 
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform origin-left transition-transform duration-300 ${
                    pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} 
                />
              </button>
            ))}
          </div>

          {/* Right side: Connect Button & Mobile Menu */}
          <div className="flex items-center gap-6">
            {/* Connect Button - Hidden on Mobile */}
            <Link 
              href="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
            >
              Connect with us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <span 
                  className={`block w-full h-0.5 bg-white transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span 
                  className={`block w-full h-0.5 bg-white transition-opacity duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`block w-full h-0.5 bg-white transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute inset-x-0 top-20 bg-black/50 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-6 py-4 space-y-2">
          {navigationLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`block w-full text-left py-2 px-4 rounded-lg ${
                pathname === link.href 
                  ? 'bg-blue-500/10 text-blue-400' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              } transition-colors duration-300`}
            >
              {link.name}
            </button>
          ))}
          {/* Mobile Connect Button */}
          <Link 
            href="/contact"
            className="block py-2 px-4 mt-4 text-center rounded-lg font-medium bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500"
          >
            Connect with us
          </Link>
        </div>
      </div>
    </nav>
  );
} 