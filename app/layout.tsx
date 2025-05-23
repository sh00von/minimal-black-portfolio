import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shovon | Web Developer & Engineer",
  description:
    "Portfolio of Shovon, a web developer, engineer, machine learning expert, and ethical hacker specializing in building exceptional digital experiences.",
  keywords: [
    "web developer",
    "engineer",
    "machine learning",
    "ethical hacker",
    "portfolio",
    "frontend developer",
    "full stack developer",
    "software engineer",
    "react developer",
    "next.js developer",
  ],
  authors: [{ name: "Shovon" }],
  creator: "Shovon",
  publisher: "Shovon",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shovon.dev",
    title: "Shovon | Web Developer & Engineer",
    description:
      "Portfolio of Shovon, a web developer, engineer, machine learning expert, and ethical hacker specializing in building exceptional digital experiences.",
    siteName: "Shovon Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shovon Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shovon | Web Developer & Engineer",
    description:
      "Portfolio of Shovon, a web developer, engineer, machine learning expert, and ethical hacker specializing in building exceptional digital experiences.",
    creator: "@shovon",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
