'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Phone, CheckCircle, ChevronDown } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'iklimdigital@gmail.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:iklimdigital@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+961 71 083 763',
    sub: '+961 76 522 481',
    href: 'tel:+96171083763',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Beirut, Lebanon',
    sub: 'Remote and on-site available',
    href: undefined,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon – Fri, 9am – 6pm',
    sub: 'Lebanon Time (UTC+2 / UTC+3)',
    href: undefined,
  },
]

type FormData = {
  name: string
  email: string
  company: string
  service: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong.')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700/60 rounded-md px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-colors'

  const labelClass = 'block text-slate-600 dark:text-slate-400 text-xs font-medium mb-1.5'

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">

          {/* Left — contact info */}
          <motion.div
            initial={{ y: 12 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-8">
              Contact details
            </h2>

            <div className="space-y-7">
              {contactInfo.map(({ icon: Icon, label, value, sub, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 dark:text-slate-500 text-xs uppercase tracking-wide mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-slate-900 dark:text-white font-medium text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-900 dark:text-white font-medium text-sm">{value}</p>
                    )}
                    <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Simple note */}
            <div className="mt-10 p-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/60 rounded-xl">
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                We take on a small number of projects at a time. Tell us about your goals and we&apos;ll let you know if we&apos;re a good fit.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ y: 12 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 rounded-2xl p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-slate-900 dark:text-white text-xl font-semibold mb-2">
                  Message received
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email <span className="text-blue-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company or organisation
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>
                    What are you looking for?
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none pr-10`}
                    >
                      <option value="">Choose a service...</option>
                      <option value="web-design">Web Design</option>
                      <option value="web-development">Web Development</option>
                      <option value="digital-strategy">Digital Strategy</option>
                      <option value="brand-identity">Brand Identity</option>
                      <option value="seo">SEO & Growth</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="other">Not sure yet</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Tell us about your project <span className="text-blue-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your goals, timeline, and any context that's helpful..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && (
                  <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 dark:bg-white hover:bg-slate-700 dark:hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed text-white dark:text-slate-900 font-medium text-sm rounded-md tracking-wide transition-all duration-200"
                >
                  {loading ? (
                    <>
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-white/30 dark:border-slate-900/30 border-t-white dark:border-t-slate-900 animate-spin" />
                      Sending…
                    </>
                  ) : 'Send message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
