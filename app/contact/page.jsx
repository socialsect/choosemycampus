'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-16">
        <div className="container-site">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-white/80 text-lg">Talk to our admission counselors for personalized guidance.</p>
        </div>
      </section>
      <section className="container-site py-12">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will get back to you soon.'); }}>
              {[
                { l: "Full Name", t: "text", p: "Enter your name", r: true },
                { l: "Email", t: "email", p: "Enter your email", r: true },
                { l: "Phone", t: "tel", p: "Phone number" },
              ].map((f) => (
                <div key={f.l}>
                  <label className="block text-sm font-semibold text-gray-900 mb-1.5">{f.l}</label>
                  <input type={f.t} required={f.r} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10" placeholder={f.p} />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">Preferred Course</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-brand-blue">
                  <option>Select a course</option>
                  <option>B.Tech</option><option>MBA / PGDM</option><option>BCA / MCA</option><option>BBA</option><option>Law</option><option>Pharmacy</option><option>Design</option><option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">Message</label>
                <textarea rows="4" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-brand-blue resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors">Send Enquiry</button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h2>
            <div className="space-y-5 mb-8">
              {[{ i: <Mail size={20} />, t: "Email", v: "info@choosmycampus.com" }, { i: <Phone size={20} />, t: "Phone", v: "+91 7065657041 /45" }, { i: <MapPin size={20} />, t: "Location", v: "Greater Noida, UP, India" }].map((item) => (
                <div key={item.t} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-blue grid place-items-center shrink-0 text-lg">{item.i}</div>
                  <div><h3 className="font-semibold text-gray-900 text-sm">{item.t}</h3><p className="text-gray-500 text-sm">{item.v}</p></div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Our Services</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                {["College Search", "Admission Consulting", "Course Counseling", "Scholarship Guidance", "Entrance Exam Prep", "Mentorship"].map((s) => (
                  <li key={s} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
