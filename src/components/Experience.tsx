import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../data/portfolio'
import { fromBottom, sideVariant } from '../utils/variants'

const dotColors = ['#4285F4', '#EA4335', '#FBBC05']
const cardAccent = ['card-blue', 'card-red', 'card-yellow']

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
              <motion.div
                key={exp.company}
                variants={sideVariant(idx)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.12 * idx }}
                style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    width: 16, height: 16, borderRadius: '50%',
                    background: dotColors[idx],
                    border: '2px solid var(--bg)',
                    boxShadow: `0 0 12px ${dotColors[idx]}66`,
                    marginLeft: -52, marginTop: 24,
                    position: 'relative', zIndex: 1, flexShrink: 0,
                  }}
                />

                {/* Card */}
                <div className={`card ${cardAccent[idx]}`} style={{ padding: '24px 28px', flex: 1 }}>

                  {/* Card header: Logo + Role + Company + Period */}
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 18 }}>
                    {/* Logo */}
                    <CompanyLogo logo={exp.logo} company={exp.company} color={dotColors[idx]} />

                    {/* Role + Company row */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      {/* Role + Period */}
                      <div style={{
                        display: 'flex', justifyContent: 'space-between',
                        flexWrap: 'wrap', gap: 8, marginBottom: 6,
                      }}>
                        <h3 style={{
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)',
                        }}>
                          {exp.role}
                        </h3>
                        <span style={{
                          fontSize: '0.72rem', color: dotColors[idx],
                          background: `${dotColors[idx]}14`,
                          border: `1px solid ${dotColors[idx]}30`,
                          borderRadius: 999, padding: '3px 12px',
                          fontFamily: '"Plus Jakarta Sans"', whiteSpace: 'nowrap',
                          alignSelf: 'flex-start',
                        }}>
                          {exp.period}
                        </span>
                      </div>

                      {/* Company name as link */}
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: dotColors[idx],
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
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: `${dotColors[idx]}18`, marginBottom: 14 }} />

                  {/* Bullet points */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {exp.highlights.map((h) => (
                      <li key={h} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{
                          color: dotColors[idx], marginTop: 3, flexShrink: 0,
                          fontSize: '0.62rem', fontWeight: 700,
                        }}>▸</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6, fontFamily: '"Plus Jakarta Sans"' }}>
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
