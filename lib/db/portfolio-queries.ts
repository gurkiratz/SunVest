import { eq } from 'drizzle-orm'
import { db } from './queries'
import { portfolio, portfolioTimeframe } from './schema'

export async function getPortfolioByUserId({ userId }: { userId: string }) {
  try {
    const [userPortfolio] = await db
      .select()
      .from(portfolio)
      .where(eq(portfolio.userId, userId))
    return userPortfolio
  } catch (error) {
    console.error('Failed to get portfolio from database')
    throw error
  }
}

export async function getPortfolioTimeframes({
  portfolioId,
}: {
  portfolioId: string
}) {
  try {
    return await db
      .select()
      .from(portfolioTimeframe)
      .where(eq(portfolioTimeframe.portfolioId, portfolioId))
  } catch (error) {
    console.error('Failed to get portfolio timeframes from database')
    throw error
  }
}
