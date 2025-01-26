import { NextResponse } from 'next/server'
import { auth } from '@/app/(auth)/auth'
import { db } from '@/lib/db/queries'
import { orders, portfolio } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const { asset, orderType, quantity, source } = await req.json()

    if (!asset || !orderType || !quantity || !source) {
      return new NextResponse('Missing required fields', { status: 400 })
    }

    // Get user's portfolio
    const [userPortfolio] = await db
      .select()
      .from(portfolio)
      .where(eq(portfolio.userId, session.user.id))

    if (!userPortfolio) {
      return new NextResponse('Portfolio not found', { status: 404 })
    }

    // Calculate order value
    //@ts-ignore
    const orderValue = mockETFData[asset].price * quantity

    // Update portfolio based on order type
    if (orderType === 'BUY') {
      if (orderValue > Number(userPortfolio.buyingPower)) {
        return new NextResponse('Insufficient buying power', { status: 400 })
      }

      await db
        .update(portfolio)
        .set({
          currentBalance: userPortfolio.currentBalance + orderValue,
          //@ts-ignore
          buyingPower: Number(userPortfolio.buyingPower) - orderValue,
          lastUpdated: new Date(),
        })
        .where(eq(portfolio.id, userPortfolio.id))
    } else if (orderType === 'SELL') {
      await db
        .update(portfolio)
        .set({
          //@ts-ignore
          currentBalance: String(userPortfolio.currentBalance - orderValue),
          buyingPower: String(Number(userPortfolio.buyingPower) + orderValue),
          lastUpdated: new Date(),
        })
        .where(eq(portfolio.id, userPortfolio.id))
    }

    // Create order record
    const order = await db
      .insert(orders)
      .values({
        asset,
        orderType,
        quantity,
        source,
        userId: session.user.id,
        submittedAt: new Date(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
      })
      .returning()

    return NextResponse.json(order[0])
  } catch (error) {
    console.error('Error creating order:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

// Mock ETF data (should be moved to a separate file or fetched from an API)
const mockETFData = {
  VOO: { price: 420.69 },
  VTI: { price: 235.89 },
  QQQ: { price: 410.5 },
  SPY: { price: 475.32 },
}
