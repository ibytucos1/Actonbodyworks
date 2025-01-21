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
            <h1 className="text-4xl font-bold tracking-tight">Thank You!</h1>
            <p className="text-lg text-zinc-400">
              We've received your message and will get back to you shortly.
            </p>
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