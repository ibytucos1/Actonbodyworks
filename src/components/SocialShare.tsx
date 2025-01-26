'use client';

import { useState } from 'react';

export default function SocialShare() {
  const [showTooltip, setShowTooltip] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareData = {
    title: 'Acton Bodyworks - Professional Auto Body Repairs in London',
    text: 'Expert vehicle crash repairs and bodywork services by certified professionals in London.',
    url: currentUrl,
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(currentUrl);
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleShare}
        className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 shadow-lg"
        aria-label="Share this page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
          />
        </svg>
      </button>
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 bg-black text-white text-sm py-1 px-3 rounded shadow-lg">
          URL copied!
        </div>
      )}
    </div>
  );
} 