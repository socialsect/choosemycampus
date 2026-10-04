import Link from 'next/link';
import { notFound } from 'next/navigation';
import { colleges, courseCategories } from '@/data/colleges';
import CollegeLogo from '@/components/CollegeLogo';

export function generateStaticParams() {
  return courseCategories.map((course) => ({ courseSlug: course.slug }));
}

export default function CourseCollegesPage({ params }) {
  const course = courseCategories.find((c) => c.slug === params.courseSlug);
  if (!course) notFound();

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
            <Link key={college.id} href={`/colleges/${college.id}`} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-brand-blue/30 transition-all">
              <CollegeLogo college={college} className="h-36 w-full" />
              <div className="p-5">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-blue transition-colors">{college.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{college.city}, {college.state}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
