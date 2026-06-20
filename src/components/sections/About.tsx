import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { GradientText } from '../ui/GradientText'

const stats = [
  { value: '3', numeric: 3, label: 'Projects Shipped to Production' },
  { value: '28', numeric: 28, label: 'Live UE5 Editor Tools via MCP' },
  { value: 'Solo', numeric: null, label: 'End-to-End Builds' },
  { value: 'Remote', numeric: null, label: 'Fairfax, VA' },
]

function CountUp({ target, duration = 1.2 }: { target: number; duration?: number }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, target, {
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: v => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, target, duration])

  return <span ref={ref}>{display}</span>
}

function GlitchLabel({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (isInView && ref.current) {
      ref.current.classList.add('section-label-glitch')
    }
  }, [isInView])

  return (
    <span ref={ref} className="section-label mb-4 block">
      {text}
    </span>
  )
}

export function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <AnimatedSection direction="left">
          <GlitchLabel text="About" />
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: '#f1f5f9' }}>
            Building at the intersection of{' '}
            <GradientText>AI and interactive systems</GradientText>
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: '#94a3b8' }}>
            <p>
              I'm a self-taught AI developer and solo builder. I build systems that didn't exist before — RAG pipelines, LLM integrations, agentic workflows, and full-stack apps that actually ship.
            </p>
            <p>
              Most recently I built SharpIQ — a production RAG pipeline that ingests NBA/MLB player data nightly, enriches it with fatigue scores, travel context, and matchup signals, embeds it into a vector database, and uses Claude to reason over retrieved context and return structured, sourced prop analysis. Every output cites its evidence. Nothing hallucinated.
            </p>
            <p>
              I also wired Claude as a live AI agent into the Unreal Engine 5 editor via a custom MCP bridge — 28 real-time tools that let an LLM read and write game world state directly. The kind of thing that shouldn't work, and then it does.
            </p>
          </div>
        </AnimatedSection>

        {/* Right — video + stat cards */}
        <AnimatedSection direction="right" delay={0.15}>
          <div
            className="rounded-xl overflow-hidden mb-4"
            style={{ border: '1px solid #1e1e30' }}
          >
            <video
              src="/laitrell.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full block"
              style={{ objectFit: 'cover', maxHeight: '280px' }}
            />
            <p className="text-xs text-center py-2" style={{ background: '#12121a', color: '#334155' }}>
              when I'm not shipping code
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(stat => (
              <div
                key={stat.value}
                className="rounded-xl p-5"
                style={{ background: '#12121a', border: '1px solid #1e1e30' }}
              >
                <p className="text-3xl font-extrabold mb-1 gradient-text">
                  {stat.numeric !== null ? (
                    <CountUp target={stat.numeric} />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="text-xs leading-snug" style={{ color: '#475569' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
