import { differenceInHours, format } from "date-fns";

import { ArrowUpRightSmallIcon } from "../custom/icons";

const SAMPLE = {
  flightNumber: "BA142",
  departure: {
    cityName: "London",
    airportCode: "LHR",
    airportName: "London Heathrow Airport",
    timestamp: "2024-10-08T18:30:00Z",
    terminal: "5",
    gate: "A10",
  },
  arrival: {
    cityName: "New York",
    airportCode: "JFK",
    airportName: "John F. Kennedy International Airport",
    timestamp: "2024-10-09T07:30:00Z",
    terminal: "7",
    gate: "B22",
  },
  totalDistanceInMiles: 3450,
};

export function Row({ row = SAMPLE.arrival, type = "arrival" }) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row items-center gap-2">
            <div className="size-fit rounded-full bg-foreground text-background">
              {type === "arrival" ? (
                <div className="rotate-90">
                  <ArrowUpRightSmallIcon size={16} />
                </div>
              ) : (
                <ArrowUpRightSmallIcon size={16} />
              )}
            </div>
            <div className="text-sm text-muted-foreground sm:text-base">
              {row.airportCode}
            </div>
            <div>·</div>
            <div className="max-w-32 truncate text-sm text-muted-foreground sm:max-w-64 sm:text-base">
              {row.airportName}
            </div>
          </div>

          <div className="text-2xl font-medium sm:text-3xl">
            {format(new Date(row.timestamp), "h:mm a")}
          </div>
        </div>
      </div>

      <div className="mt-auto flex flex-col items-end justify-center gap-1">
        <div className="w-fit rounded-md bg-amber-400 px-2 text-sm text-amber-900 sm:text-sm">
          {row.gate}
        </div>
        <div className="text-sm text-muted-foreground">
          Terminal {row.terminal}
        </div>
      </div>
    </div>
  );
}

export function FlightStatus({ flightStatus = SAMPLE }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-muted p-4">
      <div className="flex flex-col gap-1 text-sm">
        <div className="text-muted-foreground">{flightStatus.flightNumber}</div>
        <div className="text-lg font-medium">
          {flightStatus.departure.cityName} to {flightStatus.arrival.cityName}
        </div>
      </div>

      <div className="h-px grow bg-muted-foreground/20" />

      <Row row={flightStatus.arrival} type="departure" />

      <div className="flex flex-row items-center gap-2">
        <div className="text-xs text-muted-foreground ">
          {differenceInHours(
            new Date(flightStatus.arrival.timestamp),
            new Date(flightStatus.departure.timestamp),
          )}{" "}
          hours
        </div>
        <div>·</div>
        <div className="text-xs text-muted-foreground">
          {flightStatus.totalDistanceInMiles} mi
        </div>
        <div className="ml-2 h-px grow bg-muted-foreground/20" />
      </div>

      <Row row={flightStatus.departure} type="arrival" />
    </div>
  );
}
