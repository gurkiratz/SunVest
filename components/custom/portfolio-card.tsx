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

const portfolioData = {
  currentBalance: 100000.0,
  buyingPower: 25000.0,
  timeframes: {
    '1D': {
      labels: [
        '9:30',
        '10:30',
        '11:30',
        '12:30',
        '13:30',
        '14:30',
        '15:30',
        '16:00',
      ],
      data: [100000, 101200, 102400, 101800, 103000, 102500, 104000, 103500],
    },
    '1M': {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      data: [100000, 102000, 105000, 103500],
    },
    '1Y': {
      labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
      data: [100000, 110000, 108000, 115000, 112000, 103500],
    },
    All: {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      data: [80000, 90000, 95000, 98000, 103500],
    },
  },
}

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
          <div className="h-8 w-48 rounded bg-gray-200"></div>
          <div className="h-12 w-64 rounded bg-gray-200"></div>
          <div className="h-[400px] rounded bg-gray-200"></div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <h3 className="text-lg font-semibold">Your Portfolio</h3>
            <Popover>
              <PopoverTrigger>
                <InfoIcon className="size-4 text-muted-foreground transition-colors hover:text-foreground" />
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-medium">About Your Portfolio</h4>
                  <p className="text-sm text-muted-foreground">
                    Your portfolio shows your total investment value across all
                    assets. It includes stocks, ETFs, and other securities. The
                    graph displays your portfolio&apos;s performance over
                    different time periods.
                  </p>
                  <div className="text-sm">
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">
                        Total Value:
                      </span>
                      <span className="font-medium">
                        $
                        {portfolioData.currentBalance.toLocaleString() ||
                          portfolio.currentBalance.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">
                        Buying Power:
                      </span>
                      <span className="font-medium">
                        $
                        {portfolioData.buyingPower.toLocaleString() ||
                          portfolio.buyingPower.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="text-3xl font-bold">
            $
            {portfolioData.currentBalance.toLocaleString() ||
              portfolio.currentBalance.toLocaleString()}
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
