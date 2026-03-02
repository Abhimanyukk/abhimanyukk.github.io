import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../data/portfolio'
import { fromBottom, sideVariant } from '../utils/variants'

const dotColors = ['#4285F4', '#EA4335', '#FBBC05']
const cardAccent = ['card-blue', 'card-red', 'card-yellow']

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
                    marginLeft: -52, marginTop: 20,
                    position: 'relative', zIndex: 1, flexShrink: 0,
                  }}
                />

                {/* Card */}
                <div className={`card ${cardAccent[idx]}`} style={{ padding: '24px 28px', flex: 1 }}>
                  {/* Role + Period */}
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    flexWrap: 'wrap', gap: 8, marginBottom: 6,
                  }}>
                    <h3 style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)',
                    }}>
                      {exp.role}
                    </h3>
                    <span style={{
                      fontSize: '0.75rem', color: dotColors[idx],
                      background: `${dotColors[idx]}14`,
                      border: `1px solid ${dotColors[idx]}30`,
                      borderRadius: 999, padding: '3px 12px',
                      fontFamily: '"Plus Jakarta Sans"', whiteSpace: 'nowrap',
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Company */}
                  <p style={{
                    color: dotColors[idx], fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontWeight: 600, fontSize: '0.87rem', marginBottom: 16,
                  }}>
                    {exp.company}
                  </p>

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
