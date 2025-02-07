'use client';
import Image from 'next/image';
import Link from 'next/link';

const templatePages = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
];

const socialLinks = [
  { name: 'Twitter (X)', href: 'https://twitter.com' },
  { name: 'Instagram', href: 'https://instagram.com' },
  { name: 'Youtube', href: 'https://youtube.com' },
  { name: 'Framer', href: 'https://framer.com' },
];

export default function Footer() {
  return (
    <footer className="relative bottom-0 w-full border-t border-white/10 bg-black/50 backdrop-blur-xl z-50">
      <div className="max-w-7xl mx-auto">
        <div className="py-8 px-6 sm:px-12 md:px-16 lg:px-24">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8">
                  <Image
                    src="/logo-head.avif"
                    alt="FutureX Tech Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-white font-medium">FutureX Tech</span>
              </div>
              <p className="text-gray-400 text-sm">
                Imagination to Real Solutions. We specialize in crafting unique digital presence
                that help businesses grow and stand out in their industries.
              </p>
            </div>

            {/* Template Pages */}
            <div>
              <h3 className="text-white font-medium mb-4">Template Pages</h3>
              <ul className="space-y-2">
                {templatePages.map((page) => (
                  <li key={page.name}>
                    <Link 
                      href={page.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-medium mb-4">Social</h3>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 FutureX Tech. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                href="/terms"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
              <Link 
                href="/privacy"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 