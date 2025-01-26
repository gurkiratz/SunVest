import { NextResponse } from 'next/server'

import { auth } from '@/app/(auth)/auth'
import { getPortfolioByUserId } from '@/lib/db/portfolio-queries'

export async function GET() {
  const session = await auth()

  if (!session || !session.user) {
    return new Response('Unauthorized', { status: 401 })
  }

  try {
    //@ts-ignore
    const portfolio = await getPortfolioByUserId({ userId: session.user.id })
    return NextResponse.json(portfolio)
  } catch (error) {
    // Fallback to mock data if database query fails
    const mockPortfolio = {
      id: 'mock-portfolio-id',
      userId: session.user.id,
      currentBalance: 100000.0,
      buyingPower: 25000.0,
      lastUpdated: new Date().toISOString(),
    }
    return NextResponse.json(mockPortfolio)
  }
}
