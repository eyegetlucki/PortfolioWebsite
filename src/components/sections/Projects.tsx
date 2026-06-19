import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { ProjectCard } from '../ui/ProjectCard'
import { GradientText } from '../ui/GradientText'
import { projects } from '../../data/content'

function GlitchLabel({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  useEffect(() => {
    if (isInView && ref.current) ref.current.classList.add('section-label-glitch')
  }, [isInView])
  return <span ref={ref} className="section-label mb-4 block">{text}</span>
}

export function Projects() {
  return (
    <section id="projects" className="py-28 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <GlitchLabel text="Projects" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3" style={{ color: '#f1f5f9' }}>
            What I've <GradientText>Built</GradientText>
          </h2>
          <p className="text-base mb-14 max-w-xl" style={{ color: '#475569' }}>
            Two projects — one shipped, one in progress. Both technically interesting.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
