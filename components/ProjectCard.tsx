import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="group cursor-pointer animate-slide-up transition-all duration-300 hover:translate-x-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-medium text-slate-800 group-hover:text-teal-600 transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-500">{project.year}</span>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
      </div>
      <p className="text-slate-600 mb-3">{project.description}</p>
      <ul className="space-y-1 mb-4">
        {project.details.map((detail, idx) => (
          <li key={idx} className="text-sm text-slate-500 flex items-start">
            <span className="w-1 h-1 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            {detail}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="text-xs px-2 py-1 bg-teal-50 text-teal-700 rounded border border-teal-200 hover:bg-teal-100 transition-colors duration-200 flex items-center gap-1"
          >
            
      {tech.icon && (
        <img
          src={tech.icon}
          alt={`${tech.name} logo`}
          className="w-4 h-4"
        />
      )}
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  )
}
