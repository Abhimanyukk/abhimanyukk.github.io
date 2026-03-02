import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { education } from '../data/portfolio'
import { fromBottom, fromLeft, fromRight } from '../utils/variants'

const colors = ['#4285F4', '#34A853']

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const dirs = [fromLeft, fromRight]

  return (
    <section id="education" style={{ background: 'var(--bg)' }}>
      <div className="sc" ref={ref}>
        <motion.div
          variants={fromBottom}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: 56 }}
        >
          <h2 className="sh">Education</h2>
          <div className="g-bar"><span /><span /><span /><span /></div>
        </motion.div>

        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              variants={dirs[idx]}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.1 * idx }}
              className={`card ${idx === 0 ? 'card-blue' : 'card-green'}`}
              style={{ padding: '32px', flex: 1, minWidth: 260, display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              {/* Institution logo */}
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: '#ffffff',
                border: `1.5px solid ${colors[idx]}28`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: 6,
                boxShadow: `0 2px 8px ${colors[idx]}14`,
                marginBottom: 4,
              }}>
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  style={{ width: 44, height: 44, objectFit: 'contain' }}
                />
              </div>

              {/* Degree */}
              <h3 style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '1.02rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.4,
              }}>
                {edu.degree}
              </h3>

              {/* Institution */}
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: '"Plus Jakarta Sans"', lineHeight: 1.5 }}>
                {edu.institution}
              </p>

              {/* Period badge */}
              <span style={{
                alignSelf: 'flex-start',
                fontSize: '0.75rem', color: colors[idx],
                background: `${colors[idx]}12`,
                border: `1px solid ${colors[idx]}28`,
                borderRadius: 999, padding: '4px 14px', fontFamily: '"Plus Jakarta Sans"',
              }}>
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
