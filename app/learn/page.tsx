'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LearnPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent">
        Level Up Your Investment Game 🚀
      </h1>

      <div className="space-y-12">
        {/* Platform Introduction */}
        <section>
          <h2 className="mb-6 text-3xl font-bold">
            Why We&apos;re Different (fr fr)
          </h2>
          <Card className="p-6">
            <p className="mb-4 text-lg">
              No cap - we&apos;re here to help you secure the bag through smart
              investing. Our platform is built different, making it easy to
              start your investment journey without the confusing finance
              jargon.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-secondary p-4">
                <h3 className="mb-2 font-bold">Easy to Start 💫</h3>
                <p>
                  Begin with just a few clicks - no complicated forms or
                  waitlists
                </p>
              </div>
              <div className="rounded-lg bg-secondary p-4">
                <h3 className="mb-2 font-bold">Learn as You Go 📚</h3>
                <p>
                  Built-in tips and guides to help you make informed decisions
                </p>
              </div>
              <div className="rounded-lg bg-secondary p-4">
                <h3 className="mb-2 font-bold">Smart Tools 🛠️</h3>
                <p>AI-powered insights to help you invest like a pro</p>
              </div>
            </div>
          </Card>
        </section>

        {/* How to Start */}
        <section>
          <h2 className="mb-6 text-3xl font-bold">
            How to Start (It&apos;s Giving Easy)
          </h2>
          <Card className="p-6">
            <div className="grid gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="mb-4 text-4xl">1️⃣</div>
                <h3 className="mb-2 font-bold">Create Account</h3>
                <p>Quick signup, no cap</p>
              </div>
              <div className="text-center">
                <div className="mb-4 text-4xl">2️⃣</div>
                <h3 className="mb-2 font-bold">Add Funds</h3>
                <p>Secure & easy deposits</p>
              </div>
              <div className="text-center">
                <div className="mb-4 text-4xl">3️⃣</div>
                <h3 className="mb-2 font-bold">Choose ETFs</h3>
                <p>Pick your investment vibe</p>
              </div>
              <div className="text-center">
                <div className="mb-4 text-4xl">4️⃣</div>
                <h3 className="mb-2 font-bold">Watch & Learn</h3>
                <p>Track your gains</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Video Tutorial Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 text-center"
          >
            <h2 className="mb-4 bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Stock Market Crash Course
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get started with this comprehensive introduction to stock market
              investing
            </p>
          </motion.div>
          <div className="aspect-w-16 aspect-h-20 overflow-hidden rounded-2xl shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/Xn7KWR9EOGQ"
              title="Stock Market Basics for Beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="size-full"
            ></iframe>
          </div>
        </div>

        {/* Investment Basics */}
        <section>
          <h2 className="mb-6 text-3xl font-bold">
            Investment Basics (The Tea ☕)
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="mb-4 text-xl font-bold">
                ETFs - The Main Character
              </h3>
              <p className="mb-4">
                ETFs (Exchange-Traded Funds) are like playlists of different
                stocks - instead of buying individual songs (stocks), you get
                the whole album. They&apos;re:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Less risky than single stocks</li>
                <li>Perfect for beginners</li>
                <li>Managed by experts</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="mb-4 text-xl font-bold">
                Risk Management - Stay Safe
              </h3>
              <p className="mb-4">
                Don&apos;t fumble the bag - here&apos;s how to invest
                responsibly:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Never invest more than you can afford to lose</li>
                <li>
                  Diversify your portfolio (don&apos;t put all your eggs in one
                  basket)
                </li>
                <li>Think long-term, not just quick gains</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Important Terms */}
        <section>
          <h2 className="mb-6 text-3xl font-bold">
            The Lingo You Need to Know
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="mb-4 text-xl font-bold">Investment Terms</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-bold">Portfolio 💼</dt>
                  <dd>
                    Your collection of investments (your financial fit check)
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Dividends 💰</dt>
                  <dd>
                    Free money companies give to shareholders (passive income
                    szn)
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Market Cap 📊</dt>
                  <dd>How much a company is worth (their financial clout)</dd>
                </div>
              </dl>
            </Card>
            <Card className="p-6">
              <h3 className="mb-4 text-xl font-bold">Platform Features</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-bold">AI Assistant 🤖</dt>
                  <dd>
                    Your personal investment bestie, always ready with advice
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Portfolio Analytics 📈</dt>
                  <dd>
                    See how your investments are performing (the receipts)
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Auto-Invest ⚡</dt>
                  <dd>
                    Set it and forget it - we&apos;ll invest for you
                    automatically
                  </dd>
                </div>
              </dl>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="mb-8 text-xl">
            Join thousands of other Gen Z investors building their future
          </p>
          <Button asChild size="lg" className="px-8 py-6 text-lg">
            <Link href="/register">Start Investing Now 🚀</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
