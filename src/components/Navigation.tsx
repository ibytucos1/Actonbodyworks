'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center">
      <Link href="/" className="text-xl sm:text-2xl font-bold">
        Acton Bodyworks
      </Link>
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden p-2" 
        aria-label="Menu"
        onClick={() => setIsMenuOpen(true)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8">
        <Link href="tel:07476753022" className="hover:text-gray-300 text-sm sm:text-base">
          07476753022
        </Link>
        <Link href="/services" className="hover:text-gray-300 text-sm sm:text-base">
          Services
        </Link>
        <Link href="/about" className="hover:text-gray-300 text-sm sm:text-base">
          About
        </Link>
        <Link 
          href="/contact" 
          className="bg-red-600 text-white px-4 sm:px-6 py-2 rounded hover:bg-red-700 text-sm sm:text-base"
        >
          Get in Touch
        </Link>
      </div>
      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-black shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">Menu</h2>
              <button 
                className="p-2" 
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <Link 
                href="tel:07476753022" 
                className="hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                07476753022
              </Link>
              <Link 
                href="/services" 
                className="hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 