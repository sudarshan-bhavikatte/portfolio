"use client"

import { useState } from "react"

export default function Footer() {
  const [coffeeCount, setCoffeeCount] = useState(0)
  const [showCounter, setShowCounter] = useState(false)

  const handleCoffeeClick = () => {
    setCoffeeCount((prev) => prev + 1)
    setShowCounter(true)

    // Add a little shake animation
    const coffeeElement = document.getElementById("coffee-emoji")
    if (coffeeElement) {
      coffeeElement.classList.add("animate-bounce")
      setTimeout(() => {
        coffeeElement.classList.remove("animate-bounce")
      }, 500)
    }
  }

  const getCoffeeMessage = () => {
    if (coffeeCount === 0) return ""
    if (coffeeCount === 1) return "First cup of the day! ☕"
    if (coffeeCount === 5) return "Caffeine level: Rising! 📈"
    if (coffeeCount === 10) return "Coffee addiction confirmed! 🤪"
    if (coffeeCount === 20) return "You might have a problem... 😅"
    if (coffeeCount === 50) return "Coffee master achieved! 🏆"
    if (coffeeCount === 100) return "Legend status unlocked! 🚀"
    if (coffeeCount >= 200) return "Please seek help... or more coffee! 🆘"
    return `Coffee count: ${coffeeCount} cups`
  }

  return (
    <footer className="mt-16 pt-8 border-t border-amber-200 animate-fade-in">
      <div className="text-center">
        <p className="text-sm text-slate-500">
          © 2025 B Sudarshan. Built with Next.js and lots of{" "}
          <span
            id="coffee-emoji"
            onClick={handleCoffeeClick}
            className="cursor-pointer hover:scale-110 transition-transform duration-200 inline-block select-none"
            title="Click me for more coffee! ☕"
          >
            ☕
          </span>
        </p>

        {showCounter && (
          <div className="mt-2 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-xs border border-amber-200">
              <span className="animate-pulse">☕</span>
              <span className="font-medium">{getCoffeeMessage()}</span>
              {coffeeCount >= 10 && <span className="animate-bounce">🎉</span>}
            </div>

            {coffeeCount >= 5 && (
              <div className="mt-1 text-xs text-slate-400">
                {coffeeCount >= 50
                  ? "🔥 You're on fire!"
                  : coffeeCount >= 20
                    ? "⚡ Highly caffeinated!"
                    : coffeeCount >= 10
                      ? "💪 Getting energized!"
                      : "☕ Keep brewing!"}
              </div>
            )}
          </div>
        )}
      </div>
    </footer>
  )
}
