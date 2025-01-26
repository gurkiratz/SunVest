'use client'

import { useState } from 'react'
import {
  BarChart2,
  TrendingUp,
  LineChart,
  DollarSign,
  InfoIcon,
  Instagram,
  Copy,
  CheckCheck,
  X,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'
import ReactConfetti from 'react-confetti'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

// Mock ETF data with icons
export const mockETFData = {
  VOO: { price: 420.69, icon: BarChart2 },
  VTI: { price: 235.89, icon: TrendingUp },
  QQQ: { price: 410.5, icon: LineChart },
  SPY: { price: 475.32, icon: DollarSign },
}

interface TradingCardProps {
  buyingPower: number
}

export function TradingCard({ buyingPower }: TradingCardProps) {
  const [selectedTab, setSelectedTab] = useState('buy')
  const [symbol, setSymbol] = useState('')
  const [quantity, setQuantity] = useState('')
  const [marketPrice, setMarketPrice] = useState(0)
  const [isReviewMode, setIsReviewMode] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showShareDialog, setShowShareDialog] = useState(false)
  const [copied, setCopied] = useState(false)
  const referralLink = 'student.sunlife.co/referral?code=c4af32'

  // Calculate estimated cost
  const estimatedCost = marketPrice * Number(quantity) || 0

  // Update market price when symbol changes
  const handleSymbolChange = (value: string) => {
    setSymbol(value)
    //@ts-ignore
    setMarketPrice(mockETFData[value]?.price || 0)
  }

  const handleReviewOrder = () => {
    setIsReviewMode(true)
  }

  const handleEditOrder = () => {
    setIsReviewMode(false)
  }

  const handleConfirmOrder = () => {
    try {
      // Simulating potential failure with random chance
      if (Math.random() > 0.5) {
        throw new Error('Order processing failed')
      }
      toast.success(`${selectedTab.toUpperCase()} order confirmed!`, {
        style: {
          backgroundColor: 'lightgreen',
        },
      })
      // Show confetti and share dialog
      setShowConfetti(true)
      setTimeout(() => {
        setShowConfetti(false)
        setShowShareDialog(true)
      }, 3000)
      // Reset form
      setSymbol('')
      setQuantity('')
      setMarketPrice(0)
      setIsReviewMode(false)
    } catch (error) {
      toast.error(
        `Failed to ${selectedTab.toLowerCase()} order. Please try again.`,
        {
          style: {
            backgroundColor: '#fecaca',
          },
        }
      )
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      toast.success('Referral link copied!')
    } catch (err) {
      toast.error('Failed to copy link')
    }
  }

  return (
    <Card className="p-6">
      {showConfetti && <ReactConfetti recycle={false} />}
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold mb-4">
              Share Your Investment Success! 🎉
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Share your success and earn rewards! Refer a friend and you both
              receive a $20 bonus on top of your investment.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?text=Just made a smart investment with Sunlife! Join me and get a $20 bonus: ${referralLink}`,
                    '_blank'
                  )
                }
              >
                <X className="w-5 h-5" />
                Share on X
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.open(`https://instagram.com`, '_blank')}
              >
                <Instagram className="w-5 h-5" />
                Share on Instagram
              </Button>
            </div>
            <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
              <Input value={referralLink} readOnly className="flex-1" />
              <Button
                variant="outline"
                size="icon"
                onClick={handleCopyLink}
                className="shrink-0"
              >
                {copied ? (
                  <CheckCheck className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-semibold">Invest in ETFs, Bonds, Stocks</h3>
        <Popover>
          <PopoverTrigger>
            <InfoIcon className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium">About ETF Trading</h4>
              <p className="text-sm text-muted-foreground">
                Trade Exchange Traded Funds (ETFs) with Sunlife. ETFs are
                investment funds that track indexes, sectors, commodities, or
                other assets, and can be traded like common stocks.
              </p>
              <div className="text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Buy ETFs:</span>
                  <span className="font-medium">
                    Use available buying power
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Sell ETFs:</span>
                  <span className="font-medium">Convert holdings to cash</span>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {!isReviewMode && (
        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="mb-6"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="sell">Sell</TabsTrigger>
          </TabsList>
        </Tabs>
      )}

      <div className="mb-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {selectedTab === 'buy' ? 'Buying Power' : 'Available to Sell'}
        </p>
        <p className="text-2xl font-bold">${buyingPower.toLocaleString()}</p>
      </div>

      {isReviewMode ? (
        <div className="space-y-6">
          <div className="p-4 bg-muted rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">Review Order</h3>
            <hr />
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">
                {selectedTab.toUpperCase()} {symbol}
              </span>
              <span className="text-sm text-muted-foreground">
                Market Order
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Quantity</span>
                <span className="font-medium">{quantity} shares</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Market Price</span>
                <span className="font-medium">${marketPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-muted-foreground">Estimated Value</span>
                <span className="font-semibold">
                  ${estimatedCost.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              {selectedTab === 'buy' ? 'Buying Power' : 'Available to Sell'}:{' '}
              <span className="font-medium">
                ${buyingPower.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleEditOrder}
            >
              Edit
            </Button>
            <Button className="flex-1" onClick={handleConfirmOrder}>
              Confirm Order
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Symbol</label>
            <Select value={symbol} onValueChange={handleSymbolChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select ETF symbol" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(mockETFData).map(([symbol, data]) => {
                  const Icon = data.icon
                  return (
                    <SelectItem key={symbol} value={symbol}>
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{symbol}</span>
                      </div>
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium">Market Price</label>
            <Input
              value={marketPrice ? `$${marketPrice.toFixed(2)}` : '-'}
              disabled
            />
          </div>

          <div>
            <label className="text-sm font-medium">Quantity</label>
            <Input
              type="number"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Estimated Cost</label>
            <Input
              value={estimatedCost ? `$${estimatedCost.toFixed(2)}` : '-'}
              disabled
            />
          </div>

          <Button
            className="w-full"
            disabled={!symbol || !quantity || estimatedCost > buyingPower}
            onClick={handleReviewOrder}
          >
            Review Order
          </Button>
        </div>
      )}
    </Card>
  )
}
