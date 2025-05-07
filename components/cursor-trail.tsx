"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Don't show cursor trail on mobile devices
    if (isMobile) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    // Create trail effect
    const interval = setInterval(() => {
      setTrail((prevTrail) => {
        // Add current position to the beginning
        const newTrail = [{ x: mousePosition.x, y: mousePosition.y, id: Date.now() }, ...prevTrail]

        // Keep only the last 10 positions
        if (newTrail.length > 10) {
          return newTrail.slice(0, 10)
        }

        return newTrail
      })
    }, 50) // Update trail every 50ms

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("resize", checkMobile)
      clearInterval(interval)
    }
  }, [mousePosition, isMobile])

  if (isMobile) return null

  return (
    <>
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999]"
          style={{
            x: point.x - 8,
            y: point.y - 8,
            backgroundColor: `rgba(168, 85, 247, ${0.5 - index * 0.05})`,
            scale: 1 - index * 0.08,
          }}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </>
  )
}
