import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Shir o Khurshid Luxe Travel',
  description: 'Luxe Travel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans bg-primary min-h-screen flex justify-center items-center`}
      >
        <div className="max-w-sm w-full h-screen bg-primary flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
