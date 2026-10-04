import Link from 'next/link';
import { pgListings } from '@/data/colleges';
import { Home } from 'lucide-react';

export const metadata = {
  title: 'Find PG & Hostels | Choose My Campus',
  description: 'Discover student accommodation near colleges.',
};

export default function GetPG() {
  return (
    <div>
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-16">
        <div className="container-site">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Find PG & Hostels</h1>
          <p className="text-white/80 text-lg">Discover student accommodation near colleges.</p>
        </div>
      </section>
      <section className="container-site py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pgListings.map((pg) => (
            <Link key={pg.id} href={`/get-pg/${pg.id}`} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-brand-blue/30 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-blue grid place-items-center"><Home size={20} /></div>
                <div>
                  <h2 className="font-bold text-gray-900 group-hover:text-brand-blue transition-colors">{pg.name}</h2>
                  <p className="text-xs text-gray-500">{pg.city}</p>
                </div>
              </div>
              <div className="flex gap-2 mb-3">
                <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-semibold">{pg.type}</span>
                <span className="bg-blue-50 text-brand-blue px-2.5 py-1 rounded-full text-xs font-semibold">₹{pg.rent}</span>
              </div>
              <p className="text-sm text-gray-500">{pg.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
