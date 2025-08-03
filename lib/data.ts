import type { Greeting, Project, Skill } from "./types"

export const greetings: Greeting[] = [
  { text: "Hello", lang: "English" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "வணக்கம்", lang: "Tamil" },
  { text: "నమస్కారం", lang: "Telugu" },
  { text: "ನಮಸ್ಕಾರ", lang: "Kannada" },
  { text: "നമസ്കാരം", lang: "Malayalam" },
  { text: "নমস্কার", lang: "Bengali" },
  { text: "नमस्कार", lang: "Marathi" },
  { text: "નમસ્તે", lang: "Gujarati" },
  { text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", lang: "Punjabi" },
  { text: "ନମସ୍କାର", lang: "Odia" },
]

export const projects: Project[] = [
  {
    title: "T-mark",
    description: "Terminal-based Markdown viewer written in Rust",
    year: "2025",
    details: [
      "Built a fast, terminal-based Markdown viewer in Rust with minimal dependencies.",
      "Supports headings, code blocks, lists, and inline formatting with clean terminal rendering.",
      "Enables keyboard navigation and smart text wrapping for an efficient reading experience.",
    ],
    tech: [
      { name: "Rust", icon: "/icons/rust.svg" },
      { name: "Terminal", icon: "/icons/terminal.svg"},
      { name: "Markodwn", icon: "/icons/markdown.svg" },
    ],
  },
  {
    title: "Hydrogen",
    description: "Compiler for a custom language built in C++",
    year: "2024",
    details: [
      "Designed a compiler that converts high-level code to x86 assembly",
      "Implemented lexer, parser (recursive descent), and code generation",
      "Applied compiler concepts like tokenization and AST construction",
    ],
    tech: [
      { name: "C++", icon: "/icons/cpp.svg" },
      { name: "Compiler Design", icon: "/icons/compiler.svg" },
      { name: "x86 Assembly", icon: "/icons/assembly.svg" },
    ],
  },
  {
    title: "DSA Visualizer",
    description: "React project for interactive learning of algorithms and data structures",
    year: "2025",
    details: [
      "Built a browser-based visualizer to demonstrate common algorithms and data structures",
      "Used React to implement interactive animations and step-by-step UI transitions",
      "Focused on educational clarity and intuitive learning experience",
    ],
    tech: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "JavaScript", icon: "/icons/js.svg" },
      { name: "CSS Animations", icon: "/icons/css.svg" },
    ],
  },
  {
    title: "Space Invaders Clone",
    description: "2D arcade-style game built using C++ and raylib",
    year: "2024",
    details: [
      "Developed a complete 2D arcade game with C++ and raylib",
      "Implemented game mechanics, collision, and state management",
      "Designed modular components for scalability and clean structure",
    ],
    tech: [
      { name: "C++", icon: "/icons/cpp.svg" },
      { name: "raylib", icon: "/icons/raylib.svg" },
      { name: "Game Development", icon: "/icons/game.svg" },
    ],
  },
]

export const skills: Skill[] = [
  { name: "C++", icon: "/icons/cpp.svg" },
  { name: "Rust", icon: "/icons/rust.svg" },
  { name: "JavaScript", icon: "/icons/js.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "SQL", icon: "/icons/postgres.svg" },
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Prisma", icon: "/icons/prisma.svg" },
  // { name: "JavaFX", icon: "☕" },
  { name: "Express", icon: "/icons/express.svg" },
  { name: "raylib", icon: "/icons/raylib.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "Data Structures & Algorithms", icon: "/icons/data.svg" },
  // { name: "Compiler Design", icon: "⚙️" },
  // { name: "Full Stack Development", icon: "🌟" },
  // { name: "Systems Programming", icon: "🖥️" },
  // { name: "Web APIs", icon: "🔗" },
  { name: "Terminal Applications", icon: "/icons/terminal.svg" },
]
