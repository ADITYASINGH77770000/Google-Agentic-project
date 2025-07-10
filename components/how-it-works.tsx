"use client"

import { motion } from "framer-motion"
import { Scan, Brain, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: Scan,
    title: "Scan",
    description: "Citizens report issues by uploading images and videos with automatic geo-tagging",
    color: "cyan",
  },
  {
    icon: Brain,
    title: "Analyze",
    description: "Gemini AI analyzes reports, categorizes issues, and generates predictive insights",
    color: "purple",
  },
  {
    icon: BarChart3,
    title: "Visualize",
    description: "Real-time dashboard displays insights with 3D maps and interactive analytics",
    color: "green",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold neon-text mb-6">How It Works</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience the future of civic engagement through AI-powered insights and real-time collaboration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-8 h-full border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`p-4 rounded-full bg-gradient-to-r ${
                      step.color === "cyan"
                        ? "from-cyan-500/20 to-cyan-600/20"
                        : step.color === "purple"
                          ? "from-purple-500/20 to-purple-600/20"
                          : "from-green-500/20 to-green-600/20"
                    } mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon
                      className={`h-8 w-8 ${
                        step.color === "cyan"
                          ? "text-cyan-400"
                          : step.color === "purple"
                            ? "text-purple-400"
                            : "text-green-400"
                      }`}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>

                  <p className="text-white/80 leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform -translate-y-1/2 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
