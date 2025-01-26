'use client'

import Link from 'next/link'
import { X, Youtube, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <div className="text-xl font-semibold">
              Sun
              <span className="bg-gradient-to-r from-yellow-400 to-green-700 bg-clip-text text-transparent">
                vest
              </span>
            </div>
            <nav className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <Link
                href="/legal"
                className="hover:text-foreground transition-colors"
              >
                Legal
              </Link>
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/security"
                className="hover:text-foreground transition-colors"
              >
                Security
              </Link>
              <Link
                href="/accessibility"
                className="hover:text-foreground transition-colors"
              >
                Accessibility
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-foreground transition-colors"
              >
                Sitemap
              </Link>
              <Link
                href="/feedback"
                className="hover:text-foreground transition-colors"
              >
                Feedback
              </Link>
            </nav>
          </div>

          <div className="flex gap-6 text-muted-foreground">
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
