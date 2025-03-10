'use client'

import { useChat } from 'ai/react'
import { differenceInHours, format } from 'date-fns'

const SAMPLE = {
  flights: [
    {
      id: 'result_1',
      departure: {
        cityName: 'San Francisco',
        airportCode: 'SFO',
        timestamp: '2024-05-19T18:00:00Z',
      },
      arrival: {
        cityName: 'Rome',
        airportCode: 'FCO',
        timestamp: '2024-05-20T14:30:00Z',
      },
      airlines: ['United Airlines', 'Lufthansa'],
      priceInUSD: 1200.5,
      numberOfStops: 1,
    },
    {
      id: 'result_2',
      departure: {
        cityName: 'San Francisco',
        airportCode: 'SFO',
        timestamp: '2024-05-19T17:30:00Z',
      },
      arrival: {
        cityName: 'Rome',
        airportCode: 'FCO',
        timestamp: '2024-05-20T15:00:00Z',
      },
      airlines: ['British Airways'],
      priceInUSD: 1350,
      numberOfStops: 0,
    },
    {
      id: 'result_3',
      departure: {
        cityName: 'San Francisco',
        airportCode: 'SFO',
        timestamp: '2024-05-19T19:15:00Z',
      },
      arrival: {
        cityName: 'Rome',
        airportCode: 'FCO',
        timestamp: '2024-05-20T16:45:00Z',
      },
      airlines: ['Delta Air Lines', 'Air France'],
      priceInUSD: 1150.75,
      numberOfStops: 1,
    },
    {
      id: 'result_4',
      departure: {
        cityName: 'San Francisco',
        airportCode: 'SFO',
        timestamp: '2024-05-19T16:30:00Z',
      },
      arrival: {
        cityName: 'Rome',
        airportCode: 'FCO',
        timestamp: '2024-05-20T13:50:00Z',
      },
      airlines: ['American Airlines', 'Iberia'],
      totalDurationInMinutes: 740,
      priceInUSD: 1250.25,
      numberOfStops: 1,
    },
  ],
}

export function ListFlights({
  chatId,
  results = SAMPLE,
}: {
  chatId: string
  results?: typeof SAMPLE
}) {
  const { append } = useChat({
    id: chatId,
    body: { id: chatId },
    maxSteps: 5,
  })

  return (
    <div className="flex flex-col rounded-lg bg-muted px-4 py-1.5">
      {results.flights.map((flight) => (
        <div
          key={flight.id}
          className="group flex cursor-pointer flex-row border-b py-2 last-of-type:border-none dark:border-zinc-700"
          onClick={() => {
            append({
              role: 'user',
              content: `I would like to book the ${flight.airlines} one!`,
            })
          }}
        >
          <div className="flex w-full flex-col justify-between gap-0.5">
            <div className="flex flex-row gap-0.5 text-base font-medium group-hover:underline sm:text-base">
              <div className="text">
                {format(new Date(flight.departure.timestamp), 'h:mm a')}
              </div>
              <div className="no-skeleton">–</div>
              <div className="text">
                {format(new Date(flight.arrival.timestamp), 'h:mm a')}
              </div>
            </div>
            <div className="text hidden w-fit flex-row gap-2 text-sm text-muted-foreground sm:flex">
              <div>{flight.airlines.join(', ')}</div>
            </div>
            <div className="text flex flex-row gap-2 text-xs text-muted-foreground sm:hidden sm:text-sm">
              {flight.airlines.length} stops
            </div>
          </div>

          <div className="flex flex-col justify-between gap-0.5">
            <div className="flex flex-row gap-2">
              <div className="text-base sm:text-base">
                {differenceInHours(
                  new Date(flight.arrival.timestamp),
                  new Date(flight.departure.timestamp)
                )}{' '}
                hr
              </div>
            </div>
            <div className="flex flex-row text-xs text-muted-foreground sm:text-sm">
              <div>{flight.departure.airportCode}</div>
              <div>–</div>
              <div>{flight.arrival.airportCode}</div>
            </div>
          </div>

          <div className="flex w-32 flex-col items-end gap-0.5">
            <div className="flex flex-row gap-2">
              <div className="text-base text-emerald-600 dark:text-emerald-500 sm:text-base">
                ${flight.priceInUSD}
              </div>
            </div>
            <div className="flex flex-row text-xs text-muted-foreground sm:text-sm">
              Round Trip
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
