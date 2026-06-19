import { CursorGlow } from './components/ui/CursorGlow'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Contact } from './components/sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ background: '#0a0a0f' }}>
      {/* Decorative background mesh */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '60%',
            height: '60%',
            background: 'radial-gradient(ellipse at 20% 10%, rgba(139,92,246,0.10) 0%, transparent 65%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '60%',
            height: '60%',
            background: 'radial-gradient(ellipse at 80% 90%, rgba(34,211,238,0.07) 0%, transparent 65%)',
          }}
        />
      </div>

      <CursorGlow />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
