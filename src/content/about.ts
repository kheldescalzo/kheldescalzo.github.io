import type { Image, ToolMark } from './schema'
import { site } from './site'
import { tools } from './tools'

/**
 * The Home About section: the desk illustration stands on a hairline floor with the lead over its
 * space; roles with tool logos as raised keys, credentials below.
 */
export const aboutSection = {
  eyebrow: 'About',
  titleThin: "Hi, I'm",
  titleBold: `${site.name}.`,
  lede: 'I provide customer service, administrative support, scheduling, and automation to help businesses keep their daily work moving.',
  lead: 'I bring 17 years of experience across benefits advocacy, sales, hospitality, customer service, and scheduling, along with two years of experience in automation.',
  leadQuiet: 'I combine customer support with organized administration and practical automation to help teams manage everyday tasks.',
  note: {
    company: `${site.brand} is my practice`,
    product: { label: 'my personal projects', href: '/#work' },
    rest: 'show how I apply AI-assisted development to websites, desktop tools, and Android apps.',
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

export const credentials: AboutCredential[] = []
