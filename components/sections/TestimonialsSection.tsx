'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const principles = [
  {
    number: '01',
    title: 'Founder-led execution',
    description:
      'You work directly with the people building your product — no account managers, no handoffs. Decisions happen faster and nothing gets lost in translation.',
  },
  {
    number: '02',
    title: 'Clear weekly progress',
    description:
      'Every week includes scope updates, delivery checkpoints, and transparent priorities. You always know where things stand and what comes next.',
  },
  {
    number: '03',
    title: 'Outcomes over output',
    description:
      "We start with your business goals, then work backwards to design and code decisions that support measurable growth — not just a pretty deliverable.",
  },
]

const process = [
  { step: '01', label: 'Discovery call', detail: 'Scope, goals, constraints' },
  { step: '02', label: 'Roadmap', detail: 'Priorities and milestones' },
  { step: '03', label: 'Build', detail: 'Short delivery cycles' },
  { step: '04', label: 'Launch', detail: 'Support and optimisation' },
]

const stack = [
  'Next.js', 'TypeScript', 'Tailwind CSS',
  'Node.js', 'Shopify', 'WordPress',
  'Flutter', 'Analytics & SEO tooling',
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4">
            Working with us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Direct. Focused.<br className="hidden sm:block" /> No layers between you and the work.
          </h2>
        </div>

        {/* Principles — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {principles.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ y: 12 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-4"
            >
              <span className="text-slate-300 dark:text-slate-700 text-xs font-mono">{p.number}</span>
              <div className="h-px bg-slate-200 dark:bg-slate-800" />
              <h3 className="text-slate-900 dark:text-white font-semibold text-base">{p.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process + Stack — 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

          {/* Process */}
          <motion.div
            initial={{ y: 12 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/60 rounded-xl p-7"
          >
            <h3 className="text-slate-900 dark:text-white font-semibold text-sm mb-6 tracking-wide">
              How we deliver
            </h3>
            <div className="grid grid-cols-2 gap-5">
              {process.map((item) => (
                <div key={item.step} className="flex flex-col gap-1">
                  <span className="text-blue-600 dark:text-blue-400 text-xs font-mono">{item.step}</span>
                  <span className="text-slate-900 dark:text-white text-sm font-medium">{item.label}</span>
                  <span className="text-slate-400 dark:text-slate-500 text-xs">{item.detail}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stack */}
          <motion.div
            initial={{ y: 12 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/60 rounded-xl p-7"
          >
            <h3 className="text-slate-900 dark:text-white font-semibold text-sm mb-6 tracking-wide">
              Technology we use
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {stack.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md border border-slate-200 dark:border-slate-700/60"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-slate-400 dark:text-slate-500 text-xs leading-relaxed">
              Tools chosen based on your goals, timeline, and budget — not trends.
            </p>
          </motion.div>
        </div>

        {/* Founder statement */}
        <motion.div
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center gap-6 p-7 bg-slate-900 dark:bg-white/5 border border-slate-800 dark:border-white/10 rounded-xl"
        >
          <div className="flex-1">
            <p className="text-white text-sm leading-relaxed max-w-2xl">
              You talk to the people building your product. Every call, every decision, every update — the same two people, start to finish. That&apos;s the whole model.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 text-slate-900 dark:text-white text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap shrink-0"
          >
            Start a project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
