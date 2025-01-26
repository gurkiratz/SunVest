'use client'

import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { InfoIcon } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

// Mock portfolio data
export const portfolioData = {
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

  const chartData = {
    //@ts-ignore
    labels: portfolioData.timeframes[selectedTimeframe].labels,
    datasets: [
      {
        label: 'Portfolio Value',
        //@ts-ignore
        data: portfolioData.timeframes[selectedTimeframe].data,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
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
                        ${portfolioData.currentBalance.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">
                        Buying Power:
                      </span>
                      <span className="font-medium">
                        ${portfolioData.buyingPower.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="text-3xl font-bold">
            ${portfolioData.currentBalance.toLocaleString()}
          </div>
        </div>
        <div className="space-x-2">
          {Object.keys(portfolioData.timeframes).map((timeframe) => (
            <Button
              key={timeframe}
              variant={selectedTimeframe === timeframe ? 'default' : 'outline'}
              onClick={() => setSelectedTimeframe(timeframe)}
            >
              {timeframe}
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
