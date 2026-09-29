import { useParams, Link } from 'react-router-dom';
import { colleges, cityCategories, courseCategories } from '../data/colleges';

export default function CollegeCategory() {
  const { slug, courseSlug } = useParams();
  const city = cityCategories.find((c) => c.slug === slug);
  const course = courseCategories.find((c) => c.slug === courseSlug);

  if (city) {
    const filtered = colleges.filter((c) => c.city.toLowerCase().replace(/\s+/g, '-') === slug);
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
              <Link key={college.id} to={`/colleges/${college.id}`} className="group bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg hover:border-brand-blue/30 transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-blue transition-colors">{college.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{college.type}</p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{college.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (course) {
    return (
      <div>
        <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-16">
          <div className="container-site">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{course.name} Colleges</h1>
            <p className="text-white/80 text-lg">{course.count} colleges</p>
          </div>
        </section>
        <section className="container-site py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {colleges.slice(0, course.count > 12 ? 12 : course.count).map((college) => (
              <Link key={college.id} to={`/colleges/${college.id}`} className="group bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg hover:border-brand-blue/30 transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-blue transition-colors">{college.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{college.city}, {college.state}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return <div className="container-site py-20 text-center"><h1 className="text-3xl font-bold text-gray-900 mb-4">Not found</h1><Link to="/colleges" className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold text-sm">Browse All</Link></div>;
}
