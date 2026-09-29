import { Link } from 'react-router-dom';

export default function EditorialPolicy() {
  return (
    <div>
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-16">
        <div className="container-site"><h1 className="text-4xl font-extrabold text-white">Editorial Policy</h1></div>
      </section>
      <div className="container-site py-12 max-w-3xl">
        <p className="text-gray-500 text-sm mb-6">Last reviewed: 19 August 2026</p>
        <p className="text-gray-600 leading-relaxed mb-6">Our goal is to help students make informed education decisions with content that is useful, transparent, and separated from commercial enquiries.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How we create content</h2>
        <p className="text-gray-600 leading-relaxed mb-4">The Choose My Campus editorial team prepares college profiles, course guides, and student resources using institution-provided information and official sources.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Independence</h2>
        <p className="text-gray-600 leading-relaxed mb-4">A college listing does not guarantee a favorable editorial conclusion. Paid material must be identified as such.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Corrections</h2>
        <p className="text-gray-600 leading-relaxed">Email <a href="mailto:info@choosmycampus.com" className="text-brand-blue hover:underline">info@choosmycampus.com</a> with the page URL and an authoritative source.</p>
      </div>
    </div>
  );
}
