'use client'

import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { InfoIcon } from 'lucide-react'
import useSWR from 'swr'
import { Portfolio, PortfolioTimeframe } from '@/lib/db/schema'
import { fetcher } from '@/lib/utils'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export function PortfolioCard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D')
  const { data: portfolio } = useSWR<Portfolio>('/api/portfolio', fetcher)
  const { data: timeframes } = useSWR<PortfolioTimeframe[]>(
    '/api/portfolio/timeframes',
    fetcher
  )

  const currentTimeframe = timeframes?.find(
    (t) => t.timeframe === selectedTimeframe
  )

  const chartData = {
    labels: currentTimeframe?.labels as string[],
    datasets: [
      {
        label: 'Portfolio Value',
        data: currentTimeframe?.data as number[],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  if (!portfolio || !timeframes) {
    return (
      <Card className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 bg-gray-200 rounded"></div>
          <div className="h-12 w-64 bg-gray-200 rounded"></div>
          <div className="h-[400px] bg-gray-200 rounded"></div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold">Your Portfolio</h3>
            <Popover>
              <PopoverTrigger>
                <InfoIcon className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-medium">About Your Portfolio</h4>
                  <p className="text-sm text-muted-foreground">
                    Your portfolio shows your total investment value across all
                    assets. It includes stocks, ETFs, and other securities. The
                    graph displays your portfolio's performance over different
                    time periods.
                  </p>
                  <div className="text-sm">
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">
                        Total Value:
                      </span>
                      <span className="font-medium">
                        ${portfolio.currentBalance.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">
                        Buying Power:
                      </span>
                      <span className="font-medium">
                        ${portfolio.buyingPower.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="text-3xl font-bold">
            ${portfolio.currentBalance.toLocaleString()}
          </div>
        </div>
        <div className="space-x-2">
          {timeframes.map((tf) => (
            <Button
              key={tf.timeframe}
              variant={
                selectedTimeframe === tf.timeframe ? 'default' : 'outline'
              }
              onClick={() => setSelectedTimeframe(tf.timeframe)}
            >
              {tf.timeframe}
            </Button>
          ))}
        </div>
      </div>
      <div className="h-[400px]">
        <Line data={chartData} options={{ maintainAspectRatio: false }} />
      </div>
    </Card>
  )
}
