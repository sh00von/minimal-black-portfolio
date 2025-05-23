import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Timeline from "@/components/timeline"
import ResearchInterests from "@/components/research-interests"
import Startups from "@/components/startups"
import Achievements from "@/components/achievements"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import CommandBar from "@/components/command-bar"
import SectionDivider from "@/components/section-divider"
import NotificationToast from "@/components/notification-toast"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div className="bg-[#111] text-white min-h-screen">
      <CustomCursor />
      <CommandBar />
      <Navbar />
      <NotificationToast />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <Skills />
        <SectionDivider />
        <Timeline />
        <ResearchInterests />
        <SectionDivider />
        <Startups />
        <Achievements />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
