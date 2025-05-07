"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Instagram } from "lucide-react"

interface Service {
  title: string
  description: string
  icon: React.ElementType
  color: string
  details: string[]
}

export function GeometricServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services: Service[] = [
    {
      title: "Web Design",
      description: "Creating responsive, modern websites that provide excellent user experience across all devices.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      details: [
        "Responsive UI/UX Design",
        "Interactive Prototyping",
        "Frontend Development",
        "Performance Optimization",
        "Cross-browser Compatibility",
      ],
    },
    {
      title: "SEO Optimization",
      description: "Improving your website's visibility in search engines to drive more organic traffic.",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      details: [
        "Keyword Research",
        "On-page Optimization",
        "Technical SEO Audits",
        "Content Strategy",
        "Performance Tracking",
      ],
    },
    {
      title: "Social Media Management",
      description: "Strategic content creation and community engagement to grow your brand's online presence.",
      icon: Instagram,
      color: "from-pink-500 to-purple-500",
      details: [
        "Content Calendar Creation",
        "Engagement Strategy",
        "Analytics & Reporting",
        "Audience Growth Tactics",
        "Trend Monitoring",
      ],
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <motion.div
        className="absolute -right-64 top-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center justify-center mb-16">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-transparent to-primary rounded-full"
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mx-4 text-center relative"
            >
              My{" "}
              <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                Services
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-violet-500/50"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-primary to-transparent rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className="perspective-1000"
              >
                <motion.div
                  animate={{
                    rotateY: hoveredService === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                  className="relative w-full h-full preserve-3d"
                  style={{ minHeight: "320px" }}
                >
                  {/* Front Card */}
                  <Card className="absolute inset-0 backface-hidden overflow-hidden border-primary/10 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-primary/20">
                    <CardContent className="p-6 flex flex-col h-full">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg relative`}
                      >
                        <service.icon className="h-8 w-8" />
                        <motion.div
                          className="absolute inset-0 rounded-xl opacity-0 bg-white"
                          animate={{ opacity: [0, 0.2, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 flex-grow">{service.description}</p>
                      <motion.div
                        className="w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full mt-6"
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      />
                      <p className="text-sm text-primary mt-4 text-center">Hover to see details</p>

                      {/* Geometric accents */}
                      <motion.div
                        className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-primary/10 rounded-full opacity-30"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                      <motion.div
                        className="absolute -top-4 -left-4 w-12 h-12 border-2 border-primary/10 rotate-45 opacity-30"
                        animate={{ rotate: [45, 90, 45] }}
                        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      />
                    </CardContent>
                  </Card>

                  {/* Back Card */}
                  <Card className="absolute inset-0 backface-hidden overflow-hidden border-primary/10 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-primary/20 rotate-y-180">
                    <CardContent className="p-6 flex flex-col h-full justify-center">
                      <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent text-center">
                        {service.title} Services
                      </h3>
                      <ul className="space-y-3">
                        {service.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                              opacity: hoveredService === index ? 1 : 0,
                              x: hoveredService === index ? 0 : -20,
                            }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className={`w-3 h-3 bg-gradient-to-br ${service.color} rotate-45`} />
                            <span className="text-slate-700">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Geometric accents */}
                      <motion.div
                        className="absolute top-4 right-4 w-12 h-12 border-2 border-primary/10 clip-pentagon opacity-30"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                      <motion.div
                        className="absolute bottom-4 left-4 w-10 h-10 border-2 border-primary/10 rounded-full opacity-30"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
