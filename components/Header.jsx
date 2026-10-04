'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/colleges', label: 'Colleges' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/get-pg', label: 'Get PG', icon: true },
  { href: '/blog', label: 'Blog' },
  { href: '/mentorship', label: 'Mentorship' },
];

const newsItems = [
  "MAT Dec 2026: Lead required before 30 Nov – Maharashtra & Delhi NCR",
  "GMAT last date to appear: 31 Dec 2026 – Delhi NCR 75% / Maharashtra 25%",
  "SAT UG B.Tech Nov 2026: Last date 23 Oct – Delhi NCR 80% / Punjab 20%",
  "Symbiosis MBA all-campus direct admission till April 2027 – SNAP compulsory",
  "MBA Admission Process 2026 in India: Complete Step-by-Step Guide for Students",
  "Top MBA Colleges in India (Placement-Focused)",
  "CBSE Board Class 12 Result",
  "Bihar Board Class 12 Toppers 2026",
  "How to Get B.Tech Admission in 2026: Complete Step-by-Step Guide for Students",
  "JEE Mains 2026 Results: Congratulations & Career Guidance",
  "Direct MBA Admission Without Donation in 2026",
  "Top Private MBA Colleges in Uttar Pradesh for Placements in 2026",
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Main nav */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-site flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo-mark.jpg"
              alt="Choose My Campus"
              width={172}
              height={128}
              className="h-11 w-auto"
              priority
            />
            <span className="text-xl font-bold leading-tight hidden sm:block">
              <span className="text-[#1B3A5B]">Choose</span>{' '}
              <span className="text-[#9CA3AF]">My</span>{' '}
              <span className="text-[#1B3A5B]">Campus</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                  pathname === link.href
                    ? 'text-brand-blue bg-blue-50'
                    : 'text-gray-700 hover:text-brand-blue hover:bg-gray-50'
                }`}
              >
                {link.icon && <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>}
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="bg-brand-yellow hover:bg-brand-yellow-dark text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
              Get Started
            </Link>
          </div>

          <button className="lg:hidden p-2 text-gray-700" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M6 6l12 12M6 18L18 6"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* News ticker */}
      <div className="bg-brand-purple text-white overflow-hidden">
        <div className="container-site flex items-center h-10">
          <span className="bg-brand-yellow text-gray-900 text-xs font-bold px-3 py-1 rounded-full shrink-0 mr-4">
            LATEST NEWS:
          </span>
          <div className="overflow-hidden flex-1">
            <div className="ticker-track whitespace-nowrap">
              {[...newsItems, ...newsItems].map((item, i) => (
                <span key={i} className="text-sm mx-6">
                  <span className="text-brand-yellow">•</span> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm ${pathname === link.href ? 'bg-blue-50 text-brand-blue font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block bg-brand-yellow text-center px-4 py-2.5 rounded-lg text-sm font-semibold mt-2">
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
