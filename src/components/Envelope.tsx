import { Box, Center, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useRef, type ReactNode } from 'react'
import { EnvelopeBack } from './envelope/EnvelopeBack'
import { EnvelopeFrontOpen } from './envelope/EnvelopeFrontOpen'
import { EnvelopeFrontSealed } from './envelope/EnvelopeFrontSealed'
import weddingMusic from '../lib/sounds/damiano_the_first_time.mp3'
import {
  ENVELOPE_HEIGHT,
  ENVELOPE_WIDTH,
  flipTransition,
} from './envelope/paperStyle'
import { envelopeTheme, weddingTheme } from '../lib/theme'
import { useEnvelopeState } from '../hooks/useEnvelopeState'

const MotionBox = motion.create(Box)
const MUSIC_VOLUME = 0.2

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
  const musicRef = useRef<HTMLAudioElement | null>(null)
  const musicStartedRef = useRef(false)
  const phaseRef = useRef(phase)
  phaseRef.current = phase

  useEffect(() => {
    return () => {
      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (musicRef.current) {
      musicRef.current.volume = MUSIC_VOLUME
    }
  }, [])

  const startMusic = () => {
    if (musicStartedRef.current) return

    const music = musicRef.current
    if (!music) return

    musicStartedRef.current = true
    void music.play().catch(() => {
      musicStartedRef.current = false
    })
  }

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

  const handleInteract = () => {
    startMusic()
    interact()
  }

  return (
    <Center
      minH="100dvh"
      w="100%"
      px={4}
      py={8}
      bg={envelopeTheme.pageBg}
      position="relative"
      overflow="visible"
      flexDirection="column"
      justifyContent="center"
      gap={6}
    >
      <Box
        position="relative"
        w={ENVELOPE_WIDTH}
        h={ENVELOPE_HEIGHT}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {/* Flat back — no 3D transforms, keeps text crisp */}
        {showFlatBack && (
          <Box
            position="relative"
            w="100%"
            h="100%"
            cursor="pointer"
            onClick={handleInteract}
            role="button"
            tabIndex={0}
            aria-label="Turn over wedding invitation envelope"
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                handleInteract()
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

      {/* Hint text moved outside and below envelope */}
      <Box display="flex" justifyContent="center" alignItems="center" minH="20px">
        {isBack && (
          <Box>
            <Box
              bg={envelopeTheme.pageBg}
              px={3}
              py={1.5}
              borderRadius="3px"
              border="1px solid"
              borderColor={envelopeTheme.exterior}
              boxShadow="0 2px 8px rgba(24, 56, 96, 0.22), inset 0 1px 1px rgba(24, 56, 96, 0.12)"
            >
              <Text
                fontFamily={weddingTheme.fonts.script}
                fontSize={weddingTheme.fontSizes.scriptSm}
                color={envelopeTheme.exterior}
                textAlign="center"
                lineHeight="1.2"
                userSelect="none"
                pointerEvents="none"
                textShadow="0 1px 2px rgba(24, 56, 96, 0.22)"
              >
                Πατήστε το φάκελο για άνοιγμα
              </Text>
            </Box>
          </Box>
        )}
      </Box>
      <audio ref={musicRef} src={weddingMusic} loop preload="auto" aria-hidden="true" />

      {/* Phase B debug stepper was here; keep the component in src/components/debug/EnvelopeDebugStepper.tsx for future reuse. */}
    </Center>
  )
}
