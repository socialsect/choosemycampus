import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-site py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <span className="bg-white rounded-xl p-1.5 inline-flex shrink-0">
                <Image
                  src="/logo-mark.jpg"
                  alt="Choose My Campus"
                  width={172}
                  height={128}
                  className="h-12 w-auto"
                />
              </span>
              <span className="text-lg font-bold leading-tight">
                <span className="text-white">Choose</span>{' '}
                <span className="text-gray-400">My</span>{' '}
                <span className="text-white">Campus</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in finding the perfect college and achieving your educational dreams.
            </p>
            <div className="flex gap-3 mt-4">
              {[
                { label: 'Facebook', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
                { label: 'Twitter', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                { label: 'Instagram', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg> },
                { label: 'LinkedIn', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg> },
                { label: 'YouTube', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
              ].map(({ label, svg }, i) => (
                <a key={i} href="#" aria-label={label} className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {['Home', 'About Us', 'Services', 'Colleges', 'Admissions', 'Blog'].map((link) => (
                <li key={link}><Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {[
                { label: 'College Search', href: '/services/college-search' },
                { label: 'Admission Consulting', href: '/services/admission-consulting' },
                { label: 'Course Counseling', href: '/services/course-counseling' },
                { label: 'Scholarship Guidance', href: '/services/scholarship-guidance' },
                { label: 'Entrance Exam Prep', href: '/services/entrance-exam-prep' },
              ].map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5"><Mail size={16} /></span>
                <span>info@choosmycampus.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5"><Phone size={16} /></span>
                <span>+91 7065657041 /45</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5"><MapPin size={16} /></span>
                <span>Greater Noida, uttar pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom links */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 mb-4">
            {['Colleges in Greater Noida', 'Colleges in Lucknow', 'Engineering Colleges', 'Business Colleges', 'Editorial Policy', 'Data Methodology', 'Editorial Team'].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500">
            © 2025 Choose My Campus. All rights reserved II © Design & Developed by sofra consultancy services.
          </p>
        </div>
      </div>
    </footer>
  );
}
