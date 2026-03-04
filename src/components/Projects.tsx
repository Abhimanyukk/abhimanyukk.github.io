import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects } from '../data/portfolio'
import { fromBottom, sideVariant } from '../utils/variants'

const accentColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#4285F4', '#EA4335', '#FBBC05', '#34A853', '#4285F4', '#EA4335', '#FBBC05', '#34A853']
const cardAccents = ['card-blue', 'card-red', 'card-yellow', 'card-green', 'card-blue', 'card-red', 'card-yellow', 'card-green', 'card-blue', 'card-red', 'card-yellow', 'card-green']

const INITIAL_SHOW = 6

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_SHOW)

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
          <h2 className="sh">Projects</h2>
          <div className="g-bar"><span /><span /><span /><span /></div>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20,
        }}>
          <AnimatePresence>
            {visibleProjects.map((project, idx) => {
              const accent = accentColors[idx % accentColors.length]
              return (
                <motion.div
                  key={project.title}
                  variants={sideVariant(idx)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: 0.05 * idx }}
                  className={`card ${cardAccents[idx % cardAccents.length]}`}
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
          </AnimatePresence>
        </div>

        {/* See More / Show Less toggle */}
        {projects.length > INITIAL_SHOW && (
          <motion.div
            variants={fromBottom}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 28px',
                borderRadius: 999,
                background: showAll ? 'transparent' : 'linear-gradient(135deg, #4285F4, #34A853)',
                color: showAll ? '#4285F4' : 'white',
                border: showAll ? '1.5px solid #4285F420' : 'none',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 700, fontSize: '0.88rem',
                cursor: 'pointer',
                boxShadow: showAll ? 'none' : '0 4px 16px rgba(66,133,244,0.22)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {showAll ? (
                <>
                  Show fewer projects
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                </>
              ) : (
                <>
                  See all {projects.length} projects
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
