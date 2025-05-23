"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ExternalLink, Github, Search, Filter, Eye } from "lucide-react"
import ProjectModal from "@/components/project-modal"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getAllProjects, getProjectCategories } from "@/lib/data"

export default function AllProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [allProjects, setAllProjects] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await getAllProjects()
      const categoriesData = await getProjectCategories()
      setAllProjects(projectsData)
      setCategories(categoriesData)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesFilter = selectedFilter === "all" || project.category === selectedFilter

    return matchesSearch && matchesFilter
  })

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
      <div className="bg-[#111] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-t-2 border-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-400">Loading projects...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#111] text-white min-h-screen">
      <Navbar />

      <main className="pt-20">
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto mb-12 sm:mb-16 text-center"
            >
              <div className="mb-8">
                <span className="inline-block py-2 px-4 border border-neutral-700 text-neutral-400 text-xs sm:text-sm tracking-widest mb-6">
                  ALL PROJECTS
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tight leading-none text-center">
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300"
                    style={{
                      WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)",
                      textShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    Complete
                  </span>
                  <br />
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500"
                    style={{
                      WebkitTextStroke: "2px rgba(255, 255, 255, 0.05)",
                      textShadow: "0 0 30px rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    Portfolio
                  </span>
                </h1>
              </div>
              <p className="text-neutral-400 text-base sm:text-lg">
                Explore all my projects across different domains and technologies.
              </p>
            </motion.div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-neutral-900 border-neutral-800 focus:border-white rounded-none"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="text-neutral-500 h-4 w-4" />
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="bg-neutral-900 border border-neutral-800 text-white px-3 py-2 rounded-none focus:border-white"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-neutral-500 text-sm">
                Showing {filteredProjects.length} of {allProjects.length} projects
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-neutral-900 border border-neutral-800 p-6 hover:border-neutral-700 transition-colors cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="mb-4 pr-16">
                    {" "}
                    {/* Added right padding to prevent overlap */}
                    <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                    <p className="text-neutral-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag: string) => (
                      <Badge key={tag} variant="outline" className="border-neutral-700 text-neutral-400 text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="border-neutral-700 text-neutral-400 text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="text-neutral-400 hover:text-white transition-colors p-1"
                        aria-label={`View ${project.title} code on GitHub`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.link}
                        className="text-neutral-400 hover:text-white transition-colors p-1"
                        aria-label={`View ${project.title} live demo`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    <div className="flex items-center text-neutral-500 group-hover:text-neutral-300 transition-colors">
                      <Eye size={14} className="mr-1" />
                      <span className="text-xs">Details</span>
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

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-neutral-500">No projects found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
