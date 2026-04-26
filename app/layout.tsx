import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: 'Iklim Digital — Premium Digital Agency',
    template: '%s | Iklim Digital',
  },
  description:
    'Iklim Digital is a premium digital agency specializing in web design, development, and digital strategy for ambitious brands.',
  keywords: [
    'digital agency',
    'web design',
    'web development',
    'digital strategy',
    'SEO',
    'brand identity',
    'Lebanon',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iklimdigital.com',
    siteName: 'Iklim Digital',
    title: 'Iklim Digital — Premium Digital Agency',
    description:
      'Crafting beautiful, high-performance digital experiences that drive growth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iklim Digital — Premium Digital Agency',
    description:
      'Crafting beautiful, high-performance digital experiences that drive growth.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(inter.variable)} suppressHydrationWarning>
      <head>
        {/* Inline script — runs before paint to apply saved theme without flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white antialiased transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
