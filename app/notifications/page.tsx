"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, AlertTriangle, Info, CheckCircle, Clock, MapPin, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const notifications = [
  {
    id: 1,
    type: "alert",
    title: "Traffic Alert: MG Road",
    message: "Heavy congestion detected. Estimated delay: 25 minutes. Alternative route suggested via Brigade Road.",
    time: "2 minutes ago",
    location: "MG Road, Central Bengaluru",
    severity: "high",
    read: false,
  },
  {
    id: 2,
    type: "weather",
    title: "Weather Update",
    message: "Gemini AI predicts heavy rainfall in the next 30 minutes. Carry umbrellas and avoid low-lying areas.",
    time: "5 minutes ago",
    location: "Electronic City, Whitefield",
    severity: "medium",
    read: false,
  },
  {
    id: 3,
    type: "civic",
    title: "Water Supply Maintenance",
    message: "Scheduled maintenance will affect water supply from 10 PM to 6 AM tomorrow in your area.",
    time: "1 hour ago",
    location: "Koramangala, BTM Layout",
    severity: "low",
    read: true,
  },
  {
    id: 4,
    type: "success",
    title: "Issue Resolved",
    message: "Your reported pothole on 100 Feet Road has been fixed. Thank you for your contribution!",
    time: "2 hours ago",
    location: "100 Feet Road, Indiranagar",
    severity: "low",
    read: true,
  },
  {
    id: 5,
    type: "info",
    title: "City Event",
    message: "Bengaluru Tech Summit 2024 will cause traffic diversions in UB City area from Dec 15-17.",
    time: "3 hours ago",
    location: "UB City, Central Bengaluru",
    severity: "medium",
    read: false,
  },
  {
    id: 6,
    type: "alert",
    title: "Power Outage Alert",
    message: "Unplanned power outage in your area. BESCOM teams are working to restore supply within 2 hours.",
    time: "4 hours ago",
    location: "Marathahalli, Outer Ring Road",
    severity: "high",
    read: true,
  },
]

export default function NotificationsPage() {
  const [filter, setFilter] = useState<"all" | "unread" | "alerts">("all")
  const [notificationList, setNotificationList] = useState(notifications)

  const getIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="h-5 w-5 text-red-400" />
      case "weather":
        return <AlertTriangle className="h-5 w-5 text-yellow-400" />
      case "civic":
        return <Info className="h-5 w-5 text-blue-400" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-400" />
      default:
        return <Info className="h-5 w-5 text-cyan-400" />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "border-red-500/30 bg-red-500/5"
      case "medium":
        return "border-yellow-500/30 bg-yellow-500/5"
      case "low":
        return "border-blue-500/30 bg-blue-500/5"
      default:
        return "border-gray-500/30 bg-gray-500/5"
    }
  }

  const markAsRead = (id: number) => {
    setNotificationList((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotificationList((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  const filteredNotifications = notificationList.filter((notif) => {
    if (filter === "unread") return !notif.read
    if (filter === "alerts") return notif.type === "alert" || notif.type === "weather"
    return true
  })

  const unreadCount = notificationList.filter((n) => !n.read).length

  return (
    <div className="min-h-screen pt-20 px-4 pb-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold neon-text mb-4">Notifications</h1>
              <p className="text-xl text-white/80">Stay updated with real-time alerts and AI-powered insights</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <Bell className="h-5 w-5" />
                <span className="font-semibold">{unreadCount} unread</span>
              </div>
              <Button
                onClick={markAllAsRead}
                variant="outline"
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
              >
                Mark all read
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <Filter className="h-5 w-5 text-white/60" />
            <div className="flex gap-2">
              {[
                { key: "all", label: "All" },
                { key: "unread", label: "Unread" },
                { key: "alerts", label: "Alerts" },
              ].map((filterOption) => (
                <Button
                  key={filterOption.key}
                  onClick={() => setFilter(filterOption.key as any)}
                  variant={filter === filterOption.key ? "default" : "outline"}
                  className={
                    filter === filterOption.key
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                      : "border-white/20 text-white/80 hover:bg-white/10"
                  }
                >
                  {filterOption.label}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className={`glass border-white/10 cursor-pointer transition-all duration-300 ${getSeverityColor(
                  notification.severity,
                )} ${!notification.read ? "border-l-4 border-l-cyan-400" : ""}`}
                onClick={() => markAsRead(notification.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">{getIcon(notification.type)}</div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className={`font-semibold ${!notification.read ? "text-white" : "text-white/80"}`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center gap-2 text-white/50 text-sm">
                          <Clock className="h-3 w-3" />
                          {notification.time}
                        </div>
                      </div>

                      <p className={`mb-3 ${!notification.read ? "text-white/90" : "text-white/60"}`}>
                        {notification.message}
                      </p>

                      <div className="flex items-center gap-1 text-white/50 text-sm">
                        <MapPin className="h-3 w-3" />
                        {notification.location}
                      </div>
                    </div>

                    {!notification.read && <div className="w-3 h-3 bg-cyan-400 rounded-full flex-shrink-0 mt-2" />}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredNotifications.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <Bell className="h-16 w-16 text-white/30 mx-auto mb-4" />
            <h3 className="text-xl text-white/60 mb-2">No notifications found</h3>
            <p className="text-white/40">
              {filter === "unread"
                ? "You're all caught up! No unread notifications."
                : filter === "alerts"
                  ? "No active alerts at the moment."
                  : "No notifications to display."}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
