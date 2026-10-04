export const metadata = {
  title: 'College Data Methodology | Choose My Campus',
  description: 'What our college data means, where it comes from, and how students should use it.',
};

export default function DataMethodology() {
  return (
    <div>
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-16">
        <div className="container-site"><h1 className="text-4xl font-extrabold text-white">College Data Methodology</h1></div>
      </section>
      <div className="container-site py-12 max-w-3xl">
        <p className="text-gray-500 text-sm mb-6">Last reviewed: 19 August 2026</p>
        <p className="text-gray-600 leading-relaxed mb-6">This page explains what our college data means, where it comes from, and how students should use it.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data sources</h2>
        <p className="text-gray-600 leading-relaxed mb-4">College information comes from official pages, brochures, regulator records, and institution submissions.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Fees and placements</h2>
        <p className="text-gray-600 leading-relaxed mb-4">Fee ranges may exclude hostel and exam charges. Placement figures are institution-reported.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Questions?</h2>
        <p className="text-gray-600 leading-relaxed">Email <a href="mailto:info@choosmycampus.com" className="text-brand-blue hover:underline">info@choosmycampus.com</a>.</p>
      </div>
    </div>
  );
}
