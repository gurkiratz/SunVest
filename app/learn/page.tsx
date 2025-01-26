'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
        Level Up Your Investment Game 🚀
      </h1>

      <div className="space-y-12">
        {/* Platform Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Why We're Different (fr fr)
          </h2>
          <Card className="p-6">
            <p className="text-lg mb-4">
              No cap - we're here to help you secure the bag through smart
              investing. Our platform is built different, making it easy to
              start your investment journey without the confusing finance
              jargon.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="p-4 bg-secondary rounded-lg">
                <h3 className="font-bold mb-2">Easy to Start 💫</h3>
                <p>
                  Begin with just a few clicks - no complicated forms or
                  waitlists
                </p>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <h3 className="font-bold mb-2">Learn as You Go 📚</h3>
                <p>
                  Built-in tips and guides to help you make informed decisions
                </p>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <h3 className="font-bold mb-2">Smart Tools 🛠️</h3>
                <p>AI-powered insights to help you invest like a pro</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Investment Basics */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Investment Basics (The Tea ☕)
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">
                ETFs - The Main Character
              </h3>
              <p className="mb-4">
                ETFs (Exchange-Traded Funds) are like playlists of different
                stocks - instead of buying individual songs (stocks), you get
                the whole album. They're:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Less risky than single stocks</li>
                <li>Perfect for beginners</li>
                <li>Managed by experts</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">
                Risk Management - Stay Safe
              </h3>
              <p className="mb-4">
                Don't fumble the bag - here's how to invest responsibly:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Never invest more than you can afford to lose</li>
                <li>
                  Diversify your portfolio (don't put all your eggs in one
                  basket)
                </li>
                <li>Think long-term, not just quick gains</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* How to Start */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            How to Start (It's Giving Easy)
          </h2>
          <Card className="p-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">1️⃣</div>
                <h3 className="font-bold mb-2">Create Account</h3>
                <p>Quick signup, no cap</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">2️⃣</div>
                <h3 className="font-bold mb-2">Add Funds</h3>
                <p>Secure & easy deposits</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">3️⃣</div>
                <h3 className="font-bold mb-2">Choose ETFs</h3>
                <p>Pick your investment vibe</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">4️⃣</div>
                <h3 className="font-bold mb-2">Watch & Learn</h3>
                <p>Track your gains</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Important Terms */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            The Lingo You Need to Know
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Investment Terms</h3>
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
              <h3 className="text-xl font-bold mb-4">Platform Features</h3>
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
                    Set it and forget it - we'll invest for you automatically
                  </dd>
                </div>
              </dl>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of other Gen Z investors building their future
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/register">Start Investing Now 🚀</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
