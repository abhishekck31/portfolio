"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function GeometricCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    const handleMouseDown = () => setCursorVariant("click")
    const handleMouseUp = () => setCursorVariant("default")
    const handleMouseEnter = () => document.body.classList.add("has-custom-cursor")
    const handleMouseLeave = () => document.body.classList.remove("has-custom-cursor")

    // Add listeners for buttons and links
    const handleLinkEnter = () => setCursorVariant("hover")
    const handleLinkLeave = () => setCursorVariant("default")

    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkEnter)
      link.addEventListener("mouseleave", handleLinkLeave)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkEnter)
        link.removeEventListener("mouseleave", handleLinkLeave)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      rotate: 45,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      rotate: 0,
      scale: 1.5,
      borderRadius: "100%",
    },
    click: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 0.8,
      rotate: 135,
    },
  }

  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block fixed top-0 left-0 w-4 h-4 bg-primary z-[9999] pointer-events-none"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <style jsx global>{`
        .has-custom-cursor * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
