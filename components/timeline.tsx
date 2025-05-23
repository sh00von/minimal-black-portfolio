"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Award } from "lucide-react"

export default function Timeline() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const timelineItems = [
    {
      year: "2023 - Present",
      title: "Senior Web Developer",
      company: "Tech Innovations Inc.",
      description: "Leading development of next-generation web applications using cutting-edge technologies.",
      icon: <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />,
      category: "work",
    },
    {
      year: "2022",
      title: "Machine Learning Certification",
      company: "AI Institute",
      description: "Advanced certification in machine learning algorithms and neural networks.",
      icon: <Award className="h-4 w-4 sm:h-5 sm:w-5" />,
      category: "education",
    },
    {
      year: "2020 - 2023",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed and maintained complex web applications for enterprise clients.",
      icon: <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />,
      category: "work",
    },
    {
      year: "2019",
      title: "Master's Degree in Computer Science",
      company: "Tech University",
      description: "Specialized in artificial intelligence and cybersecurity.",
      icon: <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />,
      category: "education",
    },
    {
      year: "2017 - 2020",
      title: "Junior Developer",
      company: "StartUp Ventures",
      description: "Worked on frontend development and UI/UX design for mobile applications.",
      icon: <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />,
      category: "work",
    },
    {
      year: "2017",
      title: "Bachelor's Degree in Computer Engineering",
      company: "State University",
      description: "Graduated with honors. Focused on software engineering and network security.",
      icon: <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />,
      category: "education",
    },
  ]

  return (
    <section id="timeline" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
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
              EXPERIENCE
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tight leading-none text-center">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300"
                style={{
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)",
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
                }}
              >
                My
              </span>
              <span
                className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500"
                style={{
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.05)",
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.05)",
                }}
              >
                Journey
              </span>
            </h2>
          </div>
          <p className="text-neutral-400 text-base sm:text-lg">
            A timeline of my professional experience and educational background.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline center line - hidden on mobile, shown on desktop */}
            <div className="absolute left-4 sm:left-8 lg:left-1/2 top-0 bottom-0 w-[1px] bg-neutral-800 lg:transform lg:translate-x-[-0.5px]"></div>

            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-8 sm:mb-12 lg:mb-16 pl-12 sm:pl-16 lg:pl-0 ${
                  index % 2 === 0 ? "lg:pr-16 lg:text-right lg:ml-0 lg:mr-auto" : "lg:pl-16 lg:ml-auto lg:mr-0"
                } lg:w-1/2`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  className={`absolute left-4 sm:left-8 lg:left-auto ${
                    index % 2 === 0 ? "lg:right-0" : "lg:left-0"
                  } top-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-neutral-700 bg-[#111] z-10 transform translate-x-[-8px] sm:translate-x-[-10px] lg:translate-x-[-10px] ${
                    hoveredItem === index ? "border-white" : ""
                  } transition-colors`}
                >
                  <div
                    className={`absolute inset-[2px] sm:inset-[3px] rounded-full ${
                      hoveredItem === index ? "bg-white" : "bg-neutral-800"
                    } transition-colors`}
                  ></div>
                </div>

                <div
                  className={`border-l-2 lg:border-l-0 ${
                    index % 2 === 0 ? "lg:border-r-2" : "lg:border-l-2"
                  } border-neutral-800 pl-6 sm:pl-8 ${index % 2 === 0 ? "lg:pl-0 lg:pr-6 xl:pr-8" : "lg:pr-0"} ${
                    hoveredItem === index ? "border-white" : ""
                  } transition-colors`}
                >
                  <span className="inline-block py-1 px-2 sm:px-3 border border-neutral-700 text-neutral-400 text-xs tracking-widest mb-3 font-mono">
                    {item.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-neutral-400 mb-2 sm:mb-3">{item.company}</p>
                  <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
