import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { GradientText } from '../ui/GradientText'

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

function GlitchLabel({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  useEffect(() => {
    if (isInView && ref.current) ref.current.classList.add('section-label-glitch')
  }, [isInView])
  return <span ref={ref} className="section-label mb-4 block">{text}</span>
}

export function Contact() {
  return (
    <section id="contact" className="py-28 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection>
          <GlitchLabel text="Contact" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: '#f1f5f9' }}>
            Let's <GradientText>Work Together</GradientText>
          </h2>
          <p className="text-base mb-12 max-w-lg mx-auto" style={{ color: '#475569' }}>
            Open to AI/LLM integration work, agentic pipeline projects, and interesting full-stack builds.
          </p>

          {/* Contact card */}
          <div
            className="rounded-2xl p-8 text-left space-y-5"
            style={{ background: '#12121a', border: '1px solid #1e1e30' }}
          >
            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="text-lg">✉️</span>
              <a
                href="mailto:laitrell.company@gmail.com"
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: '#8b5cf6' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#22d3ee' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#8b5cf6' }}
              >
                laitrell.company@gmail.com
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-3">
              <span style={{ color: '#64748b' }}><GitHubIcon /></span>
              <a
                href="https://github.com/eyegetlucki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: '#8b5cf6' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#22d3ee' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#8b5cf6' }}
              >
                github.com/eyegetlucki
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <span className="text-lg">📍</span>
              <span className="text-sm" style={{ color: '#64748b' }}>Fairfax, VA — Remote</span>
            </div>
          </div>

          <p className="text-xs mt-6" style={{ color: '#334155' }}>
            Currently available for freelance and contract work.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
