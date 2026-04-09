import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const steps = [
  {
    number: '01',
    title: 'Join and tell us where you are',
    description:
      'Answer a few simple questions about your stage, your business, and your biggest challenge right now. No fluff. Just the truth of where you are.',
  },
  {
    number: '02',
    title: 'Get matched to your Pod',
    description:
      'We match you with 4-5 founders at your exact stage. Not random. Stage-matched, goal-aligned, and ready to show up weekly.',
  },
  {
    number: '03',
    title: 'Show up every week',
    description:
      'Weekly check-ins. Commitments logged. Progress tracked. Your pod holds you accountable — and you hold them. No cheerleading. Real feedback.',
  },
  {
    number: '04',
    title: 'Get AI-powered feedback',
    description:
      'Our AI layer understands your business, your stage, and your goals. It surfaces insights, spots patterns, and gives you the kind of feedback a great advisor would — without the $500/hour price tag.',
  },
  {
    number: '05',
    title: 'Grow through every stage',
    description:
      'As your business evolves, OneFoundr evolves with you. From side hustle to serious solo founder — we match your support to your stage, every step of the way.',
  },
]

const faqs = [
  {
    q: 'How are Pods matched?',
    a: 'We match based on your stage, industry, goals, and availability. The goal is radical relevance — every person in your pod should feel like they get it.',
  },
  {
    q: 'What if someone in my Pod goes quiet?',
    a: 'Pods are built with resilience in mind. If a member disengages, we have a re-matching process that keeps your pod active and valuable.',
  },
  {
    q: 'How is the AI different from ChatGPT?',
    a: 'ChatGPT knows nothing about your business. Our AI layer is context-aware — it learns your stage, your goals, and your history to give feedback that actually fits your situation.',
  },
  {
    q: 'How much time does this take per week?',
    a: 'Minimum 60 minutes. One weekly check-in with your pod, plus async feedback exchanges. Built for founders who are already busy.',
  },
  {
    q: 'When does OneFoundr launch?',
    a: 'We are launching to founding members first. Join the waitlist to get priority access and locked-in founding member pricing.',
  },
]

export default function HowItWorks() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <p className="text-amber-400 text-sm font-medium uppercase tracking-widest">
            How It Works
          </p>
          <h1 className="section-heading text-4xl md:text-6xl font-bold tracking-tight">
            Simple process.
            <br />
            <span className="text-white/40 font-normal">
              Serious results.
            </span>
          </h1>
          <p className="page-center text-white/50 text-lg max-w-xl leading-relaxed">
            OneFoundr is not a content library you forget about. It is a
            structured system that shows up with you every single week.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex gap-8 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/20 transition-colors duration-300"
            >
              <span className="text-amber-400 font-bold text-2xl min-w-[2rem]">
                {step.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pod Visual */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <p className="text-amber-400 text-sm font-medium uppercase tracking-widest">
            The Pod
          </p>
          <h2 className="section-heading text-3xl md:text-5xl font-bold tracking-tight">
            Small group.
            <br />
            <span className="text-white/40 font-normal">
              Massive accountability.
            </span>
          </h2>
          <p className="page-center text-white/50 text-lg max-w-xl leading-relaxed">
            4-5 founders. Same stage. Weekly commitment. One AI layer sitting
            at the center connecting every insight, every pattern, every
            breakthrough.
          </p>

          {/* Pod diagram */}
          <div className="relative w-64 h-64 mt-8">
            {/* Center AI node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center z-10">
              <span className="text-black font-bold text-xs">AI</span>
            </div>

            {/* Founder nodes */}
            {[0, 1, 2, 3].map((i) => {
              const angle = (i * 360) / 4
              const rad = (angle * Math.PI) / 180
              const x = 50 + 38 * Math.cos(rad)
              const y = 50 + 38 * Math.sin(rad)
              return (
                <div
                  key={i}
                  className="absolute w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <span className="text-white/60 text-xs font-medium">F{i + 1}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading text-3xl md:text-4xl font-bold tracking-tight">
              Common questions
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3"
              >
                <h3 className="text-white font-semibold">{faq.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/5 text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <h2 className="section-heading text-3xl md:text-4xl font-bold tracking-tight">
            Ready to stop building alone?
          </h2>
          <p className="page-center text-white/50 leading-relaxed">
            Join the waitlist. Be first in when we open founding member access.
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
