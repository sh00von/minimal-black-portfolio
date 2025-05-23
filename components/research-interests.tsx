"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Beaker, Lightbulb, Target } from "lucide-react"

export default function ResearchInterests() {
  const researchAreas = [
    {
      title: "Water Resources Management",
      description:
        "Developing AI-driven solutions for sustainable water resource management, including predictive modeling for water quality and availability.",
      icon: <Target className="h-6 w-6" />,
      keywords: ["Hydrology", "Water Quality", "Sustainability", "Predictive Modeling"],
    },
    {
      title: "Machine Learning in Environmental Engineering",
      description:
        "Applying deep learning and computer vision techniques to environmental monitoring and climate change mitigation strategies.",
      icon: <Beaker className="h-6 w-6" />,
      keywords: ["Deep Learning", "Computer Vision", "Climate Change", "Environmental Monitoring"],
    },
    {
      title: "Cybersecurity in Critical Infrastructure",
      description:
        "Researching security vulnerabilities and developing protection mechanisms for water treatment facilities and environmental monitoring systems.",
      icon: <Lightbulb className="h-6 w-6" />,
      keywords: ["Critical Infrastructure", "SCADA Security", "IoT Security", "Threat Detection"],
    },
    {
      title: "Smart Water Systems",
      description:
        "Designing intelligent water distribution networks using IoT sensors, real-time analytics, and automated control systems.",
      icon: <BookOpen className="h-6 w-6" />,
      keywords: ["IoT", "Smart Cities", "Real-time Analytics", "Automation"],
    },
  ]

  const publications = [
    {
      title: "AI-Driven Water Quality Prediction in Urban Environments",
      journal: "Journal of Environmental Engineering",
      year: "2024",
      status: "Under Review",
    },
    {
      title: "Cybersecurity Framework for Smart Water Infrastructure",
      journal: "Water Resources Research",
      year: "2023",
      status: "Published",
    },
    {
      title: "Machine Learning Approaches for Flood Prediction",
      journal: "Hydrological Sciences Journal",
      year: "2023",
      status: "Published",
    },
  ]

  return (
    <section id="research" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
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
              RESEARCH
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tight leading-none text-center">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300"
                style={{
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)",
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
                }}
              >
                Research
              </span>
              <br />
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500"
                style={{
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.05)",
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.05)",
                }}
              >
                Interests
              </span>
            </h2>
          </div>
          <p className="text-neutral-400 text-base sm:text-lg">
            Exploring the intersection of technology and environmental engineering to solve real-world challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900 border border-neutral-800 p-6 hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-start mb-4">
                <div className="text-white mr-4 mt-1">{area.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{area.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.keywords.map((keyword) => (
                      <Badge key={keyword} variant="outline" className="border-neutral-700 text-neutral-400 text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-8 text-center">Recent Publications</h3>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between"
              >
                <div className="mb-2 sm:mb-0">
                  <h4 className="font-medium mb-1">{pub.title}</h4>
                  <p className="text-neutral-400 text-sm">
                    {pub.journal} • {pub.year}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className={`w-fit ${
                    pub.status === "Published" ? "border-green-500 text-green-400" : "border-yellow-500 text-yellow-400"
                  }`}
                >
                  {pub.status}
                </Badge>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
