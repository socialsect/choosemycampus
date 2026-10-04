import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pgListings } from '@/data/colleges';

export function generateStaticParams() {
  return pgListings.map((pg) => ({ id: pg.id }));
}

export default function PGDetail({ params }) {
  const pg = pgListings.find((p) => p.id === params.id);
  if (!pg) notFound();

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-site py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-brand-blue">Home</Link><span>/</span>
            <Link href="/get-pg" className="hover:text-brand-blue">Find PG</Link><span>/</span>
            <span className="text-gray-900 font-medium">{pg.name}</span>
          </nav>
        </div>
      </div>
      <section className="container-site py-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{pg.type}</span>
          <span className="bg-blue-50 text-brand-blue px-3 py-1 rounded-full text-xs font-semibold">₹{pg.rent}/month</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">{pg.name}</h1>
        <p className="text-lg text-gray-600 max-w-3xl">{pg.desc}</p>
      </section>
      <section className="container-site py-12">
        <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-8 text-center text-white max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Interested in {pg.name}?</h2>
          <p className="text-white/80 mb-6">Contact us for more details and enquiry support.</p>
          <Link href="/contact" className="bg-brand-yellow text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-brand-yellow-dark transition-colors">Enquire Now</Link>
        </div>
      </section>
    </div>
  );
}
