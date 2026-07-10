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
      boxShadow={`
        ${envelopeTheme.shadow},
        inset 0 1px 2px rgba(255,255,255,0.4),
        inset 0 -1px 2px rgba(0,0,0,0.1)
      `}
      overflow="hidden"
      {...paperStyle(envelopeTheme.exterior)}
    >
      {/* Bottom fold shadow for depth */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="8px"
        bgGradient="linear(to-b, rgba(0,0,0,0.1), rgba(0,0,0,0.05))"
        zIndex={0}
      />

      {/* Back flap bottom section */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="38%"
        zIndex={1}
        clipPath="polygon(0 100%, 50% 8%, 100% 100%)"
        bg={envelopeTheme.exteriorDark}
        boxShadow="inset 0 2px 6px rgba(0,0,0,0.15)"
      />

      {/* Left side fold */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        w="50%"
        h="52%"
        zIndex={1}
        clipPath="polygon(0 100%, 0 0, 100% 72%)"
        bg={envelopeTheme.exteriorMid}
        boxShadow="inset -2px 0 4px rgba(0,0,0,0.12)"
      />

      {/* Right side fold */}
      <Box
        position="absolute"
        bottom={0}
        right={0}
        w="50%"
        h="52%"
        zIndex={1}
        clipPath="polygon(100% 100%, 100% 0, 0 72%)"
        bg={envelopeTheme.exteriorMid}
        boxShadow="inset 2px 0 4px rgba(0,0,0,0.12)"
      />

      {/* Front flap with enhanced lighting */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="48%"
        zIndex={2}
        clipPath="polygon(0 0, 100% 0, 50% 100%)"
        bg={envelopeTheme.exteriorLight}
        boxShadow={`
          inset 0 -4px 12px rgba(20, 46, 77, 0.15),
          inset 0 1px 3px rgba(255,255,255,0.3)
        `}
      />

      {/* Center crease line for realism */}
      <Box
        position="absolute"
        top="48%"
        left="50%"
        transform="translateX(-50%)"
        w="2px"
        h="52%"
        bgGradient="linear(to-b, rgba(0,0,0,0.08), rgba(0,0,0,0.03), transparent)"
        zIndex={1}
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
          textShadow="0 2px 4px rgba(20, 46, 77, 0.3)"
        >
          You are Invited
        </Text>
      </Center>
    </Box>
  )
}
