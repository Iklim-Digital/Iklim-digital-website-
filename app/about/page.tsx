import type { Metadata } from 'next'
import Image from 'next/image'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Iklim Digital — our story, values, and the way we work.',
}

const values = [
  {
    number: '01',
    title: 'Craft first',
    description:
      'Every pixel and every line of code is executed with care. Good work takes time, and we take the time.',
  },
  {
    number: '02',
    title: 'Outcomes over output',
    description:
      "Beautiful deliverables mean nothing without results. We measure success by the growth we drive, not the files we ship.",
  },
  {
    number: '03',
    title: 'Honest partnership',
    description:
      'We operate as an extension of your team. Clear timelines, honest scoping, and no surprises — ever.',
  },
  {
    number: '04',
    title: 'Keep growing',
    description:
      'The digital landscape moves fast. We invest in our craft, tools, and knowledge so your work always uses what works now.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
          style={{ background: 'radial-gradient(circle at top right, #3b82f6 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-6">
              About Us
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              A young studio with strong opinions about good work.
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed">
              We started Iklim Digital because we kept seeing brands underserved by agencies that overpromise and underdeliver.
              So we built a studio that works differently.
            </p>
          </div>
        </div>
      </section>

      {/* Studio facts bar */}
      <section className="py-10 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {[
              { label: 'Location', value: 'Beirut, Lebanon' },
              { label: 'Founded', value: '2026' },
              { label: 'Model', value: 'Founder-led' },
              { label: 'Availability', value: 'Remote & on-site' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <span className="text-xs text-slate-400 dark:text-slate-500 tracking-wide uppercase">{item.label}</span>
                <span className="text-slate-900 dark:text-white font-semibold text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial photo band */}
      <section className="relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-slate-900">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80"
          alt="Studio team working in warm evening light"
          fill
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent" />
        <div className="absolute bottom-8 left-8 sm:left-12 lg:left-16">
          <p className="text-white/60 text-xs tracking-widest uppercase">Beirut, Lebanon — est. 2026</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 sm:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-5">
                Our story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-8">
                Built around what actually matters in a client relationship.
              </h2>
              <div className="space-y-5 text-slate-500 dark:text-slate-400 leading-relaxed text-[15px]">
                <p>
                  Iklim Digital was founded with a simple belief: businesses deserve digital work that is both well-made and purposeful.
                  Too many agencies sacrifice one for the other.
                </p>
                <p>
                  We launched as a founder-led studio in Beirut. Small, intentional, and focused on a small number of clients at a time — because that&apos;s the only way to do this kind of work well.
                </p>
                <p>
                  What drives us is the impact we see. A rebrand that opens new doors. A website that converts. A strategy that finally makes the numbers move. These are the moments worth building for.
                </p>
              </div>
            </div>

            {/* Values preview on the right */}
            <div className="grid grid-cols-1 gap-px bg-slate-200 dark:bg-slate-800/60 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800/60">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white dark:bg-slate-950 p-6 flex gap-5 items-start hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors duration-200"
                >
                  <span className="text-slate-300 dark:text-slate-700 text-xs font-mono mt-0.5 w-6 shrink-0">{v.number}</span>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-semibold text-sm mb-1.5">{v.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-5">
                How we work
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                Direct, focused, and built for quality.
              </h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  heading: 'You talk to the people building your product',
                  body: 'No account managers, no handoffs. The person you meet in the discovery call is the person doing the work.',
                },
                {
                  heading: 'We take on projects we can do well',
                  body: "We don't overbook. A small client list means each project gets the attention it deserves — not the hours left over.",
                },
                {
                  heading: 'Transparency is non-negotiable',
                  body: 'Weekly progress updates, honest timelines, and clear scoping from day one. If something changes, you hear about it immediately.',
                },
              ].map((item) => (
                <div key={item.heading} className="flex gap-5">
                  <div className="w-px bg-blue-500 dark:bg-blue-400 self-stretch shrink-0 ml-0.5 mt-1" />
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-semibold text-base mb-2">{item.heading}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
