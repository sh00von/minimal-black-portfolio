"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap } from "lucide-react"
import { useEffect, useState } from "react"
import { getPersonalInfo } from "@/lib/data"

export default function About() {
  const [personalInfo, setPersonalInfo] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPersonalInfo()
      setPersonalInfo(data)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-12 h-12 border-t-2 border-white rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square relative overflow-hidden max-w-md mx-auto lg:max-w-none">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 border border-neutral-800"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-2/3 h-2/3 border border-neutral-800 z-0 hidden sm:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="mb-8">
              <span className="inline-block py-2 px-4 border border-neutral-700 text-neutral-400 text-xs sm:text-sm tracking-widest mb-6">
                ABOUT ME
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 tracking-tight leading-none">
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300 drop-shadow-2xl"
                  style={{
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)",
                    textShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  I'm a developer,
                </span>
                <br />
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500"
                  style={{
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.05)",
                    textShadow: "0 0 30px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  engineer, and lifelong learner
                </span>
              </h2>
            </div>

            <div className="mb-6 p-4 bg-neutral-900 border border-neutral-800">
              <div className="flex items-center mb-2">
                <GraduationCap className="h-5 w-5 text-white mr-2" />
                <h3 className="font-medium">Education</h3>
              </div>
              <p className="text-neutral-400 text-sm">Student at {personalInfo.education.university}</p>
              <p className="text-neutral-500 text-sm">Department of {personalInfo.education.field}</p>
            </div>

            <p className="text-neutral-400 mb-6 text-base sm:text-lg leading-relaxed">{personalInfo.bio}</p>
            <p className="text-neutral-400 mb-8 text-base sm:text-lg leading-relaxed">{personalInfo.longBio}</p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
              {personalInfo.stats.map((stat: any, index: number) => (
                <div key={index} className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-neutral-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
            <Button className="group bg-white text-black hover:bg-neutral-200 rounded-none w-full sm:w-auto">
              More About Me
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
