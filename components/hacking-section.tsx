"use client"

import { motion } from "framer-motion"
import { Shield, Trophy, Target, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function HackingSection() {
  const ctfAchievements = [
    {
      title: "HackTheBox",
      description: "Top 5% globally with 25+ machines pwned",
      icon: <Target className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "CTF Competitions",
      description: "Finalist in 3 national cybersecurity competitions",
      icon: <Trophy className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "Bug Bounties",
      description: "Discovered and reported 3 zero-day vulnerabilities",
      icon: <Shield className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "Security Research",
      description: "Published research on novel attack vectors",
      icon: <Award className="h-8 w-8 text-emerald-500" />,
    },
  ]

  const skills = [
    { name: "Web Application Security", level: 90 },
    { name: "Network Penetration", level: 85 },
    { name: "Reverse Engineering", level: 75 },
    { name: "Cryptography", level: 80 },
    { name: "OSINT", level: 95 },
  ]

  return (
    <section id="hacking" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">CTF & Ethical Hacking</h2>
          <p className="text-zinc-400">
            Passionate about cybersecurity, I regularly participate in Capture The Flag competitions and practice
            ethical hacking to strengthen security postures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-emerald-400">Security Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-zinc-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-zinc-700" />
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-zinc-800/50 border border-zinc-700 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Terminal Commands I Live By</h4>
              <div className="font-mono text-sm space-y-2 text-zinc-300">
                <div className="flex">
                  <span className="text-emerald-400 mr-2">$</span>
                  <code>nmap -sV -sC -p- target.com</code>
                </div>
                <div className="flex">
                  <span className="text-emerald-400 mr-2">$</span>
                  <code>gobuster dir -u https://target.com -w wordlist.txt</code>
                </div>
                <div className="flex">
                  <span className="text-emerald-400 mr-2">$</span>
                  <code>sqlmap -u "https://target.com/page?id=1" --dbs</code>
                </div>
                <div className="flex">
                  <span className="text-emerald-400 mr-2">$</span>
                  <code>john --wordlist=passwords.txt hashes.txt</code>
                </div>
                <div className="flex">
                  <span className="text-emerald-400 mr-2">$</span>
                  <code>wireshark -i eth0 -k -Y "http"</code>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-emerald-400">Achievements & Certifications</h3>
            <div className="grid gap-4">
              {ctfAchievements.map((achievement, index) => (
                <Card key={index} className="bg-zinc-800/50 border-zinc-700">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    {achievement.icon}
                    <div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zinc-400">{achievement.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-zinc-800/50 border border-zinc-700 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Certifications</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                  <span>Certified Ethical Hacker (CEH)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                  <span>Offensive Security Certified Professional (OSCP)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                  <span>CompTIA Security+</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
