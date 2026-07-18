import { Box } from '@chakra-ui/react'
import { useId } from 'react'
import { WaxSeal } from './WaxSeal'
import { envelopeTheme } from '../../lib/theme'
import { paperStyle } from './paperStyle'

export function EnvelopeFrontSealed() {
  const sideShadowFilterId = useId()

  return (
    <Box
      position="relative"
      w="100%"
      h="100%"
      borderRadius="3px"
      overflow="hidden"
      {...paperStyle(envelopeTheme.exterior)}
    >
      <svg
        viewBox="0 0 100 55"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '55%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        <defs>
          <filter id={sideShadowFilterId} x="-25%" y="-20%" width="150%" height="170%">
            <feGaussianBlur stdDeviation="0.45" />
          </filter>
        </defs>

        <polygon points="0,55 100,55 50,0" fill={envelopeTheme.exterior} />

        <polygon
          points="0,55 2.4,55 50,0 48.8,0 0,52.6"
          fill="rgba(20, 46, 77, 0.22)"
          filter={`url(#${sideShadowFilterId})`}
        />

        <polygon
          points="97.6,55 100,55 100,52.6 51.2,0 50,0"
          fill="rgba(20, 46, 77, 0.22)"
          filter={`url(#${sideShadowFilterId})`}
        />
      </svg>

      <svg
        viewBox="0 0 100 56"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '56%',
          zIndex: 5,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        <defs>
          <filter id={sideShadowFilterId} x="-25%" y="-20%" width="150%" height="170%">
            <feGaussianBlur stdDeviation="0.45" />
          </filter>
        </defs>

        <polygon points="0,0 100,0 50,56" fill={envelopeTheme.exterior} />

        <polygon
          points="0,0 2.4,0 50,56 48.8,56 0,2.4"
          fill="rgba(20, 46, 77, 0.22)"
          filter={`url(#${sideShadowFilterId})`}
        />

        <polygon
          points="97.6,0 100,0 100,2.4 51.2,56 50,56"
          fill="rgba(20, 46, 77, 0.22)"
          filter={`url(#${sideShadowFilterId})`}
        />
      </svg>

      {/* Wax seal */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={6}
      >
        <WaxSeal size="68px" />
      </Box>
    </Box>
  )
}
