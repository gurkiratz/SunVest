import { CircleAlert } from 'lucide-react'
import { Sidebar } from '@/components/custom/sidebar'
import { TradingInterface } from '@/components/custom/trading-interface'
import { OnboardingTutorial } from '@/components/custom/onboarding-tutorial'

export default function StocksPage() {
  return (
    <div className="flex flex-col bg-gray-100 dark:bg-gray-900">
      {/* Disclaimer Banner */}
      <div className="flex w-full justify-center gap-2 bg-blue-500 px-4 py-2 text-center font-medium text-white">
        <CircleAlert /> You are on paper trading, no real money is being used.
      </div>

      <div className="flex flex-1">
        <div data-tutorial="sidebar">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <TradingInterface />
        </div>
      </div>

      <OnboardingTutorial />
    </div>
  )
}
