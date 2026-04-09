const features = [
  {
    label: 'Peer Pods',
    title: 'Stage-matched. Accountable. Real.',
    description:
      'Small groups of 4-5 founders at your exact stage. Weekly check-ins. Honest feedback. No cheerleading.',
  },
  {
    label: 'AI Layer',
    title: 'Feedback that knows your business.',
    description:
      'Not generic AI. Context-aware intelligence that understands where you are and what you actually need to hear.',
  },
  {
    label: 'The Journey',
    title: 'We grow with you.',
    description:
      'From side hustle to serious solo founder. OneFoundr meets you where you are and scales with every stage.',
  },
]

export default function Solution() {
  return (
    <section className="py-24 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-4">
            The Solution
          </p>
          <h2 className="w-full text-3xl md:text-5xl font-bold tracking-tight text-center">
            Built for the way
            <br />
            solo founders actually work.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {features.map((f, i) => (
            <div
              key={f.label}
              className="flex flex-col md:flex-row md:items-center gap-6 p-8 rounded-2xl border border-border bg-card hover:border-accent/30 transition-colors duration-300"
            >
              <div className="md:w-1/4">
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  {String(i + 1).padStart(2, '0')} — {f.label}
                </span>
              </div>
              <div className="md:w-3/4 flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
