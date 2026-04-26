'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center"
        >
          {/* Left: text */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-5">
              Have something<br />to build? Let&apos;s talk.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-lg">
              We take on a small number of projects at a time so each one gets our full attention.
              Get in touch — we reply within one business day.
            </p>
          </div>

          {/* Right: actions */}
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-slate-900 dark:bg-white hover:bg-slate-700 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-medium text-sm rounded-md transition-all duration-200"
            >
              Book a discovery call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-white dark:hover:bg-slate-800/50 text-sm rounded-md transition-all duration-200"
            >
              Review our services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
