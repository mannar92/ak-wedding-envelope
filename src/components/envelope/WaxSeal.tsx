import { Center, Text } from '@chakra-ui/react'
import { envelopeTheme, weddingTheme } from '../../lib/theme'

export function WaxSeal({ size = '48px' }: { size?: string }) {
  return (
    <Center
      w={size}
      h={size}
      borderRadius="full"
      bgGradient={`radial(circle at 35% 30%, ${weddingTheme.colors.backgroundLight} 0%, ${weddingTheme.colors.backgroundMuted} 35%, #B8B4AC 70%, #A89E96 100%)`}
      boxShadow={`
        0 6px 16px rgba(20, 46, 77, 0.4),
        0 2px 4px rgba(20, 46, 77, 0.5),
        inset 0 1px 2px rgba(255,255,255,0.6),
        inset 0 -2px 4px rgba(20, 46, 77, 0.2),
        inset -1px 1px 3px rgba(20, 46, 77, 0.15)
      `}
      border="2px solid"
      borderColor="rgba(20, 46, 77, 0.5)"
      position="relative"
    >
      {/* Wax seal highlight for 3D effect */}
      <Center
        position="absolute"
        top="8%"
        left="30%"
        w="25%"
        h="25%"
        bgGradient="radial(circle at center, rgba(255,255,255,0.8), transparent)"
        borderRadius="full"
        pointerEvents="none"
      />

      <Text
        fontFamily={weddingTheme.fonts.display}
        fontSize={size === '48px' ? '15px' : '13px'}
        color={envelopeTheme.exterior}
        fontWeight="700"
        letterSpacing="2px"
        userSelect="none"
        textShadow={`
          0 1px 2px rgba(255,255,255,0.3),
          0 -1px 1px rgba(0,0,0,0.2)
        `}
      >
        A&amp;K
      </Text>
    </Center>
  )
}
