'use client'
const skillGroups = [
  {
    category: 'Frontend',
    color: '#1a6bff',
    skills: ['Next.js', 'React.js', 'Tailwind CSS', 'ShadcnUI' , 'HTML5/CSS3', 'JavaScript ES6+'],
  },
  {
    category: 'Backend',
    color: '#00c896',
    skills: ['Node.js', 'Express.js', 'Django', 'REST APIs'],
  },
  {
    category: 'Database',
    color: '#ff3d3d',
    skills: ['MongoDB', 'MySQL', 'SQLite', 'Redis'],
  },
  {
    category: 'AI / APIs',
    color: '#ffbd2e',
    skills: ['Firebase', 'Groq API', 'Gemini API', 'REST API'],
  },
  {
    category: 'Tools & DevOps',
    color: '#a855f7',
    skills: ['Git', 'GitHub', 'Vercel', 'Figma', 'Postman'],
  },
  {
    category: 'Languages',
    color: '#ff8c42',
    skills: ['JavaScript', 'Python', 'TypeScript', 'C++'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: 'var(--fg)',
        borderTop: '2px solid var(--border)',
        borderBottom: '2px solid var(--border)',
      }}
    >
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '72px 24px',
      }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ width: '48px', height: '4px', background: 'var(--accent)', marginBottom: '16px' }}></div>
          <h2 className="section-header" style={{ color: 'var(--bg)' }}>
            Skills &amp; Stack
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }} className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.category} style={{
              border: '2px solid #2a2a2a',
              padding: '20px',
              background: '#161616',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  background: group.color,
                }}></div>
                <span style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '14px',
                  fontWeight: 800,
                  color: '#fff',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}>
                  {group.category}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.skills.map((skill) => (
                  <span key={skill} style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    border: `1.5px solid #2a2a2a`,
                    color: '#ccc',
                    background: '#1e1e1e',
                    transition: 'border-color 0.15s ease, color 0.15s ease',
                    cursor: 'default',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = group.color
                      e.currentTarget.style.color = group.color
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#2a2a2a'
                      e.currentTarget.style.color = '#ccc'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
