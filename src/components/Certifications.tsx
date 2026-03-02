import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { certifications } from '../data/portfolio'
import { fromBottom, scaleIn } from '../utils/variants'

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" style={{ background: 'var(--bg)' }}>
      <div className="sc" ref={ref}>
        <motion.div
          variants={fromBottom}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: 56 }}
        >
          <h2 className="sh">Certifications</h2>
          <div className="g-bar"><span /><span /><span /><span /></div>
        </motion.div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              variants={scaleIn}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.12 * idx }}
              className="card card-green"
              style={{
                padding: '28px 32px',
                display: 'flex', alignItems: 'center', gap: 24,
                flex: '1 1 320px', maxWidth: 560,
              }}
            >
              {/* Linux penguin logo */}
              <div style={{
                width: 64, height: 64, flexShrink: 0,
                borderRadius: 16,
                background: `${cert.color}12`,
                border: `2px solid ${cert.color}28`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 4px 16px ${cert.color}18`,
                padding: 8,
              }}>
                <img src="/logos/linux.png" alt="Linux" style={{ width: 44, height: 44, objectFit: 'contain' }} />
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)',
                  marginBottom: 6, lineHeight: 1.3,
                }}>
                  {cert.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <span style={{
                    color: cert.color,
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '0.85rem', fontWeight: 600,
                  }}>
                    {cert.issuer}
                  </span>
                  <span style={{
                    fontSize: '0.75rem', color: 'var(--text-sub)',
                    background: `${cert.color}10`,
                    border: `1px solid ${cert.color}25`,
                    borderRadius: 999, padding: '2px 10px',
                    fontFamily: '"Plus Jakarta Sans"', fontWeight: 500,
                  }}>
                    {cert.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
