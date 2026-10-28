import type { Demo, Image, ToolMark, WorkChapter, WorkItem } from './schema'
import { site } from './site'
import { method } from './method'
import { tools } from './tools'
import { projects } from './projects'
import {
  apps,
  bookingPages,
  caseStudies,
  experiments,
  featuredProject,
  funnelPages,
  processDoc,
  sampleSites,
  screens,
  sideProjects,
  workCount,
} from './work'

/**
 * Home page copy. The hero pairs a thin line with a bold one. The bold line is sized in `cqi` in
 * features/home/hero/hero.css so it fills the column: re-measure it when you change the words
 * (see the comment on `.hero__title` there).
 */
export const homeHero = {
  headlineThin: 'Your ops, covered.',
  headlineBold: 'I run the rest.',
  subhead: 'Customer service, admin, scheduling, and automation support — backed by 17 years across benefits advocacy, sales, hospitality, customer service, and scheduling, along with two years in automation.',
  cta: { label: 'Get in touch', to: '/#contact' },
}

/**
 * The statement under the hero: words light up as the page scrolls, each keyword lands bold and
 * moves the tracker. Replace the words, keep four keywords (the tracker shows them in order).
 * A string is plain words; `{ key }` is a keyword.
 */
export type ManifestoPart = string | { key: string }

export const homeManifesto = {
  eyebrow: method.eyebrow,
  parts: [
    'I take the',
    { key: 'inbox,' },
    'keep the',
    { key: 'calendar' },
    'honest, close the',
    { key: 'tickets,' },
    'and finish the',
    { key: 'admin' },
    'so you can stay with the guests and the work only you can do.',
  ] satisfies ManifestoPart[],
}

export const homeSections = {
  work: {
    eyebrow: 'Selected work',
    title: 'Systems you can open right now.',
  },
  proof: {
    eyebrow: 'Proof',
    title: 'Customer feedback.',
  },
  objections: {
    eyebrow: 'Before you write',
    title: 'The three questions everyone asks.',
  },
}

export const ctaBand = {
  title: 'Tell me what is eating your week.',
  body: 'Tell me what you need handled, the tools you use, and your preferred schedule. We can discuss the scope, availability, and next steps.',
  button: 'Email me your question',
}

/* ---------- Work section ---------- */

/** Full-size covers, 1800x1125, with 480 / 640 / 960 copies for the Work tiles (scripts/make-image-variants.py). */
const cover = (id: string, label: string, noun = 'page'): Image => ({
  src: `/images/covers/${id}.webp`,
  alt: `${label} ${noun}`,
  width: 1800,
  height: 1125,
  srcSet: [480, 640, 960].map((w) => `/images/covers/${w}/${id}.webp ${w}w`).join(', ') + `, /images/covers/${id}.webp 1800w`,
})
/** Workspace screens, 1600x900, with 480 / 640 / 960 copies for the Work tile (scripts/make-image-variants.py). */
const screen = (id: string, alt: string, width: number, height: number): Image => ({
  src: `/images/screens/${id}.webp`,
  alt,
  width,
  height,
  srcSet: [480, 640, 960].map((w) => `/images/screens/${w}/${id}.webp ${w}w`).join(', ') + `, /images/screens/${id}.webp ${width}w`,
})

/** A live demo page as a showcase item, with its full-size cover. */
const demoItem =
  (group: string) =>
  (demo: Demo): WorkItem => ({
    id: demo.id,
    name: demo.label,
    kicker: demo.tag,
    group,
    summary: demo.summary,
    image: cover(demo.id, demo.label),
    href: demo.href,
  })

const groupItems = (groups: typeof sideProjects): WorkItem[] =>
  groups.flatMap((group) =>
    group.builds.map((build) => ({
      id: build.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: build.name,
      kicker: group.title,
      summary: build.summary,
      stack: build.stack,
      status: build.status,
    })),
  )

/** The site's own mark for the Experiments card. The card ground is always light. */
const siteMark: ToolMark = { name: site.brand, logo: site.logo.light }

/** The URL of a chapter's showcase sheet. Real, shareable and in the sitemap. */
export const chapterPath = (id: string) => `/work/${id}`

const sideProjectItems = projects
const experimentItems = groupItems(experiments)

export const workSection = {
  ...homeSections.work,
  /** The title as one display line in the hero's thin + bold pairing. */
  titleThin: 'Projects and',
  titleBold: 'practical tools.',
  all: { label: `See all ${workCount} builds`, to: '/work' },
}

const screenItems: WorkItem[] = screens.map((s) => ({
  id: s.id,
  name: s.name,
  kicker: s.kicker,
  summary: s.summary,
  image: screen(s.id, `${s.name}, a workspace screen`, 1600, 900),
}))

/**
 * The Work chapters, in bento order. Add, remove or reorder a chapter here; the bento, the sheets and
 * the sitemap follow (the bento's grid areas in work.css are keyed by chapter id). A chapter with a
 * `lead` is a single build; one with no landscape picture shows its `marks` as a logo face instead.
 */
const draftWorkChapters: WorkChapter[] = [
  {
    id: 'featured',
    title: featuredProject.title,
    line: 'My personal portfolio, customized and deployed with AI assistance.',
    count: 1,
    unit: 'project',
    description: featuredProject.summary,
    marks: [tools.toolA, siteMark],
    items: [],
    lead: featuredProject.image,
    gallery: featuredProject.gallery,
    link: featuredProject.link,
  },
  {
    id: 'case-studies',
    title: 'Case Studies',
    line: 'Two desks, told as problem and result.',
    count: caseStudies.length,
    unit: 'cases',
    description: 'How a hospitality inbox and a booking calendar were brought current, with the result each owner could feel.',
    marks: [tools.toolB, tools.toolC, tools.toolD],
    items: caseStudies.map((study) => ({
      id: study.id,
      name: study.title,
      kicker: 'Case study',
      summary: study.summary,
      image: cover(study.id, study.title, 'cover'),
      href: study.link.href,
    })),
  },
  {
    id: 'process',
    title: 'Onboarding SOP',
    line: 'How a new desk starts, before the first week.',
    count: 1,
    unit: 'doc',
    description: 'The onboarding plan I send before week one: access, tone of voice, hours, and what done looks like.',
    marks: [tools.toolE],
    items: [],
    lead: cover('process-doc', processDoc.title, 'cover'),
    link: processDoc.link,
  },
  {
    id: 'screens',
    title: 'Screens',
    line: 'The views I work in every week.',
    count: screenItems.length,
    unit: 'screens',
    description: 'Helpdesk, calendar, CRM, SOP wiki, booking, and weekly reports — the screens a live desk actually uses.',
    marks: [tools.toolF, tools.toolG, tools.toolH],
    items: screenItems,
  },
  {
    id: 'websites',
    title: 'Websites',
    line: 'Sample sites, funnel pages and booking pages.',
    count: sampleSites.length + funnelPages.length + bookingPages.length,
    unit: 'pages',
    description: 'Live sample pages for service businesses: sites, enquiry funnels, and booking flows guests can actually open.',
    marks: [tools.toolI, tools.toolJ, tools.toolK],
    items: [
      ...sampleSites.map(demoItem('Sample sites')),
      ...funnelPages.map(demoItem('Funnel pages')),
      ...bookingPages.map(demoItem('Booking pages')),
    ],
  },
  {
    id: 'apps',
    title: 'PC & Phone Apps',
    line: 'Personal assistant, calendar, timer, and Android prototypes.',
    count: apps.length,
    unit: 'apps',
    description: 'Personal Windows and Android projects developed with AI assistance. These are internal builds and prototypes, with device-testing limitations noted in each description.',
    // The tile shows the first app's store shot, cropped from the title bar down (public/images/apps/app-1-tile.webp).
    marks: [tools.toolL, tools.toolA, tools.toolB],
    items: apps.map((app) => ({ id: app.id, name: app.name, kicker: app.kind, summary: app.summary, image: app.image, status: app.status })),
  },
  {
    id: 'side-projects',
    title: 'Automation Projects',
    line: 'Make and Zapier workflow concepts you can explore.',
    count: sideProjectItems.length,
    unit: 'builds',
    description: 'Sample automation designs for lead intake and client onboarding. These browser demos illustrate the logic; they are not connected to Make, Zapier, or client accounts.',
    marks: [tools.toolC, tools.toolD, tools.toolE],
    items: sideProjectItems,
  },
  {
    id: 'experiments',
    title: 'Experiments',
    line: 'Small tests, each doing one thing well.',
    count: experimentItems.length,
    unit: 'tests',
    description: 'Short tests of reply templates, reminder timing, and admin shortcuts before they join the live desk.',
    marks: [siteMark, tools.toolF],
    items: experimentItems,
  },
]

export const workChapters = draftWorkChapters.filter((chapter) => ['featured', 'apps', 'side-projects'].includes(chapter.id))

export const findChapter = (id: string | undefined) => workChapters.find((chapter) => chapter.id === id)
