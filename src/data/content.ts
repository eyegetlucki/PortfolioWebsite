import type { Project, SkillGroup } from '../types'

export const projects: Project[] = [
  {
    id: 'sharpiq',
    title: 'SharpIQ',
    tagline: 'AI-powered NBA & MLB prop betting analysis platform',
    status: 'shipped',
    description: 'Production RAG pipeline for sports analytics — not a chatbot, not a wrapper.',
    longDescription:
      'Nightly ETL ingests NBA/MLB player data, enriches it with composite fatigue scores (rolling minutes, travel miles, timezone shift, rest days), matchup signals, park factors, and game-time weather, then embeds it as 1536-dim vectors into Supabase pgvector. At inference time, Claude reasons over semantically retrieved context and returns structured JSON with confidence scores and cited sources. Every output is grounded — nothing hallucinated.',
    systems: [
      {
        label: 'RAG Pipeline',
        detail: 'LangChain orchestration · OpenAI text-embedding-3-small (1536-dim) · Supabase pgvector semantic retrieval · Claude structured JSON output with cited sources',
      },
      {
        label: 'Enrichment Layer',
        detail: 'Composite fatigue score (rolling mins + travel miles + timezone shift + rest days) · Haversine travel distance · back-to-back detection · opponent defensive rating & pace · ballpark park factors · game-time wind via NWS · batter splits vs LHP/RHP',
      },
      {
        label: 'Multi-source Ingest',
        detail: 'nba_api · statsapi (MLB) · The Odds API · ESPN public API · National Weather Service — nightly cron on Railway keeps embeddings fresh',
      },
      {
        label: 'FastAPI Backend',
        detail: 'Sport-aware /analyze endpoint · player search · props feed · prediction logging · auto-settlement cron · in-memory cache layer (1–12h TTLs)',
      },
      {
        label: 'Production Infra',
        detail: 'Railway (backend + 4 cron services: nightly ingest 2am ET, props refresh 4pm ET, settlement 8pm + 11pm ET) · Vercel (Next.js) · Supabase (Postgres + pgvector)',
      },
      {
        label: 'Auth & Monetization',
        detail: 'Clerk JWT (email / Google / Apple) · Stripe subscription ($15/mo) · server-side free-tier gating',
      },
    ],
    stack: ['Python', 'FastAPI', 'LangChain', 'OpenAI Embeddings', 'Claude (Anthropic)', 'Supabase pgvector', 'PostgreSQL', 'Next.js', 'TypeScript', 'Framer Motion', 'Railway', 'Vercel', 'Clerk', 'Stripe'],
    githubUrl: 'https://github.com/eyegetlucki/sharpiq',
    liveUrl: 'https://sharpiq.online',
    highlight: 'Context is retrieved, not hallucinated — every Claude output cites its source embeddings',
    accentColor: '#10b981',
  },
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
