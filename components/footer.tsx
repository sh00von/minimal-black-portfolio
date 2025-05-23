"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Github,
  Linkedin,
  Twitter,
  ArrowUp,
  Mail,
  Send,
  MapPin,
  Phone,
  ExternalLink,
  Code,
  BookOpen,
  Award,
  Briefcase,
} from "lucide-react"
import { getNavItems, getSocialLinks, getPersonalInfo } from "@/lib/data"
import type { JSX } from "react/jsx-runtime"

export default function Footer() {
  const [navItems, setNavItems] = useState<any[]>([])
  const [socialLinks, setSocialLinks] = useState<any[]>([])
  const [personalInfo, setPersonalInfo] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const navData = await getNavItems()
      const socialData = await getSocialLinks()
      const personalData = await getPersonalInfo()
      setNavItems(navData)
      setSocialLinks(socialData)
      setPersonalInfo(personalData)
    }

    fetchData()
  }, [])

  const currentYear = new Date().getFullYear()

  // Map icon names to actual components
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      BookOpen: <BookOpen className="h-4 w-4 mr-2" />,
      Code: <Code className="h-4 w-4 mr-2" />,
      Award: <Award className="h-4 w-4 mr-2" />,
      Briefcase: <Briefcase className="h-4 w-4 mr-2" />,
    }
    return iconMap[iconName] || null
  }

  return (
    <footer className="bg-[#0a0a0a] border-t border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Section */}
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <Link href="/" className="text-white font-mono text-lg sm:text-xl inline-flex items-center group mb-4">
              <div className="w-8 h-8 mr-2 bg-white text-black flex items-center justify-center font-bold group-hover:bg-neutral-200 transition-colors">
                S
              </div>
              <div>
                <span className="font-bold">shovon</span>
                <span className="text-neutral-400">.dev</span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {personalInfo?.bio ||
                "A web developer, engineer, and machine learning expert specializing in building exceptional digital experiences."}
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((link: any) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-900 hover:bg-neutral-800 transition-colors text-white p-2 rounded-full"
                  aria-label={link.platform}
                >
                  {link.icon === "Github" && <Github size={18} />}
                  {link.icon === "Linkedin" && <Linkedin size={18} />}
                  {link.icon === "Twitter" && <Twitter size={18} />}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.slice(0, 7).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center"
                  >
                    {getIconComponent(item.icon)}
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/projects"
                  className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  All Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo?.email || "shovon@example.com"}`}
                  className="text-neutral-400 hover:text-white transition-colors text-sm flex items-start"
                >
                  <Mail className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{personalInfo?.email || "shovon@example.com"}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo?.phone || "+8801234567890"}`}
                  className="text-neutral-400 hover:text-white transition-colors text-sm flex items-start"
                >
                  <Phone className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{personalInfo?.phone || "+880 123 456 7890"}</span>
                </a>
              </li>
              <li className="text-neutral-400 text-sm flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  {personalInfo?.location || "Chittagong University of Engineering & Technology (CUET), Bangladesh"}
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Button
                className="bg-white text-black hover:bg-neutral-200 rounded-none text-sm w-full sm:w-auto flex items-center justify-center"
                asChild
              >
                <a href="#contact">
                  <Send className="h-4 w-4 mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">Stay Updated</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Subscribe to my newsletter to receive updates on my latest projects and research.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                // Handle newsletter subscription
                alert("Thank you for subscribing!")
              }}
              className="space-y-3"
            >
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-neutral-900 border-neutral-800 focus:border-white rounded-none rounded-r-none"
                  required
                />
                <Button type="submit" className="bg-white text-black hover:bg-neutral-200 rounded-none rounded-l-none">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-neutral-500 text-xs">I respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="py-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm text-center sm:text-left mb-4 sm:mb-0">
            &copy; {currentYear} Shovon. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy" className="text-neutral-500 hover:text-white transition-colors text-xs">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-500 hover:text-white transition-colors text-xs">
              Terms of Service
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-neutral-900 hover:bg-neutral-800 transition-colors text-white p-2 rounded-full"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
