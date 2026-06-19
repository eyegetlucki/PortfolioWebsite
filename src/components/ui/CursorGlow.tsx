import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        style={{
          position: 'absolute',
          left: pos.x - 400,
          top: pos.y - 400,
          width: 800,
          height: 800,
          background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, rgba(34,211,238,0.03) 40%, transparent 70%)',
          transition: 'left 0.12s ease, top 0.12s ease',
          borderRadius: '50%',
        }}
      />
    </div>
  )
}
