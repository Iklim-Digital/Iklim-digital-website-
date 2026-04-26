'use client'

import { motion } from 'framer-motion'
import {
  Monitor,
  Code2,
  TrendingUp,
  Palette,
  Search,
  Smartphone,
  ArrowUpRight,
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    number: '01',
    icon: Monitor,
    title: 'Web Design',
    description: 'Interfaces that look good and actually convert. No templates, no shortcuts.',
    href: '/services#web-design',
  },
  {
    number: '02',
    icon: Code2,
    title: 'Web Development',
    description: 'Clean, fast, maintainable code. Built with modern tools and built to last.',
    href: '/services#web-development',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Digital Strategy',
    description: "Direction before execution. We map what needs to happen before we touch a screen.",
    href: '/services#digital-strategy',
  },
  {
    number: '04',
    icon: Palette,
    title: 'Brand Identity',
    description: 'Visual systems that tell your story across every surface — consistently.',
    href: '/services#brand-identity',
  },
  {
    number: '05',
    icon: Search,
    title: 'SEO & Growth',
    description: 'Organic traffic that compounds. Technical foundation, smart content, real results.',
    href: '/services#seo-growth',
  },
  {
    number: '06',
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform apps built with care, from concept to App Store.',
    href: '/services#mobile-apps',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-3">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              Full-service digital,<br className="hidden sm:block" /> without the overhead.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
          >
            See full service details
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Service list */}
        <div className="divide-y divide-slate-200 dark:divide-slate-800/60">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ y: 12 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <Link
                  href={service.href}
                  className="group flex items-start sm:items-center gap-5 sm:gap-8 py-6 hover:bg-white dark:hover:bg-slate-800/30 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 transition-colors duration-200 rounded-lg"
                >
                  {/* Number */}
                  <span className="text-slate-300 dark:text-slate-700 text-xs font-mono font-medium w-6 shrink-0 pt-0.5">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center shrink-0 group-hover:border-blue-300 dark:group-hover:border-blue-500/40 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-slate-900 dark:text-white font-semibold text-base mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight className="w-4 h-4 text-slate-300 dark:text-slate-700 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-1 sm:mt-0" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
