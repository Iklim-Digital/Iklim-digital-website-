import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  Studio: [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Work' },
    { href: '/contact', label: 'Contact' },
  ],
  Services: [
    { href: '/services#web-design', label: 'Web Design' },
    { href: '/services#web-development', label: 'Web Development' },
    { href: '/services#digital-strategy', label: 'Digital Strategy' },
    { href: '/services#brand-identity', label: 'Brand Identity' },
    { href: '/services#seo-growth', label: 'SEO & Growth' },
    { href: '/services#mobile-apps', label: 'Mobile Apps' },
  ],
  Legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/cookie-policy', label: 'Cookie Policy' },
  ],
}

const socialLinks = [
  { href: 'https://www.instagram.com/iklim.digital/', icon: Instagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top section */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">

          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex mb-6 opacity-100 hover:opacity-70 transition-opacity duration-200">
              <Image
                src="/logo.png"
                alt="Iklim Digital"
                width={1393}
                height={249}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-[260px] mb-6">
              A founder-led digital studio based in Beirut. We design, build, and grow digital products for ambitious brands.
            </p>

            {/* Contact info */}
            <div className="space-y-2 mb-6">
              <a
                href="mailto:iklimdigital@gmail.com"
                className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                iklimdigital@gmail.com
              </a>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                Beirut, Lebanon
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-700/60 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-slate-900 dark:text-white text-xs font-semibold mb-5 tracking-widest uppercase">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center">
          <p className="text-slate-400 dark:text-slate-600 text-xs">
            © {new Date().getFullYear()} Iklim Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
