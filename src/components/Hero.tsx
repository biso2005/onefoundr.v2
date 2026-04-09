'use client'
import { useState } from 'react'
import WaitlistForm from './WaitlistForm'

export default function Hero() {
  const [count, setCount] = useState(847)

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
      
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-8">

        {/* Eyebrow */}
        <p className="text-muted text-sm font-medium uppercase tracking-widest">
          For Solo Founders
        </p>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
          You're building alone.
          <br />
          <span className="text-accent">
            That doesn't mean
          </span>
          <br />
          you're on your own.
        </h1>

        {/* Subline */}
        <p className="text-muted text-lg md:text-xl max-w-xl leading-relaxed">
          OneFoundr is the operating system for solo founders —
          peer accountability, AI-powered feedback, and a community
          that actually gets your stage.
        </p>

        {/* Waitlist Form */}
        <WaitlistForm />

        {/* Social proof */}
        <div className="flex items-center gap-2 text-muted text-sm">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-background bg-card"
                style={{
                  background: `hsl(${i * 40 + 20}, 60%, 40%)`,
                }}
              />
            ))}
          </div>
          <span>
            <strong className="text-foreground">{count}</strong> founders
            already on the waitlist
          </span>
        </div>

      </div>
    </section>
  )
}
