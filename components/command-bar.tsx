"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Command, Search, X, ArrowRight, Code, User, Mail, Briefcase, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CommandBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }

      if (isOpen) {
        if (e.key === "Escape") {
          setIsOpen(false)
        } else if (e.key === "ArrowDown") {
          e.preventDefault()
          setSelectedIndex((prev) => (prev + 1) % commands.length)
        } else if (e.key === "ArrowUp") {
          e.preventDefault()
          setSelectedIndex((prev) => (prev - 1 + commands.length) % commands.length)
        } else if (e.key === "Enter") {
          e.preventDefault()
          handleCommandSelect(commands[selectedIndex])
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, selectedIndex])

  const commands = [
    { id: "about", label: "About Me", icon: <User className="h-4 w-4" />, href: "#about" },
    { id: "skills", label: "Skills", icon: <Code className="h-4 w-4" />, href: "#skills" },
    { id: "timeline", label: "Timeline", icon: <Briefcase className="h-4 w-4" />, href: "#timeline" },
    { id: "projects", label: "Projects", icon: <Layers className="h-4 w-4" />, href: "#projects" },
    { id: "contact", label: "Contact", icon: <Mail className="h-4 w-4" />, href: "#contact" },
  ]

  const filteredCommands = commands.filter((command) => command.label.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleCommandSelect = (command: (typeof commands)[0]) => {
    setIsOpen(false)
    window.location.href = command.href
  }

  return (
    <>
      <button
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 p-3 bg-neutral-800 border border-neutral-700 rounded-full text-white hover:bg-neutral-700 transition-colors"
        onClick={() => setIsOpen(true)}
        aria-label="Open command bar"
      >
        <Command className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-sm sm:max-w-md mx-4 bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl z-50"
            >
              <div className="p-4 border-b border-neutral-800 flex items-center">
                <Search className="h-4 w-4 text-neutral-500 mr-2 flex-shrink-0" />
                <Input
                  type="text"
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-white placeholder:text-neutral-500 text-sm"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setSelectedIndex(0)
                  }}
                  autoFocus
                />
                <div className="hidden sm:flex items-center gap-1 ml-2">
                  <kbd className="px-2 py-1 text-xs bg-neutral-800 rounded text-neutral-400">ESC</kbd>
                </div>
              </div>

              <div className="py-2 max-h-60 sm:max-h-80 overflow-y-auto">
                {filteredCommands.length === 0 ? (
                  <div className="px-4 py-6 sm:py-8 text-center text-neutral-500 text-sm">No commands found</div>
                ) : (
                  filteredCommands.map((command, index) => (
                    <button
                      key={command.id}
                      className={`w-full px-4 py-3 flex items-center justify-between text-left ${
                        index === selectedIndex ? "bg-neutral-800" : "hover:bg-neutral-800"
                      } transition-colors`}
                      onClick={() => handleCommandSelect(command)}
                    >
                      <div className="flex items-center">
                        <div className="mr-3 text-neutral-400 flex-shrink-0">{command.icon}</div>
                        <span className={`text-sm ${index === selectedIndex ? "text-white" : "text-neutral-300"}`}>
                          {command.label}
                        </span>
                      </div>
                      <ArrowRight
                        className={`h-4 w-4 flex-shrink-0 ${
                          index === selectedIndex ? "text-white" : "text-neutral-500"
                        } transition-transform group-hover:translate-x-1`}
                      />
                    </button>
                  ))
                )}
              </div>

              <div className="p-2 border-t border-neutral-800 flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-neutral-400 hover:text-white text-xs"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-3 w-3 mr-1" />
                  Close
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
