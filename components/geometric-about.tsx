"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { SkillChip } from "@/components/skill-chip"

export function GeometricAbout() {
  const skills = [
    { name: "HTML", color: "bg-orange-500" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Tailwind CSS", color: "bg-teal-500" },
    { name: "SEO", color: "bg-green-600" },
    { name: "Meta Ads", color: "bg-blue-700" },
    { name: "Instagram Strategy", color: "bg-pink-600" },
    { name: "GitHub", color: "bg-slate-800" },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
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
              About{" "}
              <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">Me</span>
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Floating Glassy Card with Image */}
              <motion.div
                className="relative mx-auto max-w-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-violet-500/30 rounded-2xl blur-xl" />
                <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl" />

                <div className="relative p-6 overflow-hidden rounded-2xl">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 rounded-xl overflow-hidden shadow-lg"
                  >
                    <Image
                      src="/images/abhishek-avatar.png"
                      alt="Abhishek CK"
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>

                  {/* Geometric accents */}
                  <motion.div
                    className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-lg rotate-12 z-0"
                    animate={{ rotate: [12, 24, 12], scale: [1, 1.05, 1] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-12 h-12 bg-violet-500/20 rounded-full z-0"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="bg-white/50 backdrop-blur-sm border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <CardContent className="p-6 relative">
                  <motion.div
                    className="absolute -right-20 -top-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                    Creative Developer & Digital Strategist
                  </h3>
                  <p className="text-lg leading-relaxed relative z-10 text-slate-700">
                    I'm Abhishek CK, a B.Tech student in Information Technology at CMR University. I'm passionate about
                    building beautiful, functional websites and helping brands grow through SEO and smart social media
                    strategies.
                  </p>
                  <motion.div
                    className="w-full h-1 bg-gradient-to-r from-primary/50 to-violet-500/50 mt-6 rounded-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  />
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-slate-800">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="w-6 h-6 bg-primary/20 rotate-45"
                  >
                    <span className="sr-only">Skills</span>
                  </motion.div>
                  My Skills
                </h3>

                {/* Skill chips with staggered animations */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      viewport={{ once: true }}
                    >
                      <SkillChip name={skill.name} color={skill.color} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
