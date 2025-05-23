"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Bell } from "lucide-react"

export default function NotificationToast() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show notification after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    // Hide notification after 15 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 15000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 bg-neutral-900 border border-neutral-800 shadow-lg p-4 max-w-xs w-full rounded-lg"
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-white text-black p-2 rounded-full mr-3">
              <Bell size={16} />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-sm mb-1">Thanks for visiting my portfolio!</h4>
              <p className="text-neutral-400 text-xs">
                Feel free to explore my projects and get in touch if you'd like to collaborate.
              </p>
            </div>
            <button
              onClick={handleClose}
              className="text-neutral-500 hover:text-white transition-colors ml-2"
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
