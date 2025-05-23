"use client"

import { useEffect, useRef } from "react"

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      draw()
    }

    canvas.width = width
    canvas.height = height

    window.addEventListener("resize", resizeCanvas)

    // Colors similar to cursor.com
    const colors = [
      { r: 128, g: 0, b: 128 }, // Purple
      { r: 220, g: 20, b: 60 }, // Crimson
      { r: 255, g: 140, b: 0 }, // Dark Orange
      { r: 50, g: 205, b: 50 }, // Lime Green
    ]

    // Create gradient points
    const points = [
      { x: width * 0.1, y: height * 0.2, color: colors[0] },
      { x: width * 0.8, y: height * 0.1, color: colors[1] },
      { x: width * 0.9, y: height * 0.8, color: colors[2] },
      { x: width * 0.2, y: height * 0.9, color: colors[3] },
    ]

    function draw() {
      if (!ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Create radial gradients for each point
      for (const point of points) {
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, Math.max(width, height) * 0.8)

        gradient.addColorStop(0, `rgba(${point.color.r}, ${point.color.g}, ${point.color.b}, 0.8)`)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      }

      // Add noise overlay
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
      ctx.fillRect(0, 0, width, height)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-black"
      style={{ filter: "contrast(1.2) saturate(1.2)" }}
    />
  )
}
