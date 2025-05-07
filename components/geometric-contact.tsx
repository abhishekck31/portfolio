"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Instagram, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react"
import Link from "next/link"
import { z } from "zod"

// Email validation schema
const emailSchema = z.string().email("Please enter a valid email address")

export function GeometricContact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [emailError, setEmailError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const validateEmail = (email: string) => {
    try {
      emailSchema.parse(email)
      setEmailError("")
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        setEmailError(error.errors[0].message)
      }
      return false
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    if (name === "email" && value) {
      validateEmail(value)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email before submission
    if (!validateEmail(formState.email)) {
      return
    }

    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("name", formState.name)
      formData.append("email", formState.email)
      formData.append("message", formState.message)

      const res = await fetch("https://formspree.io/f/mdkggqwj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (res.ok) {
        setIsSubmitting(false)
        setShowSuccess(true)
        setTimeout(() => {
          setFormState({ name: "", email: "", message: "" })
          setShowSuccess(false)
        }, 3000)
      } else {
        setIsSubmitting(false)
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      setIsSubmitting(false)
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      <motion.div
        className="absolute -left-64 top-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-primary/20 rounded-full opacity-30"
        animate={{
          rotate: [0, 360],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-violet-500/20 rotate-45 opacity-20"
        animate={{
          rotate: [45, 225, 45],
          x: [0, 40, 0],
        }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
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
              Get In{" "}
              <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">Touch</span>
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

          <Card className="backdrop-blur-sm bg-white/80 border-primary/10 shadow-xl shadow-primary/5 overflow-hidden">
            <motion.div
              className="absolute -right-32 -bottom-32 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Geometric accents */}
            <motion.div
              className="absolute top-8 left-8 w-16 h-16 border-2 border-primary/10 clip-diamond opacity-30"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <motion.div
              className="absolute bottom-8 right-8 w-20 h-20 border-2 border-primary/10 rounded-full opacity-30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute top-1/2 right-16 w-12 h-12 border-2 border-primary/10 clip-triangle opacity-30"
              animate={{ rotate: [0, 180, 0], y: [0, 20, 0] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />

            <CardContent className="p-6 md:p-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                    Let's Connect
                  </h3>
                  <p className="text-slate-600">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your
                    vision.
                  </p>

                  <div className="space-y-4 mt-8">
                    {[
                      { icon: Mail, text: "abhishekkannur31@gmail.com", href: "mailto:abhishekkannur31@gmail.com" },
                      {
                        icon: Linkedin,
                        text: "linkedin.com/in/abhishekck",
                        href: "https://www.linkedin.com/in/abhishekck",
                      },
                      { icon: Github, text: "github.com/abhishekck31", href: "https://github.com/abhishekck31" },
                      { icon: Instagram, text: "@theaxbhi", href: "https://instagram.com/theaxbhi" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Link href={item.href} className="flex items-center gap-3 group">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                          >
                            <item.icon className="w-5 h-5" />
                          </motion.div>
                          <span className="group-hover:text-primary transition-colors duration-300">{item.text}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Direct Email CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-8 pt-6 border-t border-primary/10"
                  >
                    <Link href="mailto:abhishekkannur31@gmail.com">
                      <Button
                        className="w-full bg-gradient-to-r from-primary to-violet-500 hover:from-primary/90 hover:to-violet-500/90 text-white group shadow-lg hover:shadow-xl transition-all duration-300"
                        size="lg"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        Email Me Directly
                        <motion.div
                          className="absolute inset-0 rounded-md opacity-0"
                          whileHover={{
                            boxShadow: [
                              "0 0 0 0 rgba(124, 58, 237, 0)",
                              "0 0 0 4px rgba(124, 58, 237, 0.2)",
                              "0 0 0 0 rgba(124, 58, 237, 0)",
                            ],
                            opacity: 1,
                          }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                    Send a Message
                  </h3>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="relative">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder=" "
                          required
                          className="h-14 pt-4 bg-background/50 border-primary/20 focus:border-primary transition-all duration-300 peer"
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-3 top-1 text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all duration-300 peer-focus:top-1 peer-focus:text-xs"
                        >
                          Your Name
                        </label>
                      </motion.div>
                    </div>

                    <div className="relative">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          onBlur={(e) => validateEmail(e.target.value)}
                          placeholder=" "
                          required
                          className={`h-14 pt-4 bg-background/50 transition-all duration-300 peer ${
                            emailError
                              ? "border-red-500 focus:border-red-500"
                              : "border-primary/20 focus:border-primary"
                          }`}
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-3 top-1 text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all duration-300 peer-focus:top-1 peer-focus:text-xs"
                        >
                          Your Email
                        </label>
                        {emailError && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-500 mt-1 flex items-center"
                          >
                            <AlertCircle className="h-3 w-3 mr-1" /> {emailError}
                          </motion.p>
                        )}
                      </motion.div>
                    </div>

                    <div className="relative">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          placeholder=" "
                          required
                          className="min-h-[150px] pt-6 bg-background/50 border-primary/20 focus:border-primary transition-all duration-300 peer"
                        />
                        <label
                          htmlFor="message"
                          className="absolute left-3 top-1 text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all duration-300 peer-focus:top-1 peer-focus:text-xs"
                        >
                          Your Message
                        </label>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative overflow-hidden"
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting || !!emailError}
                        className="w-full bg-primary hover:bg-primary/90 text-white group shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div
                              key="loading"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center"
                            >
                              <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Processing...
                            </motion.div>
                          ) : showSuccess ? (
                            <motion.div
                              key="success"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center text-white"
                            >
                              <CheckCircle2 className="mr-2 h-4 w-4" />
                              Message Sent!
                            </motion.div>
                          ) : (
                            <motion.span
                              key="send"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="relative z-10 flex items-center gap-2"
                            >
                              Send Message
                              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-violet-600 to-primary"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.8 }}
                        />
                      </Button>
                    </motion.div>
                  </form>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
