import Link from 'next/link';
import { notFound } from 'next/navigation';
import { colleges, cityCategories } from '@/data/colleges';
import CollegeLogo from '@/components/CollegeLogo';

export function generateStaticParams() {
  return cityCategories.map((city) => ({ slug: city.slug }));
}

export default function CollegeCityPage({ params }) {
  const city = cityCategories.find((c) => c.slug === params.slug);
  if (!city) notFound();

  const filtered = colleges.filter((c) => c.city.toLowerCase().replace(/\s+/g, '-') === params.slug);

  return (
    <div>
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-16">
        <div className="container-site">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Colleges in {city.name}</h1>
          <p className="text-white/80 text-lg">{city.count} colleges</p>
        </div>
      </section>
      <section className="container-site py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((college) => (
            <Link key={college.id} href={`/colleges/${college.id}`} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-brand-blue/30 transition-all">
              <CollegeLogo college={college} className="h-36 w-full" />
              <div className="p-5">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-blue transition-colors">{college.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{college.type}</p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{college.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
