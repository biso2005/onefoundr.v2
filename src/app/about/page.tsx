import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const values = [
  {
    title: 'Empathy first',
    description:
      'We name the real experience before we try to solve it. Solo founding is hard. We say that out loud.',
  },
  {
    title: 'Solidarity over inspiration',
    description:
      'We are not a highlight reel. We are the honest middle — the part between the launch post and the success story.',
  },
  {
    title: 'Intelligent support',
    description:
      'Generic advice is everywhere. We build tools and communities that understand your specific stage and situation.',
  },
  {
    title: 'Ambitious realism',
    description:
      'We believe solo founders can build serious, scalable companies. Not just side income. Real businesses.',
  },
]

export default function About() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <p className="text-amber-400 text-sm font-medium uppercase tracking-widest">
            About
          </p>
          <h1 className="section-heading text-4xl md:text-6xl font-bold tracking-tight">
            Built by a solo founder.
            <br />
            <span className="text-white/40 font-normal">
              For solo founders.
            </span>
          </h1>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6 text-white/70 text-lg leading-relaxed">
            <p>
              Darren has built multiple businesses from scratch. A data
              disputes platform. A health and wellness community. A renewable
              energy supply company.
            </p>
            <p>
              Three different industries. Three different problems.{' '}
              <span className="text-white font-medium">One constant.</span>
            </p>
            <p>He built all of them alone.</p>
            <p>
              No co-founder to reality-check ideas at midnight. No team to
              absorb the bad weeks. No community that understood what it
              actually felt like to wear every hat, make every decision, and
              carry the whole thing on one pair of shoulders.
            </p>
            <p>
              The advice that existed wasn't built for him. It was built for
              funded startups with teams, investors, and a safety net. Darren
              had none of that. What he had was determination — and the quiet
              frustration of knowing the support he needed simply didn't exist.
            </p>
            <p className="text-white font-medium text-xl">
              So he built it.
            </p>
            <p>
              OneFoundr is for every solo founder who has ever felt the silence
              of building alone. The ones who keep going anyway. The ones who
              deserve better tools, better peers, and a community that actually
              gets their stage.
            </p>
            <p className="text-amber-400 font-semibold text-xl">
              You're not alone anymore.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <p className="text-amber-400 text-sm font-medium uppercase tracking-widest">
            The Mission
          </p>
          <h2 className="section-heading text-3xl md:text-5xl font-bold tracking-tight">
            Own the solo founder
            <br />
            journey. End to end.
          </h2>
          <p className="page-center text-white/50 text-lg max-w-xl leading-relaxed">
            The way YC owns startup culture. The way Stripe owns payments. We
            are building the defining platform for one-person companies —
            from the first side hustle to the first million.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading text-3xl md:text-4xl font-bold tracking-tight">
              What we believe
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3 hover:border-amber-400/20 transition-colors duration-300"
              >
                <h3 className="text-white font-semibold text-lg">
                  {value.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="section-heading text-3xl md:text-4xl font-bold tracking-tight">
            Where we're going
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            29.8 million solopreneurs in the US alone. 117,000 already building
            million-dollar solo businesses. A market doubling every two years.
            And nobody serving the full journey.
          </p>
          <p className="text-white/50 text-lg leading-relaxed">
            That changes now.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/5 text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <h2 className="section-heading text-3xl md:text-4xl font-bold tracking-tight">
            Be part of what's coming.
          </h2>
          <p className="page-center text-white/50 leading-relaxed">
            Join the waitlist. First access. Founding member pricing. Locked in.
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
