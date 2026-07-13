import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { InvitationCard } from '../InvitationCard'
import { RSVP_URL } from '../../lib'
import { envelopeTheme } from '../../lib/theme'
import { cardTransition, flapTransition, paperStyle } from './paperStyle'

const MotionBox = motion.create(Box)

type EnvelopeFrontOpenProps = {
  isOpening: boolean
  isOpen: boolean
  onOpenComplete: () => void
}

export function EnvelopeFrontOpen({
  isOpening,
  isOpen,
  onOpenComplete,
}: EnvelopeFrontOpenProps) {
  const showCard = isOpening || isOpen
  const [isCardSettled, setIsCardSettled] = useState(false)

  useEffect(() => {
    if (!showCard || isOpening) {
      setIsCardSettled(false)
    }
  }, [isOpening, showCard])

  return (
    <Box
      position="relative"
      w="100%"
      h="100%"
      style={{ perspective: '1400px' }}
    >
      {/* Envelope interior liner */}
      <Box
        position="absolute"
        inset={0}
        borderRadius="3px"
        boxShadow={`
          ${envelopeTheme.shadow},
          inset 0 2px 4px rgba(0,0,0,0.1)
        `}
        overflow="hidden"
        bg={envelopeTheme.liner}
        backgroundImage="repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0 2px, transparent 2px 4px), radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)"
      />

      {/* Invitation card with smooth reveal */}
      {showCard && (
        <MotionBox
          position="absolute"
          inset={0}
          zIndex={isOpen ? 30 : 15}
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ transformOrigin: 'center center' }}
          initial={{ y: 28, scale: 0.9, opacity: 0, rotate: -90 }}
          animate={{ y: isOpen ? 0 : -56, scale: 1, opacity: 1, rotate: isOpen ? 0 : -90 }}
          transition={cardTransition}
          onAnimationComplete={() => {
            if (isOpen) {
              setIsCardSettled(true)
            }
          }}
        >
          <InvitationCard
            showRsvpHint={isOpen && isCardSettled}
            onRsvpClick={() => window.open(RSVP_URL, '_blank', 'noopener,noreferrer')}
          />
        </MotionBox>
      )}

      {/* Envelope pocket with enhanced depth */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="62%"
        zIndex={0}
        clipPath="polygon(0 100%, 0 12%, 50% 58%, 100% 12%, 100% 100%)"
        {...paperStyle(envelopeTheme.pocket)}
        boxShadow={`
          inset 0 8px 16px ${envelopeTheme.pocketShadow},
          inset 0 2px 4px rgba(0,0,0,0.12),
          inset 0 -1px 2px rgba(0,0,0,0.05)
        `}
        borderBottomRadius="3px"
      />

      {/* Left pocket edge with shadow */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        w="50%"
        h="55%"
        zIndex={0}
        clipPath="polygon(0 100%, 0 0, 100% 55%)"
        bgGradient="linear(to-r, rgba(0,0,0,0.15), transparent 80%)"
      />

      {/* Right pocket edge with shadow */}
      <Box
        position="absolute"
        bottom={0}
        right={0}
        w="50%"
        h="55%"
        zIndex={0}
        clipPath="polygon(100% 100%, 100% 0, 0 55%)"
        bgGradient="linear(to-l, rgba(0,0,0,0.15), transparent 80%)"
      />

      {/* Animated envelope flap with enhanced 3D */}
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="54%"
        zIndex={0}
        style={{
          transformOrigin: 'top center',
          transformStyle: 'preserve-3d',
        }}
        initial={{ rotateX: 0 }}
        animate={{ rotateX: showCard ? 178 : 0 }}
        transition={flapTransition}
        onAnimationComplete={() => {
          if (isOpening) {
            onOpenComplete()
          }
        }}
      >
        {/* Flap exterior */}
        <Box
          w="100%"
          h="100%"
          clipPath="polygon(0 0, 100% 0, 50% 100%)"
          {...paperStyle(envelopeTheme.exteriorLight)}
          boxShadow={`
            inset 0 -3px 10px rgba(20, 46, 77, 0.18),
            inset 0 1px 2px rgba(255,255,255,0.25)
          `}
        />
      </MotionBox>
    </Box>
  )
}
