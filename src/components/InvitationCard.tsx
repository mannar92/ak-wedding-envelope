import { Box, Image } from '@chakra-ui/react'
import { invitationImage02 } from '../lib'
import { weddingTheme } from '../lib/theme'

type InvitationCardProps = {
  onRsvpClick: () => void
}

export function InvitationCard({ onRsvpClick }: InvitationCardProps) {
  return (
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
  )
}
