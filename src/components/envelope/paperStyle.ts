import type { BoxProps } from '@chakra-ui/react'

export function paperStyle(color: string): Pick<BoxProps, 'bg' | 'backgroundImage'> {
  return {
    bg: color,
    backgroundImage: `
      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15) 0%, transparent 45%),
      radial-gradient(circle at 80% 80%, rgba(0,0,0,0.12) 0%, transparent 40%),
      repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 4px),
      repeating-linear-gradient(-45deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 2px)
    `,
  }
}

export const ENVELOPE_ASPECT_RATIO = 660 / 448

// Invitation card dimensions are fixed at 5:7 with a 385px width.
// Keep envelope width close to card height for realistic proportion.
const INVITATION_CARD_WIDTH = 385
const INVITATION_CARD_HEIGHT = Math.round((INVITATION_CARD_WIDTH * 7) / 5)
const ENVELOPE_TARGET_WIDTH = `${INVITATION_CARD_HEIGHT}px`
const ENVELOPE_HEIGHT_SCALE = 1.1

export const ENVELOPE_WIDTH = {
  base: `min(90vw, ${ENVELOPE_TARGET_WIDTH})`,
  sm: `min(86vw, ${ENVELOPE_TARGET_WIDTH})`,
  md: `min(86vw, ${ENVELOPE_TARGET_WIDTH})`,
}

export const ENVELOPE_HEIGHT = {
  base: `calc((min(90vw, ${ENVELOPE_TARGET_WIDTH}) / ${ENVELOPE_ASPECT_RATIO}) * ${ENVELOPE_HEIGHT_SCALE})`,
  sm: `calc((min(86vw, ${ENVELOPE_TARGET_WIDTH}) / ${ENVELOPE_ASPECT_RATIO}) * ${ENVELOPE_HEIGHT_SCALE})`,
  md: `calc((min(86vw, ${ENVELOPE_TARGET_WIDTH}) / ${ENVELOPE_ASPECT_RATIO}) * ${ENVELOPE_HEIGHT_SCALE})`,
}

// Enhanced flip transition with smoother easing curve
export const flipTransition = {
  duration: 1.6,
  ease: [0.34, 1.56, 0.64, 1] as const, // Cubic bezier with slight overshoot for elegance
}

// Refined flap opening with more natural motion
export const flapTransition = {
  type: 'spring' as const,
  stiffness: 120,
  damping: 22,
  mass: 0.8,
}

// Enhanced card reveal with better timing and feel
export const cardTransition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 20,
  delay: 0.5,
  mass: 0.9,
}
