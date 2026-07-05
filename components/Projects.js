const projects = [
  {
  id: 1,
  title: 'Recycle Connect',
  description:
    'Full-stack waste management platform that connects households with nearby recycling vendors. Features real-time geo-based vendor discovery, pickup scheduling, and price comparison. Built with Django REST Framework backend, PostgreSQL for production database, and React frontend with JWT authentication.',
  tags: ['Next.js', 'Express.js','Node.js', 'React Leaflet', 'OpenStreetMap', 'REST API', 'MongoDB'],
  status: 'Working on it',
  statusColor: '#00c896',
  accent: '#2ecc71',
  file: 'recycle-connect.jsx',
  image: 'bg-green',
  url: 'blog/recycleconnect',
},
  {
    id: 2,
    title: 'AI LinkedIn Post Generator',
    description:
      'Full-stack AI web app that generates personalized LinkedIn posts with adjustable tone and length. Integrated Google Gemini API for content generation, Firebase for auth & data persistence, and a clean Shadcn UI.',
    tags: ['Next.js', 'ShadcnUI', 'Firebase', 'Gemini AI'],
    status: 'Completed',
    statusColor: '#00c896',
    accent: '#1a6bff',
    file: 'linkedin-gen.jsx',
    image: 'bg-blue',
    url: 'https://github.com/m-ayaz-xyz/AI-LinkedIn-Post-Generator',
  },
  {
    id: 3,
    title: 'Forum Website',
    description:
      'Full-stack MERN community forum with JWT authentication, CRUD for posts, bookmark system, and post editing. RESTful APIs with optimized MongoDB schemas.',
    tags: ['MongoDB' , 'Express.js' , 'React.js' , 'Node.js'],
    status: 'Completed',
    statusColor: '#1a6bff',
    accent: '#1a6bff',
    file: 'forum-app.jsx',
    image: 'bg-green',
    url : 'https://github.com/m-ayaz-xyz/forum-web-app',
  },
  {
    id: 4,
    title: 'JSON Insight Tool',
    description:
      'A personal dev productivity tool for JSON formatting, validation, and nested key exploration. Clean UI, hosted and accessible publicly.',
    tags: [ 'React.js' , 'JSON' , 'Dev Tool'],
    status: 'Live',
    statusColor: '#ff3d3d',
    accent: '#ff3d3d',
    file: 'json-insight.jsx',
    image: 'bg-red',
    url: 'https://jsoninsighttools.great-site.net/',
  },
  
  // {
  //   id: 4,
  //   title: 'ProToolsHub',
  //   description:
  //     'Multi-niche professional tool website targeting AdSense revenue. Covers construction, legal, healthcare, farming, and sports with ~10 tools at launch.',
  //   tags: ['Next.js', 'Tailwind', 'Vercel', 'AdSense'],
  //   status: 'Planning',
  //   statusColor: '#a855f7',
  //   accent: '#a855f7',
  //   file: 'protoolshub.html',
  //   image: 'bg-purple',
  // },
]

const bgPatterns = {
  'bg-blue': 'linear-gradient(135deg, #e8f0ff 0%, #c7d9ff 100%)',
  'bg-green': 'linear-gradient(135deg, #e6faf5 0%, #b3f0e0 100%)',
  'bg-red': 'linear-gradient(135deg, #fff0f0 0%, #ffd0d0 100%)',
  'bg-purple': 'linear-gradient(135deg, #f5f0ff 0%, #ddd0ff 100%)',
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '72px 24px',
      }}
    >
      <div style={{ marginBottom: '40px' }}>
        <div className="accent-line"></div>
        <h2 className="section-header">Projects</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
      }} className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="card">
            {/* Window bar */}
            <div className="window-bar">
              <div className="window-dot red"></div>
              <div className="window-dot yellow"></div>
              <div className="window-dot green"></div>
              <span className="window-title">{p.file}</span>
            </div>

            {/* Image / banner */}
            <div style={{
              height: '140px',
              background: bgPatterns[p.image],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottom: '2px solid var(--border)',
            }}>
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '40px',
                fontWeight: 800,
                color: p.accent,
                opacity: 0.25,
                letterSpacing: '-0.04em',
                userSelect: 'none',
              }}>
                {p.title.toUpperCase()}
              </span>
            </div>

            {/* Content */}
            <div style={{ padding: '20px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '20px',
                  fontWeight: 800,
                }}>
                  {p.title}
                </h3>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  fontWeight: 700,
                  padding: '3px 8px',
                  border: `1.5px solid ${p.statusColor}`,
                  color: p.statusColor,
                  whiteSpace: 'nowrap',
                }}>
                  {p.status}
                </span>
              </div>

              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '13px',
                color: 'var(--muted)',
                lineHeight: 1.7,
                marginBottom: '16px',
              }}>
                {p.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-brutal" style={{ fontSize: '12px' }}>
                View project ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 720px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
