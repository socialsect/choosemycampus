import Link from 'next/link';
import { notFound } from 'next/navigation';
import { colleges } from '@/data/colleges';
import CollegeLogo from '@/components/CollegeLogo';

export function generateStaticParams() {
  return colleges.map((college) => ({ id: college.id }));
}

export default function CollegeDetail({ params }) {
  const college = colleges.find((c) => c.id === params.id);
  if (!college) notFound();

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-site py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-brand-blue">Home</Link><span>/</span>
            <Link href="/colleges" className="hover:text-brand-blue">Colleges</Link><span>/</span>
            <span className="text-gray-900 font-medium">{college.name}</span>
          </nav>
        </div>
      </div>
      <section className="container-site py-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <CollegeLogo college={college} className="w-full md:w-64 h-48 md:h-48 rounded-2xl border border-gray-200 shrink-0" />
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-50 text-brand-blue px-3 py-1 rounded-full text-xs font-semibold">{college.type}</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{college.city}, {college.state}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">{college.name}</h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">{college.desc}</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-12">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed">{college.desc}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h2>
              <div className="space-y-3">
                {[{ l: "Location", v: `${college.city}, ${college.state}` }, { l: "Type", v: college.type }].map((item) => (
                  <div key={item.l} className="flex justify-between bg-white rounded-xl p-4 border border-gray-200">
                    <span className="text-sm text-gray-500">{item.l}</span>
                    <span className="text-sm font-semibold text-gray-900">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-site py-12">
        <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-8 text-center text-white max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Interested in {college.name}?</h2>
          <p className="text-white/80 mb-6">Talk to our counselors for personalized admission guidance.</p>
          <Link href="/contact" className="bg-brand-yellow text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-brand-yellow-dark transition-colors">Get Admission Guidance</Link>
        </div>
      </section>
    </div>
  );
}
