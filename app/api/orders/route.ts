import { NextResponse } from 'next/server'
import { db } from '@/lib/db/queries'
import { orders } from '@/lib/db/schema'

export async function GET() {
  try {
    const allOrders = await db.select().from(orders)
    return NextResponse.json(allOrders)
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}
