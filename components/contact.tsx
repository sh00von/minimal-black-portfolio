"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
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
              CONTACT
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tight leading-none text-center">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300"
                style={{
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)",
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
                }}
              >
                Get In
              </span>
              <span
                className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500"
                style={{
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.05)",
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.05)",
                }}
              >
                Touch
              </span>
            </h2>
          </div>
          <p className="text-neutral-400 text-base sm:text-lg">
            Have a project in mind or want to discuss potential collaborations? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-neutral-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-neutral-400">shovon@example.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-neutral-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-neutral-400">San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-neutral-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-neutral-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 border border-neutral-800">
              <h4 className="text-lg font-bold mb-4">Let's work together</h4>
              <p className="text-neutral-400 mb-4 text-sm sm:text-base">
                I'm open to freelance opportunities, consulting work, and full-time positions. If you have a project
                that needs my expertise, don't hesitate to reach out.
              </p>
              <p className="text-neutral-500 text-sm">
                Current availability: <span className="text-white">Limited Availability</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSubmitted ? (
                <div className="p-4 sm:p-6 border border-neutral-800 bg-neutral-900">
                  <h4 className="text-lg font-bold mb-2">Message Sent!</h4>
                  <p className="text-neutral-400">
                    Thank you for your message. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-transparent border-neutral-800 focus:border-white rounded-none h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="shovon@example.com"
                      required
                      className="bg-transparent border-neutral-800 focus:border-white rounded-none h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                      className="bg-transparent border-neutral-800 focus:border-white rounded-none h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="bg-transparent border-neutral-800 focus:border-white rounded-none resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black hover:bg-neutral-200 rounded-none h-12"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
