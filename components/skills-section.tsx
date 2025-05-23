"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const skills = [
    {
      category: "Web Development",
      items: [
        { name: "React/Next.js", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
    {
      category: "Engineering",
      items: [
        { name: "System Design", level: 85 },
        { name: "Architecture", level: 80 },
        { name: "DevOps", level: 75 },
        { name: "Cloud Services", level: 85 },
      ],
    },
    {
      category: "Machine Learning",
      items: [
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "NLP", level: 85 },
        { name: "Computer Vision", level: 70 },
      ],
    },
    {
      category: "Security",
      items: [
        { name: "Penetration Testing", level: 90 },
        { name: "Vulnerability Assessment", level: 85 },
        { name: "Network Security", level: 80 },
        { name: "Cryptography", level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-zinc-400">
            A diverse skill set built through years of learning, practice, and real-world application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-emerald-400">{skillGroup.category}</h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-zinc-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-zinc-700"/>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-4 text-center"
          >
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6">
              <h4 className="text-4xl font-bold text-emerald-400 mb-2">5+</h4>
              <p className="text-zinc-400 text-sm">Years of Experience</p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6">
              <h4 className="text-4xl font-bold text-emerald-400 mb-2">30+</h4>
              <p className="text-zinc-400 text-sm">Projects Completed</p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6">
              <h4 className="text-4xl font-bold text-emerald-400 mb-2">15+</h4>
              <p className="text-zinc-400 text-sm">CTF Competitions</p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6">
              <h4 className="text-4xl font-bold text-emerald-400 mb-2">3</h4>
              <p className="text-zinc-400 text-sm">Research Papers</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
