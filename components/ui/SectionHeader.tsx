'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ y: 12 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {label && (
        <p className={clsx(
          'text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4',
          align === 'center' && 'text-center'
        )}>
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
