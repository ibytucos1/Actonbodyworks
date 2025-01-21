'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <Image
              src="/images/sitelogo.png"
              alt="Acton Bodyworks"
              width={350}
              height={117}
              className="w-auto h-16 sm:h-20"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-zinc-300 hover:text-white transition-colors ${
                  pathname === link.href ? 'text-white font-medium' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="tel:07476753022" 
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-red-600 text-white font-medium hover:bg-red-500 transition-colors"
            >
              Call Now
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-64 opacity-100 pb-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-zinc-300 hover:text-white transition-colors px-2 py-1 ${
                  pathname === link.href ? 'text-white font-medium' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:07476753022"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-red-600 text-white font-medium hover:bg-red-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Call Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
} 