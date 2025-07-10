import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pulse of Bengaluru - Smart City Dashboard",
  description: "Real-time AI-powered dashboard for Bengaluru citizens",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.className} bg-[#0D0D0D] text-white min-h-screen`}>
        <ThemeProvider>
          <Header />
          <main className="relative">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
