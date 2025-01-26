'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

// Mock data for recent orders
const mockOrders = [
  {
    id: 1,
    asset: 'VOO',
    orderType: 'BUY',
    quantity: 10,
    source: 'Mobile',
    submittedAt: '2024-02-20T10:30:00Z',
    expiresAt: '2024-02-20T16:00:00Z',
  },
  {
    id: 2,
    asset: 'QQQ',
    orderType: 'SELL',
    quantity: 5,
    source: 'Web',
    submittedAt: '2024-02-20T09:15:00Z',
    expiresAt: '2024-02-20T16:00:00Z',
  },
  {
    id: 3,
    asset: 'SPY',
    orderType: 'BUY',
    quantity: 8,
    source: 'Mobile',
    submittedAt: '2024-02-19T15:45:00Z',
    expiresAt: '2024-02-19T16:00:00Z',
  },
]

export function RecentOrders() {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter orders based on search query
  const filteredOrders = mockOrders.filter((order) =>
    order.asset.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
  }

  return (
    <Card className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Recent Orders</h3>
          <Input
            type="text"
            placeholder="Search by asset..."
            className="max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredOrders.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            {mockOrders.length === 0
              ? 'No orders. Place an order to see this table populate.'
              : 'No matching orders found.'}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4 font-medium">Asset</th>
                  <th className="text-left py-2 px-4 font-medium">
                    Order Type
                  </th>
                  <th className="text-left py-2 px-4 font-medium">Qty</th>
                  <th className="text-left py-2 px-4 font-medium">Source</th>
                  <th className="text-left py-2 px-4 font-medium">
                    Submitted At
                  </th>
                  <th className="text-left py-2 px-4 font-medium">
                    Expires At
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-muted/50">
                    <td className="py-2 px-4">{order.asset}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          order.orderType === 'BUY'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                        }`}
                      >
                        {order.orderType}
                      </span>
                    </td>
                    <td className="py-2 px-4">{order.quantity}</td>
                    <td className="py-2 px-4">{order.source}</td>
                    <td className="py-2 px-4">
                      {formatDate(order.submittedAt)}
                    </td>
                    <td className="py-2 px-4">{formatDate(order.expiresAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Card>
  )
}
