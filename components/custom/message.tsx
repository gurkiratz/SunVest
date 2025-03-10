'use client'

import { Attachment, tool, ToolInvocation } from 'ai'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

import { BotIcon, UserIcon } from './icons'
import { Markdown } from './markdown'
import { PreviewAttachment } from './preview-attachment'
import { Weather } from './weather'
import { AuthorizePayment } from '../flights/authorize-payment'
import { DisplayBoardingPass } from '../flights/boarding-pass'
import { CreateReservation } from '../flights/create-reservation'
import { FlightStatus } from '../flights/flight-status'
import { ListFlights } from '../flights/list-flights'
import { SelectSeats } from '../flights/select-seats'
import { VerifyPayment } from '../flights/verify-payment'
import { SummaryCard } from '../SummaryCard'

export const Message = ({
  chatId,
  role,
  content,
  toolInvocations,
  attachments,
  handleSummary,
}: {
  chatId: string
  role: string
  content: string | ReactNode
  toolInvocations: Array<ToolInvocation> | undefined
  attachments?: Array<Attachment>
  handleSummary?: () => void
}) => {
  return (
    <motion.div
      className={`flex w-full flex-row gap-4 px-4 first-of-type:pt-20 md:w-[500px] md:px-0`}
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="flex size-[24px] shrink-0 flex-col items-center justify-center rounded-sm border p-1 text-zinc-500">
        {role === 'assistant' ? <BotIcon /> : <UserIcon />}
      </div>

      <div className="flex w-full flex-col gap-2">
        {content && typeof content === 'string' && (
          <div className="flex flex-col gap-4 text-zinc-800 dark:text-zinc-300">
            <Markdown>{content}</Markdown>
          </div>
        )}

        {toolInvocations && (
          <div className="flex flex-col gap-4">
            {toolInvocations.map((toolInvocation) => {
              const { toolName, toolCallId, state } = toolInvocation

              if (toolName === 'summarize' && handleSummary) {
                handleSummary()
              }

              if (state === 'result') {
                const { result } = toolInvocation

                return (
                  <div key={toolCallId}>
                    {toolName === 'getWeather' ? (
                      <Weather weatherAtLocation={result} />
                    ) : toolName === 'summarize' ? (
                      <SummaryCard summary={result} />
                    ) : toolName === 'displayFlightStatus' ? (
                      <FlightStatus flightStatus={result} />
                    ) : toolName === 'searchFlights' ? (
                      <ListFlights chatId={chatId} results={result} />
                    ) : toolName === 'selectSeats' ? (
                      <SelectSeats chatId={chatId} availability={result} />
                    ) : toolName === 'createReservation' ? (
                      Object.keys(result).includes('error') ? null : (
                        <CreateReservation reservation={result} />
                      )
                    ) : toolName === 'authorizePayment' ? (
                      <AuthorizePayment intent={result} />
                    ) : toolName === 'displayBoardingPass' ? (
                      <DisplayBoardingPass boardingPass={result} />
                    ) : toolName === 'verifyPayment' ? (
                      <VerifyPayment result={result} />
                    ) : (
                      <div>{JSON.stringify(result, null, 2)}</div>
                    )}
                  </div>
                )
              } else {
                return (
                  <div key={toolCallId} className="skeleton">
                    {toolName === 'getWeather' ? (
                      <Weather />
                    ) : toolName === 'summarize' ? (
                      <SummaryCard />
                    ) : toolName === 'displayFlightStatus' ? (
                      <FlightStatus />
                    ) : toolName === 'searchFlights' ? (
                      <ListFlights chatId={chatId} />
                    ) : toolName === 'selectSeats' ? (
                      <SelectSeats chatId={chatId} />
                    ) : toolName === 'createReservation' ? (
                      <CreateReservation />
                    ) : toolName === 'authorizePayment' ? (
                      <AuthorizePayment />
                    ) : toolName === 'displayBoardingPass' ? (
                      <DisplayBoardingPass />
                    ) : null}
                  </div>
                )
              }
            })}
          </div>
        )}

        {attachments && (
          <div className="flex flex-row gap-2">
            {attachments.map((attachment) => (
              <PreviewAttachment key={attachment.url} attachment={attachment} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
