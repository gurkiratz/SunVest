'use client'

import Link from 'next/link'
import { X, Youtube, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex w-full flex-col gap-6 md:w-auto">
            <div className="text-xl font-semibold">
              Sun
              <span className="bg-gradient-to-r from-yellow-400 to-green-700 bg-clip-text text-transparent">
                vest
              </span>
            </div>
            <nav className="grid grid-cols-2 gap-4 text-sm text-muted-foreground md:grid-cols-3">
              <Link
                href="/legal"
                className="transition-colors hover:text-foreground"
              >
                Legal
              </Link>
              <Link
                href="/privacy"
                className="transition-colors hover:text-foreground"
              >
                Privacy
              </Link>
              <Link
                href="/security"
                className="transition-colors hover:text-foreground"
              >
                Security
              </Link>
              <Link
                href="/accessibility"
                className="transition-colors hover:text-foreground"
              >
                Accessibility
              </Link>
              <Link
                href="/sitemap"
                className="transition-colors hover:text-foreground"
              >
                Sitemap
              </Link>
              <Link
                href="/feedback"
                className="transition-colors hover:text-foreground"
              >
                Feedback
              </Link>
            </nav>
          </div>

          <div className="flex gap-6 text-muted-foreground">
            <Link
              href="https://twitter.com"
              target="_blank"
              className="transition-colors hover:text-foreground"
            >
              <X className="size-5" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="transition-colors hover:text-foreground"
            >
              <Youtube className="size-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="transition-colors hover:text-foreground"
            >
              <Linkedin className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
