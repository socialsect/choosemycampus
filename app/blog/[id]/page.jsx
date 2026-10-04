import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/colleges';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

export default function BlogDetail({ params }) {
  const post = blogPosts.find((p) => p.id === params.id);
  if (!post) notFound();

  return (
    <div>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-site py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-brand-blue">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-brand-blue">Blog</Link><span>/</span>
            <span className="text-gray-900 font-medium">{post.title}</span>
          </nav>
        </div>
      </div>
      <article className="container-site py-12 max-w-3xl">
        <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">{post.category}</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-6">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-8">By Choose My Campus</p>
        <p className="text-gray-600 leading-relaxed text-lg mb-8">{post.desc}</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Highlights</h2>
        <ul className="space-y-3 text-gray-600 mb-8">
          <li>Comprehensive guide for students navigating admissions</li>
          <li>Expert insights on choosing the right college</li>
          <li>Practical tips for entrance exam preparation</li>
        </ul>
        <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-3">Need personalized guidance?</h3>
          <p className="text-white/80 mb-6">Talk to our counselors for expert advice.</p>
          <Link href="/contact" className="bg-brand-yellow text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-brand-yellow-dark transition-colors">Talk to a Counselor</Link>
        </div>
      </article>
    </div>
  );
}
