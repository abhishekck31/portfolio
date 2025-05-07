"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface GeometricNavbarProps {
  activeSection: string
  scrollToSection: (section: string) => void
}

export function GeometricNavbar({ activeSection, scrollToSection }: GeometricNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <motion.header
      className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "py-2" : "py-4")}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={cn(
          "container mx-auto px-4 backdrop-blur-md rounded-2xl border transition-all duration-300",
          scrolled ? "bg-white/90 border-slate-200 shadow-lg" : "bg-white/30 border-transparent",
        )}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="text-xl font-bold relative z-10">
              <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-violet-500/20 rounded-lg blur-sm"
              animate={{
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                variant="ghost"
                className={cn(
                  "relative overflow-hidden group",
                  activeSection === item.id ? "text-primary" : "text-slate-600",
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <motion.div
                  className="absolute inset-0 bg-primary/10 rotate-3 scale-0 rounded-md"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative">
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden container mx-auto px-4 mt-2"
          >
            <motion.div
              className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-xl shadow-lg overflow-hidden"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <nav className="flex flex-col p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Button
                      onClick={() => {
                        scrollToSection(item.id)
                        setIsMenuOpen(false)
                      }}
                      variant="ghost"
                      className={cn(
                        "w-full justify-start",
                        activeSection === item.id
                          ? "bg-primary/10 text-primary border-l-2 border-primary pl-3"
                          : "text-slate-600",
                      )}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
