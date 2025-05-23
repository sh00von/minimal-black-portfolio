"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function CommandLine() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([
    "Welcome to my interactive portfolio terminal!",
    "Type 'help' to see available commands.",
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const command = input.trim().toLowerCase()
    let response = ""

    switch (command) {
      case "help":
        response = `
Available commands:
- about: Learn about me
- skills: View my technical skills
- projects: See my portfolio projects
- ctf: View my CTF achievements
- contact: Get my contact information
- clear: Clear the terminal
- exit: Close the terminal
`
        break
      case "about":
        response =
          "I'm a web developer, engineer, machine learning expert, CTF player, and student passionate about technology and cybersecurity."
        break
      case "skills":
        response = `
Technical Skills:
- Web Development: React, Next.js, Node.js
- Engineering: System Design, Architecture
- Machine Learning: TensorFlow, PyTorch, NLP
- Security: Penetration Testing, Vulnerability Assessment
- Languages: JavaScript, Python, C++, Rust
`
        break
      case "projects":
        response = `
Notable Projects:
1. AI-Powered Security Scanner
2. Distributed Systems Architecture
3. Real-time Data Visualization Platform
4. Machine Learning Research Paper
5. Secure Communication Protocol

Type 'goto projects' to view the projects section.
`
        break
      case "ctf":
        response = `
CTF Achievements:
- Top 5% in HackTheBox challenges
- Finalist in National Cybersecurity Competition
- Discovered and reported 3 zero-day vulnerabilities
- Regular contributor to security forums

Type 'goto hacking' to view the hacking section.
`
        break
      case "contact":
        response = `
Contact Information:
- Email: your.email@example.com
- LinkedIn: linkedin.com/in/yourprofile
- GitHub: github.com/yourusername

Type 'goto contact' to view the contact form.
`
        break
      case "clear":
        setHistory([])
        setInput("")
        return
      case "exit":
        setIsOpen(false)
        setInput("")
        return
      case "goto projects":
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
        response = "Navigating to projects section..."
        break
      case "goto skills":
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
        response = "Navigating to skills section..."
        break
      case "goto hacking":
        document.getElementById("hacking")?.scrollIntoView({ behavior: "smooth" })
        response = "Navigating to CTF/hacking section..."
        break
      case "goto contact":
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        response = "Navigating to contact section..."
        break
      case "goto about":
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        response = "Navigating to about section..."
        break
      default:
        response = `Command not recognized: ${command}. Type 'help' for available commands.`
    }

    setHistory((prev) => [...prev, `$ ${input}`, response])
    setInput("")
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-zinc-900 border border-zinc-700 text-emerald-500 hover:bg-zinc-800"
      >
        <Terminal className="mr-2 h-4 w-4" />
        Open Terminal
      </Button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
          <div className="flex items-center">
            <Terminal className="h-4 w-4 text-emerald-500 mr-2" />
            <span className="text-sm font-mono text-zinc-300">portfolio-terminal</span>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6 text-zinc-400">
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Button>
        </div>
        <ScrollArea className="h-80 p-4 font-mono text-sm text-zinc-300" ref={scrollAreaRef}>
          {history.map((line, i) => (
            <div key={i} className={`mb-1 ${line.startsWith("$") ? "text-emerald-400" : ""}`}>
              {line}
            </div>
          ))}
        </ScrollArea>
        <form onSubmit={handleCommand} className="flex items-center px-4 py-3 bg-zinc-800 border-t border-zinc-700">
          <span className="text-emerald-500 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-zinc-300 font-mono text-sm"
            placeholder="Type a command..."
          />
        </form>
      </div>
    </div>
  )
}
