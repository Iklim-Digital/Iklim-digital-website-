interface LegalLayoutProps {
  title: string
  effectiveDate: string
  intro: string
  children: React.ReactNode
}

export default function LegalLayout({ title, effectiveDate, intro, children }: LegalLayoutProps) {
  return (
    <section className="pt-40 pb-24 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-6">
          Legal
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-slate-400 dark:text-slate-500 text-sm mb-8">
          Effective Date: {effectiveDate}
        </p>
        <div className="h-px bg-slate-200 dark:bg-slate-800 mb-10" />
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 text-[15px]">
          {intro}
        </p>
        <div className="space-y-10 text-[15px]">
          {children}
        </div>
      </div>
    </section>
  )
}

export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-slate-900 dark:text-white text-lg font-semibold mb-3 pb-2 border-b border-slate-100 dark:border-slate-800/60">
        {heading}
      </h2>
      <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  )
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
