import { motion } from 'framer-motion'
import { GradientText } from '../ui/GradientText'
import { ParticleCanvas } from '../ui/ParticleCanvas'
import { MagneticButton } from '../ui/MagneticButton'

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-12 scroll-mt-16 overflow-hidden"
    >
      {/* Neural network canvas */}
      <ParticleCanvas />

      {/* Glowing orbs */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 6s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
        aria-hidden="true"
      />

      {/* Noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.025,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full pt-20 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Tag line */}
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: '#475569' }}
          >
            AI Developer · Game Builder · Fairfax, VA (Remote)
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.01em' }}
          >
            <span style={{ color: '#f1f5f9' }}>Laitrell</span>
            <br />
            <GradientText>Uy-Xayachak</GradientText>
          </motion.h1>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-2xl font-medium leading-relaxed mb-10 max-w-2xl"
            style={{ color: '#94a3b8' }}
          >
            AI-Native Developer · LLM Integration · Agentic Pipelines
            <br />
            <span style={{ color: '#475569' }}>Unreal Engine 5 · Full-Stack</span>
          </motion.h2>

          {/* CTAs with magnetic effect */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <MagneticButton>
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest" style={{ color: '#334155' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" style={{ color: '#475569' }}>
              <path d="M8 0v20M1 13l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
