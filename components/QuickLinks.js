export default function QuickLinks() {
  const links = [
    { label: 'Blog', href: '#blog' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <section style={{
      borderTop: '2px solid var(--border)',
      borderBottom: '2px solid var(--border)',
      background: 'var(--card-bg)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          padding: '24px 0 12px',
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '13px',
          letterSpacing: '0.08em',
          color: 'var(--muted)',
          textTransform: 'uppercase',
        }}>
          Quick links
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '2px solid var(--border)',
        }} className="quick-links-grid">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="quick-link"
              style={{
                borderRight: '2px solid var(--border)',
                borderTop: 'none',
                borderBottom: '2px solid var(--border)',
                borderLeft: 'none',
              }}
            >
              {link.label}
              <span className="arrow-icon">↗</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .quick-links-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
