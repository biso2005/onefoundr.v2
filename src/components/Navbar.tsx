import Badge from './ui/Badge'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border bg-background/80 backdrop-blur-md">
      <span className="text-foreground font-semibold text-lg tracking-tight">
        One<span className="text-accent">Foundr</span>
      </span>
      <Badge>Waitlist Open</Badge>
    </nav>
  )
}
