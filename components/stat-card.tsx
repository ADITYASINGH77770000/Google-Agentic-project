"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value?: string // optional for loading state
  change: string
  icon: LucideIcon
  color: "cyan" | "purple" | "green" | "red"
  index: number
  progress?: number // optional, 0–100
}

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
  color,
  index,
  progress = 70, // default value
}: StatCardProps) {
  const colorClasses = {
    cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30",
    purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30",
    green: "from-green-500/20 to-green-600/20 border-green-500/30",
    red: "from-red-500/20 to-red-600/20 border-red-500/30",
  }

  const iconColors = {
    cyan: "text-cyan-400",
    purple: "text-purple-400",
    green: "text-green-400",
    red: "text-red-400",
  }

  const isPositive = parseFloat(change.replace("%", "")) >= 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`glass rounded-xl p-6 min-h-[180px] bg-gradient-to-br ${colorClasses[color]} border hover:shadow-2xl transition-all duration-300`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses[color]}`}>
          <Icon className={`h-6 w-6 ${iconColors[color]}`} />
        </div>
        <span
          title="Compared to last month"
          className={`text-sm font-medium flex items-center gap-1 ${iconColors[color]}`}
        >
          {isPositive ? "▲" : "▼"} {change}
        </span>
      </div>

      <div>
        <h3 className="text-white/80 text-sm font-medium mb-2">{title}</h3>
        {value ? (
          <p className="text-3xl font-bold text-white">{value}</p>
        ) : (
          <div className="h-8 w-24 rounded bg-white/20 animate-pulse" />
        )}
      </div>

      <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${colorClasses[color]}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          transition={{ duration: 1, delay: index * 0.2 }}
        />
      </div>
    </motion.div>
  )
}
