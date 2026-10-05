'use client';

import { useState } from 'react';

// Logos that are too small/low-res and look blurry — skip image, use fallback
const BAD_LOGOS = new Set([
  '/colleges/flame-university.png',   // 16x16
  '/colleges/simsree.png',            // 16x16
  '/colleges/great-lakes-chennai.png', // 48x48
  '/colleges/nmims-mumbai.png',       // 48x48
  '/colleges/soil-gurgaon.png',       // 48x48
  '/colleges/mdi-gurgaon.png',        // 64x64
  '/colleges/ximb-bhubaneswar.png',   // 64x64
  '/colleges/welingkar-mumbai.png',   // 100x100
]);

function initialsFromName(name) {
  const cleaned = name
    .replace(/\(.*?\)/g, '')
    .replace(/–.*$/g, '')
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'CM';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export default function CollegeLogo({ college, className = '', imgClassName = '' }) {
  const [errored, setErrored] = useState(false);
  const src = college?.logo;
  const showImage = src && !errored && !BAD_LOGOS.has(src);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center ${className}`}>
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${college.name} logo`}
          className={`object-contain p-4 w-full h-full ${imgClassName}`}
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="flex flex-col items-center justify-center p-4 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#1B3A5B] flex items-center justify-center mb-2">
            <span className="text-lg font-extrabold text-white tracking-tight">
              {initialsFromName(college?.name || 'CM')}
            </span>
          </div>
          <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
            {college?.city}
          </span>
        </div>
      )}
    </div>
  );
}
