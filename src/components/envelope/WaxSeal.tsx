import { Center, Text } from '@chakra-ui/react'
import { envelopeTheme, weddingTheme } from '../../lib/theme'

export function WaxSeal({ size = '48px' }: { size?: string }) {
  return (
    <Center
      w={size}
      h={size}
      borderRadius="full"
      bg={`radial-gradient(circle at 35% 30%, ${weddingTheme.colors.backgroundLight}, ${weddingTheme.colors.backgroundMuted} 55%, #C8C4BC)`}
      boxShadow="0 4px 12px rgba(20, 46, 77, 0.35), inset 0 2px 4px rgba(255,255,255,0.5)"
      border="2px solid"
      borderColor="rgba(20, 46, 77, 0.35)"
    >
      <Text
        fontFamily={weddingTheme.fonts.display}
        fontSize={size === '48px' ? '15px' : '13px'}
        color={envelopeTheme.exterior}
        fontWeight="600"
        letterSpacing="2px"
        userSelect="none"
      >
        A&amp;K
      </Text>
    </Center>
  )
}
