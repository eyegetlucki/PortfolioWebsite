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
    id: 'verdikt',
    title: 'Verdikt',
    tagline: 'AI-powered ATS resume scorer — instant match score, keyword gap analysis, and Claude-rewritten bullets',
    status: 'shipped',
    description: 'Paste a resume and job description — get an ATS score, keyword gap analysis, ranked suggestions, and AI-rewritten bullets in seconds.',
    longDescription:
      'Claude scores resumes 0–100 across keyword match, impact quality, relevance, and formatting. Pro tier adds seniority mismatch detection, red flag analysis (gaps, weak verbs, job hopping), projected score simulation, and one-click PDF generation of the improved resume. Full monorepo: Next.js 15 web app, Expo React Native iOS app, and FastAPI backend — all sharing a design token package.',
    systems: [
      {
        label: 'Claude Scoring Engine',
        detail: 'claude-sonnet-4-6 — ATS score (0–100) weighted across keyword match, impact quality, relevance & formatting · bullet rewrites with stronger verbs and measurable outcomes · seniority language analysis · red flag detection · projected score simulation',
      },
      {
        label: 'Monorepo Structure',
        detail: 'apps/web (Next.js 15) · apps/mobile (Expo React Native + Expo Router) · backend (FastAPI) · packages/tokens (shared design tokens for web + iOS)',
      },
      {
        label: 'FastAPI Backend',
        detail: 'Async Python · /score, /history, /parse-resume, /generate-resume (Claude Vision, Pro), /billing · Pydantic request/response models · Supabase RLS (plan changes via service role only)',
      },
      {
        label: 'AWS Production Infra',
        detail: 'Docker → ECR → ECS Fargate · ALB + ACM SSL + Route 53 DNS · Vercel (Next.js) · force-redeploy via AWS CLI on push',
      },
      {
        label: 'Auth & Monetization',
        detail: 'Clerk JWT + JWKS (email / Google OAuth) on web and iOS native dev build · Stripe $9/mo with checkout session, billing portal, and webhook handler · usage-gated scans (5 free / 200 Pro per month)',
      },
    ],
    stack: ['Python', 'FastAPI', 'Claude (Anthropic)', 'Next.js 15', 'Expo', 'React Native', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Docker', 'AWS ECS Fargate', 'AWS Route 53', 'Clerk', 'Stripe', 'Vercel'],
    githubUrl: 'https://github.com/eyegetlucki/verdikt-public',
    liveUrl: 'https://verdikt.cc',
    highlight: 'Claude scores, rewrites, and regenerates your resume as a clean PDF — web + iOS from a single monorepo',
    accentColor: '#6366f1',
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
      'Uses Anthropic\'s MCP with 28 extra tools to connect Claude directly to the UE5 editor — reads and writes live game world state in real time. Custom NPC behavior system driving 5 hidden personality values across 9 behavior states, multi-variable probabilistic detection model, dynamic card economy, weighted random pack generation, and a host-based listen server with Steam API.',
    stack: ['Unreal Engine 5.7', 'C++', 'Claude MCP', 'Steam API', 'LLM Integration', 'Blueprint'],
    githubUrl: 'https://github.com/eyegetlucki/FoilAndFelony',
    highlight: 'Claude controls the UE5 editor live via Anthropic MCP + 28 extra tools — reads and writes game world state in real time',
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
      { name: 'React Native', icon: '📱' },
      { name: 'Expo', icon: '🧪' },
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
      { name: 'AWS Route 53', icon: '🌍' },
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
