import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
// import QuickLinks from '../components/QuickLinks'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Blog from '../components/Blog'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <QuickLinks /> */}

        {/* Divider */}
        <div style={{ borderTop: '2px solid var(--border)' }} />

        <Projects />

        <div style={{ borderTop: '2px solid var(--border)' }} />

        <Skills />

        <div style={{ borderTop: '2px solid var(--border)' }} />

        {/* <Blog /> */}

        <About />

        <Contact />
      </main>
      <Footer />
    </>
  )
}
