// app/layout.tsx
import './globals.css'
import { Roboto } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer  from '@/components/Footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'SEEG Gabon',
  description: 'Société d\'Énergie et d\'Eau du Gabon',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={roboto.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

