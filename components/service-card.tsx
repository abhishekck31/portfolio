"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  service: {
    title: string
    description: string
    icon: LucideIcon
    color: string
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} className="h-full">
      <Card className="h-full overflow-hidden border-primary/10 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-primary/5">
        <CardContent className="p-6 flex flex-col h-full">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg`}
          >
            <service.icon className="h-7 w-7" />
          </motion.div>
          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
          <p className="text-muted-foreground flex-grow">{service.description}</p>
          <motion.div
            className="w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full mt-6"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </CardContent>
      </Card>
    </motion.div>
  )
}
