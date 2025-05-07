"use client"

import { useEffect, useRef, useState } from "react"
import { GeometricNavbar } from "@/components/geometric-navbar"
import { GeometricDivider } from "@/components/geometric-divider"
import { GeometricHero } from "@/components/geometric-hero"
import { GeometricAbout } from "@/components/geometric-about"
import { GeometricProjects } from "@/components/geometric-projects"
import { GeometricSkills } from "@/components/geometric-skills"
import { GeometricServices } from "@/components/geometric-services"
import { GeometricContact } from "@/components/geometric-contact"
import { GeometricFooter } from "@/components/geometric-footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({
    home: null,
    about: null,
    projects: null,
    skills: null,
    services: null,
    contact: null,
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionsRef.current).forEach(([key, section]) => {
        if (!section) return

        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(key)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = sectionsRef.current[sectionId]
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <GeometricNavbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        {/* Hero Section */}
        <section ref={(el) => (sectionsRef.current.home = el)} id="home">
          <GeometricHero scrollToSection={scrollToSection} />
        </section>

        {/* About Section */}
        <GeometricDivider type="top-right" />
        <section ref={(el) => (sectionsRef.current.about = el)} id="about" className="relative bg-white">
          <GeometricAbout />
        </section>
        <GeometricDivider type="bottom-left" />

        {/* Projects Section */}
        <section ref={(el) => (sectionsRef.current.projects = el)} id="projects" className="relative bg-white">
          <GeometricProjects />
        </section>
        <GeometricDivider type="top-left" />

        {/* Skills Section */}
        <section ref={(el) => (sectionsRef.current.skills = el)} id="skills" className="relative bg-white">
          <GeometricSkills />
        </section>
        <GeometricDivider type="bottom-right" />

        {/* Services Section */}
        <section ref={(el) => (sectionsRef.current.services = el)} id="services" className="relative bg-white">
          <GeometricServices />
        </section>
        <GeometricDivider type="top-right" />

        {/* Contact Section */}
        <section ref={(el) => (sectionsRef.current.contact = el)} id="contact" className="relative bg-white">
          <GeometricContact />
        </section>
      </main>

      <GeometricFooter />
      <ScrollToTop />
    </div>
  )
}
