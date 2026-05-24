export default function About() {
  return (
    <section
      id="about"
      style={{
        borderTop: '2px solid var(--border)',
        borderBottom: '2px solid var(--border)',
        background: 'var(--card-bg)',
      }}
    >
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '72px 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'start',
      }} className="about-grid">

        {/* Left */}
        <div>
          <div className="accent-line"></div>
          <h2 className="section-header" style={{ marginBottom: '24px' }}>About me</h2>

          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '13px',
            color: 'var(--muted)',
            lineHeight: 1.9,
            marginBottom: '16px',
          }}>
            I'm a B.Tech CSE graduate (2026) from{' '}
            <strong style={{ color: 'var(--fg)' }}>ITM GIDA, Gorakhpur</strong>, affiliated with
            Dr. A.P.J. Abdul Kalam Technical University, Lucknow (2025–26).
          </p>

          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '13px',
            color: 'var(--muted)',
            lineHeight: 1.9,
            marginBottom: '16px',
          }}>
            I specialize in full-stack development with the {' '}
            <strong style={{ color: 'var(--accent)' }}>MERN stack and Next.js.</strong> I've independently built and deployed production-ready applications 
            integrating REST APIs, AI APIs, and Firebase — handling everything from UI to backend to deployment.
          </p>

          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '13px',
            color: 'var(--muted)',
            lineHeight: 1.9,
            marginBottom: '32px',
          }}>
            I have hands-on internship experience at <strong style={{ color: 'var(--fg)' }}>Edupply </strong>where I was 
the sole developer managing design, development, QA, and deployment.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="https://drive.google.com/file/d/1zuEe0JVhGWiASGzqW049vbugGsJoPaEw/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="btn-brutal btn-primary">Resume</a>
            <a href="#projects" className="btn-brutal">See my work</a>
          </div>
        </div>

        {/* Right — info card */}
        <div style={{ border: '2px solid var(--border)' }}>
          <div style={{
            padding: '14px 20px',
            background: 'var(--fg)',
            borderBottom: '2px solid var(--border)',
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            color: '#aaa',
            fontWeight: 700,
          }}>
            README.md
          </div>

          {[
            { key: 'Name', value: 'Mohammad Ayaz' },
            { key: 'Degree', value: 'B.Tech CSE (2026)' },
            { key: 'College', value: 'ITM GIDA, Gorakhpur' }, 
            { key: 'University', value: 'AKTU, Lucknow' },
            { key: 'Role', value: 'Full Stack Developer' },
            { key: 'Available', value: 'Yes Full Time & Remote' },
            { key: 'Location', value: 'Gorakhpur, UP, India' },
            { key: 'Languages', value: 'Hindi, English' },
          ].map(({ key, value }, i) => (
            <div
              key={key}
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                borderBottom: i < 7 ? '1.5px solid #e8e4da' : 'none',
                padding: '12px 20px',
                background: i % 2 === 0 ? 'transparent' : '#f9f7f2',
              }}
            >
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--accent)',
              }}>
                {key}
              </span>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '12px',
                color: 'var(--fg)',
              }}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
