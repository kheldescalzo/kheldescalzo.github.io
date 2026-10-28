import type { Faq, Image, ProductFilm, ProductTab } from './schema'
import { externalLinks } from './site'

/** The address shown in the browser-window bars around the film and the room screens. */
export const showcaseHost = 'descalzova.com'

export const showcasePage = {
  eyebrow: 'Showcase',
  titleThin: 'One desk,',
  titleBold: 'shown in full detail.',
  lede: 'The client ops desk is the working system behind Descalzo VA: inbox, calendar, tickets, SOPs, and the weekly close-out. It is built for operators who need coverage they can inspect, not a black box.',
  footnote: 'Runs in the browser on the tools you already use — Gmail, Calendar, helpdesk, and docs.',
  cta: { label: 'Open the ops desk', href: externalLinks.showcase, external: true },
  roomsTitle: 'The five rooms',
}

/** A room capture (1600 wide) with 800 / 1200 copies: the rooms show at 343-970px (scripts/make-image-variants.py). */
const room = (file: string, alt: string, height: number): Image => ({
  src: `/images/showcase/${file}.webp`,
  alt,
  width: 1600,
  height,
  srcSet: `/images/showcase/800/${file}.webp 800w, /images/showcase/1200/${file}.webp 1200w, /images/showcase/${file}.webp 1600w`,
})

/** The product film: a short muted loop, no audio. Keep it small (a couple of MB). */
export const showcaseFilm: ProductFilm = {
  src: '/media/showcase-film.mp4',
  poster: { src: '/images/showcase/film-poster.webp', alt: 'Client ops desk film', width: 1280, height: 720 },
  pagePosters: { phone: '/images/showcase/film-poster-640.webp', wide: '/images/showcase/film-poster-960.webp' },
  name: 'Client ops desk: a short tour',
  description: 'A muted loop through inbox triage, the shared calendar, open tickets, SOP pages, and the Friday close-out.',
  duration: '0:10',
  // The date the film was first published (YYYY-MM-DD), used in the page's structured data.
  published: '2026-01-01',
}

/** Number + unit. Use only figures you can state as fact. */
export const showcaseStats: [string, string][] = [
  ['4', 'lanes on one desk'],
  ['1', 'shared queue'],
  ['GMT+8', 'home clock'],
  ['5', 'rooms, one tab'],
]

/** The five rooms of the product, each with a caption and a screen. */
export const productTabs: ProductTab[] = [
  {
    id: 'room-1',
    label: 'Inbox',
    body: 'Guest and customer mail lands in one queue. I triage, draft in your voice, and escalate only when the stay or the deal needs you.',
    image: room('room-1', 'Inbox room of the client ops desk', 1000),
  },
  {
    id: 'room-2',
    label: 'Calendar',
    body: 'Bookings, buffers, and reminders live here. Conflicts are caught before they hit the guest, and every slot has a prep note.',
    image: room('room-2', 'Calendar room of the client ops desk', 1000),
  },
  {
    id: 'room-3',
    label: 'Tickets',
    body: 'Technical support and how-to requests get a record: what we tried, what closed, and what still needs a product fix.',
    image: room('room-3', 'Tickets room of the client ops desk', 1000),
  },
  {
    id: 'room-4',
    label: 'Playbooks',
    body: 'SOPs and tone-of-voice pages so the same question is not solved twice. New coverage can start from the wiki, not from memory.',
    image: room('room-4', 'Playbooks room of the client ops desk', 1000),
  },
  {
    id: 'room-5',
    label: 'Close-out',
    body: 'The weekly report: what closed, what is open, and what needs a decision. You read it on Monday; the desk is already moving.',
    image: room('room-5', 'Close-out room of the client ops desk', 1000),
  },
]

/** Three questions people ask about the product, answered the way the product itself answers them. */
export const showcaseFaq: Faq[] = [
  {
    question: 'Who is the ops desk for?',
    answer:
      'Operators and small teams who already have guests or clients and need someone on inbox, calendar, tickets, and admin. It is not a replacement for a full in-house ops department, and it is not a design or engineering studio.',
  },
  {
    question: 'Is there anything to install?',
    answer:
      'No. Coverage runs in the browser on the tools you already use. A new client needs a short access list, a tone-of-voice note, and a written “done looks like this.”',
  },
  {
    question: 'What does coverage cost?',
    answer:
      'Most desks are a weekly retainer quoted after a short brief. A one-off inbox catch-up or SOP pack can be fixed-price. Nothing is billed until the scope is agreed in writing.',
  },
]
