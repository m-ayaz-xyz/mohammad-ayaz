import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CopyField from "../../../components/CopyField";
import { getAllSlugs, getBlogBySlug } from "../../../lib/blog";
import "./blog.css";
import { FaFigma, FaGithub, FaExternalLinkAlt } from "react-icons/fa";


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
    usercredential,
    demouserEmail,
    demouserPassword,
    admincredential,
    demovendorEmail,
    demovendorPassword,
    designUrl,
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
              <a href={liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-solid border-slate-700 rounded-md px-3 py-3 text-sm bg-blue-300 text-black font-medium hover:bg-slate-800 hover:text-white transition-colors">
                <FaExternalLinkAlt size={16} /> <p>Live Demo →</p> 
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-solid border-slate-700 rounded-md px-3 py-1 text-sm bg-white text-black font-medium hover:bg-slate-800 hover:text-white transition-colors">
                <FaGithub size={16}/> Source Code →
              </a>
            )}
            {designUrl && (
              <a href={designUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-solid border-slate-700 rounded-md px-3 py-1 text-sm bg-green-200 text-black font-medium hover:bg-slate-800 hover:text-white transition-colors">
                <FaFigma size={16} /> Design →
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

        {/* ---- Demo User Credentials ---- */}
        {(demouserEmail || demouserPassword) && (
          <section className="demo-creds">
            <p className="demo-creds-label">{usercredential}</p>
            <div className="demo-creds-grid">
              {demouserEmail && <CopyField label="Email" value={demouserEmail} />}
              {demouserPassword && <CopyField label="Password" value={demouserPassword} />}
            </div>
          </section>
        )}

        {/* ---- Demo Admin Credentials ---- */}
        {(demovendorEmail || demovendorPassword) && (
          <section className="demo-creds">
            <p className="demo-creds-label">{admincredential}</p>
            <div className="demo-creds-grid">
              {demovendorEmail && <CopyField label="Email" value={demovendorEmail} />}
              {demovendorPassword && <CopyField label="Password" value={demovendorPassword} />}
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
