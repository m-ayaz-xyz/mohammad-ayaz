"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--fg)",
        borderTop: "2px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "32px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "39px",
              height: "32px",
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "14px",
              color: "#fff",
            }}
          >
            Az
          </div>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "13px",
              color: "#888",
            }}
          >
            © 2025 Mohammad Ayaz. Personal Portfolio built with Next.js.
          </span>
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          {[
            { name: "GitHub", url: "https://github.com/m-ayaz-xyz" },
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/in/mohammad-ayaz-016976329/",
            },
            { name: "Twitter", url: "https://twitter.com/mayaz_xyz" },
          ].map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank" // opens link in a new tab
              rel="noopener noreferrer" // security for external links
              style={{
                padding: "6px 14px",
                border: "1.5px solid #2a2a2a",
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
                color: "#888",
                fontWeight: 700,
                transition: "border-color 0.15s ease, color 0.15s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2a2a2a";
                e.currentTarget.style.color = "#888";
              }}
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
