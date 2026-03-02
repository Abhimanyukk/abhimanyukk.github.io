import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { awards } from '../data/portfolio'
import { fromBottom, scaleIn } from '../utils/variants'

function GoogleGIcon({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
      <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285F4"/>
      <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34A853"/>
      <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#FBBC05"/>
      <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#EA4335"/>
    </svg>
  )
}

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
          <h2 className="sh">Awards &amp; Recognition</h2>
          <div className="g-bar"><span /><span /><span /><span /></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
          {awards.map((award, idx) => (
            <motion.div
              key={award.title}
              variants={scaleIn}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.16 * idx }}
              className={`card ${award.cardAccent}`}
              style={{
                padding: '44px 36px 36px',
                display: 'flex', flexDirection: 'column',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Background glow */}
              <div style={{
                position: 'absolute', top: -48, right: -48,
                width: 200, height: 200, borderRadius: '50%',
                background: `radial-gradient(circle, ${award.color}16 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              {/* Top accent strip */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                background: award.type === 'google'
                  ? 'linear-gradient(90deg, #4285F4 0%, #EA4335 33%, #FBBC05 66%, #34A853 100%)'
                  : award.color,
                borderRadius: '20px 20px 0 0',
              }} />

              {/* Logo / Icon */}
              <div style={{ marginBottom: 28, position: 'relative', zIndex: 1 }}>
                {award.type === 'utthunga' ? (
                  <div style={{
                    width: 84, height: 84,
                    background: `${award.color}10`,
                    border: `2px solid ${award.color}28`,
                    borderRadius: 20,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 6px 24px ${award.color}22`,
                  }}>
                    <img
                      src="/logos/utthunga.svg"
                      alt="Utthunga Technologies"
                      style={{ width: 64, height: 64, objectFit: 'contain' }}
                    />
                  </div>
                ) : (
                  <div style={{
                    width: 84, height: 84,
                    background: 'rgba(66,133,244,0.07)',
                    border: '2px solid rgba(66,133,244,0.18)',
                    borderRadius: 20,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 6px 24px rgba(66,133,244,0.12)',
                  }}>
                    <GoogleGIcon size={52} />
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '1.25rem', fontWeight: 800, color: 'var(--text)',
                lineHeight: 1.3, marginBottom: 12, position: 'relative', zIndex: 1,
              }}>
                {award.title}
              </h3>

              {/* Org */}
              <p style={{
                color: award.color,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '0.9rem', fontWeight: 600,
                position: 'relative', zIndex: 1,
              }}>
                {award.org}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
