import { useEffect, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { GradientText } from '../ui/GradientText'
import { skillGroups } from '../../data/content'

function GlitchLabel({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  useEffect(() => {
    if (isInView && ref.current) ref.current.classList.add('section-label-glitch')
  }, [isInView])
  return <span ref={ref} className="section-label mb-4 block">{text}</span>
}

const categoryMeta: Record<string, { icon: string; accent: string; accentRgb: string }> = {
  'AI / LLM':     { icon: '🧠', accent: '#8b5cf6', accentRgb: '139,92,246' },
  'Game Dev':     { icon: '🎮', accent: '#ec4899', accentRgb: '236,72,153' },
  'Full-Stack':   { icon: '⚛️', accent: '#22d3ee', accentRgb: '34,211,238' },
  'Infra / Auth': { icon: '🚀', accent: '#f59e0b', accentRgb: '245,158,11' },
}

function SkillCard({ group, delay }: { group: typeof skillGroups[number]; delay: number }) {
  const [hovered, setHovered] = useState(false)
  const meta = categoryMeta[group.category] ?? { icon: '⚡', accent: '#8b5cf6', accentRgb: '139,92,246' }
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <AnimatedSection delay={delay}>
      <motion.div
        ref={ref}
        className="relative rounded-xl p-6 h-full overflow-hidden"
        style={{
          background: '#12121a',
          border: `1px solid ${hovered ? `rgba(${meta.accentRgb},0.4)` : '#1e1e30'}`,
          boxShadow: hovered ? `0 8px 40px rgba(${meta.accentRgb},0.12)` : 'none',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Accent top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${meta.accent}, transparent)`,
            opacity: hovered ? 0.9 : 0.35,
            transition: 'opacity 0.3s ease',
          }}
          aria-hidden="true"
        />

        {/* Corner glow */}
        <div
          className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(${meta.accentRgb},0.12) 0%, transparent 70%)`,
            opacity: hovered ? 1 : 0.5,
            transition: 'opacity 0.3s ease',
          }}
          aria-hidden="true"
        />

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <span
            className="flex items-center justify-center w-9 h-9 rounded-lg text-lg flex-shrink-0"
            style={{ background: `rgba(${meta.accentRgb},0.1)`, border: `1px solid rgba(${meta.accentRgb},0.2)` }}
          >
            {meta.icon}
          </span>
          <p
            className="font-display text-sm font-bold uppercase tracking-widest"
            style={{ color: meta.accent }}
          >
            {group.category}
          </p>
        </div>

        {/* Skill badges */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
              style={{
                background: `rgba(${meta.accentRgb},0.06)`,
                border: `1px solid rgba(${meta.accentRgb},0.15)`,
                color: '#94a3b8',
              }}
              initial={isInView ? { opacity: 0, scale: 0.85 } : false}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: delay + i * 0.05, ease: 'easeOut' }}
              whileHover={{
                backgroundColor: `rgba(${meta.accentRgb},0.12)`,
                borderColor: `rgba(${meta.accentRgb},0.4)`,
                color: '#f1f5f9',
                scale: 1.04,
                transition: { duration: 0.15 },
              }}
            >
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.span>
          ))}
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <GlitchLabel text="Skills" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-14" style={{ color: '#f1f5f9' }}>
            The <GradientText>Stack</GradientText>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} group={group} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
