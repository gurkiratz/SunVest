import { Metadata } from 'next'
import { Toaster } from 'sonner'

import { Navbar } from '@/components/custom/navbar'
import { ThemeProvider } from '@/components/custom/theme-provider'
import { Footer } from '@/components/custom/footer'

import './globals.css'
import { Sidebar } from '@/components/custom/sidebar'

export const metadata: Metadata = {
  metadataBase: new URL('https://gemini.vercel.ai'),
  title: 'Cyberhacked',
  description:
    'Test your cybersecurity skills against a simulated hacker in CyberHacked.',
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="bottom-center" />
          <Navbar />
          {/* <Sidebar /> */}
          <div className="min-h-screen flex flex-col pt-16">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
