import type { Service } from './schema'
import { tools } from './tools'

export const servicesPage = {
  eyebrow: 'Services',
  title: 'Support, scheduling, tech help, and admin — stacked as you need them.',
  lede: 'Hire one lane or combine a few: customer service, scheduling, technical support, and admin tasks sit on the same desk.',
}

/**
 * The Home Services section: a stack of cards dealt onto a pile as the page scrolls. The display line
 * is the thin + bold pair below.
 */
export const servicesSection = {
  eyebrow: servicesPage.eyebrow,
  titleThin: 'Pick one',
  titleBold: 'or stack a few.',
  explore: 'Explore',
  /** The Work chapter each card opens, by service id (a chapter id from home.ts). */
  work: { 'service-1': 'screens', 'service-2': 'featured', 'service-3': 'websites', 'service-4': 'websites', 'service-5': 'apps' } as Record<string, string>,
}

export const services: Service[] = [
  {
    id: 'service-1',
    title: 'Customer Service',
    summary: 'Inbox, chat, and guest replies that sound like you — calm, clear, and on time.',
    outcome: 'Replies handled',
    bullets: ['Triage and first response', 'Escalations with context', 'Hospitality tone of voice'],
    tools: [tools.toolA, tools.toolB, tools.toolC],
  },
  {
    id: 'service-2',
    title: 'Scheduling',
    summary: 'Calendars, bookings, and reminders so the right people show up in the right slot.',
    outcome: 'Calendar clean',
    bullets: ['Booking and reschedules', 'Conflict checks', 'Prep notes before the call'],
    tools: [tools.toolD, tools.toolE, tools.toolF],
  },
  {
    id: 'service-3',
    title: 'Technical Support',
    summary: 'Help people get unstuck: logins, tools, how-tos, and tickets closed with a record.',
    outcome: 'Tickets closed',
    bullets: ['How-to and access help', 'Ticket notes that stick', 'Handoff when it is a bug'],
    tools: [tools.toolG, tools.toolH, tools.toolI],
  },
  {
    id: 'service-4',
    title: 'Admin Tasks',
    summary: 'The follow-through: files, trackers, SOPs, and the small jobs that stall a week.',
    outcome: 'Admin current',
    bullets: ['Docs and folders', 'Trackers and reports', 'SOP drafts you can reuse'],
    tools: [tools.toolJ, tools.toolK, tools.toolL],
  },
  {
    id: 'service-5',
    title: 'Problem Solving',
    summary: 'When something odd lands, I find the next step, tell you what happened, and close it.',
    outcome: 'Issues unstuck',
    bullets: ['Root of the request', 'Options, then a decision', 'Written close-out'],
    tools: [tools.toolA, tools.toolF, tools.toolK],
  },
]
