import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { GradientText } from '../ui/GradientText'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 60], [0, 1])
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16">
      {/* Scrolled background */}
      <motion.div
        className="absolute inset-0 backdrop-blur-md"
        style={{
          opacity: bgOpacity,
          background: 'rgba(10,10,15,0.9)',
          borderBottom: '1px solid rgba(30,30,48,0.8)',
        }}
      />

      <nav className="relative h-full max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-display text-lg font-bold tracking-tight">
          <GradientText>Laitrell</GradientText>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: '#94a3b8' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#f1f5f9' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 transition-all duration-200" style={{ background: '#94a3b8', transform: mobileOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none' }} />
          <span className="block w-5 h-0.5 transition-all duration-200" style={{ background: '#94a3b8', opacity: mobileOpen ? 0 : 1 }} />
          <span className="block w-5 h-0.5 transition-all duration-200" style={{ background: '#94a3b8', transform: mobileOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 right-0 py-4 px-6 flex flex-col gap-4"
          style={{ background: 'rgba(10,10,15,0.97)', borderBottom: '1px solid #1e1e30' }}
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium"
              style={{ color: '#94a3b8' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  )
}
