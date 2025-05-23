"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ExternalLink, Github, Calendar, Clock, Users } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  tags: string[]
  link: string
  github: string
  duration: string
  team: string
  status: string
  features: string[]
  challenges: string[]
  technologies: string[]
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 sm:inset-8 lg:inset-16 bg-neutral-900 border border-neutral-800 z-50 overflow-y-auto"
          >
            <div className="sticky top-0 bg-neutral-900 border-b border-neutral-800 p-4 sm:p-6 flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold">{project.title}</h2>
              <Button variant="ghost" size="icon" onClick={onClose} className="text-neutral-400 hover:text-white">
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-3">Project Overview</h3>
                    <p className="text-neutral-400 leading-relaxed">{project.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-neutral-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3">Technical Challenges</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-neutral-500 mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-neutral-400">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-neutral-700 text-neutral-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-neutral-800/50 border border-neutral-700 p-4">
                    <h3 className="text-lg font-bold mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-neutral-500 mr-2" />
                        <span className="text-sm text-neutral-400">{project.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-neutral-500 mr-2" />
                        <span className="text-sm text-neutral-400">{project.team}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-neutral-500 mr-2" />
                        <span className="text-sm text-neutral-400">{project.status}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-white text-black hover:bg-neutral-200 rounded-none" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-neutral-700 text-white hover:bg-neutral-800 rounded-none"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Source Code
                      </a>
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-neutral-700 text-neutral-300 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
