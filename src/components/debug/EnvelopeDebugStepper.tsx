import { Box, Button, HStack, Text, Wrap } from '@chakra-ui/react'
import type { EnvelopePhase } from '../../hooks/useEnvelopeState'

type EnvelopeDebugStepperProps = {
  phase: EnvelopePhase
  phases: readonly EnvelopePhase[]
  onChange: (phase: EnvelopePhase) => void
}

export function EnvelopeDebugStepper({
  phase,
  phases,
  onChange,
}: EnvelopeDebugStepperProps) {
  const currentIndex = phases.indexOf(phase)

  const stepPrev = () => {
    if (currentIndex <= 0) return
    onChange(phases[currentIndex - 1])
  }

  const stepNext = () => {
    if (currentIndex < 0 || currentIndex >= phases.length - 1) return
    onChange(phases[currentIndex + 1])
  }

  return (
    <Box
      position="fixed"
      right={4}
      bottom={4}
      zIndex={999}
      bg="rgba(20, 46, 77, 0.92)"
      color="white"
      borderRadius="10px"
      border="1px solid rgba(255, 255, 255, 0.22)"
      boxShadow="0 10px 28px rgba(20, 46, 77, 0.35)"
      p={3}
      maxW="min(92vw, 560px)"
    >
      <Text fontSize="xs" letterSpacing="0.08em" textTransform="uppercase" mb={2}>
        Phase B Debug Stepper
      </Text>

      <Text fontSize="sm" mb={2}>
        Current: {phase}
      </Text>

      <HStack spacing={2} mb={3}>
        <Button size="xs" onClick={stepPrev} isDisabled={currentIndex <= 0}>
          Prev
        </Button>
        <Button
          size="xs"
          onClick={stepNext}
          isDisabled={currentIndex < 0 || currentIndex >= phases.length - 1}
        >
          Next
        </Button>
      </HStack>

      <Wrap spacing={2}>
        {phases.map((value) => (
          <Button
            key={value}
            size="xs"
            variant={value === phase ? 'solid' : 'outline'}
            colorScheme={value === phase ? 'blue' : 'gray'}
            onClick={() => onChange(value)}
          >
            {value}
          </Button>
        ))}
      </Wrap>
    </Box>
  )
}
