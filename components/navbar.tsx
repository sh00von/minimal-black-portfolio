"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
  ExternalLink,
  Code,
  BookOpen,
  Award,
  Briefcase,
  Mail,
  FileText,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { getNavItems, getSocialLinks } from "@/lib/data"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [navItems, setNavItems] = useState<any[]>([])
  const [socialLinks, setSocialLinks] = useState<any[]>([])
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const lastScrollY = useRef(0)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const navData = await getNavItems()
      const socialData = await getSocialLinks()
      setNavItems(navData)
      setSocialLinks(socialData)
    }

    fetchData()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Handle navbar visibility (hide on scroll down, show on scroll up)
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) {
          setIsNavbarVisible(false)
        } else {
          setIsNavbarVisible(true)
        }
      } else {
        setIsNavbarVisible(true)
      }

      lastScrollY.current = currentScrollY

      // Handle background change
      setIsScrolled(currentScrollY > 10)

      // Handle scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMobileMenuOpen && !target.closest("nav") && !target.closest("button")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Map icon names to actual components
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      BookOpen: <BookOpen className="h-4 w-4 mr-2" />,
      Code: <Code className="h-4 w-4 mr-2" />,
      Award: <Award className="h-4 w-4 mr-2" />,
      Briefcase: <Briefcase className="h-4 w-4 mr-2" />,
      Mail: <Mail className="h-4 w-4 mr-2" />,
      FileText: <FileText className="h-4 w-4 mr-2" />,
      Github: <Github className="h-4 w-4 mr-2" />,
      Linkedin: <Linkedin className="h-4 w-4 mr-2" />,
      Twitter: <Twitter className="h-4 w-4 mr-2" />,
    }
    return iconMap[iconName] || null
  }

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isNavbarVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#111]/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-4 md:py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-white font-mono text-lg sm:text-xl flex items-center group">
              <div className="w-8 h-8 mr-2 bg-white text-black flex items-center justify-center font-bold group-hover:bg-neutral-200 transition-colors">
                S
              </div>
              <div>
                <span className="font-bold">shovon</span>
                <span className="text-neutral-400">.dev</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.slice(0, 5).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide px-3 py-2"
                >
                  {item.name}
                </Link>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide px-3 py-2 flex items-center">
                    Projects <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-neutral-900 border-neutral-800 text-white">
                  <DropdownMenuItem className="hover:bg-neutral-800 focus:bg-neutral-800 cursor-pointer">
                    <Link href="#projects" className="flex w-full">
                      Featured Projects
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-neutral-800 focus:bg-neutral-800 cursor-pointer">
                    <Link href="/projects" className="flex w-full">
                      All Projects
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="#contact"
                className="text-neutral-400 hover:text-white transition-colors text-sm tracking-wide px-3 py-2"
              >
                Contact
              </Link>

              <div className="flex items-center space-x-1 ml-2 border-l border-neutral-800 pl-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-white transition-colors p-2"
                    aria-label={link.platform}
                  >
                    {link.icon === "Github" && <Github size={18} />}
                    {link.icon === "Linkedin" && <Linkedin size={18} />}
                    {link.icon === "Twitter" && <Twitter size={18} />}
                  </a>
                ))}
              </div>

              <Button className="bg-white text-black hover:bg-neutral-200 rounded-none text-sm px-4 py-2 ml-2 flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <a
                href="https://github.com/shovon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors p-2 mr-1"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <button
                className="text-white p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        {isHomePage && (
          <div className="h-0.5 bg-neutral-800 w-full absolute bottom-0 left-0">
            <motion.div
              className="h-full bg-white"
              style={{ width: `${scrollProgress}%` }}
              initial={{ width: "0%" }}
              animate={{ width: `${scrollProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        )}
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 right-0 z-40 lg:hidden bg-[#111]/95 backdrop-blur-md border-t border-neutral-800 shadow-lg"
          >
            <nav className="container mx-auto px-4 sm:px-6 py-6">
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors py-3 px-4 flex items-center border border-transparent hover:border-neutral-800 hover:bg-neutral-900/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {getIconComponent(item.icon)}
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/projects"
                  className="text-neutral-400 hover:text-white transition-colors py-3 px-4 flex items-center border border-transparent hover:border-neutral-800 hover:bg-neutral-900/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  All Projects
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-800 flex flex-col space-y-4">
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-white transition-colors p-2"
                      aria-label={link.platform}
                    >
                      {link.icon === "Github" && <Github size={20} />}
                      {link.icon === "Linkedin" && <Linkedin size={20} />}
                      {link.icon === "Twitter" && <Twitter size={20} />}
                    </a>
                  ))}
                </div>
                <Button className="bg-white text-black hover:bg-neutral-200 rounded-none text-sm w-full flex items-center justify-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
