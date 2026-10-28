import type { AiGroup, AppBuild, Demo, Image, LinkRef } from './schema'
import { projects } from './projects'

export const workPage = {
  eyebrow: 'Work',
  title: 'Real desks you can open.',
  lede: 'Open the ops desk, case studies, onboarding SOP, live screens, sample pages, and the small tools behind a working week.',
}

/* ---------- Featured project ---------- */

const shot = (file: string, alt: string, width: number, height: number): Image => ({
  src: `/images/work/${file}`,
  alt,
  width,
  height,
})

export const featuredProject = {
  kicker: 'Featured project',
  title: 'Client ops desk',
  summary: 'A single working system for inbox, calendar, tickets, and follow-ups. Clients see fewer dropped messages; I see one queue instead of five tabs.',
  link: { label: 'Open the live project', href: '#', external: true } satisfies LinkRef,
  gallery: [
    shot('gallery-1.webp', 'Client ops desk, inbox view', 1600, 900),
    shot('gallery-2.webp', 'Client ops desk, calendar view', 1600, 900),
    shot('gallery-3.webp', 'Client ops desk, tickets view', 1600, 900),
    shot('gallery-4.webp', 'Client ops desk, SOP view', 1600, 900),
    shot('gallery-5.webp', 'Client ops desk, bookings view', 1600, 900),
    shot('gallery-6.webp', 'Client ops desk, weekly report', 1600, 900),
  ],
}

/* ---------- Case studies and the process doc ---------- */

export const caseStudies: { id: string; title: string; summary: string; link: LinkRef }[] = [
  {
    id: 'case-study-1',
    title: 'Hospitality inbox, brought current',
    summary: 'A boutique stay was answering guests from three inboxes with no shared notes. I set one queue, a tone-of-voice sheet, and same-day first replies. Overnight messages stopped sitting until the owner found a laptop.',
    link: { label: 'Read the case study', href: '#', external: true },
  },
  {
    id: 'case-study-2',
    title: 'Scheduling that matches the room',
    summary: 'A practice was double-booking consults and sending reminder texts by hand. I rebuilt the calendar rules, confirmation copy, and a last-hour nudge with a reschedule link. No-shows dropped and the front desk stopped playing dispatcher.',
    link: { label: 'Read the case study', href: '#', external: true },
  },
]

export const processDoc = {
  title: 'VA onboarding SOP',
  summary: 'The plan I send before week one: access list, hours, tone of voice, escalation rules, and what “done” looks like. It earns trust because the first week is already written down.',
  link: { label: 'Open the sample doc', href: '/demos/plans/sample-plan.html', external: true } satisfies LinkRef,
}

/* ---------- Screens ---------- */

export const screens: { id: string; name: string; kicker: string; summary: string }[] = [
  { id: 'screen-1', name: 'Helpdesk queue', kicker: 'Support', summary: 'Open tickets, waiting on reply, and what needs the owner today.' },
  { id: 'screen-2', name: 'Shared calendar', kicker: 'Scheduling', summary: 'Confirmed slots, buffers, and prep notes before each call.' },
  { id: 'screen-3', name: 'Inbox triage', kicker: 'Service', summary: 'Guest and customer mail sorted by urgency, with draft replies ready.' },
  { id: 'screen-4', name: 'SOP wiki', kicker: 'Admin', summary: 'How-to pages so the same question is not solved from scratch twice.' },
  { id: 'screen-5', name: 'Booking board', kicker: 'Scheduling', summary: 'New, confirmed, and rescheduled bookings in one view.' },
  { id: 'screen-6', name: 'Weekly report', kicker: 'Admin', summary: 'What closed, what is still open, and what needs a decision.' },
]

/* ---------- Websites (self-contained demo pages in public/demos) ---------- */

const demo = (dir: string, file: string, label: string, tag: string, summary: string): Demo => ({
  id: file,
  label,
  tag,
  summary,
  href: `/demos/${dir}/${file}.html`,
})

export const sampleSites: Demo[] = [
  demo('sites', 'site-1', 'Service studio', 'Website', 'A simple site for a hospitality-led service desk: who it is for, what is offered, how to write in.'),
  demo('sites', 'site-2', 'Practice home', 'Website', 'A calm home page for a small practice that needs bookings and a clear contact path.'),
  demo('sites', 'site-3', 'Ops retainer', 'Website', 'A page that explains weekly coverage: inbox, calendar, tickets, and admin in one retainer.'),
  demo('sites', 'site-4', 'Guest desk', 'Website', 'A guest-facing page that sets expectations for replies, hours, and how to escalate.'),
]

export const funnelPages: Demo[] = [
  demo('funnels', 'funnel-1', 'Coverage enquiry', 'Funnel', 'Collects what is eating the week so the first reply can be a plan, not a guessing game.'),
  demo('funnels', 'funnel-2', 'Inbox rescue', 'Funnel', 'A short path for teams who need the backlog cleared before a retainer starts.'),
  demo('funnels', 'funnel-3', 'Retainer offer', 'Funnel', 'Hours, tools, and what done looks like — the page that sits before a quote.'),
  demo('funnels', 'funnel-4', 'Support intake', 'Funnel', 'Technical support requests with enough context to start without a second email.'),
]

export const bookingPages: Demo[] = [
  demo('funnels', 'booking-1', 'Intro call booking', 'Booking', 'A booking page for a 20-minute intro: hours in GMT+8 with overlap notes for other zones.'),
  demo('funnels', 'booking-2', 'Weekly review slot', 'Booking', 'A recurring review booking for retainers: last week’s open items, this week’s plan.'),
]

/* ---------- Apps and extensions ---------- */

export const apps: AppBuild[] = [
  {
    id: 'app-1',
    name: 'Desk queue',
    kind: 'Mobile app',
    tagline: 'The open list, in your pocket.',
    summary: 'A phone view of today’s tickets, bookings, and follow-ups. Built for a VA who cannot sit at the laptop for every ping.',
    status: 'Beta',
    image: { src: '/images/apps/app-1.webp', alt: 'Desk queue store screen', width: 540, height: 1200 },
  },
  {
    id: 'app-2',
    name: 'Shift notes',
    kind: 'Mobile app',
    tagline: 'Handoff in one screen.',
    summary: 'Capture what happened on a shift — replies sent, slots moved, issues still open — so the next person is not starting from zero.',
    status: 'Beta',
    image: { src: '/images/apps/app-2.webp', alt: 'Shift notes screens', width: 480, height: 266 },
  },
  {
    id: 'app-3',
    name: 'Reply kit',
    kind: 'Mobile app',
    tagline: 'Tone-of-voice snippets on tap.',
    summary: 'Saved customer-service lines, hospitality phrasing, and escalation templates. Free to keep the voice consistent away from the desk.',
    status: 'Free',
    image: { src: '/images/apps/app-3.webp', alt: 'Reply kit screens', width: 480, height: 266 },
  },
  {
    id: 'extension-1',
    name: 'Calendar peek',
    kind: 'Browser extension',
    tagline: 'Next three slots, one click.',
    summary: 'Opens the next free windows and a copy-ready booking line so scheduling does not mean leaving the inbox.',
    image: { src: '/images/apps/extension-1.webp', alt: 'Calendar peek popup', width: 419, height: 597 },
  },
  {
    id: 'extension-2',
    name: 'Ticket stamp',
    kind: 'Browser extension',
    tagline: 'Stamp the tab with the ticket ID.',
    summary: 'One click copies the ticket number, customer name, and last note into the clipboard for Slack or the CRM.',
    image: { src: '/images/apps/extension-2.webp', alt: 'Ticket stamp popup', width: 403, height: 306 },
  },
]

/* ---------- Side projects and experiments (no pictures: the sheet lists them) ---------- */

export const sideProjects: AiGroup[] = [
  {
    title: 'Desk systems',
    summary: 'Templates that keep support and admin from living in someone’s head.',
    builds: [
      { name: 'Tone-of-voice sheet', summary: 'How this client sounds in email, chat, and a difficult reply.', stack: 'Docs, Notion', status: 'Live' },
      { name: 'Escalation map', summary: 'When I handle it, when I ping the owner, and what I send with the ping.', stack: 'Notion, Slack', status: 'Internal' },
      { name: 'Access checklist', summary: 'Accounts, 2FA, and folders needed before week one starts.', stack: 'Sheets, Drive', status: 'Internal' },
      { name: 'Weekly close-out', summary: 'A Friday report: closed, open, waiting on you.', stack: 'Sheets, Docs', status: 'Internal' },
    ],
  },
  {
    title: 'Hospitality extras',
    summary: 'Guest-facing helpers from a customer-service background.',
    builds: [
      { name: 'Arrival FAQ pack', summary: 'The ten questions guests ask before they arrive, answered once.', stack: 'Docs, Drive', status: 'Live' },
      { name: 'Complaint path', summary: 'A calm sequence for a bad review or an angry inbox thread.', stack: 'Notion, Gmail', status: 'Live' },
    ],
  },
]

export const experiments: AiGroup[] = [
  {
    title: 'Experiments',
    summary: 'Small tests before they join the live desk.',
    builds: [
      { name: 'Reminder timing', summary: 'Day-before vs hour-before nudges, and which one gets the reschedule.', stack: 'Calendar', status: 'Live' },
      { name: 'First-reply timer', summary: 'A simple clock on new tickets so nothing sits past the promised window.', stack: 'Sheets', status: 'Live' },
      { name: 'Snippet A/B', summary: 'Two hospitality closings on the same kind of email, then keep the one that lands.', stack: 'Gmail', status: 'Live' },
    ],
  },
]

const buildsIn = (groups: AiGroup[]) => groups.reduce((n, g) => n + g.builds.length, 0)

/** Number of builds across every Work chapter, shown as the sidebar badge. Derived, never typed in. */
export const workCount =
  1 +
  caseStudies.length +
  1 +
  screens.length +
  sampleSites.length +
  funnelPages.length +
  bookingPages.length +
  apps.length +
  projects.length +
  buildsIn(experiments)
