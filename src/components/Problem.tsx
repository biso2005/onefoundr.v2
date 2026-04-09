export default function Problem() {
  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        {/* Section Label */}
        <p className="text-accent text-sm font-medium uppercase tracking-widest text-center mb-6">
          THE REAL EXPERIENCE
        </p>

        {/* Opening Headline */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-heading text-3xl md:text-5xl font-bold tracking-tight">
            You don't have a talent problem.
            <br />
            <span className="text-muted font-normal">
              You have a decisions problem.
            </span>
          </h2>
        </div>

        {/* Body Content */}
        <div className="flex flex-col gap-8 text-white/70 text-lg leading-relaxed">
          {/* Block 1 */}
          <div className="flex flex-col gap-4">
            <p>
              The strategy question that sits in your head for two weeks because there's no one to think out loud with. The pricing call you second-guess because you made it alone at 11pm. The pivot you almost made — and then didn't — not because the logic was wrong, but because there was no one to pressure-test it with you.
            </p>
            <p>
              You're not short of information. The internet has more startup content than any founder could read in a lifetime.
            </p>
            <p>
              What's missing is the right conversation, at the right moment, with people who are actually in it.
            </p>
          </div>

          {/* Pull Quote */}
          <p className="text-xl italic text-accent border-l-2 border-accent pl-6 py-4">
            "The loneliest part of solo founding isn't the late nights. It's the decisions."
          </p>

          {/* Block 2 */}
          <div className="flex flex-col gap-4">
            <p>
              There's a specific stage most solo founders hit — call it the messy middle — where the early momentum slows, the next move isn't obvious, and the distance between where you are and where you want to be starts to feel less like a gap and more like a wall.
            </p>
            <p>
              It's not a talent problem. It's not a motivation problem.
            </p>
            <p>
              It's a structural problem.
            </p>
            <p>
              And structural problems need structural solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
