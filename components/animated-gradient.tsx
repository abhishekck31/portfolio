"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function AnimatedGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let mouseX = 0
    let mouseY = 0
    let hue = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX
        mouseY = e.touches[0].clientY
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient
      const gradientSize = Math.min(canvas.width, canvas.height) * 1.5
      const gradient = ctx.createRadialGradient(
        mouseX || canvas.width / 2,
        mouseY || canvas.height / 2,
        0,
        mouseX || canvas.width / 2,
        mouseY || canvas.height / 2,
        gradientSize,
      )

      // Animated colors
      hue = (hue + 0.2) % 360
      gradient.addColorStop(0, `hsla(${hue}, 100%, 60%, 0.4)`)
      gradient.addColorStop(0.3, `hsla(${(hue + 60) % 360}, 100%, 50%, 0.2)`)
      gradient.addColorStop(1, "hsla(0, 0%, 0%, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrameId = requestAnimationFrame(render)
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    resize()
    render()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}
