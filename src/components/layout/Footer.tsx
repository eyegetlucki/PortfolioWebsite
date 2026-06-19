export function Footer() {
  return (
    <footer className="py-10 text-center" style={{ borderTop: '1px solid #1e1e30' }}>
      <p className="text-sm font-semibold mb-1" style={{ color: '#475569' }}>Laitrell Uy-Xayachak</p>
      <p className="text-xs mb-3" style={{ color: '#334155' }}>Built with React · Vite · Framer Motion · Tailwind</p>
      <a
        href="https://github.com/eyegetlucki"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs transition-colors duration-150"
        style={{ color: '#475569' }}
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#8b5cf6' }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#475569' }}
      >
        github.com/eyegetlucki
      </a>
    </footer>
  )
}
