"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Instagram, Lightbulb, LineChart, Palette } from "lucide-react"

export function GeometricSkills() {
  const skills = [
    { name: "Web Development", value: 90, icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "UI/UX Design", value: 85, icon: Palette, color: "from-purple-500 to-pink-500" },
    { name: "SEO Optimization", value: 80, icon: Globe, color: "from-green-500 to-emerald-500" },
    { name: "Social Media Strategy", value: 95, icon: Instagram, color: "from-pink-500 to-rose-500" },
    { name: "Content Creation", value: 85, icon: Lightbulb, color: "from-amber-500 to-yellow-500" },
    { name: "Analytics", value: 75, icon: LineChart, color: "from-blue-600 to-indigo-600" },
  ]

  const tools = [
    { name: "HTML/CSS", category: "Development" },
    { name: "JavaScript", category: "Development" },
    { name: "React", category: "Development" },
    { name: "Tailwind CSS", category: "Development" },
    { name: "Figma", category: "Design" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "Meta Ads Manager", category: "Marketing" },
    { name: "Instagram", category: "Social Media" },
    { name: "SEO Tools", category: "Marketing" },
    { name: "Content Planning", category: "Strategy" },
    { name: "Node.js", category: "Development" },
    { name: "Git", category: "Development" },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <motion.div
        className="absolute -left-64 top-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, marginopacity: 1 }}
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
              <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">Skills</span>
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

          {/* Skill Bars */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-md bg-gradient-to-br ${skill.color} flex items-center justify-center text-white`}
                        >
                          <skill.icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-medium">{skill.name}</h3>
                      </div>
                      <span className="text-lg font-bold text-primary">{skill.value}%</span>
                    </div>

                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/10">
                      <motion.div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 relative inline-block">
              <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                Tools & Technologies
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-violet-500/50"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="overflow-hidden border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 h-full">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                      <div className="w-3 h-3 bg-primary rotate-45 mb-3" />
                      <h4 className="font-medium">{tool.name}</h4>
                      <p className="text-xs text-muted-foreground">{tool.category}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
