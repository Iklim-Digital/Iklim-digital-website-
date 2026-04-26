import type { Metadata } from 'next'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with Iklim Digital. Tell us about your project and we'll respond within one business day.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-12 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
          style={{ background: 'radial-gradient(circle at top right, #3b82f6 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-6">
            Get in touch
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-5 max-w-2xl">
            Tell us about your project.
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xl max-w-lg leading-relaxed">
            We reply within one business day. If your project is a good fit, we&apos;ll schedule a short discovery call to discuss next steps.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
