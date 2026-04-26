import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Monitor,
  Code2,
  TrendingUp,
  Palette,
  Search,
  Smartphone,
  Check,
} from 'lucide-react'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Services',
  description:
    "Iklim Digital's full range of digital services — web design, development, strategy, brand identity, SEO, and mobile apps.",
}

const services = [
  {
    id: 'web-design',
    number: '01',
    icon: Monitor,
    title: 'Web Design',
    description:
      'Interfaces built to do a job — look right, feel right, and move the visitor toward a decision. We design with conversion logic from the first wireframe.',
    features: [
      'Custom UI/UX design',
      'Responsive across all devices',
      'Conversion-rate optimisation',
      'Interactive prototypes',
      'Design system creation',
      'Usability testing',
    ],
    accent: 'blue',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'Designer working at desk with warm lamp light',
  },
  {
    id: 'web-development',
    number: '02',
    icon: Code2,
    title: 'Web Development',
    description:
      'Fast, clean, and maintainable code that scales. We build with Next.js, TypeScript, and the tools that will still be the right choice in three years.',
    features: [
      'Next.js & React applications',
      'Custom CMS integration',
      'API development & integration',
      'Performance optimisation',
      'Accessibility compliance',
      'Ongoing maintenance',
    ],
    accent: 'indigo',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'Dark retro monitors glowing in dim room',
  },
  {
    id: 'digital-strategy',
    number: '03',
    icon: TrendingUp,
    title: 'Digital Strategy',
    description:
      'Direction before execution. We help you understand what to build, in what order, and why — so every resource you spend moves you forward.',
    features: [
      'Digital audit & analysis',
      'Competitor research',
      'Go-to-market planning',
      'Content strategy',
      'Analytics & reporting',
      'Quarterly strategy reviews',
    ],
    accent: 'violet',
    image: 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'Person working late at desk in low light',
  },
  {
    id: 'brand-identity',
    number: '04',
    icon: Palette,
    title: 'Brand Identity',
    description:
      'Visual systems that tell your story consistently across every touchpoint — from logo to guidelines to the way your emails look.',
    features: [
      'Logo design & variations',
      'Brand guidelines',
      'Typography & colour systems',
      'Marketing collateral',
      'Brand voice & messaging',
      'Social media branding',
    ],
    accent: 'pink',
    image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'Dark studio workspace with warm desk lamp',
  },
  {
    id: 'seo-growth',
    number: '05',
    icon: Search,
    title: 'SEO & Growth',
    description:
      'Organic growth that compounds over time. Technical foundation, smart keyword strategy, and content that earns real ranking.',
    features: [
      'Technical SEO audit',
      'Keyword strategy',
      'On-page optimisation',
      'Link building',
      'Local SEO',
      'Monthly reporting',
    ],
    accent: 'emerald',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'Laptop open in a dark moody environment',
  },
  {
    id: 'mobile-apps',
    number: '06',
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Native and cross-platform apps built with care. We handle the full lifecycle — from product scoping to App Store submission and beyond.',
    features: [
      'iOS & Android development',
      'Flutter development',
      'App Store optimisation',
      'Push notifications',
      'Analytics integration',
      'Post-launch support',
    ],
    accent: 'orange',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'Dramatic workspace with evening light through window',
  },
]

const accentMap: Record<string, { icon: string; check: string; tag: string }> = {
  blue:    { icon: 'text-blue-600 dark:text-blue-400',    check: 'text-blue-600 dark:text-blue-400',    tag: 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/20' },
  indigo:  { icon: 'text-indigo-600 dark:text-indigo-400',  check: 'text-indigo-600 dark:text-indigo-400',  tag: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/20' },
  violet:  { icon: 'text-violet-600 dark:text-violet-400',  check: 'text-violet-600 dark:text-violet-400',  tag: 'bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-500/20' },
  pink:    { icon: 'text-pink-600 dark:text-pink-400',    check: 'text-pink-600 dark:text-pink-400',    tag: 'bg-pink-50 dark:bg-pink-500/10 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-500/20' },
  emerald: { icon: 'text-emerald-600 dark:text-emerald-400', check: 'text-emerald-600 dark:text-emerald-400', tag: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/20' },
  orange:  { icon: 'text-orange-600 dark:text-orange-400',  check: 'text-orange-600 dark:text-orange-400',  tag: 'bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-500/20' },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
          style={{ background: 'radial-gradient(circle at top right, #3b82f6 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-6">
            Services
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-6 max-w-3xl">
            Everything your brand needs to grow online.
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xl max-w-xl leading-relaxed">
            A focused set of services delivered by a team that cares about doing them well.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-slate-200 dark:divide-slate-800/60">
            {services.map((service, index) => {
              const Icon = service.icon
              const colors = accentMap[service.accent]
              const isReversed = index % 2 === 1

              return (
                <div
                  id={service.id}
                  key={service.id}
                  className="scroll-mt-28 py-20 sm:py-24"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${isReversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                    {/* Text */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-slate-300 dark:text-slate-700 text-xs font-mono">{service.number}</span>
                        <Icon className={`w-5 h-5 ${colors.icon}`} />
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                        {service.title}
                      </h2>
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 text-[15px]">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 text-sm"
                          >
                            <Check className={`w-4 h-4 ${colors.check} shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual panel */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60 dark:shadow-black/40">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-slate-900/25 dark:bg-slate-900/40" />
                      {/* Bottom label */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center`}>
                          <Icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-white/80 text-xs font-medium">{service.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
