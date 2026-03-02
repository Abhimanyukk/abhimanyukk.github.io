import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Awards',     href: '#awards' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.1 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 28px',
        transition: 'background 0.3s ease, border-bottom 0.3s ease',
        background: scrolled ? 'rgba(248,249,250,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      }}
    >
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{ textDecoration: 'none', display: 'flex', gap: 6, alignItems: 'center' }}
        >
          {['#4285F4','#EA4335','#FBBC05','#34A853'].map((c, i) => (
            <span key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: c, display: 'inline-block' }} />
          ))}
          <span style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '1rem',
            color: 'var(--text)', marginLeft: 6, letterSpacing: '-0.01em',
          }}>
            AKK
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex" style={{ gap: 32, listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); go(link.href) }}
                style={{
                  color: '#6b6b7a', textDecoration: 'none',
                  fontSize: '0.85rem', fontWeight: 500,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  transition: 'color 0.2s', letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 4 }}
          aria-label="Toggle menu"
        >
          {[0,1,2].map((i) => (
            <span key={i} style={{
              display: 'block', width: 22, height: 1.5,
              background: menuOpen ? '#4285F4' : '#6b6b7a',
              borderRadius: 2, transition: 'all 0.3s ease',
              opacity: menuOpen && i === 1 ? 0 : 1,
              transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                         menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(255,255,255,0.98)', borderTop: '1px solid var(--border)', padding: '16px 0' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); go(link.href) }}
                style={{
                  display: 'block', padding: '12px 28px',
                  color: 'var(--text-muted)', textDecoration: 'none',
                  fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.95rem',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
