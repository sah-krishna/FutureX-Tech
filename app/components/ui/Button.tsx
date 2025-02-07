import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function Button({ href, children, className = '' }: ButtonProps) {
  return (
    <Link 
      href={href}
      className={`
        inline-flex items-center justify-center 
        px-6 py-2.5 
        rounded-lg 
        font-medium 
        text-base
        bg-blue-600
        text-white 
        transition-all 
        duration-300
        ${className}
      `}
    >
      {children}
    </Link>
  );
} 