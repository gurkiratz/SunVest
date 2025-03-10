'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Start investing with a plan that works for you
        </p>
      </div>

      <div className="mb-12 grid gap-8 md:grid-cols-3">
        {/* Basic Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6 transition-shadow hover:shadow-lg">
            <div className="mb-6 text-center">
              <h2 className="mb-2 text-2xl font-bold">Starter</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Perfect for beginners
              </p>
              <div className="mb-4 text-4xl font-bold">
                $0<span className="text-lg font-normal">/month</span>
              </div>
            </div>
            <ul className="mb-6 space-y-3">
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>Basic trading features</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>Paper trading account</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>Basic market research</span>
              </li>
            </ul>
            <Button asChild className="w-full" variant="outline">
              <Link href="/register">Get Started</Link>
            </Button>
          </Card>
        </motion.div>

        {/* Pro Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="relative border-2 border-purple-500 p-6 transition-shadow hover:shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-purple-500 px-4 py-1 text-sm text-white">
                Most Popular
              </span>
            </div>
            <div className="mb-6 text-center">
              <h2 className="mb-2 text-2xl font-bold">Pro</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                For serious investors
              </p>
              <div className="mb-4 text-4xl font-bold">
                $15<span className="text-lg font-normal">/month</span>
              </div>
            </div>
            <ul className="mb-6 space-y-3">
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>Everything in Starter</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>Real-time market data</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>Priority support</span>
              </li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/register">Get Pro</Link>
            </Button>
          </Card>
        </motion.div>

        {/* Enterprise Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 transition-shadow hover:shadow-lg">
            <div className="mb-6 text-center">
              <h2 className="mb-2 text-2xl font-bold">Enterprise</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                For Developers
              </p>
              <div className="mb-4 text-4xl font-bold">
                $49<span className="text-lg font-normal">/month</span>
              </div>
            </div>
            <ul className="mb-6 space-y-3">
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>API access</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>Dedicated account manager</span>
              </li>
            </ul>
            <Button asChild className="w-full" variant="outline">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </Card>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="mb-2 font-bold">Can I change plans later?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, you can upgrade or downgrade your plan at any time. Changes
              take effect at the start of your next billing cycle.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-2 font-bold">
              What payment methods do you accept?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We accept all major credit cards, debit cards, and PayPal.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-2 font-bold">Is there a free trial?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, all paid plans come with a 14-day free trial. No credit card
              required.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-2 font-bold">What happens if I cancel?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              You can cancel at any time. You will continue to have access until
              the end of your current billing period.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
