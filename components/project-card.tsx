"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="overflow-hidden border-primary/10 h-full bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-primary/5">
        <div className="relative aspect-video overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
          >
            <Link href={project.link} className="text-white">
              <Button
                variant="secondary"
                size="sm"
                className="gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none"
              >
                View Project
                <motion.span animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.3 }}>
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full"
          >
            Featured
          </motion.div>
        </div>
        <CardContent className="p-6">
          <motion.h3
            className="text-xl font-bold mb-2"
            animate={{ color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
