'use client';

import Link from 'next/link';
import Image from 'next/image';

import React from 'react';

export default function Header() {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-[280px] h-[80px] hover:scale-105 transition-transform duration-300">
            <h1 className="text-2xl font-bold text-white">Acton Body Works</h1>
          </div>
        </Link>
        
        <div className="flex items-center gap-8">
          <a href="tel:07476753022" className="text-white hover:text-red-500 transition-colors">
            07476753022
          </a>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/services" className="text-white hover:text-red-500 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-red-500 transition-colors">
              About
            </Link>
            <Link href="#contact-form" className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 