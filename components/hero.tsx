"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { getPersonalInfo, getSocialLinks } from "@/lib/data"

export default function Hero() {
  const [text, setText] = useState("")
  const [fullText, setFullText] = useState("I craft digital experiences with code.")
  const [showCursor, setShowCursor] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [socialLinks, setSocialLinks] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const personalData = await getPersonalInfo()
      const socialData = await getSocialLinks()
      setSocialLinks(socialData)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        // Start blinking cursor after typing is complete
        const blinkInterval = setInterval(() => {
          setShowCursor((prev) => !prev)
        }, 500)
        return () => clearInterval(blinkInterval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [fullText])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }[] = []

    const createParticles = () => {
      const particleCount = window.innerWidth < 768 ? 50 : 100
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.5,
        })
      }
    }

    createParticles()

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }
      })
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  if (isLoading) {
    return (
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="w-12 h-12 border-t-2 border-white rounded-full animate-spin"></div>
      </section>
    )
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-block py-2 px-4 border border-neutral-700 text-neutral-400 text-xs sm:text-sm tracking-widest mb-6 sm:mb-8">
              WEB DEVELOPER & ENGINEER
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight">
              Building digital products, brands, and experiences
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-8 sm:mb-12 text-neutral-400 h-8 font-mono">
              {text}
              {showCursor && <span className="text-white">|</span>}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12"
          >
            <Button className="bg-white text-black hover:bg-neutral-200 rounded-none px-6 py-3">View My Work</Button>
            <Button
              variant="outline"
              className="border-neutral-700 text-white hover:bg-neutral-800 rounded-none px-6 py-3"
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link: any) => (
              <Link
                key={link.platform}
                href={link.url}
                className="text-neutral-500 hover:text-white transition-colors p-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon === "Github" && <Github size={20} />}
                {link.icon === "Linkedin" && <Linkedin size={20} />}
                {link.icon === "Twitter" && <Twitter size={20} />}
                <span className="sr-only">{link.platform}</span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll to next section" className="p-2">
          <ArrowDown className="text-neutral-500 hover:text-white transition-colors" size={20} />
        </Link>
      </div>
    </section>
  )
}
