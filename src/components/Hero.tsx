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
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="cta-btn cta-blue"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="cta-btn cta-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.836a9.56 9.56 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </a>
            <a href={`mailto:${personalInfo.email}`} className="cta-btn cta-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
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
