"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { getTestimonials } from "@/lib/data"

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestimonials()
      setTestimonials(data)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (!autoplay || testimonials.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  if (isLoading) {
    return (
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-12 h-12 border-t-2 border-white rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    )
  }

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tight leading-none text-center">
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300"
              style={{
                WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)",
                textShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
              }}
            >
              What People
            </span>
            <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500"
              style={{
                WebkitTextStroke: "2px rgba(255, 255, 255, 0.05)",
                textShadow: "0 0 30px rgba(255, 255, 255, 0.05)",
              }}
            >
              Say
            </span>
          </h2>
          <p className="text-white/70">Testimonials from clients and colleagues I've had the pleasure to work with.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 relative">
                    <Quote className="absolute top-6 left-6 h-12 w-12 text-white/10" />
                    <div className="relative z-10">
                      <p className="text-white/90 text-lg mb-6 italic">"{testimonial.text}"</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
                          <div className="rounded-full overflow-hidden w-full h-full relative">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.author}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{testimonial.author}</h4>
                          <p className="text-white/70 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 border-white/20 text-white hover:bg-white/10 z-10"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 md:translate-x-6 border-white/20 text-white hover:bg-white/10 z-10"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === currentIndex ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-white/30"
                }`}
                onClick={() => {
                  setAutoplay(false)
                  setCurrentIndex(index)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
