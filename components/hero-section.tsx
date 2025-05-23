"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, Shield, Brain } from "lucide-react"
import Link from "next/link"
import { getPersonalInfo } from "@/lib/data"

export default function HeroSection() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [roles, setRoles] = useState<string[]>([])
  const [currentRole, setCurrentRole] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPersonalInfo()
      if (data && data.roles) {
        setRoles(data.roles)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (isLoading || roles.length === 0) return

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
      setIndex(0)
      setText("")
    }, 3000)

    return () => clearInterval(interval)
  }, [isLoading, roles])

  useEffect(() => {
    if (isLoading || roles.length === 0) return

    if (index < roles[currentRole].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[currentRole][index])
        setIndex((prev) => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [index, currentRole, isLoading, roles])

  if (isLoading) {
    return (
      <section id="about" className="relative pt-20 pb-16 overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 flex justify-center items-center min-h-[50vh]">
          <div className="w-12 h-12 border-t-2 border-emerald-500 rounded-full animate-spin"></div>
        </div>
      </section>
    )
  }

  return (
    <section id="about" className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0,transparent_70%)]"></div>
        <div className="grid grid-cols-8 h-full w-full opacity-5">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-zinc-700"></div>
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Turning Complex Problems Into
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                {" "}
                Elegant Solutions
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl text-zinc-400 mb-8">
              I'm a <span className="text-emerald-500 font-mono h-8 inline-block">{text}</span>
              <span className="animate-blink">|</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link href="#projects">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10">
                Contact Me
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-colors">
              <Code className="h-8 w-8 text-emerald-500 mb-2" />
              <h3 className="font-medium">Web Dev</h3>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-colors">
              <Database className="h-8 w-8 text-emerald-500 mb-2" />
              <h3 className="font-medium">Engineering</h3>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-colors">
              <Brain className="h-8 w-8 text-emerald-500 mb-2" />
              <h3 className="font-medium">ML/AI</h3>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-colors">
              <Shield className="h-8 w-8 text-emerald-500 mb-2" />
              <h3 className="font-medium">Security</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
