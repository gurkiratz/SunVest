'use client'

import { motion } from 'framer-motion'
import { Share2, Heart, Users, TrendingUp, DollarSign } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Share & Earn More
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300 md:text-2xl">
            Create viral content about your investment journey and earn an extra
            $100 bonus on top of your investment!
          </p>
        </motion.div>

        {/* How It Works Section */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
          >
            <Share2 className="mb-4 size-12 text-yellow-400" />
            <h3 className="mb-2 text-2xl font-bold">Create & Share</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Make TikTok videos or Instagram reels about your Sunvest
              experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
          >
            <Heart className="mb-4 size-12 text-green-500" />
            <h3 className="mb-2 text-2xl font-bold">Get 5000 Likes</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Reach 5000 likes across your investment-related content
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
          >
            <Users className="mb-4 size-12 text-yellow-400" />
            <h3 className="mb-2 text-2xl font-bold">Refer 20 Friends</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get 20 friends to join Sunvest using your referral code
            </p>
          </motion.div>
        </div>

        {/* Progress Tracking Section */}
        <div className="mb-20 rounded-3xl bg-white p-12 shadow-xl dark:bg-gray-800">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                Track Your Progress
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                Monitor your journey to earning the $100 bonus reward. Share
                your success story and inspire others to start their investment
                journey.
              </p>
              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      Likes Progress
                    </span>
                    <span className="text-yellow-400">2500/5000</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="h-2 w-1/2 rounded-full bg-yellow-400"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      Referrals Progress
                    </span>
                    <span className="text-green-500">12/20</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="h-2 w-3/5 rounded-full bg-green-500"></div>
                  </div>
                  <Button
                    className="mt-6 bg-yellow-500 text-white hover:bg-yellow-400"
                    size="lg"
                    asChild
                  >
                    <Link href="/dashboard">
                      Get your referral link by start investing
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rotate-3 rounded-3xl bg-gradient-to-r from-yellow-400/20 to-green-500/20"></div>
              <img
                src="https://images.unsplash.com/photo-1658207951097-96f86cc0a1c8?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Social Media Success"
                className="relative z-10 rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Discord Community Section */}
        <div className="mb-20 rounded-3xl bg-white p-12 shadow-xl dark:bg-gray-800">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                Join Our Discord Community
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                Connect with like-minded young investors in real-time. Share
                insights, get mentorship, and stay updated with the latest
                investment opportunities.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-3 rounded-full bg-yellow-400 p-1">✓</span>
                  Real-time investment discussions
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-3 rounded-full bg-yellow-400 p-1">✓</span>
                  Get mentorship from experienced investors
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-3 rounded-full bg-yellow-400 p-1">✓</span>
                  Exclusive market insights and analysis
                </li>
              </ul>
              <Button
                className="bg-[#5865F2] text-white hover:bg-[#4752C4]"
                size="lg"
                asChild
              >
                <Link
                  href="https://discord.gg/sunvest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Discord Community
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rotate-3 rounded-3xl bg-gradient-to-r from-yellow-400/20 to-green-500/20"></div>
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Discord Community"
                className="relative z-10 rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Creator Tips Section */}
        <div className="rounded-3xl bg-white p-12 shadow-xl dark:bg-gray-800">
          <h2 className="mb-8 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-center text-3xl font-bold text-transparent md:text-4xl">
            Content Creator Tips
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="mb-4 text-2xl font-bold">TikTok Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-3 rounded-full bg-yellow-400 p-1">✓</span>
                  Use trending sounds and music
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-3 rounded-full bg-yellow-400 p-1">✓</span>
                  Keep videos under 60 seconds
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-3 rounded-full bg-yellow-400 p-1">✓</span>
                  Share investment tips and results
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="mb-4 text-2xl font-bold">Instagram Reels Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-3 rounded-full bg-yellow-400 p-1">✓</span>
                  Use relevant hashtags
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-3 rounded-full bg-yellow-400 p-1">✓</span>
                  Create eye-catching transitions
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-3 rounded-full bg-yellow-400 p-1">✓</span>
                  Show your investment journey
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500"
              asChild
            >
              <Link href="/register">Start Creating Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
