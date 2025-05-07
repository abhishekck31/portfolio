"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  color: string
}

export function SkillBadge({ name, color }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      className={cn("px-3 py-1 rounded-full text-white font-medium text-sm shadow-lg relative overflow-hidden", color)}
    >
      <motion.div
        className="absolute inset-0 bg-white opacity-0"
        whileHover={{
          opacity: 0.2,
          transition: { duration: 0.3 },
        }}
      />
      <span className="relative z-10">{name}</span>
    </motion.div>
  )
}
