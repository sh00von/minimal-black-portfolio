"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export default function Blog() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  const blogPosts = [
    {
      id: 1,
      title: "Building a Neural Network from Scratch in JavaScript",
      excerpt:
        "Learn how to implement a simple neural network using only vanilla JavaScript, with step-by-step explanations of the math behind it.",
      image: "/placeholder.svg?height=400&width=600",
      date: "May 15, 2023",
      readTime: "8 min read",
      category: "Machine Learning",
      slug: "neural-network-javascript",
    },
    {
      id: 2,
      title: "Advanced React Patterns for Scalable Applications",
      excerpt:
        "Explore advanced React patterns like compound components, render props, and hooks that will help you build more maintainable React applications.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 3, 2023",
      readTime: "12 min read",
      category: "Web Development",
      slug: "advanced-react-patterns",
    },
    {
      id: 3,
      title: "Ethical Hacking: Finding Vulnerabilities in Web Applications",
      excerpt:
        "A comprehensive guide to identifying common security vulnerabilities in web applications and how to fix them.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 21, 2023",
      readTime: "10 min read",
      category: "Security",
      slug: "ethical-hacking-web-apps",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block py-1 px-3 border border-neutral-700 text-neutral-400 text-xs tracking-widest mb-6">
            BLOG
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Latest Articles</h2>
          <p className="text-neutral-400">
            Thoughts, tutorials, and insights on web development, machine learning, and cybersecurity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[3/2] mb-4 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredPost === post.id ? "scale-105 grayscale-0" : "grayscale"
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block py-1 px-2 bg-white text-black text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-xs text-neutral-500 mb-2 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3
                  className={`text-xl font-bold mb-2 transition-colors ${
                    hoveredPost === post.id ? "text-white" : "text-neutral-200"
                  }`}
                >
                  {post.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-4">{post.excerpt}</p>
                <span
                  className={`inline-flex items-center text-sm font-medium transition-colors ${
                    hoveredPost === post.id ? "text-white" : "text-neutral-400"
                  }`}
                >
                  Read More
                  <ArrowRight
                    className={`ml-1 h-3 w-3 transition-transform ${hoveredPost === post.id ? "translate-x-1" : ""}`}
                  />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="group border-neutral-700 text-white hover:bg-neutral-800 rounded-none inline-flex items-center"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
