import type { Project, SkillGroup } from '../types'

export const projects: Project[] = [
  {
    id: 'sharpiq',
    title: 'SharpIQ',
    tagline: 'AI-powered NBA, MLB & Soccer prop analysis — production RAG + LangGraph multi-agent system',
    status: 'shipped',
    description: 'Production multi-agent RAG pipeline for sports analytics — not a chatbot, not a wrapper.',
    longDescription:
      'Users input a player, prop type, and line. A 5-agent LangGraph pipeline (Research → Fatigue → Analyst → Critic → Synthesizer) retrieves semantic context from pgvector, computes 20+ enrichment signals, runs two Claude Sonnet calls, and returns a structured verdict with confidence score, sourced reasoning, and a Critic review flag when confidence drops below 60%. Every output is grounded — nothing hallucinated.',
    systems: [
      {
        label: 'LangGraph Multi-Agent Pipeline',
        detail: 'Typed AgentState TypedDict · 5 agents with conditional edges — Research → Fatigue → Analyst (Claude Sonnet) → Critic (Claude Sonnet) → Synthesizer · LangSmith tracing · confidence caps per sport (NBA 90%, MLB 92%, Soccer 70%)',
      },
      {
        label: 'RAG Pipeline',
        detail: 'OpenAI text-embedding-3-small (1536-dim) · Supabase pgvector semantic retrieval · enriched prompt construction · structured Claude JSON output with cited sources',
      },
      {
        label: 'Enrichment Layer (20+ signals)',
        detail: 'Statcast barrel% / exit velocity · platoon splits · batter vs pitcher H2H · batting order · ballpark factors · WC venue altitude · fatigue score · Haversine travel miles · timezone shift · NWS + Open-Meteo weather · opponent defensive rating · shot quality (TS% / 3PAr)',
      },
      {
        label: 'Data Pipeline',
        detail: '5 Railway cron services — NBA (nba_api), MLB (statsapi + Baseball Savant Statcast), Soccer (ESPN + FBref, 11 leagues), odds (The Odds API), travel/weather · ET-normalized date handling for Railway UTC servers · auto-settlement cron by prop type prefix',
      },
      {
        label: 'AWS Production Infra',
        detail: 'FastAPI Dockerized → ECR → ECS Fargate · Application Load Balancer · ACM SSL cert at api.sharpiq.online · IAM roles · CloudWatch logs · security groups · Namecheap DNS · Vercel (Next.js frontend) · Supabase (pgvector + PostgreSQL)',
      },
      {
        label: 'Auth & Monetization',
        detail: 'Clerk JWT with dynamic JWKS verification (email / Google / Apple) · Stripe $15/mo subscription with 7-day free trial · server-side free-tier gating',
      },
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'LangSmith', 'Claude Sonnet', 'OpenAI Embeddings', 'pgvector', 'AWS ECS Fargate', 'Docker', 'Next.js', 'TypeScript', 'Framer Motion', 'Railway', 'Vercel', 'Supabase', 'Clerk', 'Stripe'],
    githubUrl: 'https://github.com/eyegetlucki/sharpiq',
    liveUrl: 'https://sharpiq.online',
    highlight: '5-agent LangGraph pipeline — two Claude Sonnet calls, 20+ enrichment signals, Critic review flag below 60% confidence',
    accentColor: '#10b981',
  },
  {
    id: 'codrifter',
    title: 'CoDrifter',
    tagline: 'AI voice co-driver for Assetto Corsa — real-time ML + sub-300ms voice callouts',
    status: 'shipped',
    description: 'Real-time AI co-driver that reads live telemetry, classifies driving mistakes at 60hz, and calls them out by voice before you\'ve consciously registered the error.',
    longDescription:
      'XGBoost classifier runs on a 30-frame rolling window of 20 engineered features — yaw rate, wheel slip delta, throttle/steering correlation — and fires ElevenLabs voice callouts in under 300ms end-to-end. The model self-improves per session via offline retraining. Corner entry detection learns your personal speed baseline after 3 passes and adapts thresholds to you, not a hardcoded number. After each session, Claude Sonnet reads a structured telemetry digest and generates a full debrief: best/worst sectors, most frequent mistakes, consistency score, and top 3 improvements.',
    stack: ['Python', 'XGBoost', 'ElevenLabs', 'Claude Sonnet', 'PyQt6', 'PyInstaller', 'Inno Setup', 'Windows Shared Memory'],
    githubUrl: 'https://github.com/eyegetlucki/CoDrifter',
    highlight: 'Mistake detected → voice callout in < 300ms — XGBoost at 60hz, fully threaded, main loop never blocks',
    accentColor: '#f97316',
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
      { name: 'RAG / Vector Search', icon: '🔍' },
      { name: 'LangGraph', icon: '🕸️' },
      { name: 'LangChain', icon: '🔗' },
      { name: 'LangSmith', icon: '🔭' },
      { name: 'OpenAI Embeddings', icon: '🧬' },
      { name: 'pgvector', icon: '🗄️' },
      { name: 'MCP Protocol', icon: '🔌' },
      { name: 'Multi-Agent Systems', icon: '⚙️' },
      { name: 'LLM Integration', icon: '🧠' },
      { name: 'XGBoost', icon: '📊' },
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
      { name: 'Python', icon: '🐍' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Node.js', icon: '🟩' },
      { name: 'Framer Motion', icon: '🎞️' },
      { name: 'Socket.io', icon: '🔌' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Supabase', icon: '🟢' },
    ],
  },
  {
    category: 'Infra / Auth',
    skills: [
      { name: 'AWS ECS Fargate', icon: '☁️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'AWS ALB / ACM', icon: '🔒' },
      { name: 'Railway', icon: '🚂' },
      { name: 'Vercel', icon: '🚀' },
      { name: 'Cron / ETL Pipelines', icon: '⏱️' },
      { name: 'REST APIs', icon: '🌐' },
      { name: 'Stripe', icon: '💳' },
      { name: 'Clerk', icon: '🔐' },
      { name: 'JWT', icon: '🔑' },
      { name: 'OAuth 2.0', icon: '🔐' },
      { name: 'Steam API', icon: '🎯' },
    ],
  },
]
