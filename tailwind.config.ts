import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#0D0D0D',
        foreground: '#FFFFFF',
        accent: '#F5A623',
        sage: '#6B8F71',
        muted: '#A0A0A0',
        border: '#1F1F1F',
        card: '#111111',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
}

export default config
