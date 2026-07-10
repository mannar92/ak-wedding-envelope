import { useCallback, useState } from 'react'

export type EnvelopePhase =
  | 'back'
  | 'flipping'
  | 'front-sealed'
  | 'opening'
  | 'open'

export function useEnvelopeState() {
  const [phase, setPhase] = useState<EnvelopePhase>('back')

  const interact = useCallback(() => {
    setPhase((current) => (current === 'back' ? 'flipping' : current))
  }, [])

  const onFlipComplete = useCallback(() => {
    setPhase((current) => (current === 'flipping' ? 'front-sealed' : current))
  }, [])

  const beginOpen = useCallback(() => {
    setPhase((current) => (current === 'front-sealed' ? 'opening' : current))
  }, [])

  const onOpenComplete = useCallback(() => {
    setPhase((current) => (current === 'opening' ? 'open' : current))
  }, [])

  return {
    phase,
    interact,
    onFlipComplete,
    beginOpen,
    onOpenComplete,
    isBack: phase === 'back',
    isFlipping: phase === 'flipping',
    isFrontSealed: phase === 'front-sealed',
    isOpening: phase === 'opening',
    isOpen: phase === 'open',
    flipRotation: phase === 'back' ? 0 : 180,
  }
}
