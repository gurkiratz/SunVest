import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  AlertTriangle,
  Check,
  Star,
  Zap,
  BookOpen,
  ExternalLink,
} from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

type SummarySchema = {
  result: string
  flags: string[]
  rating: string
  tactics: string[]
  improvement: string[]
  resources: string[]
}

interface SummaryCardPops {
  summary?: SummarySchema
}

const SAMPLE = {
  result: 'Success',
  flags: [
    'Urgent Action Required',
    'Unsolicited Contact',
    'Request for Personal Information',
  ],
  rating: '4 Stars',
  tactics: ['Phishing', 'Social Engineering', 'Impersonation'],
  improvement: [
    "Always verify the sender's identity",
    "Don't click on suspicious links",
    'Use two-factor authentication',
    'Report suspicious activities to IT department',
  ],
  resources: [
    'https://www.cisa.gov/uscert/ncas/tips/ST04-014',
    'https://www.ftc.gov/tips-advice/business-center/small-businesses/cybersecurity/phishing',
    'https://www.sans.org/security-awareness-training/resources/social-engineering',
  ],
}

export function SummaryCard({ summary = SAMPLE }: SummaryCardPops) {
  const isSuccess = summary.result.toLowerCase() === 'success'
  const starCount = parseInt(summary.rating.split(' ')[0])

  return (
    <>
      <Card className="mx-auto w-full max-w-3xl">
        <CardHeader
          className={`${
            isSuccess
              ? 'bg-green-600 dark:bg-green-800'
              : 'bg-red-500 dark:bg-red-700'
          } rounded-t-lg`}
        >
          <CardTitle className="flex items-center justify-between">
            <span className="text-2xl font-bold">
              {isSuccess ? 'Scam Evaded!' : 'Fell Victim'}
            </span>
            <span className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`size-6 ${
                    i < starCount
                      ? 'fill-current text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-4 space-y-6">
          <div>
            <h3 className="mb-2 flex items-center text-lg font-semibold">
              <AlertTriangle className="mr-2 size-5 text-red-500" />
              Security Red Flags
            </h3>
            <div className="flex flex-wrap gap-2">
              {summary.flags.map((flag, index) => (
                <Badge key={index} variant="secondary">
                  {flag}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 flex items-center text-lg font-semibold">
              <Zap className="mr-2 size-5 text-yellow-500" />
              Tactics Used
            </h3>
            <ul className="list-inside list-disc">
              {summary.tactics.map((tactic, index) => (
                <li key={index}>{tactic}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 flex items-center text-lg font-semibold">
              <Check className="mr-2 size-5 text-green-500" />
              Areas for Improvement
            </h3>
            <ul className="list-inside list-disc">
              {summary.improvement.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 flex items-center text-lg font-semibold">
              <BookOpen className="mr-2 size-5 text-blue-500" />
              Helpful Resources
            </h3>
            <ul className="space-y-1">
              {summary.resources.map((resource, index) => (
                <li key={index} className="flex items-center">
                  <ExternalLink className="mr-2 size-4 text-blue-500" />
                  <a
                    href={resource}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
      <Button
        asChild
        variant={'secondary'}
        className="mt-4 bg-yellow-600/80 hover:bg-yellow-700"
      >
        <Link href="/">Try a new scenario</Link>
      </Button>
    </>
  )
}
