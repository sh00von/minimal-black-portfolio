"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { getFeaturedProjects } from "@/lib/data"

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all")
  const [projects, setProjects] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getFeaturedProjects()
      setProjects(projectsData)
      setIsLoading(false)
    }

    fetchProjects()
  }, [])

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag: string) => tag.toLowerCase().includes(filter.toLowerCase())),
        )

  if (isLoading) {
    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-zinc-400">
              A selection of my most significant work across various domains and technologies.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-12 h-12 border-t-2 border-emerald-500 rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-zinc-400 mb-8">
            A selection of my most significant work across various domains and technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              All
            </Button>
            <Button
              variant={filter === "web" ? "default" : "outline"}
              onClick={() => setFilter("web")}
              className={filter === "web" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              Web Dev
            </Button>
            <Button
              variant={filter === "engineering" ? "default" : "outline"}
              onClick={() => setFilter("engineering")}
              className={filter === "engineering" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              Engineering
            </Button>
            <Button
              variant={filter === "machine-learning" ? "default" : "outline"}
              onClick={() => setFilter("machine-learning")}
              className={filter === "machine-learning" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              ML/AI
            </Button>
            <Button
              variant={filter === "security" ? "default" : "outline"}
              onClick={() => setFilter("security")}
              className={filter === "security" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              Security
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline" className="text-xs border-emerald-500/30 text-emerald-400">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="gap-1 bg-emerald-600 hover:bg-emerald-700" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
