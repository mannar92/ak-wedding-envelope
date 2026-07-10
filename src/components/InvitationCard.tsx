import { Box, Image, Text, VStack } from '@chakra-ui/react'
import { invitationImage } from '../lib'
import { weddingTheme } from '../lib/theme'

type InvitationCardProps = {
  onRsvpClick: () => void
}

export function InvitationCard({ onRsvpClick }: InvitationCardProps) {
  return (
    <VStack
      as="button"
      onClick={onRsvpClick}
      w={{ base: '365px', sm: '385px' }}
      spacing={0}
      bg="transparent"
      borderRadius="4px"
      cursor="pointer"
      p={0}
      _focus={{ outline: 'none' }}
      aria-label="Open RSVP website"
    >
      {/* Card container with image */}
      <Box
        w="100%"
        aspectRatio="5 / 7"
        bg={weddingTheme.colors.background}
        borderRadius="4px 4px 0 0"
        boxShadow={weddingTheme.colors.shadowStrong}
        overflow="hidden"
        border="1px solid"
        borderColor={weddingTheme.colors.borderSubtle}
        transition="transform 0.2s ease, box-shadow 0.2s ease"
        _groupHover={{ transform: 'scale(1.02)' }}
      >
        <Image
          src={invitationImage}
          alt="Wedding invitation"
          w="100%"
          h="100%"
          objectFit="cover"
          display="block"
          pointerEvents="none"
        />
      </Box>
    </VStack>
  )
}
