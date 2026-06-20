export interface ProjectSystem {
  label: string
  detail: string
}

export interface Project {
  id: string
  title: string
  tagline?: string
  status: 'shipped' | 'in-progress'
  description: string
  longDescription: string
  systems?: ProjectSystem[]
  stack: string[]
  githubUrl: string
  liveUrl?: string
  highlight: string
  accentColor: string
}

export interface Skill {
  name: string
  icon: string
}

export interface SkillGroup {
  category: string
  skills: Skill[]
}
