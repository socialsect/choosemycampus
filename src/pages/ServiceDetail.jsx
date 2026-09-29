import { useParams, Link } from 'react-router-dom';
import { services } from '../data/colleges';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <div className="container-site py-20 text-center"><h1 className="text-3xl font-bold text-gray-900 mb-4">Service not found</h1><Link to="/services" className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold text-sm">Back to Services</Link></div>;

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-site py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link to="/" className="hover:text-brand-blue">Home</Link><span>/</span>
            <Link to="/services" className="hover:text-brand-blue">Services</Link><span>/</span>
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
          <p className="text-gray-600 text-lg leading-relaxed">Recommendations are based on the student's academic profile, course interest, preferred location, budget, and admission timeline.</p>
        </div>
      </section>
      <section className="container-site py-12">
        <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-8 text-center text-white max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Next step</h2>
          <p className="text-white/80 mb-6">Talk to a Choose My Campus counselor to understand the process, required documents, and deadlines.</p>
          <Link to="/contact" className="bg-brand-yellow text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-brand-yellow-dark transition-colors">Talk to a Counselor</Link>
        </div>
      </section>
    </div>
  );
}
