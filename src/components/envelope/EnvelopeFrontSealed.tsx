import { Box } from '@chakra-ui/react'
import { WaxSeal } from './WaxSeal'
import { envelopeTheme } from '../../lib/theme'
import { paperStyle } from './paperStyle'

export function EnvelopeFrontSealed() {
  const seamColor = 'rgba(20, 46, 77, 0.18)'

  return (
    <Box
      position="relative"
      w="100%"
      h="100%"
      borderRadius="3px"
      overflow="hidden"
      {...paperStyle(envelopeTheme.exterior)}
    >
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="55%"
        clipPath="polygon(0 100%, 0 14%, 50% 56%, 100% 14%, 100% 100%)"
        {...paperStyle(envelopeTheme.exterior)}
        backgroundImage={`
          linear-gradient(33deg, transparent calc(50% - 0.75px), ${seamColor} 50%, transparent calc(50% + 0.75px)),
          linear-gradient(-33deg, transparent calc(50% - 0.75px), ${seamColor} 50%, transparent calc(50% + 0.75px))
        `}
        backgroundRepeat="no-repeat"
        zIndex={2}
      />

      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="52%"
        clipPath="polygon(0 0, 100% 0, 50% 100%)"
        {...paperStyle(envelopeTheme.exteriorLight)}
        backgroundImage={`
          linear-gradient(147deg, transparent calc(50% - 0.75px), ${seamColor} 50%, transparent calc(50% + 0.75px)),
          linear-gradient(-147deg, transparent calc(50% - 0.75px), ${seamColor} 50%, transparent calc(50% + 0.75px))
        `}
        backgroundRepeat="no-repeat"
        zIndex={3}
      />

      {/* Wax seal */}
      <Box position="absolute" top="calc(58% - 26px)" left="calc(50% - 26px)" zIndex={4}>
        <WaxSeal size="52px" />
      </Box>
    </Box>
  )
}
