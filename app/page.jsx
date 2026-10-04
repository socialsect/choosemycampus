'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { colleges, courseCategories, cityCategories } from '@/data/colleges';
import CollegeLogo from '@/components/CollegeLogo';
import { Building2, BookOpen, MapPin, Search, Users, GraduationCap, FileText, ArrowRight, MessageCircle, IndianRupee, Award, TrendingUp } from 'lucide-react';

const faqs = [
  { q: "What is the eligibility for B.Tech?", a: "Students must have passed 12th grade with Physics, Chemistry, and Mathematics. Some colleges also require JEE Main or state-level entrance exam scores." },
  { q: "How can I apply for admission?", a: "You can apply directly through our platform or connect with our counselors who will guide you through the entire admission process." },
  { q: "What are the hostel fees?", a: "Hostel fees vary by college, typically ranging from ₹50,000 to ₹1,50,000 per year including mess charges." },
  { q: "Do you provide education loan assistance?", a: "Yes, we help students connect with banks and financial institutions for education loans at competitive interest rates." },
  { q: "Which entrance exams are accepted?", a: "We guide students for JEE, CAT, MAT, XAT, CMAT, and many other entrance exams relevant for your target colleges." },
];

function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(5);

  const monthlyRate = interestRate / 12 / 100;
  const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure * 12) / (Math.pow(1 + monthlyRate, loanTenure * 12) - 1);
  const totalPayable = emi * loanTenure * 12;
  const totalInterest = totalPayable - loanAmount;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="flex justify-between text-sm font-semibold text-gray-900 mb-2">
              <span>Loan Amount</span>
              <span className="text-brand-blue">₹{loanAmount.toLocaleString('en-IN')}</span>
            </label>
            <input type="range" min="100000" max="2000000" step="50000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue" />
            <div className="flex justify-between text-xs text-gray-400 mt-1"><span>₹1 Lakh</span><span>₹20 Lakh</span></div>
          </div>
          <div>
            <label className="flex justify-between text-sm font-semibold text-gray-900 mb-2">
              <span>Interest Rate (% per annum)</span>
              <span className="text-brand-blue">{interestRate}%</span>
            </label>
            <input type="range" min="6" max="15" step="0.5" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue" />
            <div className="flex justify-between text-xs text-gray-400 mt-1"><span>6%</span><span>15%</span></div>
          </div>
          <div>
            <label className="flex justify-between text-sm font-semibold text-gray-900 mb-2">
              <span>Loan Tenure (Years)</span>
              <span className="text-brand-blue">{loanTenure} years</span>
            </label>
            <input type="range" min="1" max="15" step="1" value={loanTenure} onChange={(e) => setLoanTenure(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue" />
            <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1 year</span><span>15 years</span></div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Your EMI Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Monthly EMI</span>
              <span className="text-2xl font-extrabold text-brand-blue">₹{Math.round(emi).toLocaleString('en-IN')}</span>
            </div>
            <div className="border-t border-gray-200 pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Principal Amount</span>
                <span className="font-semibold text-gray-900">₹{loanAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Interest</span>
                <span className="font-semibold text-orange-600">₹{Math.round(totalInterest).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Payable</span>
                <span className="font-semibold text-gray-900">₹{Math.round(totalPayable).toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [searchTab, setSearchTab] = useState('colleges');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const filteredColleges = searchQuery
    ? colleges.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-12 md:py-20">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Find Your Perfect<br/>College with<br/>
                <span className="text-[#1B3A5B]">Choose</span>{' '}
                <span className="text-[#9CA3AF]">My</span>{' '}
                <span className="text-[#1B3A5B]">Campus</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Your trusted partner in discovering the right college, course, and career path. Get expert guidance every step of the way.
              </p>
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm mb-8 max-w-lg">
                <div className="flex gap-2 mb-3">
                  {['colleges', 'courses', 'locations'].map((tab) => (
                    <button key={tab} onClick={() => setSearchTab(tab)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${searchTab === tab ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                      {tab === 'colleges' && <Building2 size={14} className="inline mr-1" />}
                      {tab === 'courses' && <BookOpen size={14} className="inline mr-1" />}
                      {tab === 'locations' && <MapPin size={14} className="inline mr-1" />}
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder={`Search ${searchTab}...`} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" />
                  </div>
                  <button className="bg-brand-blue text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-blue-dark transition-colors">Search</button>
                </div>
                {searchQuery && filteredColleges.length > 0 && (
                  <div className="mt-3 border-t border-gray-100 pt-3 max-h-48 overflow-y-auto">
                    {filteredColleges.slice(0, 5).map((c) => (
                      <Link key={c.id} href={`/colleges/${c.id}`} className="block px-3 py-2 rounded-lg hover:bg-gray-50 text-sm text-gray-700">{c.name}</Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/colleges" className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-brand-blue-dark transition-colors">Find Colleges</Link>
                <Link href="/contact" className="bg-brand-yellow text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-brand-yellow-dark transition-colors">Get Admission Help</Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop" alt="College Campus" className="w-full h-[350px] md:h-[420px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden">
                  <Image src="/logo-mark.jpg" alt="Choose My Campus" width={86} height={64} className="h-10 w-auto" />
                </div>
                <div><p className="text-2xl font-extrabold text-gray-900">10,000+</p><p className="text-xs text-gray-500">Students Guided</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-blue py-12">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { num: "10,000+", label: "Students Guided" },
              { num: "200+", label: "Colleges Listed" },
              { num: "50+", label: "Courses Available" },
              { num: "95%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-extrabold mb-1">{stat.num}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="bg-gray-50 py-16">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3">Course <span className="text-brand-green">Categories</span></h2>
          <p className="text-gray-500 text-center mb-10">Pick a category to see colleges that offer those courses.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Engineering & Technology', count: 2, icon: <GraduationCap size={24} />, color: 'bg-blue-100 text-blue-600' },
              { name: 'Business & Commerce', count: 24, icon: <Building2 size={24} />, color: 'bg-green-100 text-green-600' },
              { name: 'Computer Application', count: 3, icon: <BookOpen size={24} />, color: 'bg-orange-100 text-orange-600' },
            ].map((cat) => (
              <Link key={cat.name} href={`/courses/${cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}/colleges`}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-brand-blue/30 transition-all">
                <div className={`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center mb-4`}>{cat.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-blue transition-colors mb-2">{cat.name}</h3>
                <span className="text-sm text-gray-500 flex items-center gap-1"><Building2 size={14} /> {cat.count} Colleges</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by course / Browse by city */}
      <section className="py-16">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6"><BookOpen size={20} className="text-brand-blue" /><h2 className="text-xl font-bold text-gray-900">Browse by course</h2></div>
              <div className="flex flex-wrap gap-2">
                {courseCategories.map((cat) => (
                  <Link key={cat.slug} href={`/courses/${cat.slug}/colleges`}
                    className="inline-flex items-center gap-1 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-brand-blue hover:text-brand-blue transition-colors">
                    {cat.name} <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6"><MapPin size={20} className="text-brand-green" /><h2 className="text-xl font-bold text-gray-900">Browse by city</h2></div>
              <div className="flex flex-wrap gap-2">
                {cityCategories.map((city) => (
                  <Link key={city.slug} href={`/colleges-in/${city.slug}`}
                    className="inline-flex items-center gap-1 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-brand-blue hover:text-brand-blue transition-colors">
                    Colleges in {city.name} ({city.count})
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-gray-50 py-16">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3">Our <span className="text-brand-green">Services</span></h2>
          <p className="text-gray-500 text-center mb-10">Comprehensive support for your college admission journey</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Search size={24} />, title: "College Guidance", desc: "Discover the best colleges that match your interests, budget, and career goals.", color: "bg-blue-100 text-blue-600" },
              { icon: <Users size={24} />, title: "Admission Consulting", desc: "Expert guidance through the entire admission process from application to enrollment.", color: "bg-green-100 text-green-600" },
              { icon: <MessageCircle size={24} />, title: "Course Counseling", desc: "Personalized counseling to help you choose the right course for your future.", color: "bg-purple-100 text-purple-600" },
              { icon: <Building2 size={24} />, title: "College Comparison", desc: "Compare colleges side by side on fees, placements, facilities, and more.", color: "bg-orange-100 text-orange-600" },
              { icon: <GraduationCap size={24} />, title: "Scholarship Guidance", desc: "Find and apply for scholarships that match your profile and academic achievements.", color: "bg-red-100 text-red-600" },
              { icon: <FileText size={24} />, title: "Entrance Exam Prep", desc: "Structured guidance for entrance exam planning, strategy, and score improvement.", color: "bg-pink-100 text-pink-600" },
            ].map((service, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4`}>{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="py-16">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3">College Loan <span className="text-brand-green">EMI Calculator</span></h2>
          <p className="text-gray-500 text-center mb-10">Plan your education loan with our easy EMI calculator</p>
          <EMICalculator />
        </div>
      </section>

      {/* Top Colleges */}
      <section className="bg-gray-50 py-16">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3">Featured <span className="text-brand-green">Colleges</span></h2>
          <p className="text-gray-500 text-center mb-10">Explore top colleges and find the right fit for your future.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {colleges.slice(0, 6).map((college) => (
              <Link key={college.id} href={`/colleges/${college.id}`}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-brand-blue/30 transition-all">
                <CollegeLogo college={college} className="h-40 w-full" />
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 group-hover:text-brand-blue transition-colors leading-snug mb-2">{college.name}</h3>
                  <p className="text-sm text-gray-500">{college.city}, {college.state}</p>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{college.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/colleges" className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-brand-blue-dark transition-colors">View All Colleges</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3">Why Choose <span className="text-[#1B3A5B]">Choose My Campus</span>?</h2>
          <p className="text-gray-500 text-center mb-10">We make your college search simple, transparent, and effective</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award size={28} />, title: "Verified Data", desc: "All college information is verified and up-to-date" },
              { icon: <Users size={28} />, title: "Expert Counselors", desc: "Get guidance from experienced admission counselors" },
              { icon: <TrendingUp size={28} />, title: "Placement Insights", desc: "Access real placement data and salary trends" },
              { icon: <IndianRupee size={28} />, title: "Free Service", desc: "Basic counseling and college search is completely free" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="container-site max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3">Frequently Asked <span className="text-brand-green">Questions</span></h2>
          <p className="text-gray-500 text-center mb-10">Got questions? We&apos;ve got answers to help you on your journey.</p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-gray-900 font-semibold">
                  {faq.q}
                  <svg className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
                </button>
                {openFaq === i && <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-16">
        <div className="container-site text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Start Your College Journey?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Get personalized guidance from our expert counselors and take the first step towards your dream college.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-brand-yellow text-gray-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-yellow-dark transition-colors">Book Free Counseling</Link>
            <a href="tel:+917065657041" className="bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center gap-2">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
