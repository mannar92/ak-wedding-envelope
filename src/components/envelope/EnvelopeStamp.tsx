import { Box } from '@chakra-ui/react'
import { weddingTheme } from '../../lib/theme'

const stampInk = weddingTheme.colors.ink
const stampPaper = weddingTheme.colors.backgroundLight

export function EnvelopeStamp() {
  return (
    <Box position="absolute" top="10px" right="12px" w="58px" h="44px" zIndex={3}>
      <svg
        viewBox="0 0 58 44"
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        aria-hidden
      >
        <circle
          cx="18"
          cy="22"
          r="14"
          fill="none"
          stroke={stampInk}
          strokeWidth="1.2"
          opacity={0.75}
        />
        <path d="M18 14 L24 26 L12 26 Z" fill="none" stroke={stampInk} strokeWidth="1" />
        <text
          x="18"
          y="24"
          textAnchor="middle"
          fontSize="9"
          fill={stampInk}
          fontFamily={weddingTheme.fonts.display}
          fontWeight="600"
        >
          K
        </text>
        <path
          d="M28 18 C34 18 38 20 40 22 C38 24 34 26 28 26"
          fill="none"
          stroke={stampInk}
          strokeWidth="0.8"
          opacity={0.6}
        />
        <rect x="30" y="10" width="24" height="24" rx="1" fill={stampPaper} stroke={stampInk} strokeOpacity={0.25} />
        <path
          d="M33 28 C36 18 42 16 48 20 C46 26 40 30 33 28 Z"
          fill={stampInk}
          opacity={0.15}
        />
        <path
          d="M34 22 C38 20 44 22 50 26 C46 30 38 30 34 22 Z"
          fill={stampInk}
          opacity={0.22}
        />
      </svg>
    </Box>
  )
}
