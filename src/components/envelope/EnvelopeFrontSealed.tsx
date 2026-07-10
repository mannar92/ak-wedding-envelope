import { Box } from '@chakra-ui/react'
import { EnvelopeStamp } from './EnvelopeStamp'
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
      boxShadow={envelopeTheme.shadow}
      overflow="hidden"
      {...paperStyle(envelopeTheme.exterior)}
    >
      <EnvelopeStamp />

      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="55%"
        clipPath="polygon(0 100%, 0 14%, 50% 56%, 100% 14%, 100% 100%)"
        {...paperStyle(envelopeTheme.pocket)}
        boxShadow={`inset 0 6px 14px ${envelopeTheme.pocketShadow}`}
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
        boxShadow="inset 0 -3px 10px rgba(20, 46, 77, 0.18)"
        zIndex={3}
      />

      <Box position="absolute" top="calc(58% - 26px)" left="calc(50% - 26px)" zIndex={4}>
        <WaxSeal size="52px" />
      </Box>
    </Box>
  )
}
