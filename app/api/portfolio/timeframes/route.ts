import { NextResponse } from 'next/server'

import { auth } from '@/app/(auth)/auth'
import {
  getPortfolioByUserId,
  getPortfolioTimeframes,
} from '@/lib/db/portfolio-queries'

const mockTimeframes = [
  {
    id: 'timeframe-1d',
    portfolioId: 'mock-portfolio-id',
    timeframe: '1D',
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
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 'timeframe-1m',
    portfolioId: 'mock-portfolio-id',
    timeframe: '1M',
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    data: [100000, 102000, 105000, 103500],
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 'timeframe-1y',
    portfolioId: 'mock-portfolio-id',
    timeframe: '1Y',
    labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
    data: [100000, 110000, 108000, 115000, 112000, 103500],
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 'timeframe-all',
    portfolioId: 'mock-portfolio-id',
    timeframe: 'All',
    labels: ['2020', '2021', '2022', '2023', '2024'],
    data: [80000, 90000, 95000, 98000, 103500],
    lastUpdated: new Date().toISOString(),
  },
]

export async function GET() {
  const session = await auth()

  if (!session || !session.user) {
    return new Response('Unauthorized', { status: 401 })
  }

  try {
    //@ts-ignore
    const portfolio = await getPortfolioByUserId({ userId: session.user.id })
    if (!portfolio) {
      throw new Error('Portfolio not found')
    }

    const timeframes = await getPortfolioTimeframes({
      portfolioId: portfolio.id,
    })
    return NextResponse.json(mockTimeframes)
  } catch (error) {
    // Fallback to mock data if database query fails

    return NextResponse.json(mockTimeframes)
  }
}
