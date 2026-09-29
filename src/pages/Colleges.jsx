import { Link } from 'react-router-dom';
import { colleges, cityCategories, courseCategories } from '../data/colleges';

export default function Colleges() {
  return (
    <div>
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-16">
        <div className="container-site">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Colleges in India</h1>
          <p className="text-white/80 text-lg">Browse and compare colleges by city, courses, fees, and placements.</p>
        </div>
      </section>
      <section className="container-site py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">By City</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {cityCategories.map((cat) => (
            <Link key={cat.slug} to={`/colleges-in/${cat.slug}`} className="group bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg hover:border-brand-blue/30 transition-all">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-blue transition-colors">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.count} colleges</p>
            </Link>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">By Course</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {courseCategories.map((cat) => (
            <Link key={cat.slug} to={`/courses/${cat.slug}/colleges`} className="group bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg hover:border-brand-blue/30 transition-all">
              <h3 className="font-bold text-gray-900 group-hover:text-brand-blue transition-colors">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.count} colleges</p>
            </Link>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Colleges</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {colleges.map((college) => (
            <Link key={college.id} to={`/colleges/${college.id}`} className="group bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg hover:border-brand-blue/30 transition-all">
              <h3 className="font-bold text-gray-900 group-hover:text-brand-blue transition-colors leading-snug">{college.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{college.city}, {college.state}</p>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">{college.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
