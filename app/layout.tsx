import { Metadata } from 'next'
import { Toaster } from 'sonner'

import { Navbar } from '@/components/custom/navbar'
import { ThemeProvider } from '@/components/custom/theme-provider'
import { Footer } from '@/components/custom/footer'

import './globals.css'
import { Sidebar } from '@/components/custom/sidebar'

export const metadata: Metadata = {
  metadataBase: new URL('https://sunvest.vercel.app'),
  title: 'Sunvest',
  description: "SunLife's digital bridge to youth financial empowerment.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="bottom-center" />
          <Navbar />
          {/* <Sidebar /> */}
          <div className="flex min-h-screen flex-col pt-16">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
