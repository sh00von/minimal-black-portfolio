"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Medal, Star, Target, Zap } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      category: "Academic Excellence",
      icon: <Award className="h-6 w-6" />,
      color: "border-yellow-500",
      items: [
        {
          title: "Dean's List",
          description: "Maintained GPA above 3.8 for 6 consecutive semesters",
          year: "2021-2024",
          type: "Academic",
        },
        {
          title: "Best Research Paper Award",
          description: "Water Resources Engineering Conference 2023",
          year: "2023",
          type: "Research",
        },
        {
          title: "Merit Scholarship",
          description: "Full tuition scholarship for academic excellence",
          year: "2021-2024",
          type: "Scholarship",
        },
      ],
    },
    {
      category: "Cybersecurity & CTF",
      icon: <Trophy className="h-6 w-6" />,
      color: "border-red-500",
      items: [
        {
          title: "National CTF Championship",
          description: "1st place in Bangladesh National Cybersecurity Competition",
          year: "2023",
          type: "Competition",
        },
        {
          title: "HackTheBox Top 1%",
          description: "Ranked in top 1% globally with 25+ machines pwned",
          year: "2023",
          type: "Platform",
        },
        {
          title: "Bug Bounty Hunter",
          description: "Discovered 15+ vulnerabilities in major platforms",
          year: "2022-2024",
          type: "Security",
        },
      ],
    },
    {
      category: "Entrepreneurship",
      icon: <Medal className="h-6 w-6" />,
      color: "border-green-500",
      items: [
        {
          title: "Startup Pitch Winner",
          description: "Won $50K funding at National Startup Competition",
          year: "2023",
          type: "Competition",
        },
        {
          title: "Young Entrepreneur Award",
          description: "Recognized by Bangladesh Startup Ecosystem",
          year: "2023",
          type: "Recognition",
        },
        {
          title: "Innovation Challenge",
          description: "1st place in CUET Innovation and Technology Fair",
          year: "2022",
          type: "Innovation",
        },
      ],
    },
    {
      category: "Technical Achievements",
      icon: <Star className="h-6 w-6" />,
      color: "border-blue-500",
      items: [
        {
          title: "Open Source Contributor",
          description: "500+ contributions to major open source projects",
          year: "2021-2024",
          type: "Development",
        },
        {
          title: "Machine Learning Certification",
          description: "Advanced ML certification from Stanford Online",
          year: "2023",
          type: "Certification",
        },
        {
          title: "AWS Solutions Architect",
          description: "Professional level cloud architecture certification",
          year: "2023",
          type: "Certification",
        },
      ],
    },
  ]

  const stats = [
    { label: "Awards Won", value: "25+", icon: <Trophy className="h-5 w-5" /> },
    { label: "Competitions", value: "40+", icon: <Target className="h-5 w-5" /> },
    { label: "Certifications", value: "15+", icon: <Medal className="h-5 w-5" /> },
    { label: "Recognition", value: "10+", icon: <Zap className="h-5 w-5" /> },
  ]

  return (
    <section id="achievements" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
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
              ACHIEVEMENTS
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tight leading-none text-center">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300"
                style={{
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)",
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
                }}
              >
                Awards &
              </span>
              <br />
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500"
                style={{
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.05)",
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.05)",
                }}
              >
                Recognition
              </span>
            </h2>
          </div>
          <p className="text-neutral-400 text-base sm:text-lg">
            Celebrating milestones and recognition across academic, technical, and entrepreneurial endeavors.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900 border border-neutral-800 p-4 sm:p-6 text-center"
            >
              <div className="flex justify-center mb-2 text-white">{stat.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-neutral-500 text-xs sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {achievements.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className={`bg-neutral-900 border border-neutral-800 hover:${category.color} transition-colors p-6`}
            >
              <div className="flex items-center mb-6">
                <div className="text-white mr-3">{category.icon}</div>
                <h3 className="text-lg font-bold">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-2 border-neutral-700 pl-4">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-medium text-sm sm:text-base">{item.title}</h4>
                      <Badge variant="outline" className="border-neutral-700 text-neutral-400 text-xs ml-2">
                        {item.type}
                      </Badge>
                    </div>
                    <p className="text-neutral-400 text-xs sm:text-sm mb-1">{item.description}</p>
                    <p className="text-neutral-500 text-xs">{item.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
