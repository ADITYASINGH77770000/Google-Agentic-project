"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 px-4 pb-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6">Get in Touch</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Have questions about Pulse of Bengaluru? We're here to help you navigate the future of smart city living.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-cyan-400" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-white mb-2 block">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white mb-2 block">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-white mb-2 block">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      className="glass border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-3 text-lg font-semibold">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-cyan-600/20">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-white/70">support@pulseofbengaluru.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-purple-600/20">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-white/70">+91 80 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-green-600/20">
                    <MapPin className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Address</h4>
                    <p className="text-white/70">
                      Tech Park, Electronic City
                      <br />
                      Bengaluru, Karnataka 560100
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-500/20 to-yellow-600/20">
                    <Clock className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Support Hours</h4>
                    <p className="text-white/70">
                      24/7 AI Support
                      <br />
                      Human Support: 9 AM - 6 PM IST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Quick Help</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">How do I report an issue?</h4>
                    <p className="text-white/70 text-sm">
                      Visit our Report page, upload images/videos, and our AI will analyze and categorize your
                      submission automatically.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Is my data secure?</h4>
                    <p className="text-white/70 text-sm">
                      Yes, we use end-to-end encryption and follow strict privacy protocols to protect your information.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">How accurate are AI predictions?</h4>
                    <p className="text-white/70 text-sm">
                      Our Gemini AI achieves 85%+ accuracy in traffic predictions and 90%+ in issue categorization.
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
