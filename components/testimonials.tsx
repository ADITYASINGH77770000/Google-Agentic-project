"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    content:
      "I spotted a traffic jam before even leaving home thanks to Pulse! The AI predictions are incredibly accurate.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Rajesh Kumar",
    role: "Local Business Owner",
    content:
      "Reporting civic issues has never been easier. The geo-tagging feature and instant AI analysis make a real difference.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Anita Reddy",
    role: "Community Activist",
    content:
      "The mood heatmap helps us understand citizen sentiment in real-time. It's revolutionizing how we engage with our community.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Vikram Patel",
    role: "Urban Planner",
    content:
      "The predictive analytics from Gemini AI help us plan infrastructure improvements proactively. Absolutely game-changing!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Meera Nair",
    role: "Student",
    content:
      "The 3D visualizations make understanding city data so intuitive. I use it daily to plan my commute and stay informed.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold neon-text mb-6">What Citizens Say</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real feedback from Bengaluru residents using Pulse to improve their city experience
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-8 border border-white/10 neon-glow"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full border-2 border-cyan-400"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-white/90 mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-cyan-400">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="text-white hover:text-cyan-400 hover:bg-cyan-400/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-cyan-400 scale-125" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="text-white hover:text-cyan-400 hover:bg-cyan-400/10"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
