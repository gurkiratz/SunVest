"use client";

import { useChat } from "ai/react";
import cx from "classnames";

interface Seat {
  seatNumber: string;
  priceInUSD: number;
  isAvailable: boolean;
}

const SAMPLE: { seats: Seat[][] } = {
  seats: [
    [
      { seatNumber: "1A", priceInUSD: 150, isAvailable: false },
      { seatNumber: "1B", priceInUSD: 150, isAvailable: false },
      { seatNumber: "1C", priceInUSD: 150, isAvailable: false },
      { seatNumber: "1D", priceInUSD: 150, isAvailable: false },
      { seatNumber: "1E", priceInUSD: 150, isAvailable: false },
      { seatNumber: "1F", priceInUSD: 150, isAvailable: false },
    ],
    [
      { seatNumber: "2A", priceInUSD: 150, isAvailable: false },
      { seatNumber: "2B", priceInUSD: 150, isAvailable: false },
      { seatNumber: "2C", priceInUSD: 150, isAvailable: false },
      { seatNumber: "2D", priceInUSD: 150, isAvailable: false },
      { seatNumber: "2E", priceInUSD: 150, isAvailable: false },
      { seatNumber: "2F", priceInUSD: 150, isAvailable: false },
    ],
    [
      { seatNumber: "3A", priceInUSD: 150, isAvailable: false },
      { seatNumber: "3B", priceInUSD: 150, isAvailable: false },
      { seatNumber: "3C", priceInUSD: 150, isAvailable: false },
      { seatNumber: "3D", priceInUSD: 150, isAvailable: false },
      { seatNumber: "3E", priceInUSD: 150, isAvailable: false },
      { seatNumber: "3F", priceInUSD: 150, isAvailable: false },
    ],
    [
      { seatNumber: "4A", priceInUSD: 150, isAvailable: false },
      { seatNumber: "4B", priceInUSD: 150, isAvailable: false },
      { seatNumber: "4C", priceInUSD: 150, isAvailable: false },
      { seatNumber: "4D", priceInUSD: 150, isAvailable: false },
      { seatNumber: "4E", priceInUSD: 150, isAvailable: false },
      { seatNumber: "4F", priceInUSD: 150, isAvailable: false },
    ],
    [
      { seatNumber: "5A", priceInUSD: 150, isAvailable: false },
      { seatNumber: "5B", priceInUSD: 150, isAvailable: false },
      { seatNumber: "5C", priceInUSD: 150, isAvailable: false },
      { seatNumber: "5D", priceInUSD: 150, isAvailable: false },
      { seatNumber: "5E", priceInUSD: 150, isAvailable: false },
      { seatNumber: "5F", priceInUSD: 150, isAvailable: false },
    ],
  ],
};

export function SelectSeats({
  chatId,
  availability = SAMPLE,
}: {
  chatId: string;
  availability?: typeof SAMPLE;
}) {
  const { append } = useChat({
    id: chatId,
    body: { id: chatId },
    maxSteps: 5,
  });

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-muted">
      <div className="flex scale-75 flex-col gap-4">
        <div className="flex w-full flex-row justify-between text-muted-foreground">
          <div className="flex flex-row">
            <div className="w-[45px] text-center sm:w-[54px]">A</div>
            <div className="w-[45px] text-center sm:w-[54px]">B</div>
            <div className="w-[45px] text-center sm:w-[54px]">C</div>
          </div>
          <div className="flex flex-row">
            <div className="w-[45px] text-center sm:w-[54px]">D</div>
            <div className="w-[45px] text-center sm:w-[54px]">E</div>
            <div className="w-[45px] text-center sm:w-[54px]">F</div>
          </div>
        </div>

        {availability.seats.map((row, index) => (
          <div key={`row-${index}`} className="flex flex-row gap-4">
            {row.map((seat, seatIndex) => (
              <>
                {seatIndex === 3 ? (
                  <div className="flex w-full flex-row items-center justify-center text-muted-foreground">
                    {index + 1}
                  </div>
                ) : null}
                <div
                  key={seat.seatNumber}
                  onClick={() => {
                    append({
                      role: "user",
                      content: `I'd like to go with seat ${seat.seatNumber}`,
                    });
                  }}
                  className={cx(
                    "cursor-pointer group relative size-8 sm:size-10 flex-shrink-0 flex rounded-sm flex-row items-center justify-center",
                    {
                      "bg-blue-500 hover:bg-pink-500": seat.isAvailable,
                      "bg-gray-500 cursor-not-allowed": !seat.isAvailable,
                    },
                  )}
                >
                  <div className="text-xs text-white">${seat.priceInUSD}</div>
                  <div
                    className={cx(
                      "absolute -top-1 h-2 w-full scale-125 rounded-sm",
                      {
                        "bg-blue-600 group-hover:bg-pink-600": seat.isAvailable,
                        "bg-zinc-600 cursor-not-allowed": !seat.isAvailable,
                      },
                    )}
                  />
                </div>
              </>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-center gap-4 pb-6">
        <div className="flex flex-row items-center gap-2">
          <div className="size-4 rounded-sm bg-blue-500" />
          <div className="text text-sm font-medium text-muted-foreground">
            Available
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="size-4 rounded-sm bg-gray-500" />
          <div className="text text-sm font-medium text-muted-foreground">
            Unavailable
          </div>
        </div>
      </div>
    </div>
  );
}
