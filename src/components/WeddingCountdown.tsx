import { Box, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { envelopeTheme, weddingTheme } from '../lib/theme'

type CountdownParts = {
  days: number
  hours: number
  minutes: number
  seconds: number
  isComplete: boolean
}

const WEDDING_DATE = new Date(2026, 9, 1, 0, 0, 0)

function getCountdownParts(targetDate: Date): CountdownParts {
  const difference = Math.max(targetDate.getTime() - Date.now(), 0)

  const totalSeconds = Math.floor(difference / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return {
    days,
    hours,
    minutes,
    seconds,
    isComplete: difference === 0,
  }
}

function CountdownCell({ value, label }: { value: number; label: string }) {
  return (
    <Box
      minW="68px"
      px={3}
      py={2}
      borderRadius="12px"
      border="1px solid"
      borderColor={weddingTheme.colors.borderSubtle}
      bg="rgba(255, 255, 255, 0.36)"
      boxShadow="0 8px 20px rgba(20, 46, 77, 0.08)"
      backdropFilter="blur(6px)"
      textAlign="center"
    >
      <Text
        fontFamily={weddingTheme.fonts.display}
        fontSize={{ base: '1.25rem', sm: '1.5rem' }}
        lineHeight="1"
        color={envelopeTheme.exterior}
      >
        {String(value).padStart(2, '0')}
      </Text>
      <Text
        mt={1}
        fontFamily={weddingTheme.fonts.script}
        fontSize={weddingTheme.fontSizes.scriptXSm}
        letterSpacing="0.02em"
        color={envelopeTheme.hintText}
      >
        {label}
      </Text>
    </Box>
  )
}

export function WeddingCountdown() {
  const [countdown, setCountdown] = useState(() => getCountdownParts(WEDDING_DATE))

  useEffect(() => {
    const updateCountdown = () => {
      setCountdown(getCountdownParts(WEDDING_DATE))
    }

    updateCountdown()
    const intervalId = window.setInterval(updateCountdown, 1000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  return (
    <Box
      mt={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={10}
      textAlign="center"
    >
      {countdown.isComplete ? (
        <Text
          fontFamily={weddingTheme.fonts.display}
          fontSize={weddingTheme.fontSizes.body}
          color={envelopeTheme.exterior}
        >
          Έφτασε η μέρα του γάμου!
        </Text>
      ) : (
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
          <CountdownCell value={countdown.days} label="Ημέρες" />
          <CountdownCell value={countdown.hours} label="Ώρες" />
          <CountdownCell value={countdown.minutes} label="Λεπτά" />
          <CountdownCell value={countdown.seconds} label="Δευτερόλεπτα" />
        </Box>
      )}
    </Box>
  )
}