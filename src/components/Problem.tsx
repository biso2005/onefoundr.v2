const problems = [
  {
    icon: '🌀',
    title: 'The Loneliness',
    description:
      'No co-founder to vent to. No team to validate ideas with. Just you and the silence.',
  },
  {
    icon: '💀',
    title: 'The Burnout',
    description:
      'Wearing every hat. Sales, product, support, finance — all before lunch.',
  },
  {
    icon: '🔇',
    title: 'The Noise',
    description:
      'Endless advice built for funded startups with teams. None of it fits your reality.',
  },
]

export default function Problem() {
  return (
    <section className="py-24 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="section-heading text-3xl md:text-5xl font-bold tracking-tight mb-4">
            The solo founder experience
            <br />
            <span className="text-muted font-normal">
              is rarely talked about honestly.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-2xl border border-border bg-card flex flex-col gap-4 hover:border-accent/30 transition-colors duration-300"
            >
              <span className="text-3xl">{p.icon}</span>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
