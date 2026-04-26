import type { Metadata } from 'next'
import LegalLayout, { LegalSection, LegalList } from '@/components/ui/LegalLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Iklim Digital.',
}

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      effectiveDate="April 23, 2026"
      intro="At Iklim Digital, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information."
    >
      <LegalSection heading="1. Information We Collect">
        <p>We may collect:</p>
        <LegalList items={[
          'Personal details (name, email address, phone number)',
          'Business information (company name, project details)',
          'Technical data (IP address, browser type, device info)',
          'Usage data (pages visited, time spent on site)',
        ]} />
      </LegalSection>

      <LegalSection heading="2. How We Use Your Information">
        <p>We use your data to:</p>
        <LegalList items={[
          'Provide and manage our services',
          'Communicate with you regarding projects or inquiries',
          'Improve our website and user experience',
          'Send updates or marketing communications (if consent is given)',
        ]} />
      </LegalSection>

      <LegalSection heading="3. Cookies and Tracking">
        <p>We use cookies and similar technologies to analyse website traffic and enhance the user experience. See our{' '}
          <Link href="/cookie-policy" className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2">
            Cookie Policy
          </Link>{' '}
          for more details.
        </p>
      </LegalSection>

      <LegalSection heading="4. Sharing Your Information">
        <p>We do not sell your personal data. We may share information with:</p>
        <LegalList items={[
          'Trusted service providers (hosting, analytics)',
          'Legal authorities if required by law',
        ]} />
      </LegalSection>

      <LegalSection heading="5. Data Security">
        <p>
          We implement appropriate technical and organisational measures to protect your data, but no system is 100% secure.
        </p>
      </LegalSection>

      <LegalSection heading="6. Your Rights">
        <p>Depending on your location, you may have the right to:</p>
        <LegalList items={[
          'Access your data',
          'Request correction or deletion',
          'Withdraw consent',
        ]} />
      </LegalSection>

      <LegalSection heading="7. Third-Party Links">
        <p>
          Our website may contain links to third-party websites. We are not responsible for their privacy practices.
        </p>
      </LegalSection>

      <LegalSection heading="8. Changes to This Policy">
        <p>We may update this Privacy Policy at any time. Changes will be posted on this page.</p>
      </LegalSection>

      <LegalSection heading="9. Contact Us">
        <p>Email: <a href="mailto:iklimdigital@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2">iklimdigital@gmail.com</a></p>
        <p>Company: Iklim Digital, Beirut, Lebanon</p>
      </LegalSection>
    </LegalLayout>
  )
}
