import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personalInfo } from '../data/portfolio'
import { fromLeft, fromRight, staggerContainer, staggerChild } from '../utils/variants'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" style={{ background: 'var(--bg)' }}>
      <div className="sc" ref={ref}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}
          className="about-grid">

          {/* Left — heading + summary */}
          <motion.div
            variants={fromLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <h2 className="sh">About Me</h2>
            <div className="g-bar"><span /><span /><span /><span /></div>
            <p style={{
              color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.85,
              fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: 28,
            }}>
              {personalInfo.summary}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="cta-btn cta-blue">GitHub</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="cta-btn cta-outline">LinkedIn</a>
            </div>
          </motion.div>

          {/* Right — expertise tags */}
          <motion.div
            variants={fromRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <p style={{
              color: 'var(--text-sub)', fontSize: '0.72rem', textTransform: 'uppercase',
              letterSpacing: '0.12em', fontFamily: '"Plus Jakarta Sans"', marginBottom: 18,
            }}>
              Key Expertise
            </p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}
            >
              {personalInfo.expertiseTags.map((tag) => (
                <motion.span key={tag} variants={staggerChild} className="tag tag-blue">
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  )
}
