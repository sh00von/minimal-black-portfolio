"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("development")

  const skillCategories = [
    {
      id: "development",
      title: "Development",
      skills: [
        { name: "JavaScript", color: "border-yellow-500" },
        { name: "TypeScript", color: "border-blue-500" },
        { name: "React", color: "border-cyan-500" },
        { name: "Next.js", color: "border-white" },
        { name: "Node.js", color: "border-green-500" },
        { name: "HTML", color: "border-orange-500" },
        { name: "CSS", color: "border-blue-400" },
        { name: "Tailwind CSS", color: "border-cyan-400" },
        { name: "Redux", color: "border-purple-500" },
        { name: "GraphQL", color: "border-pink-500" },
        { name: "REST API", color: "border-green-400" },
        { name: "Webpack", color: "border-blue-300" },
      ],
    },
    {
      id: "engineering",
      title: "Engineering",
      skills: [
        { name: "System Design", color: "border-blue-500" },
        { name: "Architecture", color: "border-indigo-500" },
        { name: "DevOps", color: "border-orange-500" },
        { name: "AWS", color: "border-yellow-600" },
        { name: "CI/CD", color: "border-green-500" },
        { name: "Docker", color: "border-blue-400" },
        { name: "Kubernetes", color: "border-blue-500" },
        { name: "Git", color: "border-orange-600" },
        { name: "Microservices", color: "border-green-400" },
        { name: "Serverless", color: "border-yellow-500" },
        { name: "Testing", color: "border-red-500" },
        { name: "Performance", color: "border-purple-500" },
      ],
    },
    {
      id: "machine-learning",
      title: "ML/AI",
      skills: [
        { name: "TensorFlow", color: "border-orange-500" },
        { name: "PyTorch", color: "border-red-500" },
        { name: "NLP", color: "border-green-500" },
        { name: "Computer Vision", color: "border-blue-500" },
        { name: "Data Analysis", color: "border-yellow-500" },
        { name: "Python", color: "border-blue-400" },
        { name: "Scikit-learn", color: "border-orange-400" },
        { name: "Pandas", color: "border-purple-500" },
        { name: "NumPy", color: "border-blue-300" },
        { name: "Jupyter", color: "border-orange-500" },
        { name: "Data Visualization", color: "border-green-400" },
        { name: "Deep Learning", color: "border-red-400" },
      ],
    },
    {
      id: "security",
      title: "Security",
      skills: [
        { name: "Penetration Testing", color: "border-red-500" },
        { name: "Vulnerability Assessment", color: "border-orange-500" },
        { name: "Network Security", color: "border-blue-500" },
        { name: "Cryptography", color: "border-green-500" },
        { name: "Security Auditing", color: "border-yellow-500" },
        { name: "Ethical Hacking", color: "border-purple-500" },
        { name: "OWASP", color: "border-red-400" },
        { name: "Secure Coding", color: "border-green-400" },
        { name: "Threat Modeling", color: "border-blue-400" },
        { name: "Incident Response", color: "border-orange-400" },
        { name: "Security Tools", color: "border-indigo-500" },
        { name: "Forensics", color: "border-purple-400" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24">
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
              SKILLS
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tight leading-none text-center">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300"
                style={{
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)",
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
                }}
              >
                Technical
              </span>
              <br />
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500"
                style={{
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.05)",
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.05)",
                }}
              >
                Expertise
              </span>
            </h2>
          </div>
          <p className="text-neutral-400 text-base sm:text-lg">
            A comprehensive overview of my skills and technologies across various domains.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="development" className="w-full" onValueChange={(value) => setActiveCategory(value)}>
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-8 bg-transparent gap-2 h-auto p-0">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-white data-[state=active]:text-black rounded-none border border-neutral-800 data-[state=active]:border-white py-3 px-4 text-sm"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="border border-neutral-800 p-6 sm:p-8"
                >
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Badge
                          variant="outline"
                          className={`text-sm py-2 px-4 bg-neutral-900 hover:bg-neutral-800 transition-colors ${skill.color} border-l-2`}
                        >
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {activeCategory === "development" && (
                    <>
                      <div className="bg-neutral-900 border border-neutral-800 p-4 text-center">
                        <h3 className="text-xl font-bold mb-1">5+</h3>
                        <p className="text-neutral-500 text-sm">Years Frontend</p>
                      </div>
                      <div className="bg-neutral-900 border border-neutral-800 p-4 text-center">
                        <h3 className="text-xl font-bold mb-1">4+</h3>
                        <p className="text-neutral-500 text-sm">Years Backend</p>
                      </div>
                      <div className="bg-neutral-900 border border-neutral-800 p-4 text-center">
                        <h3 className="text-xl font-bold mb-1">20+</h3>
                        <p className="text-neutral-500 text-sm">Web Projects</p>
                      </div>
                      <div className="bg-neutral-900 border border-neutral-800 p-4 text-center">
                        <h3 className="text-xl font-bold mb-1">10+</h3>
                        <p className="text-neutral-500 text-sm">Libraries Used</p>
                      </div>
                    </>
                  )}

                  {activeCategory === "engineering" && (
                    <>
                      <div className="bg-neutral-900 border border-neutral-800 p-4 text-center">
                        <h3 className="text-xl font-bold mb-1">3+</h3>
                        <p className="text-neutral-500 text-sm">Years DevOps</p>
                      </div>
                      <div className="bg-neutral-900 border border-neutral-800 p-4 text-center">
                        <h3 className="text-xl font-bold mb-1">15+</h3>
                        <p className="text-neutral-500 text-sm">Systems Designed</p>
                      </div>
                      <div className="bg-neutral-900 border border-neutral-800 p-4 text-center">
                        <h3 className="text-xl font-bold mb-1">5+</h3>
                        <p className="text-neutral-500 text-sm">Cloud Platforms</p>
                      </div>
                      <div className="bg-neutral-900 border border-neutral-800 p-4 text-center">
                        <h3 className="text-xl font-bold mb-1">8+</h3>
                        <p className="text-neutral-500 text-sm">CI/CD Pipelines</p>
                      </div>
                    </>
                  )}

                  {activeCategory === "machine-learning" && (
                    <>
                      <div className="bg-neutral-900 border border-neutral-800 p-4 text-center">
                        <h3 className="text-xl font-bold mb-1">3+</h3>
                        <p className="text-neutral-500 text-sm">Years ML/AI</p>
                      </div>
                      <div className="bg-neutral-900 border border-neutral-800 p-4 text-center">
                        <h3 className="text-xl font-bold mb-1">10+</h3>
                        <p className="text-neutral-500 text-sm">ML Models</p>
                      </div>
                      <div className="bg-neutral-900 border border-neutral-800 p-4 text-center">
                        <h3 className="text-xl font-bold mb-1">5+</h3>
                        <p className="text-neutral-500 text-sm">Research Papers</p>
                      </div>
                      <div className="bg-neutral-900 border border-neutral-800 p-4 text-center">
                        <h3 className="text-xl font-bold mb-1">3+</h3>
                        <p className="text-neutral-500 text-sm">ML Frameworks</p>
                      </div>
                    </>
                  )}

                  {activeCategory === "security" && (
                    <>
                      <div className="bg-neutral-900 border border-neutral-800 p-4 text-center">
                        <h3 className="text-xl font-bold mb-1">4+</h3>
                        <p className="text-neutral-500 text-sm">Years Security</p>
                      </div>
                      <div className="bg-neutral-900 border border-neutral-800 p-4 text-center">
                        <h3 className="text-xl font-bold mb-1">15+</h3>
                        <p className="text-neutral-500 text-sm">CTF Competitions</p>
                      </div>
                      <div className="bg-neutral-900 border border-neutral-800 p-4 text-center">
                        <h3 className="text-xl font-bold mb-1">20+</h3>
                        <p className="text-neutral-500 text-sm">Vulnerabilities Found</p>
                      </div>
                      <div className="bg-neutral-900 border border-neutral-800 p-4 text-center">
                        <h3 className="text-xl font-bold mb-1">3+</h3>
                        <p className="text-neutral-500 text-sm">Security Certifications</p>
                      </div>
                    </>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
