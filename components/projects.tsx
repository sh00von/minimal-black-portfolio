"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight, Eye } from "lucide-react"
import ProjectModal from "./project-modal"
import Link from "next/link"
import { getFeaturedProjects } from "@/lib/data"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  if (isLoading) {
    return (
      <section id="projects" className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <span className="inline-block py-2 px-4 border border-neutral-700 text-neutral-400 text-xs sm:text-sm tracking-widest mb-6">
              PORTFOLIO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Featured Projects</h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              A selection of my most significant work across various domains and technologies.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-12 h-12 border-t-2 border-white rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section id="projects" className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-12 sm:mb-16 text-center"
          >
            <div className="mb-8">
              <span className="inline-block py-2 px-4 border border-neutral-700 text-neutral-400 text-xs sm:text-sm tracking-widest mb-6">
                PORTFOLIO
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tight leading-none text-center">
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300"
                  style={{
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)",
                    textShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  Featured
                </span>
                <br />
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500"
                  style={{
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.05)",
                    textShadow: "0 0 30px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  Projects
                </span>
              </h2>
            </div>
            <p className="text-neutral-400 text-base sm:text-lg">
              A selection of my most significant work across various domains and technologies.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-neutral-900 border border-neutral-800 p-6 hover:border-neutral-700 transition-colors cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="mb-4 pr-16">
                  {" "}
                  {/* Added right padding to prevent overlap */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm sm:text-base mb-4 line-clamp-3">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline" className="border-neutral-700 text-neutral-400 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-neutral-400 hover:text-white transition-colors p-1"
                      aria-label={`View ${project.title} code on GitHub`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.link}
                      className="text-neutral-400 hover:text-white transition-colors p-1"
                      aria-label={`View ${project.title} live demo`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <div className="flex items-center text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    <Eye size={16} className="mr-1" />
                    <span className="text-xs">View Details</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      project.status === "Completed" || project.status === "Live" || project.status === "Deployed"
                        ? "border-green-500 text-green-400"
                        : project.status === "In Production" || project.status === "Active"
                          ? "border-blue-500 text-blue-400"
                          : "border-yellow-500 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/projects">
              <Button
                variant="outline"
                className="group border-neutral-700 text-white hover:bg-neutral-800 rounded-none inline-flex items-center px-6 py-3"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
