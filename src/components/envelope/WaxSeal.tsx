import { Center, Image } from '@chakra-ui/react'
import { envelopeTheme, weddingTheme } from '../../lib/theme'
import waxSeal from '../../lib/images/was_seal.png'

export function WaxSeal({ size = '48px' }: { size?: string }) {
  return (
    <Center
      w={size}
      h={size}
      borderRadius="full"
      p="2px"
      bg="rgba(20, 46, 77, 0.4)"
      boxShadow={`
        0 6px 16px rgba(20, 46, 77, 0.35),
        inset 0 1px 2px rgba(255,255,255,0.6)
      `}
      position="relative"
      overflow="hidden"
    >
      <Center
        w="100%"
        h="100%"
        borderRadius="full"
        overflow="hidden"
        bg={weddingTheme.colors.backgroundMuted}
      >
        <Image
          src={waxSeal}
          alt="Wax seal"
          width="100%"
          height="100%"
          objectFit="contain"
          borderRadius="full"
          loading="eager"
          pointerEvents="none"
          style={{
            imageRendering: 'auto',
            transform: 'translateZ(0)',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        />
      </Center>
    </Center>
  )
}
