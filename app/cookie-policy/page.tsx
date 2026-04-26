import type { Metadata } from 'next'
import LegalLayout, { LegalSection, LegalList } from '@/components/ui/LegalLayout'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for Iklim Digital.',
}

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      effectiveDate="April 23, 2026"
      intro="This Cookie Policy explains how Iklim Digital uses cookies and similar tracking technologies on our website."
    >
      <LegalSection heading="1. What Are Cookies?">
        <p>
          Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and understand how you interact with it.
        </p>
      </LegalSection>

      <LegalSection heading="2. How We Use Cookies">
        <p>We use cookies to:</p>
        <LegalList items={[
          'Ensure the website functions properly',
          'Understand user behaviour and improve the experience',
          'Measure website performance and traffic patterns',
        ]} />
      </LegalSection>

      <LegalSection heading="3. Types of Cookies We Use">
        <LegalList items={[
          'Essential Cookies — required for basic site functionality',
          'Analytics Cookies — help us understand how visitors interact (e.g. Google Analytics)',
          'Marketing Cookies — used for advertising where applicable',
        ]} />
      </LegalSection>

      <LegalSection heading="4. Third-Party Cookies">
        <p>We may use third-party services that place their own cookies on your device. We do not control these cookies directly.</p>
      </LegalSection>

      <LegalSection heading="5. Managing Cookies">
        <p>You can:</p>
        <LegalList items={[
          'Disable cookies in your browser settings',
          'Delete stored cookies at any time',
        ]} />
        <p>Note: Disabling certain cookies may affect how the website functions.</p>
      </LegalSection>

      <LegalSection heading="6. Changes to This Policy">
        <p>We may update this Cookie Policy periodically. Any changes will be posted on this page.</p>
      </LegalSection>

      <LegalSection heading="7. Contact">
        <p>Email: <a href="mailto:iklimdigital@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2">iklimdigital@gmail.com</a></p>
        <p>Company: Iklim Digital, Beirut, Lebanon</p>
      </LegalSection>
    </LegalLayout>
  )
}
