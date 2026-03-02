import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolio'
import { fromBottom, fromTop, scaleIn, fromLeft, fromRight } from '../utils/variants'

export default function Hero() {
  const [engineReady, setEngineReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setEngineReady(true))
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* Subtle radial glows — Google colors */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 60% 40% at 15% 60%, rgba(66,133,244,0.12) 0%, transparent 70%),
          radial-gradient(ellipse 50% 35% at 85% 25%, rgba(52,168,83,0.10) 0%, transparent 70%),
          radial-gradient(ellipse 40% 30% at 70% 80%, rgba(234,67,53,0.09) 0%, transparent 70%),
          radial-gradient(ellipse 45% 35% at 30% 15%, rgba(251,188,5,0.08) 0%, transparent 70%)
        `,
      }} />

      {/* Star particles */}
      {engineReady && (
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: 'grab' }, onClick: { enable: false } },
              modes: { grab: { distance: 120, links: { opacity: 0.3 } } },
            },
            particles: {
              color: { value: ['#4285F4', '#EA4335', '#FBBC05', '#34A853'] },
              links: { color: '#4285F4', distance: 140, enable: true, opacity: 0.15, width: 1 },
              move: {
                direction: 'none', enable: true,
                outModes: { default: 'bounce' },
                random: true, speed: 0.4, straight: false,
              },
              number: { value: 70 },
              opacity: { value: { min: 0.15, max: 0.5 } },
              shape: { type: 'circle' },
              size: { value: { min: 1, max: 2.5 } },
            },
            detectRetina: true,
          }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        />
      )}

      {/* Split layout grid */}
      <div className="hero-grid" style={{ position: 'relative', zIndex: 1 }}>

        {/* LEFT — text content */}
        <div className="hero-text">

          {/* Google-color dot cluster */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            style={{ display: 'flex', gap: 8, justifyContent: 'flex-start', marginBottom: 28 }}
          >
            {['#4285F4','#EA4335','#FBBC05','#34A853'].map((c) => (
              <span
                key={c}
                style={{
                  display: 'inline-block', width: 10, height: 10, borderRadius: '50%',
                  background: c, boxShadow: `0 0 10px ${c}88`,
                }}
              />
            ))}
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={fromTop}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '0.95rem', color: 'var(--text-muted)',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              marginBottom: 18, fontWeight: 500,
            }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fromLeft}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: 'clamp(2.4rem, 6vw, 4.8rem)',
              fontWeight: 800, lineHeight: 1.0, marginBottom: 24,
              color: 'var(--text)', letterSpacing: '-0.03em',
            }}
          >
            {personalInfo.name}
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            variants={fromBottom}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45 }}
            style={{ marginBottom: 36, minHeight: 36 }}
          >
            <TypeAnimation
              sequence={[
                'Lead Embedded Engineer', 2500,
                'Embedded Linux Specialist', 2500,
                'Firmware Architect', 2500,
                'Hardware–Software Co-Designer', 2500,
                'Technical Lead', 2500,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: 'clamp(1rem, 2.4vw, 1.3rem)',
                fontWeight: 500, color: '#4285F4',
              }}
            />
          </motion.div>

          {/* Location */}
          <motion.p
            variants={fromBottom}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.55 }}
            style={{ color: 'var(--text-muted)', marginBottom: 44, fontSize: '0.9rem', fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            📍 {personalInfo.location} &nbsp;·&nbsp; 7+ Years Experience
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fromBottom}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.65 }}
            style={{ display: 'flex', gap: 14, justifyContent: 'flex-start', flexWrap: 'wrap' }}
          >
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="cta-btn cta-blue">
              GitHub Profile
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="cta-btn cta-outline">
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} className="cta-btn cta-outline">
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* RIGHT — profile image */}
        <motion.div
          className="hero-image"
          variants={fromRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div style={{ position: 'relative' }}>
            {/* Soft Google-color glow behind image */}
            <div style={{
              position: 'absolute', inset: -24, borderRadius: '50%', zIndex: 0,
              background: 'radial-gradient(circle, rgba(66,133,244,0.22) 0%, rgba(52,168,83,0.12) 45%, transparent 75%)',
              filter: 'blur(28px)',
            }} />
            <img
              src="/heroProfileImage.jpg"
              alt="Abhimanyu KK"
              style={{
                position: 'relative', zIndex: 1,
                width: 'clamp(220px, 34vw, 390px)',
                height: 'clamp(220px, 34vw, 390px)',
                objectFit: 'cover',
                objectPosition: 'top center',
                borderRadius: '50%',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 50%, transparent 100%)',
                maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 50%, transparent 100%)',
                boxShadow: '0 0 0 3px rgba(66,133,244,0.22), 0 12px 48px rgba(66,133,244,0.14)',
              }}
            />
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={fromBottom}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        }}
      >
        <span style={{ color: 'var(--text-sub)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: '"Plus Jakarta Sans"' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{
            width: 20, height: 32,
            border: '1.5px solid var(--border-hover)', borderRadius: 10,
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 4,
          }}
        >
          <div style={{ width: 3, height: 7, background: '#4285F4', borderRadius: 2 }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
