import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data/portfolio'
import { fromBottom, sideVariant } from '../utils/variants'

const accentColors = ['#4285F4','#EA4335','#FBBC05','#34A853','#4285F4','#EA4335']
const cardAccents  = ['card-blue','card-red','card-yellow','card-green','card-blue','card-red']

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" style={{ background: '#ffffff' }}>
      <div className="sc" ref={ref}>
        {/* Heading */}
        <motion.div
          variants={fromBottom}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: 56 }}
        >
          <h2 className="sh">Featured Projects</h2>
          <div className="g-bar"><span /><span /><span /><span /></div>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20,
        }}>
          {projects.map((project, idx) => {
            const accent = accentColors[idx]
            return (
              <motion.div
                key={project.title}
                variants={sideVariant(idx)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.07 * idx }}
                className={`card ${cardAccents[idx]}`}
                style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}
              >
                {/* Top accent line */}
                <div style={{
                  height: 2, borderRadius: 1,
                  background: accent,
                  opacity: 0.5, marginBottom: 4,
                }} />

                {/* Title + role */}
                <div>
                  <h3 style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '1.02rem', fontWeight: 700, color: 'var(--text)', marginBottom: 4,
                  }}>
                    {project.title}
                  </h3>
                  <span style={{
                    fontSize: '0.7rem', color: accent,
                    textTransform: 'uppercase', letterSpacing: '0.07em',
                    fontFamily: '"Plus Jakarta Sans"', fontWeight: 600,
                  }}>
                    {project.role}
                  </span>
                </div>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.68rem', padding: '3px 10px',
                        background: `${accent}10`,
                        border: `1px solid ${accent}28`,
                        borderRadius: 999, color: accent,
                        fontFamily: '"Plus Jakarta Sans"', fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7, flex: 1 }}>
                  {project.highlights.map((h) => (
                    <li key={h} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: accent, flexShrink: 0, fontSize: '0.6rem', marginTop: 4, fontWeight: 700 }}>▸</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.81rem', lineHeight: 1.55, fontFamily: '"Plus Jakarta Sans"' }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
