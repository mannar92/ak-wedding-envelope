import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
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

  return (
    <Box
      position="relative"
      w="100%"
      h="100%"
      style={{ perspective: '1400px' }}
    >
      <Box
        position="absolute"
        inset={0}
        borderRadius="3px"
        boxShadow={envelopeTheme.shadow}
        overflow="hidden"
        bg={envelopeTheme.liner}
        backgroundImage="repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0 2px, transparent 2px 4px), radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)"
      />

      {showCard && (
        <MotionBox
          position="absolute"
          left="50%"
          bottom="18px"
          zIndex={isOpen ? 30 : 15}
          initial={{ x: '-50%', y: 28, scale: 0.9, opacity: 0 }}
          animate={{
            x: '-50%',
            y: isOpen ? -0 : -56,
            scale: 1,
            opacity: 1,
          }}
          transition={cardTransition}
        >
          <InvitationCard
            onRsvpClick={() => window.open(RSVP_URL, '_blank', 'noopener,noreferrer')}
          />
        </MotionBox>
      )}

      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="62%"
        zIndex={20}
        clipPath="polygon(0 100%, 0 12%, 50% 58%, 100% 12%, 100% 100%)"
        {...paperStyle(envelopeTheme.pocket)}
        boxShadow={`inset 0 8px 16px ${envelopeTheme.pocketShadow}`}
        borderBottomRadius="3px"
      />

      <Box
        position="absolute"
        bottom={0}
        left={0}
        w="50%"
        h="55%"
        zIndex={19}
        clipPath="polygon(0 100%, 0 0, 100% 55%)"
        bg={envelopeTheme.exteriorDark}
        opacity={0.55}
      />

      <Box
        position="absolute"
        bottom={0}
        right={0}
        w="50%"
        h="55%"
        zIndex={19}
        clipPath="polygon(100% 100%, 100% 0, 0 55%)"
        bg={envelopeTheme.exteriorDark}
        opacity={0.55}
      />

      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="54%"
        zIndex={25}
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
        <Box
          w="100%"
          h="100%"
          clipPath="polygon(0 0, 100% 0, 50% 100%)"
          {...paperStyle(envelopeTheme.exteriorLight)}
          boxShadow="inset 0 -3px 10px rgba(20, 46, 77, 0.18)"
        />
        <Box
          position="absolute"
          inset={0}
          clipPath="polygon(0 0, 100% 0, 50% 100%)"
          bg={envelopeTheme.liner}
          opacity={0.85}
          style={{ transform: 'rotateX(180deg)', backfaceVisibility: 'hidden' }}
        />
      </MotionBox>
    </Box>
  )
}
