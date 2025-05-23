"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Building, Users, Trophy, Rocket } from "lucide-react"

export default function Startups() {
  const organizations = [
    {
      title: "NEXITE",
      role: "CEO & Founder",
      period: "2023 - Present",
      description:
        "Leading a technology startup focused on developing innovative solutions for environmental monitoring and smart city infrastructure.",
      achievements: [
        "Secured $500K in seed funding",
        "Built a team of 15+ engineers and researchers",
        "Launched 3 successful products in the market",
        "Established partnerships with 10+ municipalities",
      ],
      icon: <Building className="h-6 w-6" />,
      status: "Active",
      color: "border-green-500",
    },
    {
      title: "Ongko",
      role: "President & Founder",
      period: "2022 - Present",
      description:
        "Founded and leading a student organization focused on promoting entrepreneurship and innovation among university students.",
      achievements: [
        "Organized 20+ workshops and seminars",
        "Mentored 100+ student entrepreneurs",
        "Facilitated $50K+ in student startup funding",
        "Established network of 500+ members",
      ],
      icon: <Users className="h-6 w-6" />,
      status: "Active",
      color: "border-blue-500",
    },
    {
      title: "CUET Cyber Security Club",
      role: "President & Founding Member",
      period: "2021 - Present",
      description:
        "Co-founded and leading the cybersecurity club at CUET, promoting security awareness and organizing competitive events.",
      achievements: [
        "Organized 15+ CTF competitions",
        "Trained 200+ students in cybersecurity",
        "Won 5 national cybersecurity competitions",
        "Established partnerships with security firms",
      ],
      icon: <Trophy className="h-6 w-6" />,
      status: "Active",
      color: "border-red-500",
    },
    {
      title: "TechVenture Incubator",
      role: "Technical Advisor",
      period: "2023 - Present",
      description:
        "Providing technical guidance and mentorship to early-stage startups in the technology and environmental sectors.",
      achievements: [
        "Advised 25+ startup teams",
        "Helped raise $2M+ in total funding",
        "Conducted 50+ technical reviews",
        "Facilitated 10+ successful product launches",
      ],
      icon: <Rocket className="h-6 w-6" />,
      status: "Active",
      color: "border-purple-500",
    },
  ]

  return (
    <section id="startups" className="py-16 sm:py-20 lg:py-24">
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
              LEADERSHIP
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tight leading-none text-center">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300"
                style={{
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)",
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
                }}
              >
                Startups &
              </span>
              <br />
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500"
                style={{
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.05)",
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.05)",
                }}
              >
                Organizations
              </span>
            </h2>
          </div>
          <p className="text-neutral-400 text-base sm:text-lg">
            Leading innovative ventures and building communities that drive technological advancement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {organizations.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-neutral-900 border border-neutral-800 hover:${org.color} transition-colors p-6`}
            >
              <div className="flex items-start mb-4">
                <div className="text-white mr-4 mt-1">{org.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold">{org.title}</h3>
                    <Badge
                      variant="outline"
                      className={`${org.color} text-xs`}
                      style={{ borderColor: org.color.replace("border-", "") }}
                    >
                      {org.status}
                    </Badge>
                  </div>
                  <p className="text-neutral-400 font-medium text-sm mb-1">{org.role}</p>
                  <p className="text-neutral-500 text-xs mb-3">{org.period}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">{org.description}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {org.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-neutral-400 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
