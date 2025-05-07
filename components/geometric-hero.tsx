"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowRight } from "lucide-react"

export function GeometricHero({ scrollToSection }: { scrollToSection: (section: string) => void }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0" style={{ minHeight: '100vh' }}>
          <defs>
            <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e9d5ff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
        {/* Faint geometric shapes */}
        <svg className="absolute left-1/4 top-1/4 opacity-10" width="200" height="200">
          <rect x="0" y="0" width="150" height="150" transform="rotate(45 75 75)" stroke="#a78bfa" strokeWidth="3" fill="none" />
        </svg>
        <svg className="absolute right-1/4 bottom-1/4 opacity-10" width="220" height="220">
          <circle cx="110" cy="110" r="90" stroke="#a78bfa" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center text-purple-500 tracking-tight mb-2">
          ABHISHEK CK
        </h1>
        <div className="w-full flex justify-center mb-6">
          <div className="h-1 w-3/4 bg-purple-300 rounded-full" />
        </div>
        <p className="text-2xl md:text-3xl text-center text-gray-700 mb-8 max-w-2xl">
          Building immersive web experiences with purpose and precision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold shadow-md"
            onClick={() => scrollToSection("projects")}
          >
            View My Work <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-400 text-purple-500 hover:bg-purple-50 font-semibold"
            onClick={() => scrollToSection("contact")}
          >
            Hire Me
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-purple-300">
          <ArrowDown className="h-6 w-6 text-purple-400" />
        </div>
      </div>
    </section>
  )
}
