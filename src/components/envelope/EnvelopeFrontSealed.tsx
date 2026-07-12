import { Box } from '@chakra-ui/react'
import { WaxSeal } from './WaxSeal'
import { envelopeTheme } from '../../lib/theme'
import { paperStyle } from './paperStyle'

export function EnvelopeFrontSealed() {
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
      {/* Bottom edge shadow */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="6px"
        bgGradient="linear(to-b, rgba(0,0,0,0.08), rgba(0,0,0,0.02))"
        zIndex={0}
      />

      {/* Envelope pocket */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="55%"
        clipPath="polygon(0 100%, 0 14%, 50% 56%, 100% 14%, 100% 100%)"
        {...paperStyle(envelopeTheme.pocket)}
        boxShadow={`
          inset 0 6px 14px ${envelopeTheme.pocketShadow},
          inset 0 2px 4px rgba(0,0,0,0.1)
        `}
        zIndex={2}
      />

      {/* Left pocket edge shadow */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        w="50%"
        h="55%"
        zIndex={1}
        clipPath="polygon(0 100%, 0 14%, 50% 56%)"
        bgGradient="linear(to-r, rgba(0,0,0,0.12), transparent)"
      />

      {/* Right pocket edge shadow */}
      <Box
        position="absolute"
        bottom={0}
        right={0}
        w="50%"
        h="55%"
        zIndex={1}
        clipPath="polygon(100% 100%, 100% 14%, 50% 56%)"
        bgGradient="linear(to-l, rgba(0,0,0,0.12), transparent)"
      />

      {/* Front flap with enhanced 3D effect */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="52%"
        clipPath="polygon(0 0, 100% 0, 50% 100%)"
        {...paperStyle(envelopeTheme.exteriorLight)}
        boxShadow={`
          inset 0 -3px 10px rgba(20, 46, 77, 0.18),
          inset 0 1px 3px rgba(255,255,255,0.25)
        `}
        zIndex={3}
      />

      {/* Center crease for flap */}
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        w="1px"
        h="52%"
        bgGradient="linear(to-b, rgba(0,0,0,0.06), transparent)"
        zIndex={2}
      />

      {/* Wax seal */}
      <Box position="absolute" top="calc(58% - 26px)" left="calc(50% - 26px)" zIndex={4}>
        <WaxSeal size="52px" />
      </Box>
    </Box>
  )
}
