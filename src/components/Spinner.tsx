import React from "react"

import { cn } from "@/lib/utils"

export type SpinnerProps = {
  className?: string
  type?: "spinner" | "bouncing-line"
  size?: number | string
  height?: number | string
}

const ticksCount = 12
const tickWidth = "8%"

const Spinner: React.FC<SpinnerProps> = ({ className, size, height, type = "spinner" }) => {
  switch (type) {
    case "spinner":
      return (
        <div
          className={cn("relative", className)}
          style={{
            width: size,
            height: size,
          }}
        >
          {Array(ticksCount)
            .fill(0)
            .map((_, i) => {
              return (
                <div
                  className={cn(
                    "animate-tick-fade absolute right-1/2 h-1/2 origin-bottom scale-95 transform",
                    "after:absolute after:inset-x-0 after:top-0 after:h-1/2 after:rounded-full after:bg-current"
                  )}
                  style={{
                    width: tickWidth,
                    transform: `rotate(${i * 30}deg)`,
                    animationDelay: `-${(ticksCount - i) * 0.1}s`,
                    opacity: `${0.1 + (0.9 / (ticksCount - 1)) * i}`,
                    "--tw-translate-x": parseInt(tickWidth) / 2,
                  }}
                  key={i}
                />
              )
            })}
        </div>
      )
    case "bouncing-line":
      return (
        <div
          className={cn("relative flex h-1 overflow-hidden rounded-sm bg-gray-500/20", className)}
          style={{ width: size, height }}
        >
          <span className="animate-tick-bounce mx-auto w-1/2 rounded-sm bg-current" />
        </div>
      )
  }
}

export default Spinner
