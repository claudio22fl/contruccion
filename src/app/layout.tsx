import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from './component/Navigation'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>mi app</title>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <div className='h-screen w-full  relative flex overflow-hidden'>
          <Navigation />
          <div className='w-full h-full flex flex-col'>
            {children}
          </div>

        </div>

      </body>
    </html>
  )
}
