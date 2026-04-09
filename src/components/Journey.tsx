const stages = [
  {
    stage: 'Stage 01',
    name: 'The Spark',
    who: 'Side Hustler',
    description: 'Validation, clarity, and the inspiration to keep going.',
    color: 'border-sage/40',
    dot: 'bg-sage',
  },
  {
    stage: 'Stage 02',
    name: 'The Grind',
    who: 'Solopreneur',
    description: 'Accountability, peer pods, AI leverage, real answers.',
    color: 'border-accent/40',
    dot: 'bg-accent',
  },
  {
    stage: 'Stage 03',
    name: 'The Scale',
    who: 'Solo Founder',
    description: 'Masterminds, advanced systems, and earned visibility.',
    color: 'border-amber-300/40',
    dot: 'bg-amber-300',
  },
]

export default function Journey() {
  return (
    <section className="py-24 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-sage text-sm font-medium uppercase tracking-widest mb-4">
            The Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">
            We don't serve a demographic.
            <br />
            <span className="text-muted font-normal">
              We serve a journey.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.map((s) => (
            <div
              key={s.stage}
              className={`p-8 rounded-2xl border ${s.color} bg-card flex flex-col gap-4`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                <span className="text-xs font-medium uppercase tracking-widest text-muted">
                  {s.stage}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <p className="text-muted text-sm">{s.who}</p>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
