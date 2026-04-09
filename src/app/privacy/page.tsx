import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const sections = [
  {
    title: 'Who we are',
    content:
      'OneFoundr is an online platform for solo founders, operated by Darren Coker, based in the United Kingdom. Our website is onefoundr.com. If you have any questions about this privacy policy, contact us at hello@onefoundr.com.',
  },
  {
    title: 'What information we collect',
    content:
      'We collect only what we need. When you join our waitlist, we collect your email address and your current founder stage (side hustler, solopreneur, or solo founder). When you contact us, we collect your name, email address, and the content of your message. We do not collect payment information, sensitive personal data, or anything beyond what is necessary to serve you.',
  },
  {
    title: 'How we use your information',
    content:
      'Your email address is used to send you waitlist confirmation, product updates, and launch communications related to OneFoundr. Your founder stage is used to personalise your experience and ensure we send you relevant information. Your contact form submissions are used solely to respond to your enquiry. We do not sell, rent, or share your personal data with third parties for marketing purposes.',
  },
  {
    title: 'How we store your information',
    content:
      'Your data is stored securely using Supabase, a trusted cloud database provider. All data is encrypted in transit and at rest. We retain your information for as long as necessary to provide you with our services, or until you request deletion.',
  },
  {
    title: 'Your rights',
    content:
      'You have the right to access the personal data we hold about you. You have the right to request correction of inaccurate data. You have the right to request deletion of your data at any time. You have the right to withdraw consent for communications at any time by unsubscribing. To exercise any of these rights, email us at hello@onefoundr.com and we will respond within 30 days.',
  },
  {
    title: 'Cookies',
    content:
      'We use minimal, privacy-respecting analytics via Vercel Analytics. This does not use cookies or track personal identifiers. We do not use advertising cookies or third-party tracking.',
  },
  {
    title: 'Third party services',
    content:
      'We use the following trusted third-party services to operate OneFoundr: Vercel for website hosting and analytics, Supabase for secure data storage, and Resend for email delivery. Each of these providers maintains their own privacy and security standards.',
  },
  {
    title: 'Changes to this policy',
    content:
      'We may update this privacy policy from time to time. When we do, we will update the date at the bottom of this page. Continued use of our website constitutes acceptance of the updated policy.',
  },
  {
    title: 'Contact',
    content:
      'For any privacy-related questions or requests, contact us at hello@onefoundr.com. We are based in the United Kingdom and comply with applicable UK data protection law including the UK GDPR.',
  },
]

export default function Privacy() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <p className="text-amber-400 text-sm font-medium uppercase tracking-widest">
            Legal
          </p>
          <h1 className="section-heading text-4xl md:text-5xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="page-center text-white/50 text-sm">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h2 className="text-white font-semibold text-lg">
                {section.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
