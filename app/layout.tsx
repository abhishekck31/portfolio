import type React from "react"
import "@/app/globals.css"
import { Sora } from "next/font/google"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

export const metadata = {
  title: "Abhishek CK | Creative Developer",
  description: "Portfolio of Abhishek CK - B.Tech IT Student, Web Developer, SEO Specialist & Social Media Strategist",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={`${sora.variable} font-sans`}>{children}</body>
    </html>
  )
}
