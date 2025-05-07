"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypewriterEffectProps {
  text: string
  delay?: number
  speed?: number
}

export function TypewriterEffect({ text, delay = 0, speed = 50 }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (delay > 0 && !isTyping) {
      timeout = setTimeout(() => {
        setIsTyping(true)
      }, delay)
      return () => clearTimeout(timeout)
    }

    if (!isTyping) return

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, isTyping, speed, text])

  return (
    <motion.span
      className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent inline-block"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    >
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
          className="inline-block"
        >
          |
        </motion.span>
      )}
    </motion.span>
  )
}
