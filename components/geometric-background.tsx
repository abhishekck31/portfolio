"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = 70
    const shapes = ["triangle", "square", "pentagon", "hexagon", "circle"]
    let mouseX = 0
    let mouseY = 0
    let isMouseMoving = false
    let mouseTimeout: NodeJS.Timeout

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      isMouseMoving = true

      // Reset the timeout on every mouse move
      clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false
      }, 2000)
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      shape: string
      rotation: number
      rotationSpeed: number
      opacity: number
      originalX: number
      originalY: number
      forceFactor: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.originalX = this.x
        this.originalY = this.y
        this.size = Math.random() * 20 + 10
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = `hsla(${Math.random() * 60 + 250}, 70%, 60%, ${Math.random() * 0.1 + 0.05})`
        this.shape = shapes[Math.floor(Math.random() * shapes.length)]
        this.rotation = Math.random() * 360
        this.rotationSpeed = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.2 + 0.1
        this.forceFactor = Math.random() * 0.6 + 0.2
      }

      update() {
        // Normal movement
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed

        // Mouse interaction
        if (isMouseMoving) {
          const dx = mouseX - this.x
          const dy = mouseY - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 200

          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance) * this.forceFactor
            this.x -= (dx * force) / 10
            this.y -= (dy * force) / 10
          } else {
            // Return to original position slowly when not influenced by mouse
            this.x += (this.originalX - this.x) * 0.01
            this.y += (this.originalY - this.y) * 0.01
          }
        } else {
          // Return to original position slowly when mouse is not moving
          this.x += (this.originalX - this.x) * 0.01
          this.y += (this.originalY - this.y) * 0.01
        }

        // Boundary check
        if (this.x > canvas.width + this.size) this.x = -this.size
        else if (this.x < -this.size) this.x = canvas.width + this.size
        if (this.y > canvas.height + this.size) this.y = -this.size
        else if (this.y < -this.size) this.y = canvas.height + this.size
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate((this.rotation * Math.PI) / 180)
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.strokeStyle = this.color
        ctx.lineWidth = 1

        switch (this.shape) {
          case "triangle":
            drawPolygon(0, 0, this.size, 3)
            break
          case "square":
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
            break
          case "pentagon":
            drawPolygon(0, 0, this.size / 2, 5)
            break
          case "hexagon":
            drawPolygon(0, 0, this.size / 2, 6)
            break
          case "circle":
            ctx.beginPath()
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2)
            ctx.fill()
            ctx.stroke()
            break
        }

        ctx.restore()
      }
    }

    function drawPolygon(x: number, y: number, radius: number, sides: number) {
      ctx.beginPath()
      for (let i = 0; i < sides; i++) {
        const angle = (i * 2 * Math.PI) / sides - Math.PI / 2
        const px = x + radius * Math.cos(angle)
        const py = y + radius * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(px, py)
        } else {
          ctx.lineTo(px, py)
        }
      }
      ctx.closePath()
      ctx.fill()
      ctx.stroke()
    }

    function initParticles() {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid pattern
      const gridSize = 50
      ctx.strokeStyle = "rgba(100, 100, 255, 0.03)"
      ctx.lineWidth = 1

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connecting lines
      ctx.strokeStyle = "rgba(100, 100, 255, 0.03)"
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            ctx.globalAlpha = 0.03 * (1 - distance / 200)
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    handleResize()
    animate()

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(mouseTimeout)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <motion.canvas ref={canvasRef} className="absolute inset-0 z-0" />
}
