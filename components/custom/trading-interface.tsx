'use client'

import { useState } from 'react'
import { BarChart2, TrendingUp, LineChart, DollarSign } from 'lucide-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { toast } from 'sonner'
import { PortfolioCard } from './portfolio-card'
import { TradingCard } from './trading-card'
import { RecentOrders } from './recent-orders'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

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

export function TradingInterface() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div data-tutorial="portfolio">
          <PortfolioCard />
        </div>
        <div data-tutorial="trading">
          <TradingCard buyingPower={portfolioData.buyingPower} />
        </div>
      </div>
      <div data-tutorial="recent-orders">
        <RecentOrders />
      </div>
    </div>
  )
}
