'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: 'https://drive.google.com/file/d/1zuEe0JVhGWiASGzqW049vbugGsJoPaEw/view?usp=drivesdk' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--nav-bg)',
      borderBottom: '2px solid var(--border)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '56px',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '39px',
          height: '36px',
          background: 'var(--accent)',
          color: '#fff',
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '16px',
          letterSpacing: '-0.04em',
          flexShrink: 0,
        }}>
          Az
        </Link>

        {/* Desktop links */}
        <div style={{
          display: 'flex',
          gap: '0',
        }} className="desktop-nav">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'var(--nav-fg)',
                fontFamily: "'Space Mono', monospace",
                fontSize: '13px',
                fontWeight: 700,
                padding: '8px 18px',
                borderLeft: '1px solid #2a2a2a',
                transition: 'background 0.15s ease, color 0.15s ease',
                display: 'block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: '2px solid var(--nav-fg)',
            color: 'var(--nav-fg)',
            padding: '4px 8px',
            cursor: 'pointer',
            fontFamily: "'Space Mono', monospace",
            fontSize: '12px',
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--nav-bg)',
          borderTop: '2px solid #2a2a2a',
        }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: 'var(--nav-fg)',
                fontFamily: "'Space Mono', monospace",
                fontSize: '14px',
                fontWeight: 700,
                padding: '14px 24px',
                borderBottom: '1px solid #2a2a2a',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
