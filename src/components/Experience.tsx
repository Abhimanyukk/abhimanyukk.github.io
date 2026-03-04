import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { experience } from '../data/portfolio'
import { fromBottom, sideVariant } from '../utils/variants'

const dotColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853']
const cardAccent = ['card-blue', 'card-red', 'card-yellow', 'card-blue']

function CompanyLogo({ logo, company, color }: { logo: string; company: string; color: string }) {
  return (
    <img
      src={logo}
      alt={`${company} logo`}
      style={{
        width: 52, height: 52, borderRadius: 14, flexShrink: 0,
        objectFit: 'contain', background: '#ffffff',
        border: `1.5px solid ${color}28`, padding: 6,
        boxShadow: `0 2px 8px ${color}14`,
      }}
    />
  )
}

function ExperienceCard({ exp, idx, inView }: { exp: typeof experience[0]; idx: number; inView: boolean }) {
  const color = dotColors[idx % dotColors.length]
  const accent = cardAccent[idx % cardAccent.length]
  const [expanded, setExpanded] = useState(idx < 3) // first 3 expanded by default

  return (
    <motion.div
      variants={sideVariant(idx)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: 0.1 * idx }}
      style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}
    >
      {/* Timeline dot */}
      <div
        style={{
          width: 16, height: 16, borderRadius: '50%',
          background: color,
          border: '2px solid var(--bg)',
          boxShadow: `0 0 12px ${color}66`,
          marginLeft: -52, marginTop: 24,
          position: 'relative', zIndex: 1, flexShrink: 0,
        }}
      />

      {/* Card */}
      <div className={`card ${accent}`} style={{ padding: '24px 28px', flex: 1 }}>

        {/* Card header: Logo + Role + Company + Period */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 18 }}>
          <CompanyLogo logo={exp.logo} company={exp.company} color={color} />

          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Role + Period */}
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 8, marginBottom: 3,
            }}>
              <h3 style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)',
              }}>
                {exp.role}
              </h3>
              <span style={{
                fontSize: '0.72rem', color: color,
                background: `${color}14`,
                border: `1px solid ${color}30`,
                borderRadius: 999, padding: '3px 12px',
                fontFamily: '"Plus Jakarta Sans"', whiteSpace: 'nowrap',
                alignSelf: 'flex-start',
              }}>
                {exp.period}
              </span>
            </div>

            {/* Role subtitle if present */}
            {'roleSubtitle' in exp && exp.roleSubtitle && (
              <p style={{
                fontFamily: '"Plus Jakarta Sans"', fontSize: '0.8rem',
                color: 'var(--text-muted)', marginBottom: 4,
              }}>
                {exp.roleSubtitle as string}
              </p>
            )}

            {/* Company name + location as link */}
            <a
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: color,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 600, fontSize: '0.87rem',
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 4,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {exp.company}
              {exp.location && (
                <span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  &nbsp;·&nbsp;{exp.location}
                </span>
              )}
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: `${color}18`, marginBottom: 14 }} />

        {/* Bullet points with expand/collapse */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.ul
              key="list"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7, overflow: 'hidden' }}
            >
              {exp.highlights.map((h) => (
                <li key={h} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{
                    color: color, marginTop: 3, flexShrink: 0,
                    fontSize: '0.62rem', fontWeight: 700,
                  }}>▸</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6, fontFamily: '"Plus Jakarta Sans"' }}>
                    {h}
                  </span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            marginTop: expanded ? 14 : 0,
            background: 'none', border: 'none', cursor: 'pointer',
            color: color, fontSize: '0.78rem', fontFamily: '"Plus Jakarta Sans"',
            fontWeight: 600, padding: '2px 0',
            display: 'flex', alignItems: 'center', gap: 5,
            transition: 'opacity 0.2s',
          }}
        >
          {expanded ? 'Show less' : `Show details (${exp.highlights.length})`}
          <svg
            width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
            style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" style={{ background: 'var(--bg)' }}>
      <div className="sc" ref={ref}>
        {/* Heading */}
        <motion.div
          variants={fromBottom}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: 56 }}
        >
          <h2 className="sh">Experience</h2>
          <div className="g-bar"><span /><span /><span /><span /></div>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 44 }}>
          <div className="tl-line" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {experience.map((exp, idx) => (
              <ExperienceCard key={exp.company} exp={exp} idx={idx} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
