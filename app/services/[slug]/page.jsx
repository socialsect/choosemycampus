import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/data/colleges';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetail({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-site py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-brand-blue">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-brand-blue">Services</Link><span>/</span>
            <span className="text-gray-900 font-medium">{service.title}</span>
          </nav>
        </div>
      </div>
      <section className="container-site py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">{service.title}</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">{service.desc}</p>
      </section>
      <section className="bg-gray-50 py-12">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Personalized student support</h2>
          <p className="text-gray-600 text-lg leading-relaxed">Recommendations are based on the student&apos;s academic profile, course interest, preferred location, budget, and admission timeline.</p>
        </div>
      </section>
      <section className="container-site py-12">
        <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-8 text-center text-white max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Next step</h2>
          <p className="text-white/80 mb-6">Talk to a Choose My Campus counselor to understand the process, required documents, and deadlines.</p>
          <Link href="/contact" className="bg-brand-yellow text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-brand-yellow-dark transition-colors">Talk to a Counselor</Link>
        </div>
      </section>
    </div>
  );
}
