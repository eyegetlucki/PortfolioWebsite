import type { Project, SkillGroup } from '../types'

export const projects: Project[] = [
  {
    id: 'foil-and-felony',
    title: 'Foil & Felony',
    status: 'in-progress',
    description: 'Cooperative first-person card shop simulator built in UE5.7.4 + C++.',
    longDescription:
      'Features an MCP/Claude Code bridge connecting a live LLM agent to the UE5 editor via localhost HTTP — 28 real-time editor tools, custom NPC behavior system driving 5 hidden personality values across 9 behavior states, multi-variable probabilistic detection model, dynamic card economy, weighted random pack generation, and a host-based listen server with Steam API.',
    stack: ['Unreal Engine 5.7', 'C++', 'Claude MCP', 'Steam API', 'LLM Integration', 'Blueprint'],
    githubUrl: 'https://github.com/eyegetlucki/FoilAndFelony',
    highlight: 'LLM agent controls the UE5 editor live via 28 custom MCP tools',
    accentColor: '#8b5cf6',
  },
  {
    id: 'betcha-know',
    title: 'Betcha Know!',
    status: 'shipped',
    description: 'Full-stack multiplayer trivia game — built solo, end to end.',
    longDescription:
      'React + Vite frontend, Node.js/Express backend, Socket.io real-time multiplayer across 10 distinct UI screens. Supabase + PostgreSQL for persistence, Stripe for payments, JWT auth, and Google + Discord OAuth 2.0. Shipped to production independently.',
    stack: ['React', 'Vite', 'Node.js', 'Socket.io', 'Supabase', 'PostgreSQL', 'Stripe', 'OAuth 2.0'],
    githubUrl: 'https://github.com/eyegetlucki/betchaknow',
    liveUrl: 'https://betchaknow.vercel.app',
    highlight: 'Real-time multiplayer across 10 screens — fully solo build',
    accentColor: '#22d3ee',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'AI / LLM',
    skills: [
      { name: 'Claude API', icon: '🤖' },
      { name: 'MCP Protocol', icon: '🔗' },
      { name: 'Agentic Pipelines', icon: '⚙️' },
      { name: 'LLM Integration', icon: '🧠' },
      { name: 'Prompt Engineering', icon: '📝' },
    ],
  },
  {
    category: 'Game Dev',
    skills: [
      { name: 'Unreal Engine 5', icon: '🎮' },
      { name: 'C++', icon: '⚡' },
      { name: 'Blueprint', icon: '🔷' },
      { name: 'NPC Systems', icon: '👾' },
      { name: 'Listen Server', icon: '🌐' },
    ],
  },
  {
    category: 'Full-Stack',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Node.js', icon: '🟩' },
      { name: 'Vite', icon: '⚡' },
      { name: 'Socket.io', icon: '🔌' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Supabase', icon: '🟢' },
    ],
  },
  {
    category: 'Infra / Auth',
    skills: [
      { name: 'Vercel', icon: '🚀' },
      { name: 'Stripe', icon: '💳' },
      { name: 'JWT', icon: '🔑' },
      { name: 'OAuth 2.0', icon: '🔐' },
      { name: 'Steam API', icon: '🎯' },
    ],
  },
]
