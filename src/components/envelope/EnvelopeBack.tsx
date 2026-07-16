import { Box, Center, Text } from '@chakra-ui/react'
import { envelopeTheme, weddingTheme } from '../../lib/theme'
import { paperStyle } from './paperStyle'

export function EnvelopeBack() {
  return (
    <Box
      position="relative"
      w="100%"
      h="100%"
      borderRadius="3px"
      overflow="hidden"
      {...paperStyle(envelopeTheme.exterior)}
    >
      <Center
        position="absolute"
        top="20%"
        left={0}
        right={0}
        zIndex={20}
        px={4}
        pointerEvents="none"
      >
        <Text
          fontFamily={weddingTheme.fonts.script}
          fontSize={weddingTheme.fontSizes.scriptHero}
          color="#FFFFFF"
          textAlign="center"
          lineHeight="4.5"
          userSelect="none"
          textShadow="0 2px 4px rgba(20, 46, 77, 0.3)"
        >
          Σας προσκαλούμε
        </Text>
      </Center>
    </Box>
  )
}
