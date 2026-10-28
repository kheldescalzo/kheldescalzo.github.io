import type { Credential, SocialLink } from './schema'

/**
 * Who the site is about. START HERE: every page, the sidebar, the SEO tags and the legal pages read
 * these values, so changing them here changes them everywhere.
 */
export const site = {
  name: 'Michael Descalzo',
  brand: 'Khel VA',
  /** The brand name as the sidebar logo shows it: the second part takes the accent color. */
  brandParts: ['Khel', 'VA'],
  /** Your logo mark, one file per theme (`light` = for light backgrounds). The 96px copies are the
   *  sidebar header (shown at 32-36px); the full ones are the Work logo faces. */
  logo: {
    light: '/images/brand/mark.webp',
    dark: '/images/brand/mark-light.webp',
    headerLight: '/images/brand/mark-96.webp',
    headerDark: '/images/brand/mark-light-96.webp',
  },
  /** The live address, no trailing slash. Canonical URLs, the sitemap and the JSON-LD use it. */
  url: 'https://kheldescalzo.github.io',
  role: 'Virtual Assistant — Customer Service, Admin, Scheduling & Automation',
  email: 'michaeldescalzo@gmail.com',
  emailSubject: 'Virtual assistant inquiry',
  replyPromise: 'Contact me to discuss your requirements and availability.',
  location: 'Remote, GMT+8',
  /** Two-letter country code (ISO 3166) for the Person JSON-LD address. */
  countryCode: 'PH',
  /** Your clock, shown live at the top of the sidebar. Any IANA zone, e.g. 'America/New_York'. */
  timeZone: 'Asia/Manila',
  timePlace: 'remotely',
  avatar: { src: '/images/profile/avatar.webp', alt: 'Michael Descalzo', width: 400, height: 400 },
  /** The sidebar picture (112px, 44px on the rail). */
  avatarSmall: '/images/profile/avatar.webp',
} as const

/** A credential shown in About and the sidebar check. Delete the `image` to show it without a badge. */
export const certification: Credential = {
  title: 'Hospitality & Customer Service',
  detail: 'Guest-facing service and problem solving',
  issuer: 'Independent practice',
  href: '#',
  image: { src: '/images/badges/badge.webp', alt: 'Hospitality and customer service background', width: 96, height: 96 },
}

/** Replace `#` with the real profile URL to activate an icon. */
export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/kheldescalzo', external: true, icon: 'github' },
  { label: 'Facebook', href: '#', external: true, icon: 'facebook' },
  { label: 'YouTube', href: '#', external: true, icon: 'youtube' },
]

/** Off-site links the pages point at. Replace each `#` with a real URL. */
export const externalLinks = {
  resource: '/demos/plans/sample-plan.html',
  showcase: '/work/featured',
  company: '/#about',
} as const

export function mailtoHref(): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(site.emailSubject)}`
}
