import type { Variants } from 'framer-motion'

const spring = { type: 'spring' as const, stiffness: 60, damping: 16, mass: 1 }
const springFast = { type: 'spring' as const, stiffness: 80, damping: 18 }

/** Float in from the left */
export const fromLeft: Variants = {
  hidden: { opacity: 0, x: -70, rotate: -4 },
  visible: { opacity: 1, x: 0, rotate: 0, transition: spring },
}

/** Float in from the right */
export const fromRight: Variants = {
  hidden: { opacity: 0, x: 70, rotate: 4 },
  visible: { opacity: 1, x: 0, rotate: 0, transition: spring },
}

/** Float up from below */
export const fromBottom: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: spring },
}

/** Float down from above */
export const fromTop: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: spring },
}

/** Scale + fade in with spring bounce */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.72 },
  visible: { opacity: 1, scale: 1, transition: { ...springFast, damping: 14 } },
}

/** Stagger container — wraps children that use any of the above */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

/** Individual stagger child — floats up */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: springFast },
}

/** Alternates left/right by index */
export function sideVariant(index: number): Variants {
  return index % 2 === 0 ? fromLeft : fromRight
}
