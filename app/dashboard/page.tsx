"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Activity, AlertTriangle, Users, TrendingUp, MapPin, Clock, Zap } from "lucide-react"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for alerts
const alerts = [
  {
    id: 1,
    type: "traffic",
    title: "Heavy Traffic on MG Road",
    description: "AI predicts 45-minute delay due to ongoing construction",
    time: "2 minutes ago",
    severity: "high",
    location: "MG Road, Brigade Road Junction",
  },
  {
    id: 2,
    type: "weather",
    title: "Rain Alert",
    description: "Gemini AI forecasts heavy rainfall in next 30 minutes",
    time: "5 minutes ago",
    severity: "medium",
    location: "Electronic City, Whitefield",
  },
  {
    id: 3,
    type: "civic",
    title: "Water Supply Disruption",
    description: "Scheduled maintenance affecting 12 localities",
    time: "15 minutes ago",
    severity: "low",
    location: "Koramangala, BTM Layout",
  },
]

const stats = [
  {
    title: "Live Traffic Index",
    value: "73%",
    change: "+5% from yesterday",
    icon: Activity,
    color: "cyan" as const,
  },
  {
    title: "Active Citizens",
    value: "12.4K",
    change: "+12% this week",
    icon: Users,
    color: "purple" as const,
  },
  {
    title: "Issues Reported",
    value: "247",
    change: "-8% from yesterday",
    icon: AlertTriangle,
    color: "red" as const,
  },
  {
    title: "City Mood Score",
    value: "8.2/10",
    change: "+0.3 this week",
    icon: TrendingUp,
    color: "green" as const,
  },
]

function InteractiveMap() {
  return (
    <div className="h-96 glass rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 10, 10], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00FFFF" />

        {/* Simple 3D city representation */}
        <group>
          {Array.from({ length: 20 }).map((_, i) => (
            <mesh key={i} position={[(Math.random() - 0.5) * 10, Math.random() * 3, (Math.random() - 0.5) * 10]}>
              <boxGeometry args={[0.5, Math.random() * 4 + 1, 0.5]} />
              <meshStandardMaterial
                color={Math.random() > 0.5 ? "#00FFFF" : "#FF00FF"}
                emissive={Math.random() > 0.5 ? "#00FFFF" : "#FF00FF"}
                emissiveIntensity={0.2}
              />
            </mesh>
          ))}
        </group>

        <Environment preset="night" />
        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>

      <div className="absolute top-4 left-4 glass p-3 rounded-lg">
        <h3 className="text-white font-semibold mb-2">Live City Map</h3>
        <p className="text-white/60 text-sm">Interactive 3D visualization</p>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const [selectedAlert, setSelectedAlert] = useState<number | null>(null)

  return (
    <div className="min-h-screen pt-20 px-4 pb-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold neon-text mb-4">City Dashboard</h1>
          <p className="text-xl text-white/80">Real-time insights and AI-powered analytics for Bengaluru</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.title} {...stat} index={index} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                  Live City Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <InteractiveMap />
              </CardContent>
            </Card>
          </motion.div>

          {/* AI Alerts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="h-5 w-5 text-purple-400" />
                  Gemini AI Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {alerts.map((alert) => (
                    <motion.div
                      key={alert.id}
                      whileHover={{ scale: 1.02 }}
                      className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                        alert.severity === "high"
                          ? "bg-red-500/10 border-red-500/30 hover:border-red-500/50"
                          : alert.severity === "medium"
                            ? "bg-yellow-500/10 border-yellow-500/30 hover:border-yellow-500/50"
                            : "bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50"
                      }`}
                      onClick={() => setSelectedAlert(alert.id)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-white font-semibold">{alert.title}</h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            alert.severity === "high"
                              ? "bg-red-500/20 text-red-400"
                              : alert.severity === "medium"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {alert.severity}
                        </span>
                      </div>
                      <p className="text-white/70 text-sm mb-2">{alert.description}</p>
                      <div className="flex items-center justify-between text-xs text-white/50">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {alert.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {alert.time}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Mood Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                City Mood Heatmap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Koramangala", "Whitefield", "Electronic City", "MG Road"].map((area, index) => (
                  <div key={area} className="text-center">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full mb-2 ${
                        index % 4 === 0
                          ? "bg-green-500/30 border-green-500"
                          : index % 4 === 1
                            ? "bg-yellow-500/30 border-yellow-500"
                            : index % 4 === 2
                              ? "bg-blue-500/30 border-blue-500"
                              : "bg-purple-500/30 border-purple-500"
                      } border-2 flex items-center justify-center`}
                    >
                      <span className="text-white font-bold">{8.5 - index * 0.3}</span>
                    </div>
                    <p className="text-white/80 text-sm">{area}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
