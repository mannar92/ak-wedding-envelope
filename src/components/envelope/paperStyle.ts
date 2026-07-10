import type { BoxProps } from '@chakra-ui/react'

export function paperStyle(color: string): Pick<BoxProps, 'bg' | 'backgroundImage'> {
  return {
    bg: color,
    backgroundImage:
      'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.08) 0%, transparent 40%)',
  }
}

export const ENVELOPE_WIDTH = { base: '290px', sm: '310px' }
export const ENVELOPE_HEIGHT = '210px'

export const flipTransition = {
  duration: 1.75,
  ease: [0.4, 0, 0.2, 1] as const,
}

export const flapTransition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 18,
  mass: 0.9,
}

export const cardTransition = {
  type: 'spring' as const,
  stiffness: 80,
  damping: 16,
  delay: 0.45,
}
