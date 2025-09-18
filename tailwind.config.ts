import type { Config } from 'tailwindcss'
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      container: { center: true, padding: '1rem', screens: { lg: '1024px', xl: '1152px' } },
      fontFamily: { sans: ['var(--font-montserrat)', 'system-ui', 'Segoe UI', 'Roboto', 'Arial'] },
      colors: {
      brand: { DEFAULT: '#E31E24', dark: '#B11318', light: '#FBE9EA' },
      secondary: { DEFAULT: '#2B2C83', dark: '#22246B', light: '#E9EAFB' }
    },
      boxShadow: { soft: '0 8px 24px rgba(16,24,40,0.08)' },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' }
    }
  },
  plugins: []
} satisfies Config
