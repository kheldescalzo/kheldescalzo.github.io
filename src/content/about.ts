import type { Image, ToolMark } from './schema'
import { certification, externalLinks, site } from './site'
import { tools } from './tools'

/**
 * The Home About section: the desk illustration stands on a hairline floor with the lead over its
 * space; roles with tool logos as raised keys, credentials below.
 */
export const aboutSection = {
  eyebrow: 'About',
  titleThin: "Hi, I'm",
  titleBold: `${site.name}.`,
  lede: 'I am a virtual assistant for founders and operators who need customer service, scheduling, technical support, and admin handled without dropping the guest experience.',
  lead: 'My background is hospitality and customer service: calm replies, clean handoffs, and problem solving when the unexpected shows up.',
  leadQuiet: 'Today I run the inbox, the calendar, the tickets, and the admin so you can stay with the work only you can do.',
  note: {
    company: `${site.brand} is my practice`,
    product: { label: 'Client ops desk', href: externalLinks.showcase },
    rest: 'is the working system I use to keep support, bookings, and follow-ups in one place.',
  },
  picture: {
    src: '/images/profile/desk.webp',
    srcSet: '/images/profile/800/desk.webp 800w, /images/profile/desk.webp 1200w',
    alt: `Illustration of ${site.name} at a desk, working at a monitor with a coffee beside them`,
    width: 1200,
    height: 889,
  } satisfies Image,
}

export const capabilities: { title: string; tools: ToolMark[] }[] = [
  { title: 'Customer Service', tools: [tools.toolA, tools.toolB, tools.toolC] },
  { title: 'Scheduling', tools: [tools.toolD, tools.toolE, tools.toolF, tools.toolG] },
  { title: 'Technical Support', tools: [tools.toolH, tools.toolI, tools.toolJ] },
  { title: 'Admin Tasks', tools: [tools.toolK, tools.toolL, tools.toolA] },
]

export type AboutCredential = {
  id: 'cert' | 'place' | 'community' | 'partner'
  title: string
  detail: string
  image?: Image
  /** A dark-theme version of the mark, when the light one would vanish on a dark ground (or the reverse). */
  imageDark?: Image
  href?: string
}

export const credentials: AboutCredential[] = [
  { id: 'cert', title: certification.title, detail: certification.detail, image: { ...certification.image!, alt: '' } },
  { id: 'place', title: `Based ${site.timePlace}`, detail: 'GMT+8 · overlap with US, EU, and APAC mornings' },
  {
    id: 'community',
    title: 'Hospitality-trained',
    detail: 'Guest-first service',
    href: '#',
    image: { src: '/images/badges/64/community.webp', alt: '', width: 64, height: 64 },
  },
  {
    id: 'partner',
    title: 'Problem solving',
    detail: 'Tickets to resolution',
    href: '#',
    image: { src: '/images/badges/64/partner-light.webp', alt: '', width: 64, height: 64 },
    imageDark: { src: '/images/badges/64/partner.webp', alt: '', width: 64, height: 64 },
  },
]
