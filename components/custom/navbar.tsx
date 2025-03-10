import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X, Youtube, Linkedin } from 'lucide-react'

export const Navbar = async () => {
  return (
    <>
      <div className="bg-b`ackground/80 fixed left-0 top-0 z-30 flex w-full flex-row items-center justify-between border-b px-6 py-4 backdrop-blur-sm">
        <div className="flex flex-row items-center gap-3">
          <Link href={'/'} className="flex flex-row items-center gap-2">
            {/* <Image src="/logo.png" height={24} width={24} alt="Sunvest logo" /> */}
            <span className="text-xl font-semibold">
              Sun
              <span className="bg-gradient-to-r from-yellow-400 to-green-700 bg-clip-text text-transparent">
                vest
              </span>
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link
            href="/learn"
            className="transition-colors hover:text-yellow-500"
          >
            Learn
          </Link>
          <Link
            href="/dashboard"
            className="transition-colors hover:text-yellow-500"
          >
            Invest
          </Link>
          <Link
            href="/community"
            className="transition-colors hover:text-yellow-500"
          >
            Community
          </Link>
          <Link
            href="/#about"
            className="transition-colors hover:text-yellow-500"
          >
            About
          </Link>
          <Link
            href="/pricing"
            className="transition-colors hover:text-yellow-500"
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden gap-4 text-muted-foreground md:flex">
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
          <Button
            className="bg-yellow-400 text-black hover:bg-yellow-500"
            asChild
          >
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
