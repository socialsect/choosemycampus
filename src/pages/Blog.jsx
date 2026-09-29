import { Link } from 'react-router-dom';
import { blogPosts } from '../data/colleges';

export default function Blog() {
  return (
    <div>
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-16">
        <div className="container-site">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Blog</h1>
          <p className="text-white/80 text-lg">Read practical articles on admissions, career planning, and college life.</p>
        </div>
      </section>
      <section className="container-site py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-brand-blue/30 transition-all">
              <div className="h-36 bg-gradient-to-br from-blue-50 to-green-50"></div>
              <div className="p-5">
                <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">{post.category}</span>
                <h2 className="text-base font-bold text-gray-900 mt-2 group-hover:text-brand-blue transition-colors leading-snug line-clamp-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mt-2 line-clamp-3">{post.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
