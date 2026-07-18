import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useId, useRef, useState } from 'react'
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
  const sideShadowFilterId = useId()
  const showCard = isOpening || isOpen
  const [isCardSettled, setIsCardSettled] = useState(false)
  const [isCardInFront, setIsCardInFront] = useState(false)
  const promoteLayerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const CARD_LIFT_DURATION_MS = 860

  useEffect(() => {
    return () => {
      if (promoteLayerTimerRef.current) {
        clearTimeout(promoteLayerTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (promoteLayerTimerRef.current) {
      clearTimeout(promoteLayerTimerRef.current)
      promoteLayerTimerRef.current = null
    }

    if (!showCard || isOpening) {
      setIsCardSettled(false)
      setIsCardInFront(false)
      return
    }

    if (isOpen) {
      promoteLayerTimerRef.current = setTimeout(() => {
        setIsCardInFront(true)
      }, CARD_LIFT_DURATION_MS)
    }
  }, [isOpen, isOpening, showCard])

  const preRotationCardHeight = {
    base: 'min(90vw, 539px)',
    sm: 'min(86vw, 539px)',
    md: 'min(86vw, 539px)',
  }

  const finalCardHeight = {
    base: 'min(calc(100dvh - 150px), calc((100vw - 24px) * 1.4))',
    sm: 'min(calc(100dvh - 170px), calc((100vw - 36px) * 1.4))',
    md: 'min(calc(100dvh - 190px), calc((100vw - 56px) * 1.4))',
  }

  const cardHeight = isCardSettled ? finalCardHeight : preRotationCardHeight
  const cardWidth = {
    base: `calc(${cardHeight.base} * 5 / 7)`,
    sm: `calc(${cardHeight.sm} * 5 / 7)`,
    md: `calc(${cardHeight.md} * 5 / 7)`,
  }

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
        overflow="hidden"
        bg={envelopeTheme.exteriorLight}
      />

      {/* Invitation card with smooth reveal */}
      {showCard && (
        <MotionBox
          position="absolute"
          inset={0}
          zIndex={isCardInFront ? 30 : 4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ transformOrigin: 'center center' }}
          initial={{ y: 0, scale: 0.9, opacity: 0, rotate: -90 }}
          animate={
            isOpen
              ? {
                  y: [18, -214, 0],
                  rotate: [-90, -90, 0],
                  scale: [0.96, 0.98, 1],
                  opacity: [1, 1, 1],
                }
              : {
                  y: 18,
                  rotate: -90,
                  scale: 0.96,
                  opacity: 1,
                }
          }
          transition={
            isOpen
              ? {
                  y: {
                    duration: 1.3,
                    ease: [0.22, 1, 0.36, 1],
                    times: [0, 0.66, 1],
                  },
                  rotate: {
                    duration: 0.5,
                    delay: 0.86,
                    ease: [0.2, 0.8, 0.2, 1],
                  },
                  scale: {
                    duration: 1.3,
                    ease: [0.22, 1, 0.36, 1],
                    times: [0, 0.66, 1],
                  },
                  opacity: {
                    duration: 0.2,
                  },
                }
              : cardTransition
          }
          onAnimationComplete={() => {
            if (isOpen) {
              setIsCardInFront(true)
              setIsCardSettled(true)
            }
          }}
        >
          <InvitationCard
            cardWidth={cardWidth}
            cardHeight={cardHeight}
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
        zIndex={8}
        clipPath="polygon(0 100%, 0 12%, 50% 58%, 100% 12%, 100% 100%)"
        {...paperStyle(envelopeTheme.exterior)}
        borderBottomRadius="3px"
      />

      {/* Animated envelope flap with enhanced 3D */}
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="54%"
        zIndex={2}
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
        <svg
          viewBox="0 0 100 54"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%' }}
          aria-hidden="true"
        >
          <defs>
            <filter id={sideShadowFilterId} x="-25%" y="-20%" width="150%" height="170%">
              <feGaussianBlur stdDeviation="0.45" />
            </filter>
          </defs>

          <polygon points="0,0 100,0 50,54" fill={envelopeTheme.exterior} />

          <polygon
            points="0,0 2.4,0 50,54 48.8,54 0,2.4"
            fill="rgba(20, 46, 77, 0.22)"
            filter={`url(#${sideShadowFilterId})`}
          />

          <polygon
            points="97.6,0 100,0 100,2.4 51.2,54 50,54"
            fill="rgba(20, 46, 77, 0.22)"
            filter={`url(#${sideShadowFilterId})`}
          />
        </svg>
      </MotionBox>
    </Box>
  )
}
