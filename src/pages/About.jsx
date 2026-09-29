import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-16">
        <div className="container-site">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About Us</h1>
          <p className="text-white/80 text-lg max-w-2xl">Learn more about Choose My Campus and our mission to help students find the right college.</p>
        </div>
      </section>
      <section className="container-site py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-6">We simplify college selection and admissions by bringing course, fee, placement, scholarship, and accommodation information into a student-focused platform.</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Help</h2>
          <p className="text-gray-600 leading-relaxed">Students can research colleges independently and connect with counselors for application planning, documentation, mentorship, loans, and career direction.</p>
        </div>
      </section>
    </div>
  );
}
