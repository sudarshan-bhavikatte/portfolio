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
    title: "Compiler from scratch",
    description: "Compiler for a custom language built in C++",
    year: "Jan 2025 - Mar 2025",
    details: [
      "Designed and implemented a complete compiler in C++ that translates a simplified high-level language to x86 assembly",
      "Implemented lexical analysis, parsing (recursive descent), AST construction, semantic checks, and symbol-table management",
      "Developed code generation for correctness and performance",
    ],
    tech: [
      { name: "C++", icon: "/icons/cpp.svg" },
      { name: "Compiler Design", icon: "/icons/compiler.svg" },
      { name: "x86 Assembly", icon: "/icons/assembly.svg" },
    ],
  },
  {
    title: "Neural Network from Scratch",
    description: "Feedforward neural network built in C++",
    year: "Aug 2025 - Present",
    details: [
      "Implemented efficient custom matrix operations, forward/backward propagation, and loss computation",
      "Developed gradient-descent training with focus on numerical stability and optimization",
      "Applied modular design to deepen ML and linear algebra skills",
    ],
    tech: [
      { name: "C++", icon: "/icons/cpp.svg" },
      { name: "Machine Learning", icon: "/icons/ml.svg" },
      { name: "Matrix Operations", icon: "/icons/matrix.svg" },
    ],
  },
  {
    title: "Collaborative Whiteboard",
    description: "Real-time collaborative whiteboard using Next.js, Convex, and Clerk",
    year: "Aug 2025 - Present",
    details: [
      "Built a scalable whiteboard with drawing tools, sticky notes, and real-time sync",
      "Implemented multi-user presence, optimistic UI updates, and secure authentication",
      "Designed responsive layout for seamless cross-device collaboration",
    ],
    tech: [
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Convex", icon: "/icons/convex.svg" },
      { name: "Clerk", icon: "/icons/clerk.svg" },
    ],
  },
  {
    title: "Sorting & Pathfinding Visualizer",
    description: "React/Next.js project for interactive learning of algorithms and data structures",
    year: "June 2025",
    details: [
      "Built a real-time web-based visualizer for classic sorting (Quick, Merge, Bubble) and pathfinding algorithms (BFS, Dijkstra, A*)",
      "Implemented interactive grid/bar graphics with algorithm selection, adjustable speed, and maze generation",
      "Focused on educational clarity and step-by-step learning experience",
    ],
    tech: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "JavaScript", icon: "/icons/js.svg" },
      { name: "CSS Animations", icon: "/icons/css.svg" },
    ],
  }
]


export const skills: Skill[] = [
  { name: "C++", icon: "/icons/cpp.svg" },
  // { name: "Rust", icon: "/icons/rust.svg" },
  { name: "JavaScript", icon: "/icons/js.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "SQL", icon: "/icons/postgres.svg" },
  // { name: "HTML", icon: "/icons/html.svg" },
  // { name: "CSS", icon: "/icons/css.svg" },
  { name: "React", icon: "/icons/react.svg" },
  // { name: "Node.js", icon: "/icons/nodejs.svg" },
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
  {name: "GitHub", icon: "/icons/github.svg"},
  {name : "Docker" ,icon: "/icons/docker.svg"}
]
