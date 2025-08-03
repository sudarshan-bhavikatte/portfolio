import type { Skill } from "@/lib/types";

interface SkillTagProps {
  skill: Skill;
  index: number;
}

export default function SkillTag({ skill, index }: SkillTagProps) {
  return (
    <span
      className="text-sm px-3 py-1 bg-amber-100 text-slate-700 rounded-full border border-amber-200 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 hover:scale-105 transition-all duration-200 cursor-default flex items-center gap-2"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {skill.icon && (
        <img
          src={skill.icon}
          alt={`${skill.name} logo`}
          className="w-4 h-4"
        />
      )}
      {skill.name}
    </span>
  );
}
