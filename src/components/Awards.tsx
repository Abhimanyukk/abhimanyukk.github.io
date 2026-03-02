import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { awards } from '../data/portfolio'
import { fromBottom, scaleIn } from '../utils/variants'

const colors = ['#FBBC05', '#4285F4', '#34A853']
const cardAccents = ['card-yellow', 'card-blue', 'card-green']

export default function Awards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="awards" style={{ background: '#ffffff' }}>
      <div className="sc" ref={ref}>
        <motion.div
          variants={fromBottom}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: 56 }}
        >
          <h2 className="sh">Awards &amp; Certifications</h2>
          <div className="g-bar"><span /><span /><span /><span /></div>
        </motion.div>

        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {awards.map((award, idx) => (
            <motion.div
              key={award.title}
              variants={scaleIn}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.12 * idx }}
              className={`card ${cardAccents[idx]}`}
              style={{
                padding: '32px 28px',
                flex: 1, minWidth: 240,
                display: 'flex', flexDirection: 'column', gap: 12,
              }}
            >
              {/* Icon in colored circle */}
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: `${colors[idx]}14`,
                border: `1px solid ${colors[idx]}28`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', marginBottom: 4,
              }}>
                {award.icon}
              </div>

              <h3 style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '1rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.4,
              }}>
                {award.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: '"Plus Jakarta Sans"' }}>
                {award.org}
              </p>

              {/* Color accent bar at bottom */}
              <div style={{
                height: 2, borderRadius: 1,
                background: colors[idx],
                opacity: 0.4, marginTop: 'auto', paddingTop: 16,
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
