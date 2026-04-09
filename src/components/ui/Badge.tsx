export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-muted text-xs font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
      {children}
    </span>
  )
}
