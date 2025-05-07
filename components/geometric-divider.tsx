"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GeometricDividerProps {
  type: "top-right" | "top-left" | "bottom-right" | "bottom-left"
}

export function GeometricDivider({ type }: GeometricDividerProps) {
  const isTop = type.startsWith("top")
  const isRight = type.includes("right")

  return (
    <div className={cn("relative h-24 md:h-32 overflow-hidden z-10", isTop ? "-mb-24 md:-mb-32" : "-mt-24 md:-mt-32")}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={cn("absolute inset-0 w-full h-full", isTop ? "top-0" : "bottom-0")}
      >
        {/* Complex divider shape */}
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {isRight ? (
            isTop ? (
              // Top right divider - wave pattern
              <path d="M0 96C240 64 480 32 720 48C960 64 1200 80 1440 64V96H0Z" className="fill-white" />
            ) : (
              // Bottom right divider - zigzag pattern
              <path
                d="M0 0C160 16 320 32 480 24C640 16 800 0 960 0C1120 0 1280 16 1440 32V0H0Z"
                className="fill-white"
              />
            )
          ) : isTop ? (
            // Top left divider - blob pattern
            <path d="M0 64C240 80 480 64 720 48C960 32 1200 64 1440 96V96H0Z" className="fill-white" />
          ) : (
            // Bottom left divider - curved pattern
            <path d="M0 32C240 16 480 0 720 16C960 32 1200 16 1440 0V0H0Z" className="fill-white" />
          )}
        </svg>

        {/* Decorative elements */}
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Decorative dots */}
          <g className="opacity-50">
            <circle cx="240" cy={isTop ? "80" : "16"} r="4" fill="url(#dotGradient)" />
            <circle cx="480" cy={isTop ? "64" : "24"} r="4" fill="url(#dotGradient)" />
            <circle cx="720" cy={isTop ? "48" : "16"} r="4" fill="url(#dotGradient)" />
            <circle cx="960" cy={isTop ? "64" : "32"} r="4" fill="url(#dotGradient)" />
            <circle cx="1200" cy={isTop ? "80" : "16"} r="4" fill="url(#dotGradient)" />
          </g>

          {/* Accent line */}
          <path
            d={
              isRight
                ? isTop
                  ? "M0 96C240 64 480 32 720 48C960 64 1200 80 1440 64"
                  : "M0 0C160 16 320 32 480 24C640 16 800 0 960 0C1120 0 1280 16 1440 32"
                : isTop
                  ? "M0 64C240 80 480 64 720 48C960 32 1200 64 1440 96"
                  : "M0 32C240 16 480 0 720 16C960 32 1200 16 1440 0"
            }
            stroke="url(#dividerGradient)"
            strokeWidth="2"
            strokeDasharray="8 8"
            className="opacity-50"
          />

          <defs>
            <linearGradient id="dividerGradient" x1="0" y1="0" x2="1440" y2="96" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(var(--primary))" />
              <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="dotGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(var(--primary))" />
              <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  )
}
