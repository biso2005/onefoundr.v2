import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Start your journey. Get oriented. Find your footing.',
    features: [
      'Access to the OneFoundr community',
      'Weekly founder newsletter',
      'Starter roadmaps and resources',
      'Stage 1 content library',
    ],
    cta: 'Join Free',
    highlighted: false,
  },
  {
    name: 'Core',
    price: '$49',
    period: 'per month',
    description: 'For solo founders in the messy middle who need real support.',
    features: [
      'Everything in Free',
      'Pod matching — stage-relevant peer group',
      'Weekly accountability check-ins',
      'AI-powered feedback on your business',
      'Founder progress tracking',
      'Private pod communication channel',
    ],
    cta: 'Join the Waitlist',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Premium',
    price: '$149',
    period: 'per month',
    description: 'For solo founders ready to scale with serious leverage.',
    features: [
      'Everything in Core',
      'Mastermind tier matching',
      'Advanced AI tools and insights',
      'OneFoundr Spotlight — visibility to our network',
      'Priority pod matching',
      'Direct access to founder resources',
    ],
    cta: 'Join the Waitlist',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <p className="text-amber-400 text-sm font-medium uppercase tracking-widest">
            Pricing
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Invest in yourself.
            <br />
            <span className="text-white/40 font-normal">
              Not another subscription you ignore.
            </span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            OneFoundr is priced for real solo founders — not venture-backed
            teams with expense accounts. Founding members lock in these rates
            permanently.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 rounded-2xl border flex flex-col gap-6 ${
                tier.highlighted
                  ? 'border-amber-400/50 bg-amber-400/5'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <h3 className="text-white font-bold text-lg">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    {tier.price}
                  </span>
                  <span className="text-white/40 text-sm">{tier.period}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 flex-1">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="text-amber-400 mt-0.5">✓</span>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="/"
                className={`w-full text-center py-3 rounded-full font-semibold text-sm transition-colors duration-200 ${
                  tier.highlighted
                    ? 'bg-amber-400 text-black hover:bg-amber-300'
                    : 'border border-white/20 text-white hover:border-white/40'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Founding member note */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl border border-amber-400/20 bg-amber-400/5">
          <h3 className="text-white font-bold text-xl mb-3">
            Founding Member Pricing
          </h3>
          <p className="text-white/50 text-sm leading-relaxed">
            The first 500 members who join lock in these prices permanently —
            regardless of future price increases. This is our commitment to the
            people who believe in OneFoundr before it is fully built.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/5 text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Lock in your founding rate.
          </h2>
          <p className="text-white/50 leading-relaxed">
            Join the waitlist today. First access. Permanent founding pricing.
          </p>
          <a
            href="/"
            className="bg-amber-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-amber-300 transition-colors duration-200"
          >
            Join the Waitlist →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
