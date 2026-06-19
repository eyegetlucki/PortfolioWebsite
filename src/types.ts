export interface Project {
  id: string
  title: string
  status: 'shipped' | 'in-progress'
  description: string
  longDescription: string
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
