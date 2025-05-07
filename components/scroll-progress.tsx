"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1">
      <motion.div
        className="h-full bg-gradient-to-r from-indigo-500 via-primary to-violet-500 origin-left"
        style={{ scaleX }}
      />

      {/* Geometric accents */}
      <motion.div
        className="absolute top-0 right-0 h-6 w-6 -mt-2 -mr-2 rotate-45 bg-primary/80 rounded-sm"
        style={{ scaleX }}
      />

      <motion.div
        className="absolute top-0 left-0 h-4 w-4 -mt-1 -ml-1 bg-indigo-500/80 rounded-full"
        style={{ scaleX }}
      />
    </div>
  )
}
