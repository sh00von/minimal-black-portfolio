import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Shovon Portfolio",
  description:
    "Explore all projects by Shovon across different domains including web development, machine learning, cybersecurity, and more.",
  keywords: [
    "portfolio projects",
    "web development projects",
    "machine learning projects",
    "cybersecurity projects",
    "engineering projects",
    "blockchain projects",
  ],
  openGraph: {
    title: "Projects | Shovon Portfolio",
    description:
      "Explore all projects by Shovon across different domains including web development, machine learning, cybersecurity, and more.",
    url: "https://shovon.dev/projects",
    images: [
      {
        url: "/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Shovon Portfolio Projects",
      },
    ],
  },
  twitter: {
    title: "Projects | Shovon Portfolio",
    description:
      "Explore all projects by Shovon across different domains including web development, machine learning, cybersecurity, and more.",
    images: ["/og-projects.jpg"],
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
