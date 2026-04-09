export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-foreground font-semibold tracking-tight">
          One<span className="text-accent">Foundr</span>
        </span>
        <p className="text-muted text-sm">
          © 2025 OneFoundr. Built for the ones building alone.
        </p>
        <div className="flex items-center gap-6 text-muted text-sm">
          <a href="#" className="hover:text-foreground transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="mailto:hello@onefoundr.com" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
