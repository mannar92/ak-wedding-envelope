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
      boxShadow={envelopeTheme.shadow}
      overflow="hidden"
      {...paperStyle(envelopeTheme.exterior)}
    >
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="38%"
        zIndex={1}
        clipPath="polygon(0 100%, 50% 8%, 100% 100%)"
        bg={envelopeTheme.exteriorDark}
      />

      <Box
        position="absolute"
        bottom={0}
        left={0}
        w="50%"
        h="52%"
        zIndex={1}
        clipPath="polygon(0 100%, 0 0, 100% 72%)"
        bg={envelopeTheme.exteriorMid}
      />

      <Box
        position="absolute"
        bottom={0}
        right={0}
        w="50%"
        h="52%"
        zIndex={1}
        clipPath="polygon(100% 100%, 100% 0, 0 72%)"
        bg={envelopeTheme.exteriorMid}
      />

      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="48%"
        zIndex={2}
        clipPath="polygon(0 0, 100% 0, 50% 100%)"
        bg={envelopeTheme.exteriorLight}
        boxShadow="inset 0 -4px 12px rgba(20, 46, 77, 0.15)"
      />

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
          lineHeight="1.2"
          userSelect="none"
        >
          You are Invited
        </Text>
      </Center>
    </Box>
  )
}
