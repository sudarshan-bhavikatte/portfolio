import { skills } from "@/lib/data"
import SkillTag from "./SkillTag"

export default function Skills() {
  return (
    <section className="mb-16 animate-slide-up">
      <h2 className="text-xl font-semibold text-slate-800 mb-6">Skills & Technologies</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillTag key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  )
}
