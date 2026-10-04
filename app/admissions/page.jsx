import Link from 'next/link';
import { examCampaigns, colleges } from '@/data/colleges';
import CollegeLogo from '@/components/CollegeLogo';

export const metadata = {
  title: 'Admissions & Exam Deadlines | Choose My Campus',
  description:
    'Active MBA and UG admission campaigns: MAT, GMAT, SAT, and Symbiosis SNAP direct admission with target colleges and deadlines.',
};

function getCollege(id) {
  return colleges.find((c) => c.id === id);
}

export default function Admissions() {
  return (
    <div>
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-16">
        <div className="container-site">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Admissions & Exam Deadlines</h1>
          <p className="text-white/80 text-lg max-w-3xl">
            Active MBA and UG B.Tech campaigns with exam windows, lead deadlines, target regions, and priority colleges.
          </p>
        </div>
      </section>

      <section className="container-site py-12 space-y-10">
        {examCampaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-5 flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                    {campaign.exam}
                  </span>
                  <span className="bg-brand-yellow text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    {campaign.deadlineLabel}
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900">{campaign.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{campaign.session}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">{campaign.deadlineNote}</p>
                <p className="text-xs text-gray-500 mt-0.5">{campaign.urgency}</p>
              </div>
            </div>

            <div className="px-6 py-6 grid lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Target Regions</h3>
                <div className="flex flex-wrap gap-2">
                  {campaign.regions.map((region) => (
                    <span key={region} className="bg-blue-50 text-brand-blue text-sm font-medium px-3 py-1.5 rounded-full">
                      {region}
                    </span>
                  ))}
                </div>
                {campaign.notes?.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    {campaign.notes.map((note) => (
                      <li key={note} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                        {note}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="lg:col-span-2">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                  Target Colleges ({campaign.targetColleges.length})
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {campaign.targetColleges.map((target, idx) => {
                    const college = getCollege(target.id);
                    const href = college ? `/colleges/${college.id}` : '/colleges';
                    return (
                      <Link
                        key={`${target.id}-${idx}`}
                        href={href}
                        className="group flex items-start gap-3 border border-gray-200 rounded-xl p-4 hover:border-brand-blue/40 hover:shadow-sm transition-all"
                      >
                        {college && (
                          <CollegeLogo college={college} className="w-12 h-12 rounded-lg border border-gray-100 shrink-0" imgClassName="p-1" />
                        )}
                        <div>
                          <p className="font-semibold text-gray-900 text-sm group-hover:text-brand-blue transition-colors">
                            {idx + 1}. {target.name}
                          </p>
                          {college && (
                            <p className="text-xs text-gray-500 mt-1">
                              {college.city}, {college.state} · {college.type}
                            </p>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="px-6 pb-6">
              <Link
                href="/contact"
                className="inline-flex bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-brand-blue-dark transition-colors"
              >
                Get Guidance for {campaign.exam}
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Need help choosing a target college?</h2>
          <p className="text-gray-600 mb-6">
            Talk to a counselor for exam strategy, application timelines, and college shortlisting based on your profile.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="bg-brand-yellow text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-brand-yellow-dark transition-colors">
              Book Free Counseling
            </Link>
            <Link href="/colleges" className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-brand-blue-dark transition-colors">
              Browse All Colleges
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
