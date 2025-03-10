'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-green-50 dark:from-yellow-950 dark:to-green-950">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Invest in Your Future
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300 md:text-2xl">
            Start your investment journey today and watch your money grow with
            Sunvest
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500"
              asChild
            >
              <Link href="/register">
                Get Started <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-600 hover:bg-yellow-100"
              asChild
            >
              <Link href="/learn">Learn More</Link>
            </Button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
          >
            <TrendingUp className="mb-4 size-12 text-yellow-400" />
            <h3 className="mb-2 text-2xl font-bold">15% Average Returns</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Historical annual returns from our managed portfolios
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
          >
            <Users className="mb-4 size-12 text-green-500" />
            <h3 className="mb-2 text-2xl font-bold">50K+ Young Investors</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Join our growing community of successful investors
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
          >
            <DollarSign className="mb-4 size-12 text-yellow-400" />
            <h3 className="mb-2 text-2xl font-bold">$50 Referral Bonus</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Earn rewards by inviting your friends to invest
            </p>
          </motion.div>
        </div>
        {/* Paper Trading Platform Section */}
        <div className="mb-20 rounded-3xl bg-white p-12 shadow-xl dark:bg-gray-800">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                Learn by Trading
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                Start your investment journey with our paper trading platform.
                Practice trading with virtual money and gain real-world
                experience without any risk.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-3 rounded-full bg-yellow-400 p-1">✓</span>
                  Real-time market data and charts
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-3 rounded-full bg-yellow-400 p-1">✓</span>
                  Virtual portfolio tracking
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-3 rounded-full bg-yellow-400 p-1">✓</span>
                  Advanced trading tools and analytics
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-3 rounded-full bg-yellow-400 p-1">✓</span>
                  Educational resources and tutorials
                </li>
              </ul>
              <Button
                className="bg-green-500 text-white hover:bg-green-600"
                size="lg"
                asChild
              >
                <Link href="/dashboard">Try Paper Trading</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -rotate-3 rounded-3xl bg-gradient-to-r from-yellow-400/20 to-green-500/20"></div>
              <img
                src="https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Trading Platform Interface"
                className="relative z-10 rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
        {/* Social Program Section */}
        <div
          id="learn-more"
          className="rounded-3xl bg-white p-12 shadow-xl dark:bg-gray-800"
        >
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                Invest Smarter Together
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                Join our social investing program and learn from successful
                investors. Share strategies, get tips, and earn rewards while
                building your wealth.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-3 rounded-full bg-yellow-400 p-1">✓</span>
                  Earn $50 for every friend who joins
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-3 rounded-full bg-yellow-400 p-1">✓</span>
                  Access exclusive investment insights
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-3 rounded-full bg-yellow-400 p-1">✓</span>
                  Join community challenges and events
                </li>
              </ul>
              <Button
                className="bg-green-500 text-white hover:bg-green-600"
                size="lg"
                asChild
              >
                <Link href="/community">Join Our Community</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rotate-3 rounded-3xl bg-gradient-to-r from-yellow-400/20 to-green-500/20"></div>
              <img
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Community Dashboard"
                className="relative z-10 rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
