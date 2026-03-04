import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../data/portfolio'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
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
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 180)
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
          {['#4285F4', '#EA4335', '#FBBC05', '#34A853'].map((c, i) => (
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
        <ul className="nav-desktop" style={{ gap: 32, listStyle: 'none', margin: 0, padding: 0 }}>
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
          {/* Resume Download Desktop */}
          <li>
            <a
              href={personalInfo.resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #4285F4, #34A853)',
                color: 'white',
                padding: '6px 14px',
                borderRadius: '100px',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 600,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                boxShadow: '0 4px 12px rgba(66,133,244,0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(66,133,244,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(66,133,244,0.2)'
              }}
            >
              Resume
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', gap: 5, padding: 4 }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
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

      {/* Mobile menu — floating rounded card */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 998,
                background: 'rgba(0,0,0,0.18)',
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(2px)',
              }}
            />

            {/* Floating card */}
            <motion.div
              key="menu"
              initial={{ opacity: 0, scale: 0.92, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -12 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              style={{
                position: 'fixed',
                top: 72, right: 18,
                zIndex: 999,
                width: 224,
                background: 'rgba(255,255,255,0.97)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderRadius: 20,
                boxShadow: '0 8px 40px rgba(0,0,0,0.14), 0 1px 0 rgba(255,255,255,0.8) inset',
                border: '1px solid rgba(0,0,0,0.07)',
                padding: '10px 8px',
                overflow: 'hidden',
              }}
            >
              {navLinks.map((link, idx) => {
                const accent = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#4285F4', '#EA4335', '#FBBC05', '#34A853'][idx]
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); go(link.href) }}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + idx * 0.04, type: 'spring', stiffness: 320, damping: 26 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '11px 14px',
                      borderRadius: 12,
                      textDecoration: 'none',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--text)',
                      transition: 'background 0.15s',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = `${accent}12`)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <span style={{
                      width: 7, height: 7, borderRadius: '50%',
                      background: accent,
                      flexShrink: 0,
                      boxShadow: `0 0 6px ${accent}66`,
                    }} />
                    {link.label}
                  </motion.a>
                )
              })}

              {/* Mobile Resume Link */}
              <div style={{ marginTop: 8, padding: '0 8px' }}>
                <a
                  href={personalInfo.resume}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    padding: '12px',
                    borderRadius: 14,
                    textDecoration: 'none',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'white',
                    background: 'linear-gradient(135deg, #4285F4, #34A853)',
                    boxShadow: '0 4px 12px rgba(66,133,244,0.2)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
