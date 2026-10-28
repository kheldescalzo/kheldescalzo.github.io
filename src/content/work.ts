import type { AiGroup, AppBuild, Demo, Image, LinkRef } from './schema'
import { projects } from './projects'
import { personalApps } from './personal-apps'

export const workPage = {
  eyebrow: 'Work',
  title: 'Real desks you can open.',
  lede: 'Open the ops desk, case studies, onboarding SOP, live screens, sample pages, and the small tools behind a working week.',
}

/* ---------- Featured project ---------- */

export const featuredProject = {
  kicker: 'Featured project',
  title: 'Khel VA Portfolio',
  summary: 'My personal portfolio, customized from a React template with AI-assisted development and deployed as a static website on GitHub Pages. Includes editable content, responsive navigation, and interactive automation samples.',
  link: { label: 'Open the portfolio', href: 'https://kheldescalzo.github.io', external: true } satisfies LinkRef,
  image: { src: '/images/projects/portfolio-home.jpg', alt: 'Khel VA portfolio homepage with profile sidebar', width: 1905, height: 854 } satisfies Image,
  gallery: [
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

export const apps: AppBuild[] = personalApps

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


/** Number of builds across every Work chapter, shown as the sidebar badge. Derived, never typed in. */
export const workCount = 1 + apps.length + projects.length
