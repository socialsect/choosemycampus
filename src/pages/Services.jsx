import { Link } from 'react-router-dom';
import { services } from '../data/colleges';

export default function Services() {
  return (
    <div>
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-16">
        <div className="container-site">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-white/80 text-lg max-w-2xl">Comprehensive support for your college admission journey.</p>
        </div>
      </section>
      <section className="container-site py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-brand-blue/30 transition-all">
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors mb-3">{service.title}</h2>
              <p className="text-gray-500 leading-relaxed">{service.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
