"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-2xl">
            <span className="font-mono">YourName</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-green-500">
              .dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-white/80 hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#timeline" className="text-white/80 hover:text-white transition-colors">
              Timeline
            </Link>
            <Link href="#projects" className="text-white/80 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
            <Button className="bg-white text-black hover:bg-white/90">Resume</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#timeline"
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Timeline
            </Link>
            <Link
              href="#projects"
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-white text-black hover:bg-white/90 w-full">Resume</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
