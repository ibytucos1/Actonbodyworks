'use client';

import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24 text-center">
        <div className="space-y-8">
          {/* Check mark icon */}
          <div className="flex justify-center">
            <div className="rounded-full bg-green-500/10 p-3">
              <svg
                className="w-16 h-16 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          
          {/* Thank you message */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Sorted, We Got It!</h1>
            <p className="text-lg text-zinc-400">
              A member of our team will get in contact with you shortly.
            </p>
            <div className="mt-6 p-4 bg-zinc-900/50 rounded-lg">
              <p className="text-zinc-300">Need immediate assistance?</p>
              <a 
                href="tel:+447908772614"
                className="mt-2 inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us Now
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="pt-8">
            <SocialLinks />
          </div>

          {/* Return home link */}
          <div className="pt-8">
            <Link 
              href="/"
              className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 