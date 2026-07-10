export const weddingTheme = {
  colors: {
    /** Sampled from invitation paper (light pixels avg) */
    background: '#F4F4EF',
    backgroundLight: '#F8F8F3',
    backgroundMuted: '#EEECE8',

    /** Sampled from invitation ink (dominant dark bucket #183860) */
    ink: '#183860',
    inkDark: '#142E4D',
    inkMid: '#203860',
    inkLight: '#2A5078',
    inkMuted: 'rgba(24, 56, 96, 0.62)',

    textOnInk: '#F4F4EF',
    liner:
      'linear-gradient(135deg, #EFEDE8 0%, #D9D7D2 35%, #F6F5F0 55%, #C9C7C2 100%)',
    shadow: '0 14px 40px rgba(20, 46, 77, 0.22)',
    shadowStrong: '0 16px 48px rgba(20, 46, 77, 0.3)',
    borderSubtle: 'rgba(24, 56, 96, 0.18)',
  },

  fonts: {
    /** Names & decorative lines on the invitation */
    script: "'Pinyon Script', cursive",
    /** Body copy, date, venue, hints */
    serif: "'Cormorant Garamond', Georgia, serif",
    /** Monogram-style headings */
    display: "'Cormorant Garamond', Georgia, serif",
  },

  fontSizes: {
    scriptHero: { base: '2.35rem', sm: '2.6rem' },
    scriptMd: { base: '1.55rem', sm: '1.7rem' },
    body: { base: '1rem', sm: '1.05rem' },
    hint: { base: '0.82rem', sm: '0.88rem' },
    caption: '0.78rem',
  },

  letterSpacing: {
    hint: '0.14em',
    body: '0.02em',
  },
} as const

/** Envelope-specific derivations from the invitation palette */
export const envelopeTheme = {
  exterior: weddingTheme.colors.ink,
  exteriorDark: weddingTheme.colors.inkDark,
  exteriorMid: weddingTheme.colors.inkMid,
  exteriorLight: weddingTheme.colors.inkLight,
  liner: weddingTheme.colors.liner,
  pocket: weddingTheme.colors.inkMid,
  pocketShadow: 'rgba(20, 46, 77, 0.28)',
  pageBg: weddingTheme.colors.background,
  textOnEnvelope: weddingTheme.colors.textOnInk,
  hintText: weddingTheme.colors.inkMuted,
  shadow: weddingTheme.colors.shadow,
} as const
