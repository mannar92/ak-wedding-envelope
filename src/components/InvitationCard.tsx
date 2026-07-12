import { Box, Image, Text } from '@chakra-ui/react'
import { invitationImage02 } from '../lib'
import { envelopeTheme, weddingTheme } from '../lib/theme'
import { WeddingCountdown } from './WeddingCountdown'

type InvitationCardProps = {
  onRsvpClick: () => void
  showRsvpHint?: boolean
}

export function InvitationCard({
  onRsvpClick,
  showRsvpHint = false,
}: InvitationCardProps) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
      <Box
        as="button"
        onClick={onRsvpClick}
        w={{ base: '385px', sm: '385px' }}
        aspectRatio="5 / 7"
        bg={weddingTheme.colors.background}
        borderRadius="4px"
        boxShadow={weddingTheme.colors.shadowStrong}
        overflow="hidden"
        border="1px solid"
        borderColor={weddingTheme.colors.borderSubtle}
        cursor="pointer"
        p={0}
        transition="transform 0.2s ease, box-shadow 0.2s ease"
        _hover={{
          transform: 'scale(1.02)',
          boxShadow: '0 20px 56px rgba(20, 46, 77, 0.34)',
        }}
        _active={{ transform: 'scale(0.98)' }}
        aria-label="Open RSVP website"
      >
        <Image
          src={invitationImage02}
          alt="Wedding invitation"
          w="100%"
          h="100%"
          objectFit="cover"
          display="block"
          pointerEvents="none"
        />
      </Box>

      {showRsvpHint && (
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            bg={envelopeTheme.pageBg}
            px={3}
            py={1.5}
            borderRadius="3px"
            border="1px solid"
            borderColor={envelopeTheme.exterior}
            boxShadow="0 2px 8px rgba(24, 56, 96, 0.22), inset 0 1px 1px rgba(24, 56, 96, 0.12)"
          >
            <Text
              fontFamily={weddingTheme.fonts.script}
              fontSize={weddingTheme.fontSizes.scriptSm}
              color={envelopeTheme.exterior}
              textAlign="center"
              lineHeight="1.2"
              userSelect="none"
              pointerEvents="none"
              textShadow="0 1px 2px rgba(24, 56, 96, 0.22)"
            >
              Πατήστε την πρόσκληση για την ιστοσελίδα μας
            </Text>
          </Box>
          <WeddingCountdown />
        </Box>
      )}
    </Box>
  )
}
