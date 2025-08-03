
"use client"

import { Mail, MapPin, Github } from "lucide-react"
import { useState, useEffect } from "react"
import { greetings } from "@/lib/data"
import DogViewer from "./dog_head"

export default function Header() {
  const [currentGreeting, setCurrentGreeting] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="mb-16 animate-fade-in">
      <div className="flex items-start gap-6 mb-6">
        <div className="">
          {/* 3D model viewer inside the avatar */}
          <DogViewer />
          {/* <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-500 rounded-full border-2 border-amber-50"></div> */}
        </div>

        <div className="flex-1">
          <div className="mb-2">
            <span className="text-2xl font-medium text-teal-600 transition-all duration-500">
              {greetings[currentGreeting].text}
            </span>
            {/* <span className="text-sm text-slate-500 ml-2">({greetings[currentGreeting].lang})</span> */}
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">{"I'm Sudarshan"}</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {
              "A curious student who loves building things with code! I'm passionate about systems programming and full-stack development. Currently looking for internships where I can learn, contribute, and maybe break some code along the way 😄"
            }
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-1 hover:text-teal-600 transition-colors">
          <Mail className="w-4 h-4" />
          <a href="mailto:sudarshanbhavikatte@gmail.com" className="hover:text-teal-600 transition-colors">
            sudarshanbhavikatte@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>Bangalore, India</span>
        </div>
        <div className="flex items-center gap-1 hover:text-teal-600 transition-colors">
          <Github className="w-4 h-4" />
          <a href="https://github.com/sudarshan-bhavikatte" className="hover:text-teal-600 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}
