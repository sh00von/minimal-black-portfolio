"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  className?: string
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative h-24 ${className}`}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-16 bg-neutral-800"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-neutral-800 bg-[#111]"></div>
    </motion.div>
  )
}
