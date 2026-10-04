import Link from 'next/link';

export const metadata = {
  title: 'Mentorship | Choose My Campus',
  description: 'Connect with mentors from top colleges for career guidance.',
};

export default function Mentorship() {
  return (
    <div>
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-16">
        <div className="container-site">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Mentorship</h1>
          <p className="text-white/80 text-lg">Connect with mentors from top colleges for career guidance.</p>
        </div>
      </section>
      <section className="container-site py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Personalized direction</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">Discuss college selection, applications, profile building, internships, placements, and long-term career planning with experienced mentors.</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[{ t: "College Selection", d: "Get guidance on choosing the right college." }, { t: "Application Strategy", d: "Learn to craft strong applications." }, { t: "Profile Building", d: "Build a strong profile with activities and projects." }, { t: "Career Planning", d: "Get long-term career guidance from mentors." }].map((item) => (
              <div key={item.t} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{item.t}</h3>
                <p className="text-sm text-gray-500">{item.d}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
            <p className="text-white/80 mb-6">Talk to our team to get matched with a mentor.</p>
            <Link href="/contact" className="bg-brand-yellow text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-brand-yellow-dark transition-colors">Connect with a Mentor</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
