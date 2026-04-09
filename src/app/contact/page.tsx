'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <p className="text-amber-400 text-sm font-medium uppercase tracking-widest">
            Contact
          </p>
          <h1 className="section-heading text-4xl md:text-6xl font-bold tracking-tight">
            We're real people.
            <br />
            <span className="text-white/40 font-normal">
              Talk to us.
            </span>
          </h1>
          <p className="page-center text-white/50 text-lg max-w-xl leading-relaxed">
            Question, feedback, partnership, or just want to say hello — 
            we read every message personally.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-xl mx-auto">

          {status === 'success' ? (
            <div className="text-center flex flex-col items-center gap-4 py-16">
              <span className="text-5xl">👋</span>
              <h2 className="text-2xl font-bold text-white">
                Message received.
              </h2>
              <p className="text-white/50">
                We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs font-medium uppercase tracking-widest">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Darren Coker"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-amber-400/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs font-medium uppercase tracking-widest">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="hello@onefoundr.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-amber-400/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs font-medium uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  placeholder="What's on your mind?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-amber-400/50 transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-xs text-center">
                  Something went wrong. Please try again or email us directly at hello@onefoundr.com
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-amber-400 text-black font-semibold py-4 rounded-full hover:bg-amber-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>

              <p className="text-white/20 text-xs text-center">
                Or email us directly at{' '}
                <a
                  href="mailto:hello@onefoundr.com"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  hello@onefoundr.com
                </a>
              </p>

            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
