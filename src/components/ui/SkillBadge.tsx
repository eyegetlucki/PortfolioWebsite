interface SkillBadgeProps {
  name: string
  icon: string
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-default select-none"
      style={{
        background: '#1a1a28',
        borderColor: '#1e1e30',
        color: '#94a3b8',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.borderColor = 'rgba(139,92,246,0.5)'
        el.style.color = '#f1f5f9'
        el.style.background = 'rgba(139,92,246,0.08)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.borderColor = '#1e1e30'
        el.style.color = '#94a3b8'
        el.style.background = '#1a1a28'
      }}
    >
      <span>{icon}</span>
      <span>{name}</span>
    </span>
  )
}
