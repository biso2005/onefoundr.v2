"use client"

import { useState } from 'react'
import Button from './ui/Button'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [stage, setStage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !stage) return

    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, stage }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage("You're in. We'll be in touch soon.")
        setEmail('')
        setStage('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-2 py-4">
        <span className="text-2xl">🎉</span>
        <p className="text-foreground font-medium">{message}</p>
        <p className="text-muted text-sm">Check your email for confirmation.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full max-w-md"
    >
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-full bg-card border border-border text-foreground placeholder:text-muted text-sm focus:outline-none focus:border-accent transition-colors"
      />

      <select
        value={stage}
        onChange={(e) => setStage(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-full bg-card border border-border text-sm focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
        style={{ color: stage ? '#FFFFFF' : '#A0A0A0' }}
      >
        <option value="" disabled>
          Where are you right now?
        </option>
        <option value="side-hustler">Side Hustler — just getting started</option>
        <option value="solopreneur">Solopreneur — in the messy middle</option>
        <option value="solo-founder">Solo Founder — scaling something real</option>
      </select>

      <Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Joining...' : 'Join the Waitlist →'}
      </Button>

      {status === 'error' && (
        <p className="text-red-400 text-xs text-center">{message}</p>
      )}
    </form>
  )
}
