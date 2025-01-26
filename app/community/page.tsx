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
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
            Share & Earn More
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Create viral content about your investment journey and earn an extra
            $100 bonus on top of your investment!
          </p>
        </motion.div>

        {/* How It Works Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <Share2 className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Create & Share</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Make TikTok videos or Instagram reels about your Sunvest
              experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <Heart className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Get 5000 Likes</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Reach 5000 likes across your investment-related content
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <Users className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Refer 20 Friends</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get 20 friends to join Sunvest using your referral code
            </p>
          </motion.div>
        </div>

        {/* Progress Tracking Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
                Track Your Progress
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Monitor your journey to earning the $100 bonus reward. Share
                your success story and inspire others to start their investment
                journey.
              </p>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 dark:text-gray-300">
                      Likes Progress
                    </span>
                    <span className="text-yellow-400">2500/5000</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-yellow-400 rounded-full w-1/2"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 dark:text-gray-300">
                      Referrals Progress
                    </span>
                    <span className="text-green-500">12/20</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-500/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1658207951097-96f86cc0a1c8?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Social Media Success"
                className="rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Discord Community Section */}
        <div className="mb-20 bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
                Join Our Discord Community
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Connect with like-minded young investors in real-time. Share
                insights, get mentorship, and stay updated with the latest
                investment opportunities.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="bg-yellow-400 p-1 rounded-full mr-3">✓</span>
                  Real-time investment discussions
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="bg-yellow-400 p-1 rounded-full mr-3">✓</span>
                  Get mentorship from experienced investors
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="bg-yellow-400 p-1 rounded-full mr-3">✓</span>
                  Exclusive market insights and analysis
                </li>
              </ul>
              <Button
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white"
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
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-500/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Discord Community"
                className="rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Creator Tips Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
            Content Creator Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">TikTok Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="bg-yellow-400 p-1 rounded-full mr-3">✓</span>
                  Use trending sounds and music
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="bg-yellow-400 p-1 rounded-full mr-3">✓</span>
                  Keep videos under 60 seconds
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="bg-yellow-400 p-1 rounded-full mr-3">✓</span>
                  Share investment tips and results
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Instagram Reels Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="bg-yellow-400 p-1 rounded-full mr-3">✓</span>
                  Use relevant hashtags
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="bg-yellow-400 p-1 rounded-full mr-3">✓</span>
                  Create eye-catching transitions
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="bg-yellow-400 p-1 rounded-full mr-3">✓</span>
                  Show your investment journey
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black"
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
