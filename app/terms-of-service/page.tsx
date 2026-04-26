import type { Metadata } from 'next'
import LegalLayout, { LegalSection, LegalList } from '@/components/ui/LegalLayout'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Iklim Digital.',
}

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      effectiveDate="April 23, 2026"
      intro="By using the website and services of Iklim Digital, you agree to the following terms."
    >
      <LegalSection heading="1. Services">
        <p>Iklim Digital provides:</p>
        <LegalList items={[
          'Web design and development',
          'Digital marketing and SEO',
          'Branding and identity design',
          'Digital strategy and consulting',
        ]} />
        <p>All services are subject to a signed agreement and defined project scope.</p>
      </LegalSection>

      <LegalSection heading="2. User Responsibilities">
        <p>You agree to:</p>
        <LegalList items={[
          'Provide accurate and complete information',
          'Use the website and services lawfully',
          'Not misuse or attempt to harm our services or infrastructure',
        ]} />
      </LegalSection>

      <LegalSection heading="3. Payments">
        <LegalList items={[
          'Payment terms are defined per project in a written agreement',
          'Deposits may be required before work begins',
          'Late payments may result in work pauses or service suspension',
        ]} />
      </LegalSection>

      <LegalSection heading="4. Intellectual Property">
        <LegalList items={[
          'All content on this website is owned by Iklim Digital unless otherwise stated',
          'Client project work is transferred to the client upon full payment, as agreed',
          'Work may be showcased in our portfolio unless a non-disclosure agreement is in place',
        ]} />
      </LegalSection>

      <LegalSection heading="5. Limitation of Liability">
        <p>Iklim Digital is not liable for:</p>
        <LegalList items={[
          'Indirect or consequential damages',
          'Loss of data, revenue, or business opportunity',
          'Issues caused by third-party platforms or services',
        ]} />
      </LegalSection>

      <LegalSection heading="6. Service Availability">
        <p>We do not guarantee uninterrupted or error-free website availability.</p>
      </LegalSection>

      <LegalSection heading="7. Termination">
        <p>We reserve the right to refuse or terminate services if these terms are violated.</p>
      </LegalSection>

      <LegalSection heading="8. Governing Law">
        <p>These terms are governed by the laws of Lebanon.</p>
      </LegalSection>

      <LegalSection heading="9. Changes to Terms">
        <p>We may update these Terms at any time. Continued use of our services constitutes acceptance of any changes.</p>
      </LegalSection>

      <LegalSection heading="10. Contact">
        <p>Email: <a href="mailto:iklimdigital@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2">iklimdigital@gmail.com</a></p>
        <p>Company: Iklim Digital, Beirut, Lebanon</p>
      </LegalSection>
    </LegalLayout>
  )
}
