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
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
            Invest in Your Future
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Start your investment journey today and watch your money grow with
            Sunvest
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black"
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
              <Link href="#learn-more">Learn More</Link>
            </Button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <TrendingUp className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">15% Average Returns</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Historical annual returns from our managed portfolios
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <Users className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">50K+ Young Investors</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Join our growing community of successful investors
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <DollarSign className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">$50 Referral Bonus</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Earn rewards by inviting your friends to invest
            </p>
          </motion.div>
        </div>

        {/* Social Program Section */}
        <div
          id="learn-more"
          className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
                Invest Smarter Together
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Join our social investing program and learn from successful
                investors. Share strategies, get tips, and earn rewards while
                building your wealth.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="bg-yellow-400 p-1 rounded-full mr-3">✓</span>
                  Earn $50 for every friend who joins
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="bg-yellow-400 p-1 rounded-full mr-3">✓</span>
                  Access exclusive investment insights
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="bg-yellow-400 p-1 rounded-full mr-3">✓</span>
                  Join community challenges and events
                </li>
              </ul>
              <Button
                className="bg-green-500 hover:bg-green-600 text-white"
                size="lg"
                asChild
              >
                <Link href="/register">Join Our Community</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-500/20 rounded-3xl transform rotate-3"></div>
              <img
                src="/images/demo-thumbnail.png"
                alt="Community Dashboard"
                className="rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
        {/* Paper Trading Platform Section */}
        <div className="mt-20 bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
                Learn by Trading
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Start your investment journey with our paper trading platform.
                Practice trading with virtual money and gain real-world
                experience without any risk.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="bg-yellow-400 p-1 rounded-full mr-3">✓</span>
                  Real-time market data and charts
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="bg-yellow-400 p-1 rounded-full mr-3">✓</span>
                  Virtual portfolio tracking
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="bg-yellow-400 p-1 rounded-full mr-3">✓</span>
                  Advanced trading tools and analytics
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="bg-yellow-400 p-1 rounded-full mr-3">✓</span>
                  Educational resources and tutorials
                </li>
              </ul>
              <Button
                className="bg-green-500 hover:bg-green-600 text-white"
                size="lg"
                asChild
              >
                <Link href="/dashboard">Try Paper Trading</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-500/20 rounded-3xl transform -rotate-3"></div>
              <img
                src="/images/demo-thumbnail.png"
                alt="Trading Platform Interface"
                className="rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
