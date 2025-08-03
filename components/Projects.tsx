import { projects } from "@/lib/data"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-slate-800 mb-6 animate-slide-up">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
