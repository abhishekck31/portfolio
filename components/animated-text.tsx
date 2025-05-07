"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AnimatedTextProps {
  texts: string[]
  interval?: number
}

export function AnimatedText({ texts, interval = 3000 }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, interval)

    return () => clearInterval(timer)
  }, [texts, interval])

  return (
    <div className="h-8 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.span
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="bg-gradient-to-r from-primary/80 via-purple-500/80 to-primary/80 bg-clip-text text-transparent"
          >
            {texts[currentIndex]}
          </motion.span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
