import { Box, Center, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useRef, type ReactNode } from 'react'
import { EnvelopeBack } from './envelope/EnvelopeBack'
import { EnvelopeFrontOpen } from './envelope/EnvelopeFrontOpen'
import { EnvelopeFrontSealed } from './envelope/EnvelopeFrontSealed'
import {
  ENVELOPE_HEIGHT,
  ENVELOPE_WIDTH,
  flipTransition,
} from './envelope/paperStyle'
import { envelopeTheme, weddingTheme } from '../lib/theme'
import { useEnvelopeState } from '../hooks/useEnvelopeState'

const MotionBox = motion.create(Box)

function FlipFace({
  children,
  rotateY,
}: {
  children: ReactNode
  rotateY: number
}) {
  return (
    <Box
      position="absolute"
      inset={0}
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: `rotateY(${rotateY}deg)`,
      }}
    >
      {children}
    </Box>
  )
}

function HintText({ children }: { children: string }) {
  return (
    <Text
      fontFamily={weddingTheme.fonts.serif}
      fontSize={weddingTheme.fontSizes.hint}
      color={envelopeTheme.hintText}
      letterSpacing={weddingTheme.letterSpacing.hint}
      textTransform="uppercase"
      fontWeight="500"
      userSelect="none"
      pointerEvents="none"
      bg="rgba(255, 255, 255, 0.9)"
      px={3}
      py={1.5}
      borderRadius="3px"
      boxShadow="0 2px 8px rgba(20, 46, 77, 0.15)"
    >
      {children}
    </Text>
  )
}

export function Envelope() {
  const {
    phase,
    interact,
    onFlipComplete,
    beginOpen,
    onOpenComplete,
    isBack,
    isFlipping,
    isFrontSealed,
    isOpening,
    isOpen,
    flipRotation,
  } = useEnvelopeState()

  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const phaseRef = useRef(phase)
  phaseRef.current = phase

  useEffect(() => {
    return () => {
      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current)
      }
    }
  }, [])

  const handleFlipComplete = () => {
    if (phaseRef.current !== 'flipping') return
    onFlipComplete()
    openTimerRef.current = setTimeout(() => {
      beginOpen()
    }, 750)
  }

  const showOpenFront = isOpening || isOpen
  const showFlatBack = isBack
  const show3DFlip = isFlipping
  const showFlatFront = isFrontSealed || isOpening || isOpen

  return (
    <Center
      minH="100dvh"
      w="100%"
      px={4}
      py={8}
      bg={envelopeTheme.pageBg}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="relative"
        w={ENVELOPE_WIDTH}
        h={{ base: '500px', sm: '520px' }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box position="relative" w={ENVELOPE_WIDTH} h={ENVELOPE_HEIGHT}>
          {/* Flat back — no 3D transforms, keeps text crisp */}
          {showFlatBack && (
            <Box
              position="relative"
              w="100%"
              h="100%"
              cursor="pointer"
              onClick={interact}
              role="button"
              tabIndex={0}
              aria-label="Turn over wedding invitation envelope"
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  interact()
                }
              }}
            >
              <EnvelopeBack />
            </Box>
          )}

          {/* 3D flip — only active during the flip animation */}
          {show3DFlip && (
            <Box
              position="absolute"
              inset={0}
              style={{ perspective: '1600px' }}
            >
              <MotionBox
                position="relative"
                w="100%"
                h="100%"
                style={{ transformStyle: 'preserve-3d' }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: flipRotation }}
                transition={flipTransition}
                onAnimationComplete={handleFlipComplete}
              >
                <FlipFace rotateY={0}>
                  <EnvelopeBack />
                </FlipFace>
                <FlipFace rotateY={180}>
                  <EnvelopeFrontSealed />
                </FlipFace>
              </MotionBox>
            </Box>
          )}

          {/* Flat front — no 3D transforms after flip completes */}
          {showFlatFront && (
            <Box position="relative" w="100%" h="100%">
              {showOpenFront ? (
                <EnvelopeFrontOpen
                  isOpening={isOpening}
                  isOpen={isOpen}
                  onOpenComplete={onOpenComplete}
                />
              ) : (
                <EnvelopeFrontSealed />
              )}
            </Box>
          )}
        </Box>

        <Box position="absolute" bottom="8px" h="20px">
          {isBack && <HintText>Tap to turn over</HintText>}
          {isFrontSealed && <HintText>Opening…</HintText>}
          {isOpen && <HintText>Tap invitation to RSVP</HintText>}
        </Box>
      </Box>
    </Center>
  )
}
