"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, MapPin, Camera, Send, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ReportPage() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = [
    "Traffic & Transportation",
    "Water & Sanitation",
    "Electricity",
    "Road Maintenance",
    "Waste Management",
    "Public Safety",
    "Other",
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setSelectedFiles((prev) => [...prev, ...files])
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setSelectedFiles([])
    setLocation("")
    setDescription("")
    setCategory("")
    setIsSubmitting(false)

    alert("Report submitted successfully! Our AI is analyzing your submission.")
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude}, ${position.coords.longitude}`)
        },
        (error) => {
          console.error("Error getting location:", error)
        },
      )
    }
  }

  return (
    <div className="min-h-screen pt-20 px-4 pb-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold neon-text mb-4">Report an Issue</h1>
          <p className="text-xl text-white/80">
            Help improve Bengaluru by reporting civic issues with AI-powered analysis
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Report Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-cyan-400" />
                  Submit Your Report
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Selection */}
                  <div>
                    <Label htmlFor="category" className="text-white mb-2 block">
                      Issue Category
                    </Label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full p-3 rounded-lg glass border border-white/20 text-white bg-transparent focus:border-cyan-400 focus:outline-none"
                      required
                    >
                      <option value="" className="bg-gray-800">
                        Select a category
                      </option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat} className="bg-gray-800">
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <Label htmlFor="location" className="text-white mb-2 block">
                      Location
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location or use GPS"
                        className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
                        required
                      />
                      <Button
                        type="button"
                        onClick={getCurrentLocation}
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                      >
                        <MapPin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description" className="text-white mb-2 block">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe the issue in detail..."
                      className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 min-h-[120px]"
                      required
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <Label className="text-white mb-2 block">Upload Images/Videos</Label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-cyan-400/50 transition-colors">
                      <input
                        type="file"
                        multiple
                        accept="image/*,video/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="h-12 w-12 text-white/50 mx-auto mb-4" />
                        <p className="text-white/70">Click to upload or drag and drop</p>
                        <p className="text-white/50 text-sm mt-2">Images and videos up to 10MB each</p>
                      </label>
                    </div>

                    {/* File Preview */}
                    {selectedFiles.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedFiles.map((file, index) => (
                          <div key={index} className="relative group">
                            <div className="glass rounded-lg p-3">
                              <div className="flex items-center gap-2">
                                <Camera className="h-4 w-4 text-cyan-400" />
                                <span className="text-white/80 text-sm truncate">{file.name}</span>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full text-white text-xs hover:bg-red-600 transition-colors"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-3 text-lg font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Submit Report
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* AI Analysis Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Camera className="h-5 w-5 text-purple-400" />
                  AI Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
                    <h4 className="text-white font-semibold mb-2">Gemini AI Features</h4>
                    <ul className="text-white/70 text-sm space-y-2">
                      <li>• Automatic image analysis</li>
                      <li>• Issue categorization</li>
                      <li>• Severity assessment</li>
                      <li>• Location verification</li>
                      <li>• Predictive insights</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/20">
                    <h4 className="text-white font-semibold mb-2">Real-time Processing</h4>
                    <p className="text-white/70 text-sm">
                      Your report will be analyzed instantly and routed to the appropriate authorities for quick
                      resolution.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-yellow-500/10 border border-green-500/20">
                    <h4 className="text-white font-semibold mb-2">Community Impact</h4>
                    <p className="text-white/70 text-sm">
                      Your contribution helps build a comprehensive database for better city planning and citizen
                      services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
