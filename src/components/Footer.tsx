import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { personalInfo } from '../data/portfolio'
import { fromBottom, fromLeft, fromRight } from '../utils/variants'

function MemeQuote() {
  const [hovered, setHovered] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY })
  }, [])

  return (
    <p style={{
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: 'clamp(1.1rem, 2.5vw, 1.55rem)',
      fontWeight: 900,
      color: 'rgba(255, 255, 255, 0.38)',
      lineHeight: 1.5,
      letterSpacing: '-0.01em',
      maxWidth: 760,
      margin: '0 auto',
      userSelect: 'none',
    }}>
      <span
        style={{ cursor: 'default' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
      >
        &ldquo;Code is both my QUESTION and my ANSWER&nbsp;&mdash;
        <br />
        I write it every day to CLOSE THE GAP.&rdquo;
      </span>

      <AnimatePresence>
        {hovered && (
          <motion.div
            key="meme-tooltip"
            initial={{ opacity: 0, scale: 0.88, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 8 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            style={{
              position: 'fixed',
              left: pos.x + 18,
              top: pos.y - 210,
              zIndex: 9999,
              pointerEvents: 'none',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 12px 48px rgba(0,0,0,0.55), 0 0 0 1.5px rgba(255,255,255,0.08)',
            }}
          >
            <img
              src="/meme.png"
              alt=""
              style={{ display: 'block', width: 260, height: 'auto', maxHeight: 300, objectFit: 'cover' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </p>
  )
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Awards', href: '#awards' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const contactItems = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
    color: '#4285F4',
  },
  {
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.2 2.2z" />
      </svg>
    ),
    color: '#34A853',
  },
  {
    label: 'Location',
    value: personalInfo.location,
    href: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    color: '#EA4335',
  },
  {
    label: 'GitHub',
    value: 'github.com/Abhimanyukk',
    href: personalInfo.github,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.836a9.56 9.56 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    color: '#f1f1f3',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/abhimanyukk',
    href: personalInfo.linkedin,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: '#4285F4',
  },
]

function go(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [visitorCount, setVisitorCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/abhimanyukk-portfolio/visits/up')
      .then(r => r.json())
      .then(d => setVisitorCount(d.count))
      .catch(() => { })
  }, [])

  return (
    <footer
      id="contact"
      ref={ref}
      style={{
        background: '#0d0f12',
        borderRadius: '28px 28px 0 0',
        marginTop: 0,
        padding: '0 0 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top glow */}
      <div style={{
        position: 'absolute',
        top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '60%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(66,133,244,0.4), rgba(52,168,83,0.3), rgba(251,188,5,0.3), rgba(234,67,53,0.3), transparent)',
        borderRadius: '0 0 50% 50%',
        filter: 'blur(1px)',
      }} />

      {/* Quote band */}
      <motion.div
        variants={fromBottom}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{
          padding: '52px 48px 44px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <MemeQuote />

      </motion.div>

      {/* Main grid: nav left, contact right */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
        maxWidth: 1100,
        margin: '0 auto',
        padding: '52px 48px 48px',
      }}
        className="footer-grid"
      >
        {/* LEFT — Navigation */}
        <motion.div
          variants={fromLeft}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.1 }}
        >
          <p style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '0.68rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: 20,
          }}>
            Navigation
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navLinks.map((link, idx) => (
              <motion.li
                key={link.href}
                variants={fromBottom}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.15 + idx * 0.045 }}
              >
                <button
                  onClick={() => go(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '5px 0',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '0.91rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.55)',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.92)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  <span style={{
                    width: 4, height: 4, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.25)',
                    flexShrink: 0,
                    transition: 'background 0.2s',
                  }} />
                  {link.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT — Contact */}
        <motion.div
          variants={fromRight}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.1 }}
        >
          <p style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '0.68rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: 20,
          }}>
            Get In Touch
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {contactItems.map((item, idx) => (
              <motion.li
                key={item.label}
                variants={fromBottom}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.18 + idx * 0.05 }}
                style={{ display: 'flex', alignItems: 'center', gap: 12 }}
              >
                {/* Icon box */}
                <span style={{
                  width: 34, height: 34, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${item.color}14`,
                  border: `1px solid ${item.color}22`,
                  borderRadius: 9,
                  color: item.color,
                  transition: 'background 0.2s',
                }}>
                  {item.icon}
                </span>

                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.60)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = item.color)}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.60)')}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '0.88rem',
                    color: 'rgba(255,255,255,0.60)',
                  }}>
                    {item.value}
                  </span>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Copyright bar */}
      <motion.div
        variants={fromBottom}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ delay: 0.45 }}
        style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '18px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <p style={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: '0.78rem',
          color: 'rgba(255,255,255,0.28)',
          letterSpacing: '0.02em',
        }}>
          &copy; {new Date().getFullYear()} Abhimanyu KK &mdash; Built with React &amp; Vite
        </p>

        {/* Visitor counter */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 7,
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.28)',
          letterSpacing: '0.03em',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          {visitorCount !== null
            ? <span>{visitorCount.toLocaleString()} visitors</span>
            : <span style={{ opacity: 0.4 }}>— visitors</span>
          }
        </div>
      </motion.div>
    </footer>
  )
}
