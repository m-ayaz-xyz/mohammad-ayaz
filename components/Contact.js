'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )

    // Opens default mail client with pre-filled content
    window.location.href = `mailto:mayaz92786@gmail.com?subject=${subject}&body=${body}`

    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" style={{
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '72px 24px 80px',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'start',
      }} className="contact-grid">

        {/* Left */}
        <div>
          <div className="accent-line"></div>
          <h2 className="section-header" style={{ marginBottom: '16px' }}>
            Get in touch
          </h2>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '13px',
            color: 'var(--muted)',
            lineHeight: 1.9,
            marginBottom: '32px',
          }}>
            Looking for a developer for your next project? Or just want to
            chat about tech? My DMs are open. I typically reply within 24 hours.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'Email',    value: 'mayaz92786@gmail.com',              href: 'mailto:mayaz92786@gmail.com',                    color: '#1a6bff' },
              { label: 'GitHub',   value: 'github.com/m-ayaz-xyz',             href: 'https://github.com/m-ayaz-xyz',                  color: '#333'    },
              { label: 'LinkedIn', value: 'linkedin.com/in/mohammad-ayaz',     href: 'https://linkedin.com/in/mohammad-ayaz-016976329', color: '#0077b5' },
              { label: 'X',        value: '@mayaz_xyz',                        href: 'https://x.com/mayaz_xyz',                        color: '#1da1f2' },
            ].map(({ label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' ? '_self' : '_blank'}
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '12px 16px',
                  border: '2px solid var(--border)',
                  background: 'var(--card-bg)',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '12px',
                  color: 'var(--fg)',
                  transition: 'background 0.15s ease, color 0.15s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--fg)'
                  e.currentTarget.style.color = 'var(--bg)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--card-bg)'
                  e.currentTarget.style.color = 'var(--fg)'
                }}
              >
                <span style={{
                  fontWeight: 700,
                  color,
                  minWidth: '64px',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                }}>
                  {label}
                </span>
                {value}
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div style={{ border: '2px solid var(--border)', background: 'var(--card-bg)' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 16px',
            background: 'var(--fg)',
            borderBottom: '2px solid var(--border)',
          }}>
            <div className="window-dot red"></div>
            <div className="window-dot yellow"></div>
            <div className="window-dot green"></div>
            <span className="window-title">contact.sh</span>
          </div>

          <div style={{ padding: '24px' }}>
            {sent && (
              <div style={{
                padding: '12px 16px',
                background: '#e6faf5',
                border: '2px solid #00c896',
                fontFamily: "'Space Mono', monospace",
                fontSize: '12px',
                color: '#00c896',
                marginBottom: '20px',
                fontWeight: 700,
              }}>
                ✓ Mail client opened! Check your email app.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { id: 'name',  label: 'Name',  type: 'text',  placeholder: 'Your name'        },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com'   },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}>
                    {label}
                  </label>
                  <input
                    type={type}
                    value={form[id]}
                    onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                    placeholder={placeholder}
                    required
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '2px solid var(--border)',
                      background: 'var(--bg)',
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '13px',
                      color: 'var(--fg)',
                      outline: 'none',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
                  />
                </div>
              ))}

              <div>
                <label style={{
                  display: 'block',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                }}>
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Your message here..."
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    border: '2px solid var(--border)',
                    background: 'var(--bg)',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '13px',
                    color: 'var(--fg)',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
                />
              </div>

              <button
                type="submit"
                className="btn-brutal btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}