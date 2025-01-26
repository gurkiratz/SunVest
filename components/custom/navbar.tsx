import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X, Youtube, Linkedin } from 'lucide-react'

export const Navbar = async () => {
  return (
    <>
      <div className="bg-background/80 backdrop-blur-sm fixed top-0 left-0 w-full py-4 px-6 justify-between flex flex-row items-center z-30 border-b">
        <div className="flex flex-row gap-3 items-center">
          <Link href={'/'} className="flex flex-row gap-2 items-center">
            <Image src="/logo.png" height={24} width={24} alt="Sunvest logo" />
            <span className="text-xl font-semibold">
              Sun
              <span className="bg-gradient-to-r from-yellow-400 to-green-700 bg-clip-text text-transparent">
                vest
              </span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link
            href="/#features"
            className="hover:text-yellow-500 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#learn"
            className="hover:text-yellow-500 transition-colors"
          >
            Learn
          </Link>
          <Link
            href="/#trading"
            className="hover:text-yellow-500 transition-colors"
          >
            Trading
          </Link>
          <Link
            href="/#pricing"
            className="hover:text-yellow-500 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/#about"
            className="hover:text-yellow-500 transition-colors"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4 text-muted-foreground">
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
          <Button
            className="bg-yellow-400 hover:bg-yellow-500 text-black"
            asChild
          >
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
