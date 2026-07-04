import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CopyField from "../../../components/CopyField";
import { getAllSlugs, getBlogBySlug } from "../../../lib/blog";
import "./blog.css";

// ---- Static params (replaces getStaticPaths) ----
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// ---- Metadata (replaces next/head) ----
export async function generateMetadata({ params }) {
  const { frontmatter } = getBlogBySlug(params.slug);
  return {
    title: `${frontmatter.title} — Mohammad Ayaz`,
    description: frontmatter.subtitle,
  };
}

// ---- Page (Server Component, replaces getStaticProps) ----
export default async function BlogPost({ params }) {
  const { frontmatter, content } = getBlogBySlug(params.slug);

  if (!frontmatter) return notFound();

  const {
    title,
    subtitle,
    date,
    tags = [],
    coverImage,
    video,
    liveUrl,
    githubUrl,
    demoEmail,
    demoPassword,
  } = frontmatter;

  return (
    <>
      <Navbar />

      <main className="blog-page">
        {/* ---- Header ---- */}
        <header className="blog-header">
          <p className="blog-kicker">$ cat {title.toLowerCase().replace(/\s+/g, "-")}.md</p>
          <h1 className="blog-title">{title}</h1>
          {subtitle && <p className="blog-subtitle">{subtitle}</p>}

          <div className="blog-meta">
            {date && (
              <time dateTime={date}>
                {new Date(date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            )}
            {/* {tags.length > 0 && (
              <div className="blog-tags">
                {tags.map((tag) => (
                  <span key={tag} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )} */}
          </div>

          <div className="blog-links">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" className="blog-link-btn">
                Live Demo →
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="blog-link-btn ghost">
                Source Code →
              </a>
            )}
          </div>
        </header>

        {/* ---- Cover Image ---- */}
        {coverImage && (
          <div className="blog-cover">
            <img src={coverImage} alt={`${title} cover`} loading="lazy" />
          </div>
        )}

        {/* ---- Demo Credentials ---- */}
        {(demoEmail || demoPassword) && (
          <section className="demo-creds">
            <p className="demo-creds-label">// demo user credentials</p>
            <div className="demo-creds-grid">
              {demoEmail && <CopyField label="Email" value={demoEmail} />}
              {demoPassword && <CopyField label="Password" value={demoPassword} />}
            </div>
          </section>
        )}

        {/* ---- Demo Video ---- */}
        {video && (
          <div className="blog-video">
            <video controls playsInline preload="metadata" poster={coverImage}>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* ---- MDX Body (the "documentary" write-up) ---- */}
        <article className="blog-content">
          <MDXRemote source={content} />
        </article>
      </main>

      <Footer />
    </>
  );
}
