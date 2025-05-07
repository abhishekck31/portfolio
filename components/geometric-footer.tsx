"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function GeometricFooter() {
  return (
    <footer className="py-8 border-t border-slate-200 relative overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-0 w-96 h-24 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Geometric accents */}
      <motion.div
        className="absolute top-4 left-16 w-12 h-12 border-2 border-primary/10 rotate-45 opacity-20"
        animate={{ rotate: [45, 90, 45] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-4 right-16 w-16 h-16 border-2 border-primary/10 rounded-full opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-slate-500"
          >
            © {new Date().getFullYear()} Abhishek CK. All rights reserved.
          </motion.div>
          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/abhishekck" },
              { icon: Github, href: "https://github.com/abhishekck31" },
              { icon: Instagram, href: "https://instagram.com/theaxbhi" },
              { icon: Mail, href: "mailto:abhishekkannur31@gmail.com" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-md hover:bg-primary/10 hover:text-primary relative group"
                  >
                    <item.icon className="h-5 w-5" />
                    <motion.div
                      className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(124, 58, 237, 0)",
                          "0 0 0 4px rgba(124, 58, 237, 0.2)",
                          "0 0 0 0 rgba(124, 58, 237, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
