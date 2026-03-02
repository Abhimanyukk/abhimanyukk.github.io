import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/portfolio'
import { fromLeft, fromBottom, fromRight, staggerContainer, staggerChild } from '../utils/variants'

type Col = { title: string; items: string[]; color: string; tagClass: string; dotClass: string; variants: typeof fromLeft }

const columns: Col[] = [
  {
    title: 'Languages & Frameworks',
    items: skills.languages,
    color: '#34A853',
    tagClass: 'tag tag-green',
    dotClass: 'g-dot g-dot-green',
    variants: fromLeft,
  },
  {
    title: 'Communication Protocols',
    items: skills.protocols,
    color: '#4285F4',
    tagClass: 'tag tag-blue',
    dotClass: 'g-dot g-dot-blue',
    variants: fromBottom,
  },
  {
    title: 'Tools & Platforms',
    items: skills.tools,
    color: '#EA4335',
    tagClass: 'tag tag-red',
    dotClass: 'g-dot g-dot-red',
    variants: fromRight,
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" style={{ background: '#ffffff' }}>
      <div className="sc" ref={ref}>
        {/* Heading */}
        <motion.div
          variants={fromBottom}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: 56 }}
        >
          <h2 className="sh">Core Skills</h2>
          <div className="g-bar"><span /><span /><span /><span /></div>
        </motion.div>

        {/* Three columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {columns.map((col) => (
            <motion.div
              key={col.title}
              variants={col.variants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="card"
              style={{ padding: '28px 24px' }}
            >
              {/* Column header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <span className={col.dotClass} />
                <h3 style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '0.82rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  color: col.color,
                }}>
                  {col.title}
                </h3>
              </div>

              {/* Tags */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}
              >
                {col.items.map((item) => (
                  <motion.span key={item} variants={staggerChild} className={col.tagClass}>
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
