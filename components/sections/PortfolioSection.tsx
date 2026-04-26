'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Lumina Finance',
    category: 'Web Design & Development',
    description:
      'A modern fintech platform with real-time dashboards, secure authentication, and intuitive portfolio management flows.',
    gradient: 'from-blue-600/30 via-indigo-600/20 to-blue-900/30',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
  },
  {
    title: 'GreenRoot',
    category: 'E-commerce Development',
    description:
      'Sustainable lifestyle brand with a fully custom Shopify experience, driving 3× conversion growth within 90 days.',
    gradient: 'from-emerald-600/30 via-teal-600/20 to-emerald-900/30',
    tags: ['Shopify', 'Custom Theme', 'SEO'],
  },
  {
    title: 'Nexus Platform',
    category: 'Product Design & Dev',
    description:
      'B2B SaaS dashboard for workflow automation — designed for speed, clarity, and enterprise-scale teams.',
    gradient: 'from-violet-600/30 via-purple-600/20 to-violet-900/30',
    tags: ['React', 'Node.js', 'Design System'],
  },
  {
    title: 'Meridian Architecture',
    category: 'Brand & Web Design',
    description:
      'Luxury architecture firm rebrand with an immersive portfolio experience that showcases each project beautifully.',
    gradient: 'from-amber-600/30 via-orange-600/20 to-amber-900/30',
    tags: ['Branding', 'Webflow', 'GSAP'],
  },
  {
    title: 'PulseHealth App',
    category: 'Mobile App Development',
    description:
      'Cross-platform health tracking app with AI-powered insights, serving 15,000+ active users globally.',
    gradient: 'from-rose-600/30 via-pink-600/20 to-rose-900/30',
    tags: ['React Native', 'AI/ML', 'HealthKit'],
  },
  {
    title: 'Orbit Agency',
    category: 'Digital Strategy & SEO',
    description:
      'Full digital overhaul driving 200% organic growth in 6 months through strategic SEO and content.',
    gradient: 'from-sky-600/30 via-cyan-600/20 to-sky-900/30',
    tags: ['SEO', 'Content Strategy', 'Analytics'],
  },
]

export default function PortfolioSection() {
  return (
    <section className="py-24 sm:py-32 bg-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Work"
          title="Projects We're Proud Of"
          description="A curated selection of recent projects that demonstrate our range, expertise, and commitment to excellence."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-blue-950/30 border border-blue-900/40 rounded-2xl overflow-hidden hover:border-blue-700/60 transition-all duration-300"
            >
              {/* Visual placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center select-none">
                  <span className="text-white/[0.06] text-8xl font-black">
                    {project.title[0]}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-[11px] text-blue-400 font-semibold uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-blue-900/50 text-slate-400 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-200"
          >
            View all projects →
          </Link>
        </div>
      </div>
    </section>
  )
}
