import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personalInfo } from '../data/portfolio'
import { fromBottom, scaleIn } from '../utils/variants'

const contactItems = [
  { icon: '✉️', label: 'Email',    value: personalInfo.email,               href: `mailto:${personalInfo.email}`,     color: '#4285F4' },
  { icon: '📞', label: 'Phone',    value: personalInfo.phone,               href: `tel:${personalInfo.phone}`,        color: '#34A853' },
  { icon: '📍', label: 'Location', value: personalInfo.location,            href: null,                               color: '#EA4335' },
  { icon: '🐙', label: 'GitHub',   value: 'github.com/Abhimanyukk',          href: personalInfo.github,                color: '#f1f1f3' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/abhimanyukk',     href: personalInfo.linkedin,              color: '#4285F4' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" style={{ background: 'var(--bg)' }}>
      <div className="sc" ref={ref}>
        {/* Heading */}
        <motion.div
          variants={fromBottom}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <h2 className="sh">Get In Touch</h2>
          <div className="g-bar" style={{ margin: '0 auto 0' }}><span /><span /><span /><span /></div>
          <p style={{ color: 'var(--text-muted)', fontFamily: '"Plus Jakarta Sans"', fontSize: '0.95rem', marginTop: 12 }}>
            Open to opportunities — reach out via any channel below.
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.15 }}
          className="card card-blue"
          style={{ maxWidth: 620, margin: '0 auto', padding: '36px 40px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {contactItems.map((item, idx) => (
              <motion.div
                key={item.label}
                variants={fromBottom}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.2 + idx * 0.07 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '14px 0',
                  borderBottom: idx < contactItems.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                {/* Icon box */}
                <span style={{
                  width: 40, height: 40, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${item.color}10`,
                  border: `1px solid ${item.color}22`,
                  borderRadius: 10, fontSize: '1rem',
                }}>
                  {item.icon}
                </span>

                <div>
                  <p style={{
                    color: 'var(--text-sub)', fontSize: '0.7rem',
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                    fontFamily: '"Plus Jakarta Sans"', marginBottom: 2,
                  }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.9rem', fontFamily: '"Plus Jakarta Sans"', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = item.color)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--text)', fontSize: '0.9rem', fontFamily: '"Plus Jakarta Sans"' }}>{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA row */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="cta-btn cta-blue">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="cta-btn cta-outline">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`} className="cta-btn cta-outline">Email Me</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
