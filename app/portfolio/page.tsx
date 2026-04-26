import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Iklim Digital client work and case studies. Currently in preparation — book a call to see examples directly.',
}

const projects = [
  {
    number: '01',
    title: 'E-commerce rebrand',
    category: 'Brand Identity · Web Design',
    type: 'Fashion & Retail',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80',
    imageAlt: 'Designer at desk, warm lamp light',
  },
  {
    number: '02',
    title: 'SaaS product website',
    category: 'Web Design · Web Development',
    type: 'Technology',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
    imageAlt: 'Dark monitors glowing in dim studio',
  },
  {
    number: '03',
    title: 'Restaurant digital presence',
    category: 'Web Design · SEO & Growth',
    type: 'Food & Hospitality',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=800&auto=format&fit=crop&q=80',
    imageAlt: 'Person working late in low light',
  },
  {
    number: '04',
    title: 'Professional services firm',
    category: 'Brand Identity · Digital Strategy',
    type: 'B2B Services',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&auto=format&fit=crop&q=80',
    imageAlt: 'Evening light workspace, dramatic shadows',
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
          style={{ background: 'radial-gradient(circle at top right, #3b82f6 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-6">
                Our work
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-6 max-w-2xl">
                Projects and case studies.
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-xl max-w-xl leading-relaxed">
                We&apos;re a new studio. Our first detailed case studies are currently being prepared. In the meantime, see what we work on below — or book a call and we&apos;ll share examples directly.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 dark:bg-white hover:bg-slate-700 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-medium text-sm rounded-md transition-all duration-200 whitespace-nowrap self-end"
            >
              Book a discovery call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/60 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.number}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-2xl overflow-hidden"
              >
                {/* Cover image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 640px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-colors duration-300" />
                  <span className="absolute top-4 left-4 text-white/60 text-xs font-mono">{project.number}</span>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h2 className="text-slate-900 dark:text-white font-semibold text-base capitalize leading-snug">
                      {project.title}
                    </h2>
                    <span className="text-slate-400 dark:text-slate-500 text-xs shrink-0 mt-0.5">{project.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
                    <span className="text-slate-500 dark:text-slate-400 text-xs">{project.category}</span>
                    <span className="text-slate-300 dark:text-slate-600 text-xs">·</span>
                    <span className="text-slate-400 dark:text-slate-500 text-xs">{project.type}</span>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700/40">
                    Case study in preparation
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed">
              Full case studies including process, decisions, and results will be published as projects wrap up.
              If you&apos;d like to speak directly about our approach to a specific type of project,{' '}
              <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2">
                get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
