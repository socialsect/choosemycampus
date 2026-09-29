import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/colleges', label: 'Colleges' },
  { to: '/get-pg', label: 'Get PG', icon: true },
  { to: '/blog', label: 'Blog' },
  { to: '/mentorship', label: 'Mentorship' },
];

const newsItems = [
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
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Main nav */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-site flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="#16a34a"/>
              <path d="M20 8L8 16L20 24L32 16L20 8Z" fill="#2563eb"/>
              <path d="M8 16V24L20 32V24L8 16Z" fill="#1d4ed8"/>
              <path d="M32 16V24L20 32V24L32 16Z" fill="#2563eb"/>
              <circle cx="20" cy="14" r="2" fill="white"/>
            </svg>
            <span className="text-xl font-bold">
              <span className="text-brand-blue">Choose My</span>
              <span className="text-brand-green">Campus</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                  location.pathname === link.to
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
            <Link to="/contact" className="bg-brand-yellow hover:bg-brand-yellow-dark text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
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
            <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm ${location.pathname === link.to ? 'bg-blue-50 text-brand-blue font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block bg-brand-yellow text-center px-4 py-2.5 rounded-lg text-sm font-semibold mt-2">
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
