'use client';

import { useState } from 'react';

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
  const showImage = src && !errored;

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
          <span className="text-3xl md:text-4xl font-extrabold text-[#1B3A5B] tracking-tight">
            {initialsFromName(college?.name || 'CM')}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
            {college?.city}
          </span>
        </div>
      )}
    </div>
  );
}
