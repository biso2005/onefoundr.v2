export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <span className="text-white font-bold tracking-tight text-lg">
          One<span className="text-amber-400">Foundr</span>
        </span>

        <p className="text-white/30 text-sm">
          © 2025 OneFoundr. Built for the ones building alone.
        </p>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="/contact"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="/privacy"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            Privacy
          </a>
          <a
            href="https://x.com/onefoundr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/one-foundr-6301833b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  )
}
