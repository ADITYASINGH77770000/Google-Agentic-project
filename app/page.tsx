"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

import { HeroScene } from "@/components/hero-scene";
import { HowItWorks } from "@/components/how-it-works";
import { StatCard } from "@/components/stat-card";
import { Testimonials } from "@/components/testimonials";
import { motion } from "framer-motion";
import { Activity, Users, AlertTriangle, TrendingUp } from "lucide-react";

type Stat = {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  color: "cyan" | "purple" | "red" | "green";
};

const stats: Stat[] = [
  {
    title: "Live Traffic Index",
    value: "73%",
    change: "+5% from yesterday",
    icon: Activity,
    color: "cyan",
  },
  {
    title: "Active Citizens",
    value: "12.4K",
    change: "+12% this week",
    icon: Users,
    color: "purple",
  },
  {
    title: "Issues Reported Today",
    value: "247",
    change: "-8% from yesterday",
    icon: AlertTriangle,
    color: "red",
  },
  {
    title: "City Mood Score",
    value: "8.2/10",
    change: "+0.3 this week",
    icon: TrendingUp,
    color: "green",
  },
];

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Logged out!");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        alert("Error logging out.");
      });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Banner */}
      <div className="bg-gray-900 text-white p-4 text-center">
        {user ? (
          <>
            ✅ Logged in as <strong>{user.email}</strong>
            <button
              onClick={handleLogout}
              className="ml-4 bg-red-600 hover:bg-red-700 transition-colors px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>❌ Not logged in</>
        )}
      </div>

      {/* Hero Section */}
      <HeroScene />

      {/* How It Works */}
      <HowItWorks />

      {/* Live Stats */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold neon-text mb-6">
              Live City Pulse
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-time insights powered by AI and citizen engagement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={stat.title} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <footer className="glass border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pulse-animation" />
                <span className="text-xl font-bold neon-text">
                  Pulse of Bengaluru
                </span>
              </div>
              <p className="text-white/60">
                Connecting citizens with their smart city through AI-powered insights.
              </p>
            </div>

            {/* About */}
            <div>
              <h3 className="text-white font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-white/60">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-white/60">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Pulse of Bengaluru. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
