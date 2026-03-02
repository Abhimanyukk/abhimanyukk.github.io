import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Awards from './components/Awards'
import Contact from './components/Contact'

function App() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Awards />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '28px', color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: '"Plus Jakarta Sans", sans-serif', borderTop: '1px solid var(--border)' }}>
        © {new Date().getFullYear()} Abhimanyu KK — Built with React & Vite
      </footer>
    </div>
  )
}

export default App
