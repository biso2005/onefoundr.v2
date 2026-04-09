'use client'
import { useState } from 'react'
import WaitlistForm from './WaitlistForm'

export default function Hero() {
  const [count, setCount] = useState(847)

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-32">
      
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-8">

        {/* Eyebrow */}
        <p className="text-muted text-sm font-medium uppercase tracking-widest">
          For Solo Founders
        </p>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
          Every major decision you've made this year —
          <br />
          <span className="text-accent">
            you made alone.
          </span>
        </h1>

        {/* Subline */}
        <p className="text-muted text-lg md:text-xl max-w-xl leading-relaxed">
          That's not a discipline problem. It's a structural one.
          <br />
          <br />
          OneFoundr puts the right people and the right system around your thinking — so the decisions that have been sitting in your head for weeks get made clearly, confidently, and with people who actually understand your context.
        </p>

        {/* Waitlist Form */}
        <WaitlistForm />

        {/* Social proof */}
        <div className="flex items-center gap-2 text-muted text-sm">
          <div className="flex -space-x-3">
            {[
              {
                url: 'https://images.pexels.com/photos/30004323/pexels-photo-30004323.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
                name: 'Founder 1',
              },
              {
                url: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
                name: 'Founder 2',
              },
              {
                url: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
                name: 'Founder 3',
              },
              {
                url: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
                name: 'Founder 4',
              },
              {
                url: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
                name: 'Founder 5',
              },
            ].map((avatar, i) => (
              <img
                key={i}
                src={avatar.url}
                alt={avatar.name}
                className="w-9 h-9 rounded-full border-2 border-background object-cover"
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
