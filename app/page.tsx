"use client"
import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Portfolio() {
  const [currentGreeting, setCurrentGreeting] = useState(0)

  const greetings = [
    { text: "Hello", lang: "English" },
    { text: "नमस्ते", lang: "Hindi" },
    { text: "வணக்கம்", lang: "Tamil" },
    { text: "నమస్కారం", lang: "Telugu" },
    { text: "ನమస్కಾర", lang: "Kannada" },
    { text: "ನమస్కారം", lang: "Malayalam" },
    { text: "নমস্কার", lang: "Bengali" },
    { text: "नमस्कार", lang: "Marathi" },
    { text: "નમસ્તે", lang: "Gujarati" },
    { text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", lang: "Punjabi" },
    { text: "ନମସ୍କାର", lang: "Odia" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-amber-50 scroll-smooth">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Header greetings={greetings} currentGreeting={currentGreeting} />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
