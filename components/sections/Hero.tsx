// Hero uses pure CSS animations (animate-fade-up-*) instead of Framer Motion.
// Reason: Framer Motion sets initial={{ opacity: 0 }} during SSR, keeping content
// invisible until JS hydrates. CSS animations play on first paint — no delay.
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const attributes = [
  { value: 'Founder-led', label: 'Direct collaboration' },
  { value: 'Beirut-based', label: 'Working worldwide' },
  { value: 'End-to-end', label: 'Strategy to launch' },
  { value: 'Weekly', label: 'Progress updates' },
]

// 3 curated images that feel like real studio work
const previewImages = [
  {
    src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop&q=80',
    alt: 'UI design on screen',
  },
  {
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
    alt: 'Code on dark screen',
  },
  {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    alt: 'Analytics dashboard',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-slate-950 overflow-hidden">
      {/* Dot grid — very faint */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.8) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_440px] gap-12 xl:gap-16 items-center">

          {/* Left: content */}
          <div>
            {/* Studio label */}
            <div className="animate-fade-up flex items-center gap-3 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0" />
              <span className="text-slate-500 dark:text-slate-400 text-sm tracking-wide">
                Beirut, Lebanon &middot; Digital Studio &middot; Est. 2026
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up-100 text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.02] mb-10 max-w-3xl">
              We build digital<br />
              products that<br />
              <span className="text-blue-600 dark:text-blue-400">mean business.</span>
            </h1>

            {/* Description + CTAs */}
            <div className="animate-fade-up-200 flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16 max-w-3xl mb-16">
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-md">
                Design, development, and strategy from a founder-led studio.
                We work with brands who want to grow online — not just look good.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 dark:bg-white hover:bg-slate-700 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-medium text-sm rounded-md transition-all duration-200"
                >
                  Start a project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900/50 text-sm rounded-md transition-all duration-200"
                >
                  Our services
                </Link>
              </div>
            </div>

            {/* Divider */}
            <div className="animate-fade-up-300 h-px bg-slate-200 dark:bg-slate-800 max-w-3xl mb-8" />

            {/* Attributes row */}
            <div className="animate-fade-up-500 flex flex-wrap gap-x-8 gap-y-4 max-w-3xl">
              {attributes.map((attr) => (
                <div key={attr.value} className="flex flex-col gap-0.5">
                  <span className="text-slate-900 dark:text-white text-sm font-semibold">{attr.value}</span>
                  <span className="text-slate-400 dark:text-slate-500 text-xs">{attr.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image composition — desktop only */}
          <div className="animate-fade-up-200 hidden xl:flex flex-col gap-3 select-none">
            {/* Top: wide image */}
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-xl shadow-slate-200/60 dark:shadow-black/40">
              <Image
                src={previewImages[0].src}
                alt={previewImages[0].alt}
                fill
                priority
                sizes="440px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/30" />
            </div>
            {/* Bottom: two images side by side */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-black/30">
                <Image
                  src={previewImages[1].src}
                  alt={previewImages[1].alt}
                  fill
                  priority
                  sizes="210px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/30" />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-black/30">
                <Image
                  src={previewImages[2].src}
                  alt={previewImages[2].alt}
                  fill
                  priority
                  sizes="210px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/30" />
              </div>
            </div>
            {/* Caption */}
            <p className="text-slate-400 dark:text-slate-600 text-xs text-right pr-1">
              Design, development, and brand work
            </p>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-up-700 absolute bottom-8 left-8 sm:left-12 lg:left-16 flex items-center gap-3" aria-hidden="true">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-transparent via-slate-400 dark:via-slate-600 to-transparent"
        />
        <span className="text-slate-400 dark:text-slate-600 text-[10px] tracking-widest uppercase rotate-90 origin-left ml-5">Scroll</span>
      </div>
    </section>
  )
}
