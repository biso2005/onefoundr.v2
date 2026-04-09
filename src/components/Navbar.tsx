'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-md border-b border-white/5">
      <Link href="/" className="text-white font-bold text-xl tracking-tight">
        One<span className="text-amber-400">Foundr</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm transition-colors duration-200 ${
              pathname === link.href
                ? 'text-white font-medium'
                : 'text-white/50 hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-white/60 text-xs font-medium">Waitlist Open</span>
      </div>
    </nav>
  )
}
