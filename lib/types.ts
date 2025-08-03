export interface Greeting {
  text: string
  lang: string
}

export interface Tech {
  name: string
  icon: string
}

export interface Skill {
  name: string
  icon: string
}

export interface Project {
  title: string
  description: string
  year: string
  details: string[]
  tech: Tech[]
}
