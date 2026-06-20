import { motion } from 'framer-motion'
import { useState } from 'react'
import type { Project } from '../../types'

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

function hexToRgb(hex: string): string {
  const h = hex.replace('#', '')
  const r = parseInt(h.substring(0, 2), 16)
  const g = parseInt(h.substring(2, 4), 16)
  const b = parseInt(h.substring(4, 6), 16)
  return `${r},${g},${b}`
}

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)
  const accent = project.accentColor
  const accentRgb = hexToRgb(accent)

  if (featured) {
    return (
      <motion.div
        className="relative rounded-xl overflow-hidden"
        style={{
          background: '#12121a',
          border: `1px solid ${hovered ? `rgba(${accentRgb},0.4)` : '#1e1e30'}`,
          boxShadow: hovered
            ? `0 0 0 0px transparent, 0 16px 64px rgba(${accentRgb},0.14)`
            : '0 4px 32px rgba(0,0,0,0.25)',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Accent top edge */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(${accentRgb},${hovered ? '0.9' : '0.4'}), transparent)`,
            transition: 'background 0.3s ease',
          }}
          aria-hidden="true"
        />

        {/* Diagonal sweep */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ x: '-100%', opacity: 0 }}
          animate={hovered ? { x: '200%', opacity: 1 } : { x: '-100%', opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: `linear-gradient(105deg, transparent 40%, rgba(${accentRgb},0.06) 50%, rgba(${accentRgb},0.03) 55%, transparent 65%)`,
            width: '60%',
          }}
          aria-hidden="true"
        />

        <div className="p-7 md:p-9">
          {/* Header row */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold" style={{ color: '#f1f5f9' }}>
                  {project.title}
                </h3>
                <span
                  className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide"
                  style={{ background: `rgba(${accentRgb},0.10)`, color: accent, border: `1px solid ${accent}40` }}
                >
                  ✓ Shipped
                </span>
              </div>
              {project.tagline && (
                <p className="text-sm font-medium" style={{ color: `rgba(${accentRgb},0.85)` }}>
                  {project.tagline}
                </p>
              )}
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-150"
                style={{ color: '#94a3b8' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#f1f5f9' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8' }}
              >
                <GitHubIcon /> GitHub
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity duration-150"
                  style={{ color: accent }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
                >
                  <ExternalIcon /> Live
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm mb-1" style={{ color: '#94a3b8' }}>{project.description}</p>
          <p className="text-xs leading-relaxed mb-6" style={{ color: '#475569' }}>{project.longDescription}</p>

          {/* Highlight callout */}
          <div
            className="text-xs font-medium px-3 py-2 rounded-lg mb-7 inline-block"
            style={{
              background: `rgba(${accentRgb},0.07)`,
              border: `1px solid ${accent}30`,
              color: accent,
            }}
          >
            ✦ {project.highlight}
          </div>

          {/* Key systems grid */}
          {project.systems && project.systems.length > 0 && (
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#334155' }}>
                Key Systems
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.systems.map(sys => (
                  <div
                    key={sys.label}
                    className="rounded-lg px-4 py-3"
                    style={{ background: '#0e0e18', border: '1px solid #1a1a2e' }}
                  >
                    <p className="text-xs font-semibold mb-1" style={{ color: accent }}>
                      {sys.label}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: '#475569' }}>
                      {sys.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stack tags */}
          <div className="flex flex-wrap gap-1.5 pt-5" style={{ borderTop: '1px solid #1e1e30' }}>
            {project.stack.map(tag => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded"
                style={{ background: '#1a1a28', border: '1px solid #1e1e30', color: '#64748b' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="relative flex flex-col h-full rounded-xl p-6 overflow-hidden"
      style={{
        background: '#12121a',
        border: `1px solid ${hovered ? `rgba(${accentRgb},0.35)` : '#1e1e30'}`,
        boxShadow: hovered
          ? `0 0 0 0px transparent, 0 12px 48px rgba(${accentRgb},0.12)`
          : '0 4px 24px rgba(0,0,0,0.2)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Diagonal light sweep on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ x: '-100%', opacity: 0 }}
        animate={hovered ? { x: '200%', opacity: 1 } : { x: '-100%', opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background: `linear-gradient(105deg, transparent 40%, rgba(${accentRgb},0.08) 50%, rgba(${accentRgb},0.04) 55%, transparent 65%)`,
          width: '60%',
        }}
        aria-hidden="true"
      />

      {/* Accent top edge line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${accentRgb},${hovered ? '0.7' : '0.25'}), transparent)`,
          transition: 'background 0.3s ease',
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3 mt-2">
        <h3 className="font-display text-lg font-bold" style={{ color: '#f1f5f9' }}>{project.title}</h3>
        <span
          className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide"
          style={
            project.status === 'shipped'
              ? { background: `rgba(${accentRgb},0.10)`, color: accent, border: `1px solid ${accent}40` }
              : { background: 'rgba(250,204,21,0.10)', color: '#fbbf24', border: '1px solid rgba(250,204,21,0.25)' }
          }
        >
          {project.status === 'shipped' ? '✓ Shipped' : '⚡ In Progress'}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm mb-2" style={{ color: '#94a3b8' }}>{project.description}</p>
      <p className="text-xs leading-relaxed mb-4" style={{ color: '#475569' }}>{project.longDescription}</p>

      {/* Highlight callout */}
      <div
        className="text-xs font-medium px-3 py-2 rounded-lg mb-4"
        style={{
          background: `rgba(${accentRgb},0.07)`,
          border: `1px solid ${accent}30`,
          color: accent,
        }}
      >
        ✦ {project.highlight}
      </div>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
        {project.stack.map(tag => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded"
            style={{ background: '#1a1a28', border: '1px solid #1e1e30', color: '#64748b' }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4" style={{ borderTop: '1px solid #1e1e30' }}>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-150"
          style={{ color: '#94a3b8' }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#f1f5f9' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8' }}
        >
          <GitHubIcon /> GitHub
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150"
            style={{ color: accent }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
          >
            <ExternalIcon /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}
