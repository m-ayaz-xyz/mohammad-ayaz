'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '72px 24px 80px',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '40px',
        alignItems: 'center',
      }}
    >
      {/* Left */}
      <div>
        <div style={{
          display: 'inline-block',
          background: 'var(--accent)',
          color: '#fff',
          fontFamily: "'Space Mono', monospace",
          fontSize: '11px',
          fontWeight: 700,
          padding: '4px 10px',
          marginBottom: '20px',
          letterSpacing: '0.08em',
        }}>
          {/* AVAILABLE FOR WORK */}
          OPEN TO WORK
        </div>

        <h1 className="hero-title" style={{ marginBottom: '16px' }}>
          Hello.<br />
          I'm <span style={{ color: 'var(--accent)' }}>Mohammad Ayaz.</span>
        </h1>

        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '14px',
          color: 'var(--muted)',
          maxWidth: '420px',
          marginBottom: '8px',
          lineHeight: 1.7,
        }}>
          Full-stack developer & B.Tech CSE graduate (2026) from ITM Gorakhpur.
          I build production-ready apps with{' '}
          <span style={{ color: 'var(--fg)', fontWeight: 700 }}>Next.js</span>,{' '}
          <span style={{ color: 'var(--fg)', fontWeight: 700 }}>Node.js</span>, &{' '}
          <span style={{ color: 'var(--fg)', fontWeight: 700 }}>Python</span>.
        </p>

        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '13px',
          color: 'var(--muted)',
          maxWidth: '420px',
          marginBottom: '32px',
          lineHeight: 1.7,
        }}>
          Currently working on{' '}
          <a href="#projects" style={{ color: 'var(--accent)', textDecoration: 'underline', fontWeight: 700 }}>
            Recycle Connect
          </a>
          {/* {' '} */}
          {/* &{' '}
          <a href="#projects" style={{ color: 'var(--accent2)', textDecoration: 'underline', fontWeight: 700 }}>
            TalkDesk
          </a> */}
          .
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn-brutal btn-primary">
            View Projects ↗
          </a>
          <a href="#contact" className="btn-brutal">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Right — decorative terminal window */}
      <div style={{
        width: '280px',
        border: '2px solid var(--border)',
        background: '#0d0d0d',
        flexShrink: 0,
      }} className="hero-terminal">
        <div className="window-bar">
          <div className="window-dot red"></div>
          <div className="window-dot yellow"></div>
          <div className="window-dot green"></div>
          <span className="window-title">az.sh</span>
        </div>
        <div style={{ padding: '20px 18px', fontFamily: "'Space Mono', monospace", fontSize: '12px' }}>
          <p style={{ color: '#6bff6b', marginBottom: '8px' }}>$ whoami</p>
          <p style={{ color: '#fff', marginBottom: '16px' }}>mohammad-ayaz</p>
          <p style={{ color: '#6bff6b', marginBottom: '8px' }}>$ skills --list</p>
          {['Next.js / React.js', 'Node.js / Express.js', 'MongoDB / MySQL', 'Python / Django', 'TailwindCSS', 'Gemini API / Firebase'].map((s) => (
            <p key={s} style={{ color: '#adf', marginBottom: '4px' }}>→ {s}</p>
          ))}
          <p style={{ color: '#6bff6b', marginTop: '16px', marginBottom: '8px' }}>$ status</p>
          <p style={{ color: '#ffbd2e' }}>🟡 Open to Full Time roles....</p>
          <p style={{ color: '#aaa', marginTop: '16px' }}>
            <span style={{ color: '#6bff6b' }}>$</span>{' '}
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '14px',
              background: '#6bff6b',
              verticalAlign: 'middle',
              animation: 'blink 1s step-end infinite',
            }}></span>
          </p>
        </div>
        <style>{`
          @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
          @media (max-width: 768px) { .hero-terminal { display: none; } }
        `}</style>
      </div>
    </section>
  )
}
