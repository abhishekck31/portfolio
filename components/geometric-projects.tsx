"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github?: string
  details?: string
  type: string
}

export function GeometricProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Site of Motion Designer",
      description: "A portfolio site for a motion designer, showcasing their work and services.",
      image: "/projects/nageshportfolio.png?height=600&width=800&text=Annapoornaa+Interio",
      tags: ["React", "Next.js", "Tailwind CSS", "GSAP"],
      link: "https://nageshpabbewar.com/",
      github: "https://github.com/abhishekck31/",
      details:
        "Developed a modern and responsive portfolio website for a motion designer, focusing on showcasing their creative work and professional services. The site utilizes Next.js for server-side rendering and optimized performance, React for a dynamic user interface, Tailwind CSS for streamlined styling, and GSAP for fluid and engaging animations, providing an immersive experience for visitors.",
      type: "Client Project",
    },
    {
      id: 2,
      title: "Book My DSLR",
      description: "Building a platform for a local business to rent cameras and equipment.",
      image: "/projects/bookmydslr.png?height=600&width=800&text=Book+My+DSLR",
      tags: ["React", "Next.js", "Tailwind CSS", "Firebase"],
      link: "https://www.bookmydslr.com/",
      github: "https://github.com/abhishekck31/bookmydslr",
      details:
        "Developed a full-featured camera and equipment rental platform for a local photography business. The application includes inventory management, booking system, user authentication, and payment integration. Responsive design ensures a seamless experience across all devices.",
      type: "Client Project",
    },
    {
      id: 3,
      title: "Campus Navigator",
      description: "A college tour app developed during the March Mania Hackathon 2025.",
      image: "/projects/campusnavigatorthumbnail.png?height=600&width=800&text=Campus+Navigator",
      tags: ["React", "Tailwind CSS", "Node.js"],
      link: "https://campus-navigatorr.vercel.app/",
      github: "https://github.com/abhishekck31/",
      details:
        "Created an interactive 3D campus tour application during the March Mania Hackathon 2025. The app provides virtual navigation through college facilities, information about departments, and scheduling for in-person tours. Implemented using Three.js for 3D visualization and React for the user interface.",
      type: "Hackathon Project",
    },
    {
      id: 4,
      title: "Timeline Explorer",
      description: "An educational project visualizer built in a hackathon hosted at SJCIT.",
      image: "/projects/timelineexplorerthumbnail.png?height=600&width=800&text=Timeline+Explorer",
      tags: ["React", "Tailwind CSS",],
      link: "https://timelineexplorer.vercel.app/",
      github: "https://github.com/abhishekck31/",
      details:
        "Developed an interactive timeline visualization tool for educational purposes during a hackathon at SJCIT. The application allows users to explore historical events, scientific discoveries, and technological advancements through an intuitive, interactive timeline interface. Implemented using D3.js for data visualization and React for the user interface.",
      type: "Hackathon Project",
    },
    {
      id: 5,
      title: "Suyog Infra Solutions",
      description: "Interior and Infrastructure company website.",
      image: "/projects/suyoginfra.png?height=600&width=800&text=Suyog+Infra+Solutions",
      tags: ["React", "Tailwind CSS",],
      link: "https://www.suyoginfrasolutions.com/",
      github: "https://github.com/abhishekck31/",
      details:
        "Developed a modern and responsive website for Suyog Infra Solutions, an interior and infrastructure company. The site features a clean, professional design with interactive elements, project showcases, and contact forms. Implemented SEO best practices to improve visibility and organic traffic.",
      type: "Client Project",
    },
    {
      id: 6,
      title: "RK Doors - Door Company Website",
      description: "Door Company Website.",
      image: "/projects/rkdoor.png?height=600&width=800&text=RK+Doors",
      tags: ["React", "Tailwind CSS",],
      link: "https://www.rkdoor.com/",
      github: "https://github.com/abhishekck31/",
      details:
        "Developed a modern and responsive website for Suyog Infra Solutions, an interior and infrastructure company. The site features a clean, professional design with interactive elements, project showcases, and contact forms. Implemented SEO best practices to improve visibility and organic traffic.",
      type: "Client Project",
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mx-4 text-center relative text-slate-800">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border-primary/10 h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-primary/20 relative group"
            >
              {/* Project Type Badge */}
              <div className="absolute top-4 left-4 z-20">
                <Badge variant="secondary" className="bg-primary/80 text-white backdrop-blur-sm border-none">
                  {project.type}
                </Badge>
              </div>

              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent" />

                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 2 && (
                    <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/20">
                      +{project.tags.length - 2}
                    </Badge>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary hover:bg-primary/10 -ml-2"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>

                  <div className="flex gap-2">
                    {project.github && (
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-primary/50 text-primary hover:bg-primary/10"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-primary/50 text-primary hover:bg-primary/10"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-2xl bg-white/95 backdrop-blur-md border-primary/20 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
            {selectedProject && (
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={800}
                height={450}
                className="object-cover w-full h-full"
              />
            )}
          </div>

          <DialogDescription className="text-slate-700 text-base">{selectedProject?.details}</DialogDescription>

          <div className="flex flex-wrap gap-2 mt-4">
            {selectedProject?.tags.map((tag) => (
              <Badge
                key={tag}
                className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex justify-end mt-4 gap-3">
            {selectedProject?.github && (
              <Link href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                  View Code <Github className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
            {selectedProject && (
              <Link href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300">
                  Visit Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
