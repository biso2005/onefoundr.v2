interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-accent text-background hover:bg-amber-400 active:scale-95',
    ghost:
      'border border-border text-muted hover:text-foreground hover:border-muted',
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  )
}
