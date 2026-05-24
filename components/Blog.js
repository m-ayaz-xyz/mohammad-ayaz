'use client'
const posts = [
  {
    id: 1,
    title: 'Building TalkDesk — A Hinglish Voice Assistant',
    date: '2025-05-10',
    file: '2025-05-10-talkdesk.pdf',
    excerpt:
      'How I built a Python desktop voice assistant with Logistic Regression on a custom Hinglish dataset for my B.Tech major project.',
    tag: 'Python / ML',
    tagColor: '#00c896',
    image: 'linear-gradient(135deg, #e6faf5 0%, #b3f0e0 100%)',
  },
  {
    id: 2,
    title: 'JobVault: Scraping Job Listings with Puppeteer + AI',
    date: '2025-04-22',
    file: '2025-04-22-jobvault.pdf',
    excerpt:
      'My approach to building a job aggregator admin panel using Puppeteer for scraping and Gemini Flash for intelligent data extraction.',
    tag: 'Next.js / Node',
    tagColor: '#1a6bff',
    image: 'linear-gradient(135deg, #e8f0ff 0%, #c7d9ff 100%)',
  },
  {
    id: 3,
    title: 'Why I Chose Brutalist Design for PlagScan',
    date: '2025-03-15',
    file: '2025-03-15-plagscan.pdf',
    excerpt:
      'Design decisions behind PlagScan — a single HTML file plagiarism tool. Raw borders, dark theme, no frameworks.',
    tag: 'Design',
    tagColor: '#ff3d3d',
    image: 'linear-gradient(135deg, #fff0f0 0%, #ffd0d0 100%)',
  },
]

export default function Blog() {
  return (
    <section id="blog" style={{
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '72px 24px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: '40px',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <div>
          <div className="accent-line"></div>
          <h2 className="section-header">From the blog</h2>
        </div>
        <a href="#" style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '13px',
          fontWeight: 700,
          color: 'var(--accent)',
          textDecoration: 'underline',
        }}>
          View all posts →
        </a>
      </div>

      {/* Blog list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {posts.map((post, i) => (
          <article key={post.id} style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            border: '2px solid var(--border)',
            borderBottom: i < posts.length - 1 ? 'none' : '2px solid var(--border)',
            background: 'var(--card-bg)',
            transition: 'transform 0.15s ease',
            cursor: 'pointer',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-3px, -3px)'; e.currentTarget.style.boxShadow = '5px 5px 0 var(--border)'; e.currentTarget.style.zIndex = '2'; e.currentTarget.style.position = 'relative'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            className="blog-item"
          >
            {/* Window bar takes full width */}
            <div style={{
              gridColumn: '1 / -1',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 12px',
              background: 'var(--fg)',
              borderBottom: '2px solid var(--border)',
            }}>
              <div className="window-dot red"></div>
              <div className="window-dot yellow"></div>
              <div className="window-dot green"></div>
              <span className="window-title">{post.file}</span>
            </div>

            {/* Image */}
            <div style={{
              background: post.image,
              borderRight: '2px solid var(--border)',
              minHeight: '140px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }} className="blog-img">
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '28px',
                fontWeight: 800,
                color: 'var(--fg)',
                opacity: 0.15,
                textAlign: 'center',
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
              }}>
                {post.title.substring(0, 12).toUpperCase()}
              </span>
            </div>

            {/* Content */}
            <div style={{ padding: '20px' }}>
              <div style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                marginBottom: '8px',
              }}>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  padding: '2px 8px',
                  border: `1.5px solid ${post.tagColor}`,
                  color: post.tagColor,
                  fontWeight: 700,
                }}>
                  {post.tag}
                </span>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px',
                  color: 'var(--muted)',
                }}>
                  {post.date}
                </span>
              </div>

              <h3 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '18px',
                fontWeight: 800,
                marginBottom: '10px',
                lineHeight: 1.3,
              }}>
                {post.title}
              </h3>

              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '12px',
                color: 'var(--muted)',
                lineHeight: 1.7,
                marginBottom: '16px',
              }}>
                {post.excerpt}
              </p>

              <a href="#" className="btn-brutal" style={{ fontSize: '11px' }}>
                Read post →
              </a>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @media (max-width: 580px) {
          .blog-item { grid-template-columns: 1fr !important; }
          .blog-img { border-right: none !important; border-bottom: 2px solid var(--border); min-height: 100px !important; }
        }
      `}</style>
    </section>
  )
}
