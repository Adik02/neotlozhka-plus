import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['cyrillic','latin'],
  weight: ['400','500','600','700'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'Неотложка Плюс — платная скорая помощь Бишкек 24/7',
  description: 'Частная скорая помощь, перевозка лежачих больных, медицинское сопровождение. Быстрый выезд, опытные бригады.',
  openGraph: { title: 'Неотложка Плюс', description: 'Платная скорая помощь в Бишкеке 24/7', type: 'website' },
  icons: {
    icon: ['/favicon-16x16.png','/favicon-32x32.png','/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
    other: [{ rel: 'android-chrome', url: '/android-chrome-192x192.png' }, { rel: 'android-chrome', url: '/android-chrome-512x512.png' }]
  },
  other: { 'format-detection': 'telephone=no', 'theme-color': '#E31E24' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={montserrat.variable}>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
            <script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { anonymize_ip: true });
            `}} />
          </>
        )}
      </body>
    </html>
  )
}
